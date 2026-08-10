@AGENTS.md

# cpxi-website

Marketing site for **www.cpxi-asia.com** (replacing the legacy CodeIgniter site on HawkHost).

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript, Tailwind v4 (`@tailwindcss/postcss`), ESLint
- npm (matches `cpxi-automation/dashboard`)
- Hosted on Vercel under the personal scope `john-5621s-projects`
- Repo visibility: **public** (required for Vercel Hobby auto-deploy on org repos; non-sensitive marketing site)

## URLs

| Environment | URL | Notes |
|---|---|---|
| **Production (live)** | https://www.cpxi-asia.com | **CUT OVER 2026-08-09.** DNS on HawkHost nameservers points at Vercel (apex A `76.76.21.21`, www CNAME `cname.vercel-dns.com`). |
| Production (alias) | https://cpxi-website.vercel.app | Same deployment, stable Vercel alias |
| Legacy (parked) | — | Old CodeIgniter site files remain untouched on HawkHost (`198.252.100.133`). Rollback = revert the two DNS records in cPanel Zone Editor. `platform.`/`report.`/`thrive.` subdomains untouched. Email MX (Google) untouched. |

## Local dev

```bash
cd ~/CPXi/cpxi-website
npm install        # only on first checkout
npm run dev        # http://localhost:3000
npm run lint
npm run build      # verify production build before pushing
```

## Deploy

Auto-deploy is wired — `git push` to `main` deploys to production at `cpxi-website.vercel.app`. PR pushes get unique preview URLs commented on the PR.

Manual deploys still work if needed:

```bash
vercel deploy           # preview deploy
vercel deploy --prod    # production deploy
```

## Repo

- Origin: `https://github.com/CPXi-Asia/cpxi-website` (private)
- Default branch: `main`
- Vercel project: `john-5621s-projects/cpxi-website` (linked via `.vercel/project.json` — gitignored)

## Open

- [x] **DNS cutover** — DONE 2026-08-09 via cPanel API (zone serial 2026081000). Contact form verified end-to-end on the live domain (`delivered: true` to hello@cpxi-asia.com).
- [ ] **Analytics** — legacy site had GTM `GTM-WKHW43`, Google Ads `AW-710811234`, Hotjar `3659625`. New site has NONE — decide reuse vs fresh, now more urgent since the domain is live.
- [ ] **Legacy URL 404s** — old subpages (`/page/career`, `/page/privacy`, blog) 404 on the one-pager. Add redirects or a minimal privacy page if anything links to them.
- [ ] **Reuben confirmations** — platform partner list (TikTok/Spotify tiers? Xiaohongshu?), official AOTY 2025 winner badge kit, GuocoLand vector art (current color source too low-res, white-only for now).

## Environment variables

None yet. When added, manage via:

```bash
vercel env add VARNAME production
vercel env pull .env.local      # for local dev
```

Never commit `.env*` files — `.gitignore` covers them.
