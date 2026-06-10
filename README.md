# GuestFlow — sales website

Marketing and lead-generation website for **GuestFlow**, a white-label
online booking platform for restaurants, hotels, spas, and experience
businesses. Built by [MoggingLabs](https://github.com/MoggingLabs).

The centerpiece is a **live interactive booking widget** (`components/widget/`)
— a fully client-side mock of the product that prospects can try on the page,
with four venue themes demonstrating the white-label pitch.

## Stack

- Next.js 16 (App Router, Turbopack) · React 19 · TypeScript
- Tailwind CSS v4 (design tokens in `app/globals.css` `@theme`)
- GSAP + ScrollTrigger, Lenis smooth scroll (reduced-motion aware)
- Supabase (lead storage) + Resend (notifications) — both optional/env-gated
- Vercel Analytics

## Development

```bash
npm install
npm run dev     # http://localhost:3000
npm run build
npm run lint
```

The site runs fully without env vars; demo-form leads are logged to the
server console in that mode. For real lead capture, copy `.env.example`
to `.env.local` and fill in Supabase + Resend keys.

## Lead storage (Supabase)

Create the `leads` table (RLS on, no public policies — the API route uses
the service role):

```sql
create table leads (
  id uuid primary key default gen_random_uuid(),
  created_at timestamptz not null default now(),
  name text not null,
  email text not null,
  business_name text not null,
  business_type text not null,
  preferred_date date,
  preferred_window text,
  message text,
  page_source text,
  status text not null default 'new'
);
alter table leads enable row level security;
```

## Project conventions

- **All copy lives in `content/*.ts`** — pages are thin server components
  that pass typed data into `components/sections/*`. Copy edits never
  touch JSX.
- Adding an industry vertical = adding one entry to
  `content/industries.ts` (routes, metadata, and cards derive from it).
- Widget venue themes live in `content/widget-themes.ts`; the widget is
  self-contained under `components/widget/` for future extraction.
- Amber (`--color-amber`) is the single accent: CTAs, eyebrows,
  highlights only — never large background fills.
