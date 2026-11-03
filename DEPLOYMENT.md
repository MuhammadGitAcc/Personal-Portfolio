# Deployment guide

The site is built with Vite and hosted on Cloudflare Pages.

- Live site: https://moh-port.pages.dev
- Cloudflare Pages project: `moh-port` (Production branch `main`)
- Repository: https://github.com/MuhammadGitAcc/Personal-Portfolio

## How a change reaches the live site

1. Create a branch from an up-to-date `main` (`git switch main && git pull`, then `git switch -c type/short-name`).
2. Commit and push the branch, then open a pull request.
3. GitHub runs the required checks:
   - `checks` (CI): typecheck, lint, format check, tests, audit and build.
   - `lighthouse`: Accessibility, Best Practices and SEO must stay at 0.9 or above.
4. Cloudflare Pages builds a preview of the branch. The link is posted as a comment on the pull request.
5. When the required checks are green, merge with **Squash and merge**. `main` is protected, so it cannot be changed any other way.
6. Cloudflare Pages builds `main` and publishes it to production by itself, usually in about a minute.

## Cloudflare Pages settings

These live in the Cloudflare dashboard (Workers & Pages -> `moh-port` -> Settings), not in the repository.

| Setting           | Value           |
| ----------------- | --------------- |
| Production branch | `main`          |
| Build command     | `npm run build` |
| Output directory  | `dist`          |
| Root directory    | empty           |
| Framework preset  | None            |

Environment variables (plain text, set for Production and for Preview):

| Name                       | Purpose            |
| -------------------------- | ------------------ |
| `NODE_VERSION`             | `22`               |
| `VITE_EMAILJS_SERVICE_ID`  | EmailJS service    |
| `VITE_EMAILJS_TEMPLATE_ID` | EmailJS template   |
| `VITE_EMAILJS_PUBLIC_KEY`  | EmailJS public key |

The EmailJS values are also needed locally in `.env.local` (git ignores it). Never commit them.

## Security headers and caching

`public/_headers` is copied to `dist/` by Vite and read by Cloudflare Pages. It sets:

- a Content-Security-Policy, `nosniff`, `X-Frame-Options`, `Referrer-Policy`, `Permissions-Policy`, `Cross-Origin-Opener-Policy` and HSTS for every page;
- a one-year `immutable` cache for `/assets/*` (the file names change whenever their content changes).

The policy allows the small inline theme script in `index.html` by its SHA-256 hash. If that script is ever edited, the hash in `public/_headers` must be updated. The test `src/headers.test.ts` fails and prints the new hash when this is needed.

If you add something from another site (fonts, analytics, remote images, another API), add its address to the matching directive in the policy, or the browser will block it.

## Rolling back

Rolling back is safe and quick. Use the first method to restore the site immediately, and the second to fix `main` itself.

### A. Restore the previous version on Cloudflare (about 1 minute)

1. Open Workers & Pages -> `moh-port` -> Deployments.
2. In the Production list, find the last deployment that worked (check its commit message and time).
3. Open its `...` menu (or Details -> Manage deployment) and choose **Rollback to this deployment**, then confirm.

The old version is live again at once. This does not change GitHub: `main` still contains the faulty change, and the next merge will deploy `main` again. So also do method B.

### B. Revert the change in GitHub

1. Open the merged pull request and click **Revert**. GitHub creates a new pull request that undoes it.
2. Wait for the required checks to turn green and **Squash and merge** it.
3. Cloudflare publishes the reverted `main` by itself.

### After a rollback

- Reload the live site with the browser Console open and check for errors.
- Send a test message from the contact form.

## Troubleshooting

- **Contact form fails on the live site:** check that the three `VITE_EMAILJS_*` variables exist for Production (and for Preview when testing a preview link), then redeploy. Variables are read at build time.
- **Dark mode flashes, or the Console shows a Content Security Policy error:** the inline script hash in `public/_headers` no longer matches `index.html`.
- **Merge conflict on `public/_headers` or another file already merged:** the branch was started from an old branch instead of a fresh `main`. Start again from `main`.
- **A check named "Workers Builds" fails:** it comes from the old Cloudflare Worker `personal-portfolio`. It is not required. Delete that Worker or disconnect its Git repository in Cloudflare.
- **Builds:** the free Pages plan allows 500 builds per month, and every pushed branch gets a preview build.

## Custom domain

Not set up yet. When a final domain is chosen: Workers & Pages -> `moh-port` -> Custom domains, then update the site URL in `src/data/site.ts`, the canonical link, `sitemap.xml`, `robots.txt` and the Open Graph tags.

## Run the project locally

Node 22 is required (`nvm use`).

```
npm install
npm run dev
```

Checks run before every pull request:

```
npm run typecheck
npm run lint
npm run format:check
npm run test
npm run build
```
