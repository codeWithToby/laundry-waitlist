# Project: [Laundry Brokerage Landing Page]

## Stack
- Next.js (App Router)
- Tailwind CSS
- Supabase (waitlist signups table, no auth needed yet)
- Deploy target: Vercel

## What this is
Waitlist landing page for a laundry pickup/delivery brokerage targeting 
a university campus (students, lecturers, staff). Asset-light model — 
partners with local dry cleaners for cleaning/ironing and local riders 
for logistics.

## Conventions
- Mobile-first, this audience is checking on their phones
- Keep copy punchy, outcome-focused (what they get, not features)
- Single clear CTA: join waitlist with email + maybe "student/staff/lecturer" toggle
- No auth, no payment flow yet — this is a demand-validation page, not the product

## Deploy
- Push to GitHub, deploy via Vercel MCP
- Supabase table: `waitlist_signups` (email, role, created_at)
