# RideWave — Cab & Bike Booking Prototype

Responsive React + Vite ride-booking demo focused on Andhra Pradesh and Telangana.

## Features
- Switch between bike/scooter and cab/mini/sedan/XL ride options.
- Browser geolocation using the device's GPS/location permission to fill the pickup field.
- Interactive OpenStreetMap embed that centers on the selected regional place or detected GPS coordinates.
- Regional destination list with 25 cities/towns across Telangana and Andhra Pradesh, including Hyderabad, Warangal, Karimnagar, Visakhapatnam, Vijayawada, Guntur, Tirupati, Kurnool, Rajahmundry, Nellore and more.
- Estimated trip distance when both selected places are in the regional place list, plus estimated fares.
- Pickup/destination fields, ride timing and payment-method selectors, booking summary, and sample ride history.
- Responsive layout for desktop and mobile.
- Uses browser geolocation and OpenStreetMap; no paid API token required.

## Run locally
Requirements: Node.js 18+.

\`\`\`bash
npm install
npm run dev
\`\`\`

Open the local URL printed by Vite (usually http://localhost:5173).

## Build
\`\`\`bash
npm run build
npm run preview
\`\`\`

## GitHub Pages
The included GitHub Actions workflow builds and publishes the Vite app. In repository Settings → Pages, select **GitHub Actions** as the source if needed.

## GPS and map notes
- Browser GPS requires the user to grant location permission and normally requires HTTPS (GitHub Pages provides HTTPS) or localhost.
- If permission is declined, users can choose locations manually from the Andhra Pradesh/Telangana list.
- The embedded map uses OpenStreetMap. The displayed route distance is an estimate based on coordinates, not a routing-engine result; actual road distance can differ.
- This front-end does not track the device continuously, track a real driver, dispatch vehicles, process payments, or save bookings to a backend. It is a prototype, not a production transport service.
