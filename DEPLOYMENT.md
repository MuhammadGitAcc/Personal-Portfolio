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
   - `lighthouse`: Performance, Accessibility, Best Practices and SEO must each stay at 0.9 or above.
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

## Checking the live site

After an important change, check that the headers and the files are served correctly:

```
curl -sI https://moh-port.pages.dev/ | grep -iE "content-security|x-frame|x-content-type|referrer|permissions|cross-origin|strict-transport"
curl -sI https://moh-port.pages.dev/assets/FILE-NAME.js | grep -iE "^HTTP|cache-control"
for f in robots.txt sitemap.xml manifest.webmanifest favicon.ico og-image.png; do echo "$f: $(curl -s -o /dev/null -w '%{http_code} %{content_type}' https://moh-port.pages.dev/$f)"; done
```

The first command should list seven headers. The second should show `immutable`; take a real file name from `curl -s https://moh-port.pages.dev/ | grep -oE '/assets/[^"]+\.js'`. Every file in the loop should answer `200` with its real type, never `text/html`.

Only the `public/` folder is published as it is: `robots.txt`, `sitemap.xml`, the icons, the manifest and the social image must live there, not in the project root.

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
- **The link preview shows an old or missing image:** chat apps and social sites keep previews for a while. Wait a little, or refresh it with the site's own tool (for example LinkedIn Post Inspector).

## Site address

There is no custom domain: the final address is `https://moh-port.pages.dev`. It is written in the places below, which must all change together if the address ever changes (for example with a custom domain under Workers & Pages -> `moh-port` -> Custom domains):

- `src/data/site.ts` (`url`)
- `index.html`: the canonical link, the hreflang links, `og:url`, the two image links (`og:image` and `twitter:image`) and the structured data (JSON-LD)
- `public/sitemap.xml`
- `public/robots.txt` (the `Sitemap:` line)

## Run the project locally

Node 22 is required (`nvm use`). After copying `.env.example` to `.env.local`, fill in the three `VITE_EMAILJS_*` values.

```
npm ci
cp .env.example .env.local
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
