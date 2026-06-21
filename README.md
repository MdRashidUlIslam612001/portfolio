# Md Rashid Ul Islam Academic Portfolio

Static React + Vite + Tailwind CSS academic portfolio for Md Rashid Ul Islam. It is designed for GitHub Pages and organized around research, publications, projects, teaching, leadership, awards, and PhD application positioning.

## Important Content Note

The site data has been extracted from the provided CV at `/Users/rashid/Downloads/Rashid_s_CV_.pdf`. The CV has also been copied to `public/cv.pdf`, so the Download CV button works locally and after deployment.

The profile image is stored at `public/profile.jpg`. Project or manuscript items without public links use local status pages instead of dead placeholder links.

## Setup

```bash
cd outputs/academic-portfolio
npm install
npm run dev
```

Open the local URL shown by Vite, usually `http://127.0.0.1:5173/`.

## Build

```bash
npm run build
npm run preview
```

The production build is generated in `dist/`.

## GitHub Pages Deployment

This project uses `base: './'` in `vite.config.js`, which works for most GitHub Pages project sites.

Option 1: deploy with `gh-pages`:

```bash
npm run deploy
```

Option 2: deploy through GitHub Actions:

1. Push this folder to a GitHub repository.
2. In repository settings, enable Pages from GitHub Actions.
3. Add a workflow that runs `npm install`, `npm run build`, and uploads `dist/`.

## Replace Profile Photo

Current profile image:

```js
image: './profile.jpg'
```

To replace it later, overwrite `public/profile.jpg`. The site already points to:

```js
image: './profile.jpg'
```

## Replace CV

The current CV file is:

```text
public/cv.pdf
```

To replace it, overwrite that file with the latest PDF. The site already points to:

```js
cvUrl: './cv.pdf'
```

## Replace Gallery Photos

Optimized gallery photos are stored in:

```text
public/gallery/
```

The gallery captions and image paths are controlled from:

```text
src/data/gallery.js
```

Replace an image in `public/gallery/` with the same filename to keep the site unchanged, or update `src/data/gallery.js` when adding, removing, or reordering photos.

## Replace Contact Links

Update these fields in `src/data/profile.js` if they change:

- `email`
- `emailHref`
- `officialEmail`
- `personalEmail`
- `linkedin`
- `googleScholar`
- `website`
- `ogUrl`

Use `#` only for links that are not ready yet.

## Content Structure

```text
src/
  components/
  data/
  pages/
  sections/
  assets/
public/
  cv.pdf
  favicon.svg
  gallery/
  not-publicly-available.html
  profile-placeholder.svg
  profile.jpg
  yet-to-list-publicly.html
```

Most content changes should happen inside `src/data/`.
