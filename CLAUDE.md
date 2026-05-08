@AGENTS.md

# cpxi-website

Marketing site for **www.cpxi-asia.com** (replacing the legacy CodeIgniter site on HawkHost).

## Stack

- Next.js 16 (App Router) + React 19
- TypeScript, Tailwind v4 (`@tailwindcss/postcss`), ESLint
- npm (matches `cpxi-automation/dashboard`)
- Hosted on Vercel under the personal scope `john-5621s-projects`

## URLs

| Environment | URL | Notes |
|---|---|---|
| Production (Vercel) | https://cpxi-website.vercel.app | Stable Vercel alias — current "staging" URL during build-out |
| Live (legacy) | https://www.cpxi-asia.com | Untouched. CodeIgniter on HawkHost LiteSpeed. DNS cutover is a separate later step. |

## Local dev

```bash
cd ~/CPXi/cpxi-website
npm install        # only on first checkout
npm run dev        # http://localhost:3000
npm run lint
npm run build      # verify production build before pushing
```

## Deploy

Manual until the Vercel ↔ GitHub app is wired (see Open below):

```bash
vercel deploy           # preview deploy
vercel deploy --prod    # production deploy → cpxi-website.vercel.app
```

Once GitHub auto-deploy is connected, `git push` to `main` deploys to production automatically; PR pushes get preview URLs.

## Repo

- Origin: `https://github.com/CPXi-Asia/cpxi-website` (private)
- Default branch: `main`
- Vercel project: `john-5621s-projects/cpxi-website` (linked via `.vercel/project.json` — gitignored)

## Open

- [ ] **Vercel ↔ GitHub auto-deploy** — initial `vercel link` couldn't connect the GitHub repo because the Vercel GitHub App isn't installed on the `CPXi-Asia` org. Install at https://github.com/apps/vercel/installations/select_target → pick CPXi-Asia → grant access to `cpxi-website`. Then re-run `vercel git connect` from the repo, or just confirm in the Vercel dashboard at Project → Settings → Git.
- [ ] **DNS cutover plan** — when content/design are ready, point `www.cpxi-asia.com` (currently HawkHost A record) at Vercel via CNAME `cname.vercel-dns.com`. Don't touch `platform.`, `report.`, or `thrive.` subdomains.
- [ ] **Analytics** — current site has GTM `GTM-WKHW43`, Google Ads `AW-710811234`, Hotjar `3659625`. Decide whether to reuse or start fresh when content lands.
- [ ] **Design + content** — held off until John provides direction.

## Environment variables

None yet. When added, manage via:

```bash
vercel env add VARNAME production
vercel env pull .env.local      # for local dev
```

Never commit `.env*` files — `.gitignore` covers them.
