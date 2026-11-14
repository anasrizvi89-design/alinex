# Getting alinex.eu.org (free, never expires)

These steps need your own accounts and personal details, so you do them. Each step says exactly what to type.
Allow about 20 minutes, then a wait of a few days to a few weeks for approval.

## Step 1 — Free Cloudflare account (gives you the nameservers)

1. Sign up at **dash.cloudflare.com/sign-up**.
2. Click **Add a domain** and enter `alinex.eu.org`.
3. Choose the **Free** plan.
4. Skip the DNS records screen for now. Click **Continue**.
5. Cloudflare shows **two nameservers**, for example `ada.ns.cloudflare.com` and `bob.ns.cloudflare.com`.
   **Copy both.** You need them in Step 3.

## Step 2 — eu.org account

1. Go to **nic.eu.org** and click **Sign up / create a contact**.
2. Fill in your name, address and email. Set it to **Private** so they aren't shown publicly.
3. You get a handle ending in **-FREE** (like `AB123-FREE`). **Save it.** It is your login name.
4. Click the link in the confirmation email. It often lands in **spam**.

## Step 3 — Request the domain

1. Log in at **nic.eu.org/arf/** with your -FREE handle.
2. Click **New Domain**.
3. Fill in:

| Field | What to enter |
|---|---|
| Complete domain name | `alinex.eu.org` |
| Organization / name | `Alinex` |
| Address / country | your own (kept private) |
| Private (not shown in whois) | ✅ ticked |
| Name1 | first Cloudflare nameserver from Step 1 |
| Name2 | second Cloudflare nameserver from Step 1 |
| Check NS / Server checks | **Check only if the domain is ok** (the safe choice) |

4. Click **Submit**. The page should end with **"Done"** and give you a request number.
   - If it lists errors, the usual cause is a typo in the nameservers. Fix it and submit again.
   - If `alinex.eu.org` is refused or already taken, use `alinex.us.eu.org` (or another country subdomain such as `alinex.uk.eu.org`) instead. eu.org itself recommends these, and they are approved more easily.

## Step 4 — Wait for approval

A person at eu.org reviews it by hand, which takes a few days to a few weeks. You get an email when it's accepted.
You don't have to do anything while you wait.

## Step 5 — Point the domain at the site (after approval)

In Cloudflare, open `alinex.eu.org` → **DNS** → **Records**, and add these.
Set **Proxy status** to **DNS only (grey cloud)** for all of them, so GitHub can issue the HTTPS certificate.

| Type | Name | Content |
|---|---|---|
| A | `@` | `185.199.108.153` |
| A | `@` | `185.199.109.153` |
| A | `@` | `185.199.110.153` |
| A | `@` | `185.199.111.153` |
| AAAA | `@` | `2606:50c0:8000::153` |
| AAAA | `@` | `2606:50c0:8001::153` |
| AAAA | `@` | `2606:50c0:8002::153` |
| AAAA | `@` | `2606:50c0:8003::153` |
| CNAME | `www` | `anasrizvi89-design.github.io` |

Then tell Claude **"eu.org approved"**. Claude adds the custom-domain file to the repo, and the site moves to **https://alinex.eu.org**.

## Extras you get for free afterwards

- **Email:** Cloudflare → Email → **Email Routing** forwards `hello@alinex.eu.org` to your inbox.
- **One address per app:** add a CNAME such as `notes` → wherever that app is hosted, giving you `notes.alinex.eu.org`.
- **Visitor stats:** Cloudflare → **Web Analytics**, no cookie banner needed.
