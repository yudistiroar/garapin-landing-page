# Garapin Brand Identity v2

This directory is the single source of truth for Garapin’s official production assets. Every file is derived from the supplied Brand Identity v2 vector artwork. Do not redraw, typeset, distort, outline, add effects to, or alter the proportions of the logo or logomark.

## Official logo and wordmark usage

- Use `logo/logo-black.svg` as the primary Garapin Digital wordmark on white and light backgrounds.
- Use `logo/logo-white.svg` on black and dark backgrounds.
- Prefer SVG for websites, interfaces, and other vector-capable applications so the artwork remains sharp at every size.
- Use the transparent PNG equivalents only where SVG is unsupported. The PNG exports are 2048 px wide for high-density and Retina displays.
- Keep the complete `GARAPIN` and `DIGITAL` lockup intact. Do not remove, move, resize, or recreate either line independently.

## Logomark usage

- Use `mark/mark-black.svg` on white and light backgrounds.
- Use `mark/mark-white.svg` on black and dark backgrounds.
- The logomark is the custom “A” from the official wordmark. Use it only for compact applications such as avatars, favicons, app icons, and watermarks.
- Do not substitute the mark for the full wordmark when the full identity can be displayed legibly.

## Minimum size

- Full logo: minimum recommended width of 120 px on screen or 32 mm in print.
- Standalone mark: minimum recommended size of 24 px on screen.
- Below 24 px, use the dedicated files in `favicon/`; they include optical padding for small-size clarity.

## Clear space

Maintain clear space around the full logo equal to at least the height of the `DIGITAL` line. Around the standalone mark, maintain clear space equal to at least one quarter of the mark’s width. Keep text, borders, imagery, and other graphic elements outside this area.

## Black and white versions

- Official black: `#000000`.
- Official white: `#FFFFFF`.
- Use the black artwork on light backgrounds and the white artwork on dark backgrounds.
- Do not recolor the artwork, apply opacity, add shadows or gradients, or place it over backgrounds that reduce contrast.

## Social avatar usage

Files in `social/` provide platform-ready profile images using the official white mark centered on black. Upload the platform-specific file without renaming or modifying it. The generous safe area supports circular and rounded-square crops.

`social/linkedin-banner.png` uses the full white wordmark on black at 1584 × 396 px. Do not crop, stretch, or add text to it.

## Favicon usage

- `favicon.ico` contains the standard 16, 32, and 48 px browser sizes.
- Use the dedicated `favicon-16.png`, `favicon-32.png`, and `favicon-48.png` files at their native sizes.
- `apple-touch-icon.png` is the 180 px Apple touch icon.
- `android-chrome-192.png` and `android-chrome-512.png` are declared in `site.webmanifest`.
- Do not resize the browser icons in HTML or replace their built-in clear space.

## Open Graph usage

Use `open-graph/og-image-1200x630.png` for Open Graph and social link previews. It contains the official white wordmark centered on black at the required 1200 × 630 px aspect ratio.
