# DESIGN.md — joeys-diner-demo

## Purpose

Unsolicited concept redesign of [joeysdinerwaukesha.com](https://www.joeysdinerwaukesha.com) built by Brew City Devs as a prospecting demo. Goal: show Joey's Diner what a modern, mobile-first version of their site could look like. Not a paid engagement.

## Stack decision: no framework, no build step

Plain HTML, CSS, and ~60 lines of JavaScript. Deliberate — this is a demo that must:

1. Load in under a second on a phone
2. Be deployable by anyone without a build tool or Node.js
3. Be handed off to a non-technical client without confusion

A React or Vite build would have added zero user-facing value and made the demo harder to show quickly. The JavaScript covers only: tab switching on the menu section, smooth-scroll polyfill, sticky mobile CTA bar show/hide on scroll.

## Hosting: Cloudflare Pages

Static files at the repository root. Cloudflare Pages is configured with:
- Build command: empty (no build step)
- Output directory: `/`

This pattern — one repo, deploy directly from root — is the standard for all Brew City Devs static demo sites. Cloudflare Pages gives free HTTPS and global CDN with zero cost and zero ops.

## SEO choices

- `Restaurant` JSON-LD structured data with address, phone, and hours for Google rich results.
- `<title>`, `<meta name="description">`, canonical URL, and Open Graph tags set explicitly.
- `robots.txt` present but allows full crawling — this is a public demo intended to be found.

## Mobile-first design choices

- Sticky call/directions dock at the bottom of mobile viewports — the two most common mobile actions for a diner site.
- Tap-to-call `<a href="tel:...">`  in the header, not plain text.
- Tabbed menu UI by category (Breakfast, Burgers, Appetizers, etc.) to avoid an endless scroll.

## Demo ribbon

A prominent ribbon at the top marks this as a concept, not the live site. Required because the repo is public and business facts (address, phone, hours) reflect the real business.

## Known shortcuts (deliberate)

See README.md for the full list. Key ones: emoji placeholder visuals instead of photos, partially placeholder menu items, placeholder testimonials, single-page only. All intentional for a no-cost mockup; a real build replaces each.
