# Philly Auto Repair — Website 

Philadelphia's Trusted Auto Experts. Built with Next.js App Router, Tailwind CSS v4, and `motion` for animations.

---

## For the Shop Owner: How to Update Your Site

Everything you'll ever need to update lives in **`/lib/data/`**. You never need to touch a component to update content.

### Update Your Services

Open `lib/data/services.ts` and edit, add, or remove services:

```ts
{
  id: 'oil-change',          // unique ID (no spaces)
  name: 'Synthetic Oil Change',
  category: 'maintenance',   // maintenance | repairs | performance | diagnostics
  description: 'Full synthetic oil change...',
  price: 69.99,              // number, no dollar sign
  iconName: 'FaOilCan',      // must exist in lib/utils.ts iconMap
  featured: true,            // shows on homepage (max 3)
}
```

### Update Your Hours

Open `lib/data/shopInfo.ts`:

```ts
hours: {
  weekdays: '8am – 6pm',
  saturday: '9am – 3pm',
  sunday: 'Closed',          // change to hours if you open Sundays
}
```

### Update Your Phone / Address / Email

Same file — `lib/data/shopInfo.ts`.

### Add Reviews

Open `lib/data/reviews.ts` and add a new object:

```ts
{
  id: 'r7',
  name: 'Customer Name',
  initials: 'CN',
  stars: 5,
  quote: 'Amazing service...',
  serviceTag: 'Oil Change',
  timeAgo: '1 week ago',
  verified: true,
}
```

### Add Gallery Items

Open `lib/data/gallery.ts`. Each item shows as a before/after card on the Gallery page.

### Update Team Members

Open `lib/data/team.ts` to change names, roles, specialties, or certifications.

### Update the Timeline

Open `lib/data/timeline.ts` to edit the shop history section on the About page.

---

## Tech Stack

| Tool | Purpose |
|---|---|
| Next.js 16 (App Router) | Framework |
| Tailwind CSS v4 | Styling (CSS-first config via @theme) |
| `motion` (motion.dev) | Animations |
| `react-icons` | Icon library |
| React Hook Form + Zod | Contact form validation |
| `clsx` + `tailwind-merge` | Class utilities |

---

## Project Structure

```
app/              → Pages (layout, home, services, gallery, about, booking, contact)
components/
  layout/         → Navbar, Footer
  home/           → Hero, TrustBar, ServicesGrid, WhyUs, TestimonialsSlider, BookingCTA
  services/       → ServiceCard, ServiceFilter
  gallery/        → BeforeAfterCard, ReviewCard
  booking/        → StepVehicle, StepServices, StepSchedule, BookingSummary
  ui/             → Button, Badge, Card, SectionHeader, AnimateIn (reusable primitives)
lib/
  types.ts        → TypeScript interfaces for all data shapes
  utils.ts        → cn(), formatPrice(), iconMap
  data/           → All site content (services, reviews, team, etc.)
```

## Colors (Eagles + Auto Shop)

| Token | Value | Usage |
|---|---|---|
| `eagles-green` | `#004C54` | Primary brand color |
| `eagles-gold` | `#FFB612` | CTAs, highlights |
| `eagles-silver` | `#A5ACAF` | Secondary text |
| `dark-bg` | `#0A0A0A` | Dark sections |
| `light-bg` | `#F4F4F4` | Light sections |

## Adding a New Icon

1. Find the icon at [react-icons.github.io](https://react-icons.github.io/react-icons/)
2. Import it in `lib/utils.ts`
3. Add it to the `iconMap` object
4. Use its name string as `iconName` in any data file

---

## Development

```bash
npm run dev     # Start development server
npm run build   # Production build
npm run start   # Start production server
```

Deploy to Vercel by connecting the GitHub repo — zero config required.
# Philly-Auto
