# Palapa Coffee

Responsive company profile for Palapa Coffee, built with React, TypeScript, Tailwind CSS, and Vinext.

## Edit content, links, and images

Open `site.config.ts`. It contains every contact link and image URL in one place.

- Replace WhatsApp with `https://wa.me/COUNTRYCODEPHONENUMBER`.
- Replace the email and Instagram URL.
- Replace any image with another public URL.
- To keep images in the repository, add optimized WebP files under `public/images/` and use paths such as `/images/hero.webp`.

Visible page copy is in `app/page.tsx`. Colors and layout are in `app/globals.css`.

## Run locally

Requires Node.js 22.13 or newer and pnpm.

```bash
pnpm install
pnpm dev
```

Open `http://localhost:3000`.

## Production build

```bash
pnpm build
pnpm start
```

## GitHub

The repository excludes dependencies and generated output through `.gitignore`. Commit the extracted project files directly to GitHub. The included lockfile provides reproducible installs.
