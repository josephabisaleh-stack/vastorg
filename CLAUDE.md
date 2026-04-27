# Vastorg — Claude Code Master Instructions

## Company & Product
- Company name: Vastorg
- Client platform: Vastorg Atlas
- Website: vastorg.com
- Type: AI-native freight forwarder, based in France
- Regulatory status: RDE (Représentant en Douane Enregistré) — in progress
- Target clients: French SME exporters, all sectors, global destinations
- Language: French first, English toggle planned

## Stack
- Framework: Next.js 14 App Router + TypeScript
- Styling: Tailwind CSS + shadcn/ui (Radix + Nova preset)
- Database: Supabase (PostgreSQL + Auth + Storage + Realtime)
- Deployment: Vercel
- Payments: Stripe
- Transactional email: Resend
- Business email: Google Workspace
- Tracking: AfterShip
- AI: Anthropic Claude API via Vercel AI SDK
- Background jobs: Inngest
- Validation: Zod (on every AI output, always)
- PDF generation: @react-pdf/renderer
- Accounting: Pennylane (French FEC compliance)
- Insurance: Loadsure API
- Vector search: Supabase pgvector (FAQ semantic search)

## Folder Structure
app/
  (marketing)/          # Public pages — no auth required
    page.tsx            # Homepage — vastorg.com
    about/              # À propos
    services/           # Services
    contact/            # Contact
  (auth)/               # Auth pages
    login/
    signup/
    callback/           # Supabase auth callback
  (portal)/             # Client portal — Vastorg Atlas
    dashboard/          # Client home
    quotes/             # Quote requests + history
    quotes/new/         # New quote wizard (multi-step)
    bookings/           # All bookings
    bookings/[id]/      # Booking detail
    tracking/           # Live tracking
    documents/          # Document library
    invoices/           # Billing history
    address-book/       # Saved consignees
    settings/           # Account settings
  (ops)/                # Founder ops dashboard — restricted
    ops/                # Ops home
    ops/bookings/       # All bookings management
    ops/customs/        # DELT@-X declaration queue
    ops/emails/         # AI email agent review queue
    ops/suppliers/      # Supplier + rate card management
    ops/clients/        # Client management
    ops/analytics/      # Revenue and margin analytics
    ops/health/         # Integration health dashboard
  api/                  # API routes
    webhooks/stripe/    # Stripe webhook handler
    webhooks/aftership/ # AfterShip webhook handler
    v1/                 # Public B2B API (future)

components/
  marketing/            # Used only on public pages
    Navbar.tsx
    Footer.tsx
  portal/               # Used only in client portal
  ops/                  # Used only in ops dashboard
  ui/                   # shadcn auto-generated — never edit

lib/                    # PURE TYPESCRIPT ONLY — no framework imports
  pricing/              # Rate card engine
    engine.ts           # Main calculateQuote() function
    algorithms.ts       # per_kg, zone_matrix, ldm, postal_bracket, volumetric, flat_rate
    surcharges.ts       # Surcharge stacking logic
    margins.ts          # Client tier margin application
  customs/
    deltax.ts           # EX-A XML builder for DELT@-X
    gamma2.ts           # DAE builder for GAMMA2 wine workflow
    hs-codes.ts         # HS code classification helpers
  ai/
    parse-invoice.ts    # Invoice PDF extraction prompt
    classify-email.ts   # Email classification prompt
    extract-wine.ts     # Wine data extraction prompt
    faq-search.ts       # FAQ semantic search
  validators/
    invoice.ts          # Zod schema for Claude invoice output
    quote.ts            # Zod schema for quote data
    email.ts            # Zod schema for email classification
  pdf/
    quote-pdf.tsx       # React-PDF quote document template
    fcr.tsx             # Forwarder Certificate of Receipt
    hawb.tsx            # House Airway Bill template

types/
  index.ts              # All shared TypeScript types

## Critical Architecture Rules
1. /lib functions are pure TypeScript — zero imports from Next.js,
   Supabase, Stripe, or any framework. Input in, output out.
   They must be independently testable with Vitest.

2. Supabase client only in server components and API routes.
   Never in /lib. Never in client components directly.

3. Vercel AI SDK for ALL Claude API calls — never import
   Anthropic SDK directly. Use streamObject() for streaming,
   generateObject() for structured extraction.

4. Zod validation on EVERY Claude API output before any
   database write. If validation fails → flag to human review
   queue. Never silently drop data.

5. Edge Functions are thin adapters only — receive DB event,
   call Next.js API route or external service, return.
   Zero business logic in Edge Functions.

6. Never expose SUPABASE_SERVICE_ROLE_KEY in frontend.
   Only use NEXT_PUBLIC_SUPABASE_ANON_KEY client-side.

7. All /ops routes protected by middleware checking
   FOUNDER_EMAIL environment variable. Redirect to /dashboard
   if authenticated but not founder.

8. Feature flags live in Supabase config table (key, value,
   enabled). Check flags before calling any integration.
   This allows disabling any service without redeployment.

## Design System
- Navy: #1B3A5C (primary — nav, headings, CTAs)
- Blue: #2E6DA4 (secondary — links, accents)
- Light blue: #D6E4F0 (backgrounds, hover states)
- Amber: #E8A020 (wine vertical accent, warnings)
- Use shadcn/ui as component base
- Tailwind for all custom styling
- Clean, premium, professional — never startup-flashy
- Never use purple gradients or generic AI aesthetics
- French language in all UI copy

## Database Schema (Supabase PostgreSQL)

### Core tables
clients (id uuid pk, name, company, email, eori, vat,
  tier [spot|regular|key_account], lang_pref [fr|en],
  stripe_customer_id, created_at)

quotes (id uuid pk, client_id fk, mode [courier|road|sea|air],
  origin_address jsonb, destination_address jsonb, cargo jsonb,
  price_breakdown jsonb, total_price, margin, currency,
  status [draft|sent|accepted|expired|cancelled],
  expires_at, created_at)

bookings (id uuid pk, quote_id fk, client_id fk,
  status [confirmed|in_transit|delivered|cancelled],
  carrier_ref, tracking_number, mrn,
  payment_status [pending|paid|overdue],
  payment_intent_id, created_at)

documents (id uuid pk, booking_id fk, type, storage_path,
  uploaded_at, generated_by [client|system])

tracking_events (id uuid pk, booking_id fk, carrier,
  status, location, timestamp, raw_data jsonb)

### Rate card tables
suppliers (id uuid pk, name, mode text[], currency,
  contact_email, active bool, created_at)

rate_cards (id uuid pk, supplier_id fk, name,
  algorithm_type [per_kg|zone_matrix|ldm|
  postal_bracket|volumetric|flat_rate],
  valid_from, valid_to, currency, active bool)

zones (id uuid pk, rate_card_id fk, zone_name,
  countries text[], postal_prefixes text[])

rate_rules (id uuid pk, rate_card_id fk,
  origin_zone_id fk, destination_zone_id fk, config jsonb)

surcharges (id uuid pk, rate_card_id fk, type,
  calculation_method [percent|flat|per_kg],
  value, conditions jsonb)

margin_rules (id uuid pk, client_tier, mode,
  margin_type [percent|flat], value)

### Customs tables
customs_declarations (id uuid pk, booking_id fk,
  type [EX-A|DAE], xml_payload text, mrn,
  status [draft|submitted|cleared|rejected],
  submitted_at, cleared_at)

wine_declarations (id uuid pk, booking_id fk,
  hs_code, abv numeric, volume_hl numeric,
  aoc text, dae_number, emcs_status,
  consignee_excise_number)

### AI & email tables
email_logs (id uuid pk, gmail_message_id unique,
  from_email, subject, received_at,
  classification, confidence numeric,
  extracted_data jsonb, action_taken,
  reply_sent_at, draft_body text,
  parsing_source [auto|manual])

faq_entries (id uuid pk, question, answer, category,
  embedding vector(1536), active bool, created_at)

### CRM tables (schema ready, UI built later)
leads (id uuid pk, name, company, email, phone,
  source, status, created_at)

contacts (id uuid pk, client_id fk nullable,
  name, email, phone, role)

interactions (id uuid pk, contact_id fk, type,
  summary, created_by, created_at)

### Supplier portal tables
supplier_users (id uuid pk, supplier_id fk,
  email, role [admin|driver], created_at)

supplier_jobs (id uuid pk, booking_id fk, supplier_id fk,
  status [upcoming|collected|delivered|invoiced],
  assigned_at, collected_at, delivered_at, notes)

supplier_pod (id uuid pk, supplier_job_id fk,
  storage_path, uploaded_at, verified bool)

supplier_invoices (id uuid pk, supplier_id fk,
  supplier_job_id fk, amount, currency,
  status [pending|approved|paid], paid_at)

### Config table
config (key text pk, value text, enabled bool)
-- Feature flags:
-- claude_parsing_enabled
-- aftership_enabled
-- delt@_auto_submit_enabled
-- stripe_live_mode
-- resend_enabled
-- wine_workflow_enabled
-- sea_freight_enabled
-- air_freight_enabled
-- vapi_inbound_enabled

## Pricing Engine — Algorithm Reference

### per_kg
chargeable_weight = max(actual_kg, volume_cm3 / dim_factor)
price = max(chargeable_weight × rate_per_kg, min_charge)

### zone_matrix
find weight breakpoint in config.breakpoints[]
price = weight × config.rates[breakpoint_index]

### ldm (loading metre)
ldm = (length_cm × width_cm) / 10000 × quantity × 0.4
price = max(ldm, config.min_ldm) × config.rate_per_ldm

### postal_bracket
match origin + destination postal prefix to rule
price = config.flat_rate

### volumetric
chargeable = max(actual_kg, volume_cm3 / config.dim_factor)
price = chargeable × config.rate_per_kg

### flat_rate
price = config.flat_rate (regardless of weight)

### Surcharge stacking (always after base rate)
percent: surcharge = base_price × (value / 100)
flat: surcharge = value
per_kg: surcharge = actual_weight × value

### Margin application (always last)
percent: final = subtotal × (1 + margin / 100)
flat: final = subtotal + margin_value

## AI Email Agent — Classification Categories
- quote_request_complete → auto-reply with PDF quote + booking link
- quote_request_incomplete → reply asking for missing fields only
- tracking_query → lookup AfterShip + reply with status
- invoice_query → fetch Stripe invoice + reply with PDF
- booking_amendment → always human review
- general_question → semantic FAQ search + Claude answer
- supplier_email → route to supplier comms thread
- complaint → always human review, never auto-reply
- spam → auto-archive if >95% confidence

## Tiered Auto-Reply Rules
- Confidence >90% → auto-send reply immediately
- Confidence 70–90% → draft queued for founder review
- Confidence <70% → flagged for manual handling
- Any complaint or dispute → always human review

## Shipping Mode Details
- Courier: FedEx REST API + DHL Express API (sandbox first)
- Road freight: own supplier network, rate cards in DB
- Sea freight: Freightos API (Month 5–6)
- Air cargo: IATA accreditation pending (Month 5–6)

## Wine Vertical
- Triggered by HS codes: 2204.10, 2204.21, 2204.29, 2208.xx
- Additional fields: ABV, volume_hl, AOC, vintage,
  temperature_controlled bool, consignee_excise_number
- Requires GAMMA2 DAE in addition to DELT@-X EX-A
- Hard filter: carriers must be ATP temperature-certified
- Surcharge: temperature controlled handling

## Customs Workflow
- Phase 1 (now): manual filing in Pro Douane portal
- Phase 2 (Month 4): ops dashboard pre-fills XML,
  founder reviews and clicks submit
- Phase 3 (Month 6+): auto-submit for low-risk shipments
- DELT@-X: EX-A XML via DGDDI HTTPS endpoint
- GAMMA2: DAE XML for wine/spirits EMCS movements
- MRN stored in bookings.mrn on successful submission

## Document Types (React-PDF templates)
- Quote PDF (generated on quote acceptance)
- Booking confirmation
- FCR (Forwarder Certificate of Receipt)
- HAWB (House Airway Bill)
- Commercial invoice template
- Insurance certificate (from Loadsure)
- Customs summary sheet

## Testing Rules
- Vitest for unit + integration tests
- Playwright for E2E tests
- All /lib functions must have unit tests
- Zod schemas tested against valid + invalid + edge cases
- DELT@-X XML validated against DGDDI XSD schema in tests
- AI eval datasets in /eval_datasets/ per component
- Accuracy targets: invoice parsing >95%, HS codes >95%,
  wine extraction >97%, customs XML 100% schema valid

## Build Priority (current phase)
1. Marketing website (in progress now)
2. Supabase schema + auth
3. Quote wizard (road + courier)
4. Stripe payments + booking flow
5. Client dashboard
6. Ops dashboard
7. Claude invoice parsing + Zod validation
8. Pennylane + payment reconciliation
9. AI email agent
10. DELT@-X integration
11. GAMMA2 wine workflow
12. Supplier portal
13. Sea freight (Freightos)
14. Air cargo quoting
15. Dynamic carrier selection AI
16. Public B2B API

## Environment Variables (add to .env.local)
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
SUPABASE_SERVICE_ROLE_KEY=
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=
STRIPE_SECRET_KEY=
STRIPE_WEBHOOK_SECRET=
RESEND_API_KEY=
ANTHROPIC_API_KEY=
AFTERSHIP_API_KEY=
INNGEST_EVENT_KEY=
INNGEST_SIGNING_KEY=
FOUNDER_EMAIL=
NEXT_PUBLIC_APP_URL=

## Current Status
- [x] Next.js project created
- [x] shadcn/ui installed
- [x] Pushed to GitHub
- [ ] Deployed to Vercel
- [ ] CLAUDE.md complete (this file)
- [ ] Marketing website built
- [ ] Supabase project created
- [ ] Database schema migrated
- [ ] Auth configured
- [ ] Quote wizard built
- [ ] Stripe connected
