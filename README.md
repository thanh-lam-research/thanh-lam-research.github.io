# Thanh Lam — Personal Website

A fast, modern, single-page academic site. No build step, no framework — just
`index.html`, `styles.css`, and `script.js`. Edit and host anywhere.

## Preview locally

Just open `index.html` in a browser. Or run a tiny local server:

```bash
cd personal_website
python3 -m http.server 8000
# then visit http://localhost:8000
```

## Add your photo

Drop a square image at `assets/profile.jpg` (≈600×600). Until you do, the site
shows a clean "TL" placeholder.

## Deploy free on GitHub Pages

1. Create a GitHub repo. For a personal site at `https://<username>.github.io`,
   name the repo **`<username>.github.io`** and put these files at its root.
   (Any other repo name also works — the URL becomes `https://<username>.github.io/<repo>`.)

2. Push the files:

   ```bash
   cd personal_website
   git init
   git add .
   git commit -m "Personal website"
   git branch -M main
   git remote add origin https://github.com/<username>/<repo>.git
   git push -u origin main
   ```

3. In the repo: **Settings → Pages → Source → Deploy from a branch →
   `main` / root**. Save. Your site goes live in ~1 minute.

### Custom domain (optional)
Add a `CNAME` file containing your domain, and point a DNS `CNAME`/`A` record at
GitHub Pages. See GitHub's docs for the current IPs.

## Other free hosts (drag-and-drop, no git)
- **Netlify** or **Vercel** or **Cloudflare Pages**: drag the `personal_website`
  folder in, done. All give HTTPS + a free subdomain.

## Editing content
Everything lives in `index.html` — sections are clearly commented
(Hero, About, Research, Publications, Experience, Education). Update text there;
adjust colors/fonts in `styles.css` (see the `:root` variables at the top).
