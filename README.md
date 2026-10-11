# Joey's Diner — concept redesign

A single-page concept redesign of [joeysdinerwaukesha.com](https://www.joeysdinerwaukesha.com), built by
**Brew City Devs** as a prospective-client mockup.

> **This is not the live site.** It is an unsolicited design concept. All business facts
> (address, phone, hours) were taken from the current public website.
> Menu items are a mix of real items sourced from the public website and placeholder additions.
> Testimonials are clearly-labelled placeholder copy, not real reviews.

## Stack

Plain HTML, CSS and ~60 lines of JavaScript. No framework, no build step, no dependencies.
Files: `index.html`, `styles.css`, `script.js`, `404.html`, `robots.txt`. Deploys as static files to
Cloudflare Pages and loads in well under a second.

## What the current site does well

- Address, phone, and hours are present.
- Menu categories (Breakfast, Burgers, Appetizers, Sandwiches and Baskets) are listed.
- The 1950s retro concept is communicated.
- Social media links (Facebook, Instagram, Twitter) are present.

## What this concept changes

| Current site | This concept |
| --- | --- |
| Basic layout, limited mobile optimization | Responsive, designed mobile-first |
| Phone number not tap-to-call | Tap-to-call in header + mobile sticky dock |
| No prominent directions CTA | Map / directions link throughout |
| Static menu listing | Tabbed menu UI by category |
| No structured data | `Restaurant` JSON-LD with address, hours, phone for Google |
| No page title or meta tuned for search | Title, description, and Open Graph tags set |
| No visual "don't miss" section | Diner favorites highlight section |
| No demo ribbon | Clear ribbon marking this as a concept |

## Known shortcuts in the mockup

These are deliberate, and they are what a real build would replace:

- **No photos.** All visuals use emoji. A real build would use photos of the diner interior,
  food, and atmosphere.
- **Menu items are partially placeholder.** Category names and real items (Bacon Cheeseburger,
  Cheese Curds, Onion Rings, Crispy Fries, Wings, Breakfast Scramblers, Root Beer Float,
  Chocolate Cake, Patty Melt, Chicken Sandwich) sourced from joeysdinerwaukesha.com.
  Other items within categories are representative placeholder copy — a real build uses
  Joey's actual full menu with real descriptions and prices.
- **Testimonials are placeholders.** The live version would pull real Google reviews.
- **One page only.** A full build could add dedicated menu, events, and catering pages.
- **No logo.** The mark in the header is a placeholder SVG.
- **Hours from the site.** Sourced from joeysdinerwaukesha.com (Oct 2026):
  Mon–Sat 7 AM–9 PM, Sun 8 AM–3 PM. Verify before launch.

## Run it locally

```bash
python3 -m http.server 8000
# then open http://localhost:8000
```

## Deploy

Static files at the repository root. On Cloudflare Pages: build command empty,
output directory `/`.

---

Brew City Devs &middot; Milwaukee, WI
