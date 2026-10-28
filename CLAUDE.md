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
| Legacy `sg.` (retired) | https://sg.cpxi-asia.com | **Retired 2026-10-21.** `sg` + `www.sg` changed from A `198.252.100.133` to CNAME `b359064e81fd3c97.vercel-dns-017.com` (zone serial 2026102201); both are Vercel project domains that 308 to www. AI assistants were quoting this stale site. Rollback = set both back to A `198.252.100.133`. |

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

**Production deploys only via git.** Never run `vercel deploy --prod` from a working copy: the CLI uploads gitignored files, including unreviewed case-study drafts (see Content below).

Private review previews (drafts included) for Reuben:

```bash
vercel deploy --yes --scope john-5621s-projects   # --scope required, else "Not authorized"
vercel alias set <deployment-url> cpxi-website-review-john-5621s-projects.vercel.app --scope john-5621s-projects
```

Previews sit behind Vercel Authentication; the review link adds a protection-bypass secret (stored in `~/CPXi/cpxi-website-internal/reuben-review-link.txt`). The alias takes ~30s to switch. Test with curl + the bypass query string, never `vercel curl` (it silently creates extra bypass secrets).

## Content

- **Case studies:** `app/_content/case-studies/*.ts` are published (committed). Drafts pending client/naming review live in `app/_content/case-studies/drafts/` (gitignored). `scripts/gen-case-study-index.mjs` builds `registry.generated.ts` before `dev`/`build` from whichever files exist, so git builds only ever see published ones. To publish a case: move its file up out of `drafts/` and fix its import path (`../../../_lib` → `../../_lib`). Drafts are generated from JSON extracts in `~/CPXi/cpxi-website-internal/` (edit the JSON, re-run `convert-case-studies.mjs`).
- **Service pages:** `app/_content/services/*.ts`, rendered by `app/services/[slug]`.
- **FAQ:** `app/_content/faq.ts`.
- **Facts** (founding line, address, definition): `app/_lib/site.ts`. Founding line: "CPXi Asia was founded in 2014 as the Asian arm of CPX Interactive". No founding city.

## Repo

- Origin: `https://github.com/CPXi-Asia/cpxi-website` (**public**: never commit client data, internal research or reviewer notes; those live in `~/CPXi/cpxi-website-internal/`)
- Default branch: `main`
- Vercel project: `john-5621s-projects/cpxi-website` (linked via `.vercel/project.json` — gitignored)

## Open

- [x] **DNS cutover** — DONE 2026-08-09 via cPanel API (zone serial 2026081000). Contact form verified end-to-end on the live domain (`delivered: true` to hello@cpxi-asia.com).
- [ ] **Analytics** — GTM `GTM-WKHW43` (reused from the legacy site) is live since 2026-08-11; conversion mapping inside GTM is still unfinished. Google Search Console verification not visible (no DNS/meta token) — John checking.
- [ ] **Legacy URL 404s** — old subpages (`/page/career`, `/page/privacy`, blog) 404 on the one-pager. Add redirects or a minimal privacy page if anything links to them.
- [ ] **Reuben confirmations** — platform partner list (TikTok/Spotify tiers? Xiaohongshu?), official AOTY 2025 winner badge kit, GuocoLand vector art (current color source too low-res, white-only for now).

## Environment variables

None yet. When added, manage via:

```bash
vercel env add VARNAME production
vercel env pull .env.local      # for local dev
```

Never commit `.env*` files — `.gitignore` covers them.
