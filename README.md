# nathancoleman.dev

Personal site. Plain HTML, CSS, and a few lines of JavaScript — no build step, no
dependencies, no framework. Every file in this repo is the file that ships.

## Structure

```
index.html      Home — hero, about, pull quote, selected work, condensed experience
about.html      Long-form bio, full experience timeline, education
projects.html   Music League, Mixtape Hero, BYOK, Encrypted Blob Storage
writing.html    Index of essays, newest first
writing/        One page per essay (imported from world.hey.com/nathan.coleman)
styles.css      All styling. Design tokens live in :root at the top.
main.js         Scroll-reveal only. The site is fully readable without it.
favicon.svg     Monogram mark.
images/         Nav avatar, project marks, the Mixtape Hero app screenshot, and
                images/writing/ for images embedded in essays.
```

## Images

`images/nathan.png` is the nav avatar. The project marks are the real app icons
and company logos: `music-league.png` (App Store icon), `mixtape-hero.png`,
`hashicorp.png`, `workiva.png`. `mixtape-hero-app.png` is the product screenshot
on the projects page.

The HashiCorp and Workiva marks are third-party trademarks, used here to
identify past employers. Swap them for neutral glyphs if that ever becomes a
concern.

## Running locally

Open `index.html` directly in a browser, or serve the directory:

```bash
python3 -m http.server 8000
```

## Deploying

Any static host works — GitHub Pages, Netlify, Cloudflare Pages, S3. Upload the
directory as-is; there is nothing to compile.

For GitHub Pages: push to `main`, then enable Pages from the repository root.

## Conventions

- Colors, spacing, radii, and fonts are CSS custom properties in `:root`. Change
  the palette there, not in individual rules.
- The accent blues (`#1155cc`, `#0096ff`) are pulled from the resume.
- Fonts are Space Grotesk (display) and Manrope (body), loaded from Google Fonts.
- Header, footer, and nav markup are duplicated across every page, including
  `writing.html` and each page in `writing/`. That is deliberate — the cost of
  keeping the copies in sync is lower than the cost of introducing a template
  step. Edit all of them when changing nav or footer. Pages in `writing/` use
  `../` for every local link and asset.
- To add an essay: copy an existing page in `writing/`, swap the title, date,
  meta tags, and body, update the older/newer links on its neighbours, and add
  an entry at the top of the list in `writing.html`.
- `prefers-reduced-motion` and print styles are handled at the bottom of
  `styles.css`.
