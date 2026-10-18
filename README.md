# RideWave — Cab & Bike Booking Prototype

A responsive React + Vite front-end prototype for a cab and bike ride-booking service.

## Features
- Toggle between bike/scooter and cab/mini/sedan/XL options.
- Pickup and destination inputs, plus quick destination suggestions.
- Adjustable trip distance and illustrative fare estimates.
- Payment method and ride timing selectors.
- Booking confirmation with sample driver and route details.
- Sample ride history, illustrated map, safety section, and responsive mobile navigation.
- No API keys or paid services required.

## Run locally
Requirements: Node.js 18+.

```bash
npm install
npm run dev
```

Open the local URL printed by Vite (usually http://localhost:5173).

## Build
```bash
npm run build
npm run preview
```

## GitHub Pages
A GitHub Actions workflow builds the Vite app and publishes it to GitHub Pages. In the repository settings, open **Pages** and set the source to **GitHub Actions** if it is not already selected.

## Important prototype limitations
This is a front-end demonstration. Booking, driver details, ride history, map, GPS, payment, and support are simulated. It does not dispatch real drivers, collect payment, or use a live map API.
