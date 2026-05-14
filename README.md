# M.G B.V.

Professionele website voor **M.G B.V.** — Transport, Beveiliging & Reiniging in Nederland.

## Tech Stack

- Next.js 16 (App Router)
- React 19
- TypeScript
- TailwindCSS 4

## Aan de slag

### Vereisten

- Node.js 18+ (LTS aanbevolen)
- npm

### Installatie

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in je browser.

### Productie build

```bash
npm run build
npm start
```

### Contactformulier (SMTP)

Het contactformulier verstuurt e-mails via SMTP met Nodemailer. Maak een
`.env.local` bestand (kopie van `.env.example`) en vul de SMTP-gegevens in:

```
SMTP_HOST=smtp.jouwprovider.nl
SMTP_PORT=587
SMTP_USER=info@mg-services.nl
SMTP_PASS=jouw-wachtwoord
SMTP_SECURE=false
MAIL_FROM=info@mg-services.nl
MAIL_TO=info@mg-services.nl
```

Bij elke aanvraag krijgt **MAIL_TO** een melding met alle details, en
de afzender krijgt automatisch een bevestiging. Op Vercel: zet deze
variabelen in **Project Settings → Environment Variables**.

## Projectstructuur

```
mg/
├── app/
│   ├── layout.tsx          # Root layout met SEO & structured data
│   ├── page.tsx            # Homepage (single-page)
│   ├── globals.css         # Tailwind & globale stijlen
│   ├── contact/
│   │   ├── page.tsx        # Contactpagina
│   │   └── actions.ts      # Server Actions voor formulier
│   ├── privacy/page.tsx    # Privacybeleid
│   └── voorwaarden/page.tsx # Algemene voorwaarden
├── components/
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── Services.tsx        # 6 diensten (SBI-codes M.G B.V.)
│   ├── WhyUs.tsx
│   ├── Workflow.tsx
│   ├── CTASection.tsx
│   ├── Footer.tsx
│   └── ContactForm.tsx
└── public/                 # statische assets
```

## Diensten (SBI-codes)

1. **Koeriersdiensten** (SBI 53202)
2. **Goederenvervoer over de weg** (SBI 49410)
3. **Verhuizingen** (SBI 49420)
4. **Transportdienstverlening** (SBI 52210)
5. **Beveiligingsdiensten** (SBI 80090 & 80010)
6. **Reinigingsdiensten** (SBI 81230)

## Deployment naar Vercel

```bash
npm i -g vercel
vercel
```

Of push naar GitHub en koppel het repo aan Vercel — `vercel.json` staat al klaar.

## Aanpassen vóór productie

Zoek en vervang in de code:
- E-mail: `info@mg-services.nl` → echte adres
- Domein: `https://mg-services.nl` in `app/layout.tsx` → echte domein

De afbeeldingen komen nu van Unsplash (zie `next.config.ts`). Vervang URLs in
`Hero.tsx`, `WhyUs.tsx`, `CTASection.tsx` en `contact/page.tsx` met eigen foto's
in `public/` voor productie.

## Licentie

Alle rechten voorbehouden — M.G B.V.
