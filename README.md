# RideWave — Cab & Bike Booking Prototype

Responsive React + Vite ride-booking demo focused on Tamil Nadu, Andhra Pradesh and Telangana.

## Features
- Switch between bike/scooter and cab/mini/sedan/XL ride options.
- Browser geolocation using the device's GPS/location permission to fill the pickup field.
- Interactive OpenStreetMap embed that centers on the selected regional place or detected GPS coordinates.
- Searchable village directory for Andhra Pradesh and Telangana (about 29,239 village entries in the current source snapshot), organized in each suggestion as village → mandal → district → state. Tamil Nadu cities and towns remain available in the popular-location list.
- Estimated trip distance when both selected places are in the regional place list, plus estimated fares.
- Pickup/destination fields, ride timing and payment-method selectors, booking summary, and sample ride history.
- Sign-in and create-account modal with email/name fields; a demo profile is remembered in this browser using localStorage.
- Cab ride choices include Mini, Sedan, and Cab XL, alongside Bike and Scooter options.
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

## Village directory and attribution
- Andhra Pradesh and Telangana village names are loaded on demand from the public [India Village Finder dataset](https://github.com/mchittineni/india-village-finder), which documents the Government of India's Local Government Directory (LGD) as its source.
- Government of India village-directory data is used under the Government Open Data License - India (GODL-India). Please verify administrative names against the [official LGD portal](https://lgdirectory.gov.in/), because government directories can change.
- The directory is fetched from the upstream project's raw GitHub files at runtime; an internet connection is needed to search the full village list. If that source is unavailable, the app still offers its built-in popular locations.
- Village names are searchable in the pickup and destination fields. The directory includes mandal/district labels to distinguish repeated village names. It does not provide verified GPS coordinates for every village, so the route preview and fare distance for village entries may need manual adjustment; use Google Maps to confirm road directions.

## GPS and map notes
- Browser GPS requires the user to grant location permission and normally requires HTTPS (GitHub Pages provides HTTPS) or localhost.
- If permission is declined, users can choose locations manually from the Andhra Pradesh/Telangana list.
- The embedded map uses OpenStreetMap. The displayed route distance is an estimate based on coordinates, not a routing-engine result; actual road distance can differ.
- Login is a front-end demonstration only: there is no server-side authentication, password verification, password storage, or account recovery. Do not enter a real password.
- This front-end does not track the device continuously, track a real driver, dispatch vehicles, process payments, or save bookings to a backend. It is a prototype, not a production transport service.
