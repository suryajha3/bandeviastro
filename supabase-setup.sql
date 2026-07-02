-- Bandevi Astro secure booking backend setup
-- Run this in Supabase SQL Editor after creating the Supabase project.
-- Then paste the project URL and anon/publishable key into site-config.js.

create extension if not exists pgcrypto;

create table if not exists public.profiles (
  id uuid primary key references auth.users(id) on delete cascade,
  email text,
  full_name text,
  role text not null default 'customer' check (role in ('customer', 'admin')),
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create table if not exists public.bookings (
  id uuid primary key default gen_random_uuid(),
  booking_code text not null unique,
  customer_name text not null,
  phone text not null,
  email text,
  country text,
  service text not null,
  preferred_date date,
  preferred_time time,
  mode text,
  concern text,
  status text not null default 'Enquiry Received',
  payment_status text not null default 'Not Requested',
  amount text,
  proof_url text,
  staff_note text,
  customer_user_id uuid references auth.users(id) on delete set null,
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create index if not exists bookings_booking_code_idx on public.bookings (booking_code);
create index if not exists bookings_customer_user_idx on public.bookings (customer_user_id);
create index if not exists bookings_email_idx on public.bookings (lower(email));
create index if not exists bookings_created_at_idx on public.bookings (created_at desc);

create or replace function public.set_updated_at()
returns trigger
language plpgsql
as $$
begin
  new.updated_at = now();
  return new;
end;
$$;

drop trigger if exists profiles_set_updated_at on public.profiles;
create trigger profiles_set_updated_at
before update on public.profiles
for each row execute function public.set_updated_at();

drop trigger if exists bookings_set_updated_at on public.bookings;
create trigger bookings_set_updated_at
before update on public.bookings
for each row execute function public.set_updated_at();

create or replace function public.handle_new_user()
returns trigger
language plpgsql
security definer
set search_path = public
as $$
begin
  insert into public.profiles (id, email, full_name, role)
  values (
    new.id,
    new.email,
    coalesce(new.raw_user_meta_data->>'full_name', new.email),
    'customer'
  )
  on conflict (id) do update
  set email = excluded.email,
      full_name = coalesce(public.profiles.full_name, excluded.full_name);
  return new;
end;
$$;

drop trigger if exists on_auth_user_created on auth.users;
create trigger on_auth_user_created
after insert on auth.users
for each row execute function public.handle_new_user();

create or replace function public.is_admin()
returns boolean
language sql
security definer
set search_path = public
as $$
  select exists (
    select 1
    from public.profiles
    where id = auth.uid()
      and role = 'admin'
  );
$$;

create or replace function public.lookup_booking(p_booking_code text, p_contact text)
returns table (
  booking_code text,
  customer_name text,
  phone text,
  email text,
  country text,
  service text,
  preferred_date date,
  preferred_time time,
  mode text,
  concern text,
  status text,
  payment_status text,
  amount text,
  proof_url text,
  created_at timestamptz,
  updated_at timestamptz
)
language sql
security definer
set search_path = public
as $$
  with normalized as (
    select
      upper(trim(coalesce(p_booking_code, ''))) as code,
      regexp_replace(lower(coalesce(p_contact, '')), '[^a-z0-9@.]', '', 'g') as contact
  )
  select
    b.booking_code,
    b.customer_name,
    b.phone,
    b.email,
    b.country,
    b.service,
    b.preferred_date,
    b.preferred_time,
    b.mode,
    b.concern,
    b.status,
    b.payment_status,
    b.amount,
    b.proof_url,
    b.created_at,
    b.updated_at
  from public.bookings b
  cross join normalized n
  where b.booking_code = n.code
    and length(n.contact) >= 3
    and (
      regexp_replace(lower(coalesce(b.phone, '')), '[^a-z0-9@.]', '', 'g') like '%' || n.contact || '%'
      or regexp_replace(lower(coalesce(b.email, '')), '[^a-z0-9@.]', '', 'g') like '%' || n.contact || '%'
      or (
        length(regexp_replace(lower(coalesce(b.phone, '')), '[^a-z0-9@.]', '', 'g')) >= 3
        and n.contact like '%' || regexp_replace(lower(coalesce(b.phone, '')), '[^a-z0-9@.]', '', 'g') || '%'
      )
      or (
        length(regexp_replace(lower(coalesce(b.email, '')), '[^a-z0-9@.]', '', 'g')) >= 3
        and n.contact like '%' || regexp_replace(lower(coalesce(b.email, '')), '[^a-z0-9@.]', '', 'g') || '%'
      )
    )
  limit 1;
$$;

alter table public.profiles enable row level security;
alter table public.bookings enable row level security;

drop policy if exists "profiles owner read" on public.profiles;
create policy "profiles owner read"
on public.profiles
for select
to authenticated
using (id = auth.uid() or public.is_admin());

drop policy if exists "profiles admin update" on public.profiles;
create policy "profiles admin update"
on public.profiles
for update
to authenticated
using (public.is_admin())
with check (public.is_admin());

drop policy if exists "bookings public create enquiry" on public.bookings;
create policy "bookings public create enquiry"
on public.bookings
for insert
to anon, authenticated
with check (
  booking_code like 'BA-%'
  and length(trim(customer_name)) between 2 and 120
  and length(trim(phone)) between 6 and 40
  and status = 'Enquiry Received'
  and payment_status = 'Not Requested'
  and (customer_user_id is null or customer_user_id = auth.uid())
);

drop policy if exists "bookings customer read own" on public.bookings;
create policy "bookings customer read own"
on public.bookings
for select
to authenticated
using (
  customer_user_id = auth.uid()
  or lower(coalesce(email, '')) = lower(coalesce(auth.jwt()->>'email', ''))
  or public.is_admin()
);

drop policy if exists "bookings admin manage" on public.bookings;
create policy "bookings admin manage"
on public.bookings
for all
to authenticated
using (public.is_admin())
with check (public.is_admin());

grant usage on schema public to anon, authenticated;
grant insert on public.bookings to anon;
grant select, insert, update on public.bookings to authenticated;
grant select, update on public.profiles to authenticated;
grant execute on function public.lookup_booking(text, text) to anon, authenticated;
grant execute on function public.is_admin() to authenticated;

-- After the staff account is created from login.html, run this once:
-- update public.profiles set role = 'admin' where email = 'staff@example.com';
