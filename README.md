# Troutwater Restoration

Static website for Troutwater Restoration, LLC — a river, stream, and wetland
restoration design and consulting firm based in Bozeman, Montana.

Rebuilt as a plain static site (no build step, no framework) from the
original [troutwaterconsulting.com](https://www.troutwaterconsulting.com/)
Wix site, so it can be hosted for free on GitHub Pages and edited directly
as HTML/CSS.

## Structure

- `index.html` — Home
- `about.html` — About TWR (team bios)
- `services.html` — Services
- `projects.html` — Featured projects
- `contact.html` — Contact (placeholder — see TODO below)
- `assets/css/style.css` — Shared stylesheet
- `assets/js/main.js` — Mobile nav toggle
- `assets/images/` — Site images, resized/compressed for web

## Known gap: Contact page

The original site's contact form posted to Wix's own backend with no public
email address or phone number shown anywhere on the page, so there was
nothing to carry over directly. `contact.html` currently has a placeholder.
To finish it, either:

1. Add a `mailto:` link once you have a real business email, or
2. Wire up a real form via a free service like [Formspree](https://formspree.io/).

## Changes from the original site

- Removed the Shop, My Orders, and Log In pages (no ecommerce needed).
- Images were downloaded at full resolution from Wix and recompressed
  (~100MB → ~9MB total) for reasonable page load times.

## Running locally

No build step — just open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit `http://localhost:8000`.

## Deploying to GitHub Pages

1. Push this repo to GitHub.
2. In the repo settings, enable **GitHub Pages** for the `main` branch, root folder.
