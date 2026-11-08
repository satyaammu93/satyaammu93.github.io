# satyaammu93.github.io

Source for my personal homepage at <https://satyaammu93.github.io>: a single static page
laid out like a GitHub profile (profile column on the left; README card, project cards,
publications and background on the right).

No build step and no framework: plain HTML, CSS and a small amount of JavaScript.

| File | What it holds |
|---|---|
| `data.js` | **All content**: profile, intro, skills, projects, publications, experience, education |
| `index.html` | Page skeleton, title and preview (meta) description |
| `styles.css` | Layout and dark theme (colors are variables at the top) |
| `app.js` | Renders `data.js` into the page; no content lives here |
| `assets/papers/` | Figure crops and thumbnails for publications (WebP) |
| `favicon.svg` | Browser-tab icon |
| `.nojekyll` | Tells GitHub Pages to serve the files as they are |

## Preview locally

Open `index.html` in a browser; it works straight from disk.

Or serve it, which matches GitHub Pages more closely:

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Edit content

Every change is made in `data.js`. Copy an existing entry in the right list and edit it.

### Add a publication

Add an object to `publications` (order in the list = order on the page):

```js
{
  title: "Paper title",
  authors: ["First Author*", "Satya K. Ammu*", "Last Author"],  // "*" = equal contribution
  venue: "Journal full name",
  abbr: "J. Abbr.",                  // blue journal badge above the title
  year: 2025,
  role: "First author",              // small tag; optional
  url: "https://doi.org/...",
  thumb: { src: "assets/papers/xyz-thumb.webp", alt: "What the image shows" },
  summary: "Two or three sentences: the question and what I did.",
  figures: [                         // shown when "Summary" is opened; first one is full width
    { src: "assets/papers/xyz-fig.webp", alt: "...", caption: "One line." }
  ],
  credit: "Figure adapted from ..., CC BY 4.0."
}
```

- My name is highlighted automatically when it matches one of `profile.authorNames`.
- Thumbnails display at 4:3. A 480×360 image works best; pad rather than crop labels.
- Figures open full-size in a new tab when clicked, so keep them ≤1600 px wide.
- `thumb`, `summary`, `figures` and `credit` are all optional.

### Add a project

Add an object to `projects` (order in the list = order on the page):

```js
{
  title: "Project name",
  status: "Ongoing",                 // short tag; "Ongoing" is shown in amber. Optional.
  description: "One or two sentences on what I did.",
  credit: { text: "Method: Author et al., Venue Year", url: "https://..." },  // optional
  kind: { label: "Python", color: "#3572A5" },   // dot + label, like GitHub's language
  links: [
    { type: "code",  label: "Code",  url: "https://github.com/satyaammu93/..." },
    { type: "paper", label: "Paper", url: "https://doi.org/..." }
  ]
}
```

- The first link is also used for the card title.
- `type` picks the icon: `code`, `paper` or `demo`. Anything else gets a generic external-link icon.
- Colors used so far: Experimental `#3fb950`, Python `#3572A5`, Verilog `#b2b7f8`.

### Other lists

- **Publication:** `{ title, venue, year, role, url }` in `publications`.
- **Role:** `{ period, role, org, text }` in `experience` (newest first; the first entry gets the highlighted dot).
- **Degree:** `{ year, degree, org }` in `education`.
- **Skill:** add a string to `items` in a `skills` group, or add a new `{ group, items: [] }`.

### Add a photo

Put the image in an `assets/` folder (square, at least 600×600 px) and set
`profile.photo` to `"assets/your-file.jpg"`. Leave it as `""` to keep the initials avatar.

## Deploy to GitHub Pages

This repository must be named exactly `satyaammu93.github.io` to be served at the root URL.

```bash
cd satyaammu93.github.io
git init -b main
git add .
git commit -m "Initial homepage"
gh repo create satyaammu93/satyaammu93.github.io --public --source=. --push
```

Then in the repository on GitHub: **Settings → Pages → Build and deployment →
Source: Deploy from a branch → Branch: `main` / `(root)` → Save**. The site is live
at <https://satyaammu93.github.io> within a minute or two.

Later updates: edit `data.js`, then `git commit -am "Update projects" && git push`.

Existing project pages such as `https://satyaammu93.github.io/jane-street-asic-2026/`
keep working; they are served from their own repositories.

## Credits

Icons for repo, code, paper, demo, external link and GitHub come from
[Primer Octicons](https://github.com/primer/octicons) (MIT License). The LinkedIn and
Google Scholar glyphs are simplified marks used only to label links to those profiles.

Publication figures are cropped from my own papers and credited next to each figure:

| Paper | License |
|---|---|
| Ammu et al., Adv. Mater. Technol. 2024 | © The Authors, CC BY-NC-ND 4.0 (panels excerpted, not altered) |
| Sharma, Ammu et al., npj Metamaterials 2025 | CC BY 4.0 |
| Chen, Ammu et al., Adv. Sci. 2022 | CC BY 4.0 |
| Oh, Ammu et al., Adv. Mater. 2024 | © Wiley-VCH, not open access; reused under author rights with attribution |
