# Smart Detailing — Website UI Kit

A full hi-fi homepage for **Smart Detailing**. Built as an interactive click-through prototype using React + Babel inline (no build step).

## Open

`index.html` — the composed homepage.

## Structure

```
ui_kits/website/
├── index.html        Composition root + script loading
├── site.css          All page-level styles (layout, sections, form)
├── Icon.jsx          SDIcons — inline SVG set (Phone, Mail, MapPin, Arrows, ZoomIn, Clock, Instagram)
├── Header.jsx        Sticky header: utility bar, logo, nav (Gallery / Services / About / Contact), Book CTA
├── Hero.jsx          Full-bleed hero with background photograph + left-scrim gradient
├── Carousel.jsx      Horizontal scroll-snap carousel; hover-magnify with cursor-tracking transform-origin
├── Services.jsx      Three-column service grid (Ceramic · Interior · PPF)
├── Stats.jsx         Four-stat metrics strip (years, cars, reviews, warranty)
├── Contact.jsx       Info column + two-column form with fake submit
├── Footer.jsx        Four-column footer (brand, services, studio, social) + legal strip
└── App.jsx           Composition + scroll-to-section nav handler
```

## Key behaviors

- **Magnify-on-hover gallery.** Hovering a carousel tile scales the image 2.2×; `transform-origin` tracks the cursor position so it works as a loupe. Leaving restores smoothly.
- **Scroll-snap carousel.** Prev/Next arrows scroll by slide width; the progress bar and `NN / NN` counter update as the user scrolls manually.
- **Sticky blurred header.** Semi-transparent `rgba(10,12,15,0.85)` with `backdrop-filter: blur(20px)`. Utility row on top (hours, location, phone), primary nav below.
- **Smooth scroll-to-section** on nav click.
- **Form** has a fake submit flow (idle → sending → sent) to show state design.

## What isn't implemented

- Real form backend (original repo used Formspree — drop the endpoint back in if you want real submissions).
- Routed pages — this is a single-page prototype.
- Lightbox/full-screen gallery view (hover-magnify is the interaction on offer).
- Mobile hamburger menu (nav hides below 960px; ship a menu drawer if mobile matters).
