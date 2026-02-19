# ProCut & Coat Landing Page

## Overview
A single-page marketing landing page for ProCut & Coat, a powder coating, precision cutting, and sheet-metal bending facility in Orlando, FL. Dark theme with teal (#7ECEC8) primary and orange (#EFA758) accent colors.

## Recent Changes
- 2026-02-19: Added /our-process page with 5-step process content, navigation link, meta tags, and internal cross-links
- 2026-02-09: Initial build of the landing page with all sections

## Architecture
- **Frontend only** - No backend API or database needed
- Pages: `/` (home), `/metal-fabrication-orlando-fl` (services), `/our-process` (process), `/contact`
- Header with Home/Our Services/Our Process/Contact links, hamburger menu on mobile
- Sections: Hero, Why, Workshop, Video, Hotspot Image, Perfect For (stats), FAQ, CTA, Footer

## Key Files
- `client/src/pages/home.tsx` - Complete landing page with all sections
- `client/src/pages/our-process.tsx` - 5-step metal fabrication process page
- `client/src/App.tsx` - Router setup
- `client/src/index.css` - Theme colors (dark mode by default)
- `tailwind.config.ts` - Font families including heading font
- `client/index.html` - Google Fonts (DM Sans + Lexend Deca)

## Fonts
- Body: DM Sans
- Headings: Lexend Deca (via `font-heading` tailwind class)

## Placeholders
- IMAGE_PLACEHOLDER_1: Workshop/facility photo (0B1A5017-scaled.jpg)
- IMAGE_PLACEHOLDER_2: Equipment hotspot photo (0B1A4389-scaled.jpg)
- VIDEO_PLACEHOLDER_1: Facility video with play button

## Running
- `npm run dev` starts the Express + Vite dev server on port 5000
