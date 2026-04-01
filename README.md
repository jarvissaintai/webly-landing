# ⚡ Webly — Landing Page

> Your electrician website, built in 10 minutes.

A single-file waitlist landing page for Webly. Pure HTML/CSS/JS — no frameworks, no build step, no dependencies (except Google Fonts for Inter).

---

## Local Preview

Just open the file in your browser:

```bash
open index.html
```

Or if you have Python installed (for a local server):

```bash
# Python 3
python3 -m http.server 8080
# then open http://localhost:8080
```

Or use the [VS Code Live Server extension](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) and click **Go Live**.

---

## Deploy (Drag & Drop — No CLI Needed)

### Netlify (recommended)
1. Go to [app.netlify.com/drop](https://app.netlify.com/drop)
2. Drag the `webly-landing/` folder onto the page
3. Done — you get a live URL instantly

### Vercel
1. Go to [vercel.com/new](https://vercel.com/new)
2. Click **"Browse"** → select the `webly-landing/` folder
3. Deploy — live in seconds

### Cloudflare Pages
1. Go to [dash.cloudflare.com](https://dash.cloudflare.com) → **Pages** → **Create a project**
2. Click **"Upload assets"** → select the `webly-landing/` folder
3. Hit Deploy

---

## Files

```
webly-landing/
├── index.html   — Page structure and content
├── style.css    — All styling (dark theme, responsive)
├── app.js       — Email capture logic
└── README.md    — This file
```

---

## Email Capture

- Emails are stored in `localStorage` under the key `webly_waitlist` (client-side, no backend needed)
- Also attempts a POST to `/api/waitlist` with `{ email }` — gracefully handles 404/errors, always shows success
- Success message: *"You're on the list! We'll be in touch soon. 🍌"*

When you're ready to add a real backend, just implement the `/api/waitlist` endpoint.

---

## Customization

| Thing | Where |
|---|---|
| Brand colors | `style.css` → `:root` variables |
| Copy / text | `index.html` |
| Form behavior | `app.js` |
| API endpoint | `app.js` → `postToApi()` |

---

*⚡ Webly · @usewebly · Built for electricians*
