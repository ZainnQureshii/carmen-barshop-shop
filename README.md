# CARMEN Hair Salon

A premium, modern landing page for a high-end barbershop in Osijek, Croatia. Built with Angular 21 and Tailwind CSS, featuring editorial design aesthetics and smooth scroll animations.

## Features

- Responsive design optimized for all devices
- Dark mode support
- Smooth scroll animations with Intersection Observer
- Online booking form with validation
- Interactive service menu with pricing
- Team showcase section
- Google Maps integration
- SEO optimized with Open Graph tags

## Tech Stack

- **Framework:** Angular 21 (Standalone Components)
- **Styling:** Tailwind CSS
- **Animations:** Custom scroll-reveal directives
- **Forms:** Angular Reactive Forms

## Getting Started

### Prerequisites

- Node.js 18+
- npm

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd carmen-hair-salon
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open [http://localhost:4200](http://localhost:4200) in your browser.

## Project Structure

```
carmen-hair-salon/
├── src/
│   ├── components/       # Angular standalone components
│   ├── directives/       # Custom directives (scroll-reveal, smooth-scroll)
│   ├── services/         # Angular services
│   └── app.component.ts  # Root component
├── index.html            # Main HTML file
├── index.tsx             # Application bootstrap
└── angular.json          # Angular configuration
```

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## License

MIT
