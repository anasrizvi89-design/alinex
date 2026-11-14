# Alinex

The home of all my apps: what each one does, where to get it, and what's coming next.

## Project layout

| File | What it is |
|------|------------|
| `index.html` | The page |
| `apps.json` | **The app list. Edit only this file to add or update apps.** |
| `assets/style.css` | Styles (dark and light mode) |
| `assets/app.js` | Renders the app cards and status filters |
| `assets/logo.svg` | Logo and favicon |
| `.github/workflows/pages.yml` | Deploys the site to GitHub Pages on every push to `main` |

### Adding an app

Add an entry to `apps.json`:

```json
{
  "name": "My App",
  "icon": "📱",
  "status": "live",
  "description": "One line about what it does.",
  "tags": ["Android", "Web"],
  "links": [{ "label": "Download", "url": "https://..." }]
}
```

`status` is `live`, `beta` or `soon`.

## Hosting (free)

Live at **https://anasrizvi89-design.github.io/alinex/**

GitHub Pages serves the `gh-pages` branch. On every push to `main`, `.github/workflows/pages.yml` copies `main` onto `gh-pages`, so you only ever edit `main`.

## Domain plan

`alinex.io` is not free. `.io` costs about $35–60 a year. There are no free `.io`, `.com`, `.dev` or `.app` domains.

| Option | Cost | Address | Notes |
|--------|------|---------|-------|
| **EU.org** | Free, never expires | `alinex.eu.org` | A real domain with full DNS control. You can add subdomains per app (`app1.alinex.eu.org`), set up email forwarding with Cloudflare, and point it anywhere. Approval can take weeks, so apply now at <https://nic.eu.org>. |
| **is-a.dev** (chosen, see [setup guide](docs/domain-setup.md)) | Free | `alinex.is-a.dev` | Fast, approved through a pull request to `is-a-dev/register`. Developer-focused and widely recognised. |
| **DigitalPlat FreeDomain** | Free | `alinex.dpdns.org` | Quick to get and gives full DNS. Lower reputation, so use it as a stopgap. |
| **GitHub Student Pack** | Free for 1 year (students only) | `alinex.me` / `alinex.tech` | Real TLDs via Namecheap / get.tech. |
| **Paid, later** | ~$10–15/yr | `alinex.app` / `alinex.dev` | Cheapest "pro" option once the project grows. Buy at cost from Cloudflare Registrar. |

### Pointing a domain at this site

1. Put the domain's DNS on Cloudflare (free). This also gives you HTTPS, analytics and email routing.
2. Add a `CNAME` record: `@` (or `alinex` for a subdomain service) → `<your-username>.github.io`.
3. In the repo, go to **Settings → Pages → Custom domain**, enter the domain, and tick **Enforce HTTPS**.
