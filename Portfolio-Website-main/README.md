# Val Photography

A photography portfolio for Val Photography, based in Botswana. The site
features galleries for portraits, studio photography, birthdays, events,
weddings, and graduations, along with direct email, phone, and WhatsApp
contact links.

## Run locally

From the repository root, install the app dependencies and start Vite:

```bash
npm install --prefix Portfolio-Website-main
npm run dev --prefix Portfolio-Website-main
```

Open the local URL printed by Vite.

## Build and deploy

Build the production site:

```bash
npm run build --prefix Portfolio-Website-main
```

To publish to the configured GitHub Pages branch, run from the repository
root:

```bash
npm run deploy
```

Gallery photos are currently hosted sample images. Add Val Photography's
photos to the matching category folders under `src/assets/gallery/`; supported
formats are AVIF, JPG/JPEG, PNG, and WebP.
