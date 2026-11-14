# Domain: alinex.is-a.dev (free)

Chosen because it needs no DNS host: one JSON file and a pull request.
eu.org was dropped because Cloudflare no longer accepts eu.org domains.

## Request it
1. Fork https://github.com/is-a-dev/register
2. Add `domains/alinex.json`:

```json
{
  "owner": { "username": "anasrizvi89-design", "email": "YOUR_EMAIL" },
  "records": { "CNAME": "anasrizvi89-design.github.io" }
}
```

3. Open a pull request. A bot checks it, then a person approves it (usually days).

## After approval
Add a `CNAME` file containing `alinex.is-a.dev` to the repo root and push.
Do not add it before approval or the github.io address will redirect to a domain that does not work yet.
GitHub then issues HTTPS for the new address within about an hour.

## Later options
- Per-app addresses: `app.alinex.is-a.dev` by adding more records to the same JSON file.
- A paid domain such as `alinex.app` (about $14 a year) if the project grows.
