create table if not exists public.waitlist_signups (
  id uuid primary key default gen_random_uuid(),
  email text not null unique,
  role text not null check (role in ('student', 'staff', 'lecturer')),
  created_at timestamptz not null default now()
);

alter table public.waitlist_signups enable row level security;

create policy "Allow public insert" on public.waitlist_signups
  for insert
  to anon
  with check (true);
