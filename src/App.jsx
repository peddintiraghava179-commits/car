import React, { useMemo, useState } from 'react';
import {
  Bike, CarFront, MapPin, Navigation, Clock3, ShieldCheck, Wallet,
  Star, ArrowRight, LocateFixed, ChevronDown, Menu, X, CheckCircle2,
  Route, CircleUserRound, CalendarClock, Headphones, Zap, Heart, Plus,
  Minus, Smartphone, MapPinned, Crosshair, Map
} from 'lucide-react';

const places = [
  { name: 'Hyderabad, Telangana', city: 'Telangana', lat: 17.385, lon: 78.4867 },
  { name: 'Secunderabad, Telangana', city: 'Telangana', lat: 17.4399, lon: 78.4983 },
  { name: 'Warangal, Telangana', city: 'Telangana', lat: 17.9689, lon: 79.5941 },
  { name: 'Karimnagar, Telangana', city: 'Telangana', lat: 18.4386, lon: 79.1288 },
  { name: 'Nizamabad, Telangana', city: 'Telangana', lat: 18.6725, lon: 78.0941 },
  { name: 'Khammam, Telangana', city: 'Telangana', lat: 17.2473, lon: 80.1514 },
  { name: 'Mahbubnagar, Telangana', city: 'Telangana', lat: 16.7488, lon: 78.0035 },
  { name: 'Nalgonda, Telangana', city: 'Telangana', lat: 17.0575, lon: 79.2684 },
  { name: 'Siddipet, Telangana', city: 'Telangana', lat: 18.1018, lon: 78.852 },
  { name: 'Adilabad, Telangana', city: 'Telangana', lat: 19.6641, lon: 78.532 },
  { name: 'Visakhapatnam, Andhra Pradesh', city: 'Andhra Pradesh', lat: 17.6868, lon: 83.2185 },
  { name: 'Vijayawada, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.5062, lon: 80.648 },
  { name: 'Guntur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.3067, lon: 80.4365 },
  { name: 'Tirupati, Andhra Pradesh', city: 'Andhra Pradesh', lat: 13.6288, lon: 79.4192 },
  { name: 'Kurnool, Andhra Pradesh', city: 'Andhra Pradesh', lat: 15.8281, lon: 78.0373 },
  { name: 'Rajahmundry, Andhra Pradesh', city: 'Andhra Pradesh', lat: 17.0005, lon: 81.804 },
  { name: 'Kakinada, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.9891, lon: 82.2475 },
  { name: 'Nellore, Andhra Pradesh', city: 'Andhra Pradesh', lat: 14.4426, lon: 79.9865 },
  { name: 'Kadapa, Andhra Pradesh', city: 'Andhra Pradesh', lat: 14.4673, lon: 78.8242 },
  { name: 'Anantapur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 14.6819, lon: 77.6006 },
  { name: 'Eluru, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.7107, lon: 81.0952 },
  { name: 'Ongole, Andhra Pradesh', city: 'Andhra Pradesh', lat: 15.5057, lon: 80.0499 },
  { name: 'Srikakulam, Andhra Pradesh', city: 'Andhra Pradesh', lat: 18.2949, lon: 83.8938 },
  { name: 'Chittoor, Andhra Pradesh', city: 'Andhra Pradesh', lat: 13.2172, lon: 79.1003 },
  { name: 'Amaravati, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.5745, lon: 80.3598 },
  { name: 'Palakollu, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.5167, lon: 81.7300 },
  { name: 'Bhimavaram, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.5449, lon: 81.5212 },
  { name: 'Amalapuram, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.5787, lon: 82.0061 },
  { name: 'Tanuku, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.7544, lon: 81.6810 },
  { name: 'Tadepalligudem, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.8147, lon: 81.5260 },
  { name: 'Narasapuram, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.4343, lon: 81.6985 },
  { name: 'Mandapeta, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.8625, lon: 81.9292 },
  { name: 'Ravulapalem, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.7610, lon: 81.8310 },
  { name: 'Kovvur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 17.0162, lon: 81.7294 },
  { name: 'Jangareddygudem, Andhra Pradesh', city: 'Andhra Pradesh', lat: 17.1223, lon: 81.2900 },
  { name: 'Malkipuram, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.5200, lon: 82.0000 },
  { name: 'Sangareddy, Telangana', city: 'Telangana', lat: 17.6248, lon: 78.0867 },
  { name: 'Medak, Telangana', city: 'Telangana', lat: 18.0453, lon: 78.2608 },
  { name: 'Mancherial, Telangana', city: 'Telangana', lat: 18.8756, lon: 79.4591 },
  { name: 'Ramagundam, Telangana', city: 'Telangana', lat: 18.755, lon: 79.474 },
  { name: 'Kothagudem, Telangana', city: 'Telangana', lat: 17.551, lon: 80.6178 },
  { name: 'Suryapet, Telangana', city: 'Telangana', lat: 17.1405, lon: 79.6236 },
  { name: 'Miryalaguda, Telangana', city: 'Telangana', lat: 16.8722, lon: 79.5625 },
  { name: 'Jagtial, Telangana', city: 'Telangana', lat: 18.7947, lon: 78.9138 },
  { name: 'Kamareddy, Telangana', city: 'Telangana', lat: 18.32, lon: 78.3418 },
  { name: 'Bodhan, Telangana', city: 'Telangana', lat: 18.6621, lon: 77.8858 },
  { name: 'Wanaparthy, Telangana', city: 'Telangana', lat: 16.3623, lon: 78.0622 },
  { name: 'Nagarkurnool, Telangana', city: 'Telangana', lat: 16.4821, lon: 78.3247 },
  { name: 'Vikarabad, Telangana', city: 'Telangana', lat: 17.3381, lon: 77.9044 },
  { name: 'Bhongir, Telangana', city: 'Telangana', lat: 17.5154, lon: 78.8856 },
  { name: 'Jangaon, Telangana', city: 'Telangana', lat: 17.726, lon: 79.1524 },
  { name: 'Mahabubabad, Telangana', city: 'Telangana', lat: 17.5973, lon: 80.002 },
  { name: 'Asifabad, Telangana', city: 'Telangana', lat: 19.3585, lon: 79.285 },
  { name: 'Nirmal, Telangana', city: 'Telangana', lat: 19.0964, lon: 78.3446 },
  { name: 'Banswada, Telangana', city: 'Telangana', lat: 18.3773, lon: 77.88 },
  { name: 'Huzurabad, Telangana', city: 'Telangana', lat: 18.2, lon: 79.4 },
  { name: 'Srikalahasti, Andhra Pradesh', city: 'Andhra Pradesh', lat: 13.7498, lon: 79.6984 },
  { name: 'Madanapalle, Andhra Pradesh', city: 'Andhra Pradesh', lat: 13.5503, lon: 78.5029 },
  { name: 'Hindupur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 13.8281, lon: 77.4914 },
  { name: 'Dharmavaram, Andhra Pradesh', city: 'Andhra Pradesh', lat: 14.4144, lon: 77.7197 },
  { name: 'Proddatur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 14.7502, lon: 78.5481 },
  { name: 'Pulivendula, Andhra Pradesh', city: 'Andhra Pradesh', lat: 14.421, lon: 78.225 },
  { name: 'Nandyal, Andhra Pradesh', city: 'Andhra Pradesh', lat: 15.4779, lon: 78.4836 },
  { name: 'Adoni, Andhra Pradesh', city: 'Andhra Pradesh', lat: 15.6322, lon: 77.2728 },
  { name: 'Yemmiganur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 15.773, lon: 77.483 },
  { name: 'Machilipatnam, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.1875, lon: 81.1389 },
  { name: 'Tenali, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.2395, lon: 80.647 },
  { name: 'Narasaraopet, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.235, lon: 80.049 },
  { name: 'Chilakaluripet, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.0892, lon: 80.1672 },
  { name: 'Bapatla, Andhra Pradesh', city: 'Andhra Pradesh', lat: 15.9044, lon: 80.4675 },
  { name: 'Repalle, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.0184, lon: 80.829 },
  { name: 'Gudivada, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.4355, lon: 80.9956 },
  { name: 'Nuzvid, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.788, lon: 80.845 },
  { name: 'Jaggayyapeta, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.8938, lon: 80.097 },
  { name: 'Tuni, Andhra Pradesh', city: 'Andhra Pradesh', lat: 17.359, lon: 82.546 },
  { name: 'Pithapuram, Andhra Pradesh', city: 'Andhra Pradesh', lat: 17.1168, lon: 82.252 },
  { name: 'Peddapuram, Andhra Pradesh', city: 'Andhra Pradesh', lat: 17.077, lon: 82.138 },
  { name: 'Anakapalle, Andhra Pradesh', city: 'Andhra Pradesh', lat: 17.6913, lon: 83.0039 },
  { name: 'Vizianagaram, Andhra Pradesh', city: 'Andhra Pradesh', lat: 18.1067, lon: 83.3956 },
  { name: 'Palasa, Andhra Pradesh', city: 'Andhra Pradesh', lat: 18.7726, lon: 84.41 },
  { name: 'Parvathipuram, Andhra Pradesh', city: 'Andhra Pradesh', lat: 18.783, lon: 83.425 },
  { name: 'Rayachoti, Andhra Pradesh', city: 'Andhra Pradesh', lat: 14.0572, lon: 78.75 },
  { name: 'Rajampet, Andhra Pradesh', city: 'Andhra Pradesh', lat: 14.195, lon: 79.16 },
  { name: 'Kandukur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 15.215, lon: 79.904 },
  { name: 'Markapur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 15.735, lon: 79.268 },
  { name: 'Ponnur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.071, lon: 80.55 },
  { name: 'Mangalagiri, Andhra Pradesh', city: 'Andhra Pradesh', lat: 16.43, lon: 80.568 },
  { name: 'Gudur, Andhra Pradesh', city: 'Andhra Pradesh', lat: 14.15, lon: 79.85 },
  { name: 'Chennai, Tamil Nadu', city: 'Tamil Nadu', lat: 13.0827, lon: 80.2707 },
  { name: 'Coimbatore, Tamil Nadu', city: 'Tamil Nadu', lat: 11.0168, lon: 76.9558 },
  { name: 'Madurai, Tamil Nadu', city: 'Tamil Nadu', lat: 9.9252, lon: 78.1198 },
  { name: 'Tiruchirappalli, Tamil Nadu', city: 'Tamil Nadu', lat: 10.7905, lon: 78.7047 },
  { name: 'Salem, Tamil Nadu', city: 'Tamil Nadu', lat: 11.6643, lon: 78.146 },
  { name: 'Tiruppur, Tamil Nadu', city: 'Tamil Nadu', lat: 11.1085, lon: 77.3411 },
  { name: 'Erode, Tamil Nadu', city: 'Tamil Nadu', lat: 11.341, lon: 77.7172 },
  { name: 'Vellore, Tamil Nadu', city: 'Tamil Nadu', lat: 12.9165, lon: 79.1325 },
  { name: 'Thoothukudi, Tamil Nadu', city: 'Tamil Nadu', lat: 8.7642, lon: 78.1348 },
  { name: 'Tirunelveli, Tamil Nadu', city: 'Tamil Nadu', lat: 8.7139, lon: 77.7567 },
  { name: 'Dindigul, Tamil Nadu', city: 'Tamil Nadu', lat: 10.3673, lon: 77.9803 },
  { name: 'Thanjavur, Tamil Nadu', city: 'Tamil Nadu', lat: 10.787, lon: 79.1378 },
  { name: 'Ranipet, Tamil Nadu', city: 'Tamil Nadu', lat: 12.9247, lon: 79.3333 },
  { name: 'Kancheepuram, Tamil Nadu', city: 'Tamil Nadu', lat: 12.8342, lon: 79.7036 },
  { name: 'Tiruvallur, Tamil Nadu', city: 'Tamil Nadu', lat: 13.1437, lon: 79.9089 },
  { name: 'Cuddalore, Tamil Nadu', city: 'Tamil Nadu', lat: 11.748, lon: 79.7714 },
  { name: 'Villupuram, Tamil Nadu', city: 'Tamil Nadu', lat: 11.9401, lon: 79.4861 },
  { name: 'Nagapattinam, Tamil Nadu', city: 'Tamil Nadu', lat: 10.7672, lon: 79.8449 },
  { name: 'Tiruvarur, Tamil Nadu', city: 'Tamil Nadu', lat: 10.7727, lon: 79.6368 },
  { name: 'Sivaganga, Tamil Nadu', city: 'Tamil Nadu', lat: 9.8433, lon: 78.4809 },
  { name: 'Ramanathapuram, Tamil Nadu', city: 'Tamil Nadu', lat: 9.3639, lon: 78.8395 },
  { name: 'Virudhunagar, Tamil Nadu', city: 'Tamil Nadu', lat: 9.568, lon: 77.9624 },
  { name: 'Tenkasi, Tamil Nadu', city: 'Tamil Nadu', lat: 8.959, lon: 77.3152 },
  { name: 'Kanniyakumari, Tamil Nadu', city: 'Tamil Nadu', lat: 8.0883, lon: 77.5385 },
  { name: 'Nagercoil, Tamil Nadu', city: 'Tamil Nadu', lat: 8.1833, lon: 77.4119 },
  { name: 'Hosur, Tamil Nadu', city: 'Tamil Nadu', lat: 12.7409, lon: 77.8253 },
  { name: 'Krishnagiri, Tamil Nadu', city: 'Tamil Nadu', lat: 12.5186, lon: 78.2137 },
  { name: 'Dharmapuri, Tamil Nadu', city: 'Tamil Nadu', lat: 12.1211, lon: 78.1582 },
  { name: 'Namakkal, Tamil Nadu', city: 'Tamil Nadu', lat: 11.2189, lon: 78.1677 },
  { name: 'Karur, Tamil Nadu', city: 'Tamil Nadu', lat: 10.9601, lon: 78.0766 },
  { name: 'Perambalur, Tamil Nadu', city: 'Tamil Nadu', lat: 11.2342, lon: 78.8807 },
  { name: 'Ariyalur, Tamil Nadu', city: 'Tamil Nadu', lat: 11.1401, lon: 79.0786 },
  { name: 'Pudukkottai, Tamil Nadu', city: 'Tamil Nadu', lat: 10.3833, lon: 78.8001 },
  { name: 'Pollachi, Tamil Nadu', city: 'Tamil Nadu', lat: 10.6583, lon: 77.0085 },
  { name: 'Ooty, Tamil Nadu', city: 'Tamil Nadu', lat: 11.4102, lon: 76.695 },
  { name: 'Coonoor, Tamil Nadu', city: 'Tamil Nadu', lat: 11.353, lon: 76.7959 },
  { name: 'Kumbakonam, Tamil Nadu', city: 'Tamil Nadu', lat: 10.9602, lon: 79.3845 },
  { name: 'Mayiladuthurai, Tamil Nadu', city: 'Tamil Nadu', lat: 11.1018, lon: 79.6528 },
  { name: 'Chengalpattu, Tamil Nadu', city: 'Tamil Nadu', lat: 12.6819, lon: 79.9888 },
  { name: 'Tiruvannamalai, Tamil Nadu', city: 'Tamil Nadu', lat: 12.2253, lon: 79.0747 },
  { name: 'Arakkonam, Tamil Nadu', city: 'Tamil Nadu', lat: 13.084, lon: 79.67 },
  { name: 'Ambur, Tamil Nadu', city: 'Tamil Nadu', lat: 12.7916, lon: 78.7164 },
  { name: 'Gudiyatham, Tamil Nadu', city: 'Tamil Nadu', lat: 12.946, lon: 78.87 },
  { name: 'Sivakasi, Tamil Nadu', city: 'Tamil Nadu', lat: 9.4533, lon: 77.797 },
  { name: 'Rajapalayam, Tamil Nadu', city: 'Tamil Nadu', lat: 9.452, lon: 77.553 },
  { name: 'Kovilpatti, Tamil Nadu', city: 'Tamil Nadu', lat: 9.1717, lon: 77.8699 },
  { name: 'Mettupalayam, Tamil Nadu', city: 'Tamil Nadu', lat: 11.2997, lon: 76.9348 },
  { name: 'Pallavaram, Tamil Nadu', city: 'Tamil Nadu', lat: 12.9675, lon: 80.1491 },
  { name: 'Tambaram, Tamil Nadu', city: 'Tamil Nadu', lat: 12.9249, lon: 80.1 },
  { name: 'Avadi, Tamil Nadu', city: 'Tamil Nadu', lat: 13.1147, lon: 80.1098 },
  { name: 'Tiruchengode, Tamil Nadu', city: 'Tamil Nadu', lat: 11.38, lon: 77.894 },
  { name: 'Udumalaipettai, Tamil Nadu', city: 'Tamil Nadu', lat: 10.5881, lon: 77.2478 },
  { name: 'Paramakudi, Tamil Nadu', city: 'Tamil Nadu', lat: 9.546, lon: 78.591 },
  { name: 'Karaikudi, Tamil Nadu', city: 'Tamil Nadu', lat: 10.0731, lon: 78.773 },
  { name: 'Theni, Tamil Nadu', city: 'Tamil Nadu', lat: 10.0104, lon: 77.4768 },
  { name: 'Bodinayakanur, Tamil Nadu', city: 'Tamil Nadu', lat: 10.0117, lon: 77.3497 },
  { name: 'Palani, Tamil Nadu', city: 'Tamil Nadu', lat: 10.4503, lon: 77.5209 },
  { name: 'Tindivanam, Tamil Nadu', city: 'Tamil Nadu', lat: 12.234, lon: 79.655 },
  { name: 'Vaniyambadi, Tamil Nadu', city: 'Tamil Nadu', lat: 12.6816, lon: 78.62 },
  { name: 'Poonamallee, Tamil Nadu', city: 'Tamil Nadu', lat: 13.048, lon: 80.094 }
];

const rideOptions = {
  bike: [
    { id: 'bike', name: 'Bike', detail: 'Quick solo trips', time: '3 min', multiplier: 1, icon: Bike, tag: 'FASTEST' },
    { id: 'scooter', name: 'Scooter', detail: 'Easy city rides', time: '5 min', multiplier: 1.15, icon: Bike },
  ],
  cab: [
    { id: 'mini', name: 'Mini', detail: 'Affordable everyday rides', time: '4 min', multiplier: 1.7, icon: CarFront, tag: 'POPULAR' },
    { id: 'sedan', name: 'Sedan', detail: 'Extra comfort for 4', time: '6 min', multiplier: 2.2, icon: CarFront },
    { id: 'xl', name: 'Cab XL', detail: 'Room for up to 6', time: '8 min', multiplier: 2.9, icon: CarFront },
  ]
};

const initialTrips = [
  { id: 1, from: 'Madhapur, Hyderabad', to: 'HITEC City, Hyderabad', type: 'Bike', price: 86, date: 'Yesterday' },
  { id: 2, from: 'Vijayawada Railway Station', to: 'Benz Circle, Vijayawada', type: 'Mini Cab', price: 214, date: '12 Oct' }
];

function money(n) { return '₹' + Math.round(n); }
function findPlace(value) {
  if (!value) return null;
  return places.find(p => p.name === value) || places.find(p => value.toLowerCase().includes(p.name.split(',')[0].toLowerCase())) || null;
}
function distanceKm(a, b) {
  if (!a || !b) return null;
  const rad = Math.PI / 180;
  const dLat = (b.lat - a.lat) * rad;
  const dLon = (b.lon - a.lon) * rad;
  const x = Math.sin(dLat / 2) ** 2 + Math.cos(a.lat * rad) * Math.cos(b.lat * rad) * Math.sin(dLon / 2) ** 2;
  return Math.max(1, Math.round(6371 * 2 * Math.atan2(Math.sqrt(x), Math.sqrt(1 - x)) * 1.25));
}
function mapBounds(point, start, end) {
  if (start && end) {
    const lonPad = Math.max(0.045, Math.abs(end.lon - start.lon) * 0.22);
    const latPad = Math.max(0.035, Math.abs(end.lat - start.lat) * 0.22);
    return {
      minLon: Math.min(start.lon, end.lon) - lonPad,
      maxLon: Math.max(start.lon, end.lon) + lonPad,
      minLat: Math.min(start.lat, end.lat) - latPad,
      maxLat: Math.max(start.lat, end.lat) + latPad
    };
  }
  const p = point || places[0];
  return { minLon: p.lon - 0.09, maxLon: p.lon + 0.09, minLat: p.lat - 0.09, maxLat: p.lat + 0.09 };
}
function mapUrl(point, start, end) {
  const bounds = mapBounds(point, start, end);
  const bbox = [bounds.minLon, bounds.minLat, bounds.maxLon, bounds.maxLat].join('%2C');
  const markers = start && end
    ? '&marker=' + start.lat + '%2C' + start.lon + '&marker=' + end.lat + '%2C' + end.lon
    : '&marker=' + (point || places[0]).lat + '%2C' + (point || places[0]).lon;
  return 'https://www.openstreetmap.org/export/embed.html?bbox=' + bbox + '&layer=mapnik' + markers;
}
function routeLine(start, end, point) {
  if (!start || !end) return null;
  const b = mapBounds(point, start, end);
  const x1 = ((start.lon - b.minLon) / (b.maxLon - b.minLon)) * 100;
  const x2 = ((end.lon - b.minLon) / (b.maxLon - b.minLon)) * 100;
  const y1 = (1 - (start.lat - b.minLat) / (b.maxLat - b.minLat)) * 100;
  const y2 = (1 - (end.lat - b.minLat) / (b.maxLat - b.minLat)) * 100;
  return { x1, y1, x2, y2 };
}

export default function App() {
  const [mode, setMode] = useState('bike');
  const [pickup, setPickup] = useState('');
  const [destination, setDestination] = useState('');
  const [ride, setRide] = useState('bike');
  const [payment, setPayment] = useState('UPI');
  const [when, setWhen] = useState('now');
  const [distance, setDistance] = useState(6);
  const [booking, setBooking] = useState(null);
  const [showTrips, setShowTrips] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [favorite, setFavorite] = useState(false);
  const [loginOpen, setLoginOpen] = useState(false);
  const [loginMode, setLoginMode] = useState('login');
  const [authUser, setAuthUser] = useState(() => { try { return JSON.parse(localStorage.getItem('ridewave-demo-user') || 'null'); } catch { return null; } });
  const [loginName, setLoginName] = useState('');
  const [loginEmail, setLoginEmail] = useState('');
  const [loginPassword, setLoginPassword] = useState('');
  const [toast, setToast] = useState('');
  const [gps, setGps] = useState(null);
  const [gpsStatus, setGpsStatus] = useState('Use GPS to detect your current position');
  const [gpsLoading, setGpsLoading] = useState(false);
  const options = rideOptions[mode];
  const selectedRide = options.find(o => o.id === ride) || options[0];
  const pickupPlace = findPlace(pickup);
  const destinationPlace = findPlace(destination);
  const routeStart = pickupPlace || (gps && pickup.toLowerCase().includes('current location') ? gps : null);
  const routeEnd = destinationPlace;
  const routeMidpoint = routeStart && routeEnd
    ? { lat: (routeStart.lat + routeEnd.lat) / 2, lon: (routeStart.lon + routeEnd.lon) / 2, name: 'Route overview' }
    : null;
  const mapPoint = routeMidpoint || (gps && pickup.toLowerCase().includes('current location') ? gps : (destinationPlace || pickupPlace || places[0]));
  const routeCoordinates = routeLine(routeStart, routeEnd, mapPoint);
  const calculatedDistance = distanceKm(pickupPlace, destinationPlace);
  const effectiveDistance = calculatedDistance || distance;
  const fare = useMemo(() => {
    const base = mode === 'bike' ? 25 : 55;
    return base + effectiveDistance * (mode === 'bike' ? 9 : 15) * selectedRide.multiplier;
  }, [mode, effectiveDistance, selectedRide]);
  const eta = Math.max(8, Math.round(effectiveDistance * 4 + (mode === 'cab' ? 5 : 0)));

  function notify(message) {
    setToast(message);
    window.setTimeout(() => setToast(''), 3200);
  }
  function switchMode(next) {
    setMode(next);
    setRide(rideOptions[next][0].id);
    setBooking(null);
  }
  function useCurrentLocation() {
    if (!navigator.geolocation) {
      setGpsStatus('GPS is not supported by this browser.');
      notify('Your browser does not support location. Choose a place from the list.');
      return;
    }
    setGpsLoading(true);
    setGpsStatus('Requesting permission to access your location…');
    navigator.geolocation.getCurrentPosition(
      position => {
        const point = { lat: position.coords.latitude, lon: position.coords.longitude };
        setGps(point);
        setPickup('My current location (' + point.lat.toFixed(5) + ', ' + point.lon.toFixed(5) + ')');
        setGpsStatus('Location detected · accuracy about ' + Math.round(position.coords.accuracy) + ' m');
        setGpsLoading(false);
        notify('Current GPS location added as pickup.');
      },
      error => {
        const message = error.code === 1 ? 'Location permission was denied. Allow location access in your browser.' : error.code === 2 ? 'Your location could not be determined. Try again or choose a city.' : 'Location request timed out. Try again.';
        setGpsStatus(message);
        setGpsLoading(false);
        notify(message);
      },
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 10000 }
    );
  }
  function selectPickup(value) {
    setPickup(value);
    const p = findPlace(value);
    if (p) setGps(null);
    const d = findPlace(destination);
    const km = distanceKm(p, d);
    if (km) setDistance(Math.min(500, km));
  }
  function selectDestination(value) {
    setDestination(value);
    const km = distanceKm(findPlace(pickup), findPlace(value));
    if (km) setDistance(Math.min(500, km));
  }
  function bookRide(e) {
    e.preventDefault();
    if (!pickup.trim() || !destination.trim()) {
      notify('Choose a pickup and destination to continue.');
      return;
    }
    const trip = {
      id: Date.now(), from: pickup.trim(), to: destination.trim(),
      type: selectedRide.name, price: Math.round(fare), date: when === 'now' ? 'Just now' : when,
      mode, status: 'Prototype booking', distance: effectiveDistance
    };
    setBooking(trip);
    setShowTrips(false);
  }
  function handleLogin(e) {
    e.preventDefault();
    if (loginPassword.length < 6) { notify('Use a password with at least 6 characters.'); return; }
    const user = { name: (loginName.trim() || loginEmail.split('@')[0] || 'Rider'), email: loginEmail.trim() };
    setAuthUser(user);
    try { localStorage.setItem('ridewave-demo-user', JSON.stringify(user)); } catch {}
    setLoginOpen(false);
    setLoginPassword('');
    notify(loginMode === 'signup' ? 'Demo account created on this device.' : 'Signed in to this demo on this device.');
  }
  function signOut() {
    setAuthUser(null);
    try { localStorage.removeItem('ridewave-demo-user'); } catch {}
    notify('Signed out of this device.');
  }
  function cancelBooking() {
    setBooking(null);
    notify('Demo booking cancelled.');
  }

  return (
    <div className="app-shell">
      <header className="topbar">
        <a className="brand" href="#" onClick={() => { setBooking(null); setShowTrips(false); }}>
          <span className="brand-mark"><Navigation size={21} fill="currentColor" /></span>
          <span>ride<span className="brand-light">wave</span><small>MOVE YOUR WAY</small></span>
        </a>
        <nav className={menuOpen ? 'nav-links open' : 'nav-links'}>
          <button className={!showTrips ? 'nav-link active' : 'nav-link'} onClick={() => { setShowTrips(false); setBooking(null); setMenuOpen(false); }}>Book a ride</button>
          <button className={showTrips ? 'nav-link active' : 'nav-link'} onClick={() => { setShowTrips(true); setBooking(null); setMenuOpen(false); }}>My rides</button>
          <a className="nav-link" href="#safety" onClick={() => setMenuOpen(false)}>Safety</a>
        </nav>
        {authUser ? <button className="profile-button" onClick={signOut}><CircleUserRound size={19} /> <span>{authUser.name} · Sign out</span></button> : <button className="profile-button" onClick={() => { setLoginMode('login'); setLoginOpen(true); }}><CircleUserRound size={19} /> <span>Sign in</span></button>}
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot"></span> TAMIL NADU · ANDHRA PRADESH · TELANGANA</div>
            <h1>Every journey,<br /><em>your way.</em></h1>
            <p className="hero-sub">Book a bike or cab, use your device GPS, and choose destinations across Andhra Pradesh and Telangana.</p>
            <div className="hero-points"><span><ShieldCheck size={16}/> Safer rides</span><span><Wallet size={16}/> Clear estimates</span><span><Zap size={16}/> Quick pickup</span></div>
          </div>
          <div className="hero-art" aria-label="Cab and bike ride illustration">
            <div className="sun-orb"></div><div className="art-road"></div>
            <div className="art-building b1"></div><div className="art-building b2"></div><div className="art-building b3"></div>
            <div className="art-label label-top"><span className="live-dot"></span> RIDES AROUND YOU</div>
            <div className="art-vehicle cab-art"><CarFront size={88} strokeWidth={1.5}/><span>RIDEWAVE CAB</span></div>
            <div className="art-vehicle bike-art"><Bike size={98} strokeWidth={1.6}/></div>
            <div className="floating-price"><span>ESTIMATED FARE</span><strong>from ₹49</strong><small>NO SURPRISES</small></div>
            <div className="art-spark spark-one">✦</div><div className="art-spark spark-two">✳</div>
          </div>
        </section>

        <section className="booking-layout" id="booking">
          <div className="booking-card">
            {booking ? (
              <div className="confirmation">
                <div className="success-icon"><CheckCircle2 size={34}/></div>
                <p className="eyebrow">BOOKING SUMMARY · DEMO</p>
                <h2>Your trip is ready to review</h2>
                <p className="muted">This is a prototype confirmation. No real driver has been contacted.</p>
                <div className="driver-card">
                  <div className="driver-avatar"><CircleUserRound size={30}/></div>
                  <div className="driver-info"><strong>Demo driver</strong><span><Star size={13} fill="currentColor"/> Sample profile · not a real driver</span><small>Vehicle and driver details are illustrative</small></div>
                  <div className="driver-eta"><strong>{eta} min</strong><span>estimated</span></div>
                </div>
                <div className="route-summary"><div className="route-dots"><i></i><b></b></div><div><span>Pickup</span><strong>{booking.from}</strong><span className="route-dest-label">Destination · {booking.distance} km estimated</span><strong>{booking.to}</strong></div></div>
                <div className="fare-row"><span>{booking.type} · Pay by {payment}</span><strong>{money(booking.price)}</strong></div>
                <button className="primary-button" onClick={() => notify('No driver is connected in this prototype.')}><Headphones size={18}/> Contact driver (demo)</button>
                <button className="text-button" onClick={cancelBooking}>Cancel demo booking</button>
              </div>
            ) : showTrips ? (
              <div className="trips-panel">
                <div className="card-heading"><div><p className="eyebrow">YOUR ACTIVITY</p><h2>My rides</h2></div><span className="history-icon"><Route size={20}/></span></div>
                {[...initialTrips].map(t => <div className="trip-item" key={t.id}><div className="trip-icon">{t.type.toLowerCase().includes('bike') ? <Bike/> : <CarFront/>}</div><div className="trip-route"><strong>{t.from} <ArrowRight size={13}/> {t.to}</strong><span>{t.date} · {t.type}</span></div><strong className="trip-price">{money(t.price)}</strong></div>)}
                <div className="demo-note">Sample trip history for preview only.</div>
                <button className="primary-button" onClick={() => setShowTrips(false)}>Book a new ride <ArrowRight size={17}/></button>
              </div>
            ) : (
              <form onSubmit={bookRide}>
                <div className="card-heading"><div><p className="eyebrow">LET'S GET YOU THERE</p><h2>Book your ride</h2></div><span className="heading-icon"><MapPinned size={21}/></span></div>
                <div className="mode-switch" role="tablist" aria-label="Ride type">
                  <button type="button" role="tab" aria-selected={mode === 'bike'} className={mode === 'bike' ? 'mode-tab selected' : 'mode-tab'} onClick={() => switchMode('bike')}><Bike size={22}/><span>Bike</span><small>Beat the traffic</small></button>
                  <button type="button" role="tab" aria-selected={mode === 'cab'} className={mode === 'cab' ? 'mode-tab selected' : 'mode-tab'} onClick={() => switchMode('cab')}><CarFront size={23}/><span>Cab</span><small>Ride in comfort</small></button>
                </div>
                <div className="locations">
                  <div className="location-rail"><span className="pickup-dot"></span><span className="rail-line"></span><span className="drop-dot"></span></div>
                  <label className="location-field"><span>Pickup location</span><input list="regional-places" value={pickup} onChange={e => selectPickup(e.target.value)} placeholder="Enter a city or use GPS" autoComplete="off"/><button type="button" aria-label="Use current location" className="locate-button" onClick={useCurrentLocation} disabled={gpsLoading}>{gpsLoading ? <span className="gps-spinner">…</span> : <LocateFixed size={17}/>}</button></label>
                  <label className="location-field"><span>Where to?</span><input list="regional-places" value={destination} onChange={e => selectDestination(e.target.value)} placeholder="Choose destination city or area" autoComplete="off"/></label>
                  <datalist id="regional-places">{places.map(p => <option key={p.name} value={p.name}/>)}</datalist>
                </div>
                <div className="gps-status" role="status"><Crosshair size={14}/><span>{gpsStatus}</span></div>
                <div className="regional-picker">
                  <div className="regional-title"><Map size={15}/> Popular locations <span>TN · AP · TS</span></div>
                  <div className="region-chips">{places.filter(p => ['Chennai, Tamil Nadu', 'Coimbatore, Tamil Nadu', 'Hyderabad, Telangana', 'Vijayawada, Andhra Pradesh', 'Visakhapatnam, Andhra Pradesh', 'Palakollu, Andhra Pradesh'].includes(p.name)).map(p => <button type="button" key={p.name} onClick={() => selectDestination(p.name)}>{p.name.split(',')[0]}</button>)}</div>
                  <details className="all-places"><summary>Browse all {places.length} cities and towns</summary><div className="place-list">{['Telangana', 'Andhra Pradesh'].map(region => <div key={region}><strong>{region}</strong>{places.filter(p => p.city === region).map(p => <button type="button" key={p.name} onClick={() => selectDestination(p.name)}>{p.name.split(',')[0]} <span>Use as destination</span></button>)}</div>)}</div></details>
                </div>
                {calculatedDistance && <div className="distance-note"><Route size={14}/> Approx. road-distance estimate: <strong>{calculatedDistance} km</strong> <span>(straight-line distance adjusted; actual route may vary)</span></div>}
                <div className="section-label"><span>Choose your ride</span><span className="muted">Estimated pickup</span></div>
                <div className="ride-options">
                  {options.map(opt => {
                    const Icon = opt.icon;
                    const optFare = (mode === 'bike' ? 25 : 55) + effectiveDistance * (mode === 'bike' ? 9 : 15) * opt.multiplier;
                    return <button type="button" key={opt.id} className={ride === opt.id ? 'ride-option chosen' : 'ride-option'} onClick={() => setRide(opt.id)}>
                      <span className="ride-option-icon"><Icon size={25}/></span><span className="ride-option-text"><strong>{opt.name}{opt.tag && <i>{opt.tag}</i>}</strong><small>{opt.detail}</small></span><span className="ride-option-price"><strong>{money(optFare)}</strong><small><Clock3 size={12}/> {opt.time}</small></span>
                    </button>;
                  })}
                </div>
                <div className="distance-control"><span><Route size={15}/> Trip distance</span><div className="distance-stepper"><button type="button" aria-label="Decrease distance" onClick={() => setDistance(Math.max(1, distance - 1))}><Minus size={14}/></button><strong>{effectiveDistance} km{calculatedDistance ? ' approx.' : ''}</strong><button type="button" aria-label="Increase distance" onClick={() => setDistance(Math.min(500, distance + 1))}><Plus size={14}/></button></div></div>
                <div className="form-bottom">
                  <label className="payment-select"><Wallet size={17}/><select value={payment} onChange={e => setPayment(e.target.value)} aria-label="Payment method"><option>UPI</option><option>Cash</option><option>Card</option></select><ChevronDown size={14}/></label>
                  <label className="schedule-select"><CalendarClock size={17}/><select value={when} onChange={e => setWhen(e.target.value)} aria-label="Pickup time"><option value="now">Ride now</option><option value="Scheduled 9:00 AM">Schedule 9:00 AM</option><option value="Scheduled 6:00 PM">Schedule 6:00 PM</option></select><ChevronDown size={14}/></label>
                </div>
                <button className="primary-button" type="submit"><span>Confirm {selectedRide.name}</span><span>{money(fare)} <ArrowRight size={18}/></span></button>
                <p className="fine-print"><ShieldCheck size={13}/> Fare and distance are estimates. Live driver dispatch is not connected.</p>
              </form>
            )}
          </div>
          <div className="map-panel">
            <div className="map-topline"><div><span className="live-dot"></span> REGIONAL MAP <small>· OPENSTREETMAP</small></div><button onClick={useCurrentLocation}><LocateFixed size={15}/> Locate me</button></div>
            <div className="live-map-wrap"><iframe title="Interactive map showing the selected ride route" src={mapUrl(mapPoint, routeStart, routeEnd)} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />{routeCoordinates && <svg className="route-overlay" viewBox="0 0 100 100" preserveAspectRatio="none" aria-label={'Estimated route from ' + pickup + ' to ' + destination}><line x1={routeCoordinates.x1} y1={routeCoordinates.y1} x2={routeCoordinates.x2} y2={routeCoordinates.y2} className="route-blue-line"/><circle cx={routeCoordinates.x1} cy={routeCoordinates.y1} r="1.7" className="route-start-dot"/><circle cx={routeCoordinates.x2} cy={routeCoordinates.y2} r="1.7" className="route-end-dot"/></svg>}{routeCoordinates && <div className="route-map-pill"><Route size={13}/> {effectiveDistance} km · {money(fare)} est.</div>}<a className="open-map-link" href={routeStart && routeEnd ? 'https://www.openstreetmap.org/directions?engine=fossgis_osrm_car&route=' + routeStart.lat + '%2C' + routeStart.lon + '%3B' + routeEnd.lat + '%2C' + routeEnd.lon : 'https://www.openstreetmap.org/?mlat=' + mapPoint.lat + '&mlon=' + mapPoint.lon + '#map=13/' + mapPoint.lat + '/' + mapPoint.lon} target="_blank" rel="noreferrer">Open directions <ArrowRight size={13}/></a></div>
            <div className="map-location-caption"><div className="nearby-icon"><MapPin size={20}/></div><div><strong>{routeStart && routeEnd ? pickup + ' → ' + destination : (gps && pickup.toLowerCase().includes('current location') ? 'Your detected location' : mapPoint.name || 'Selected location')}</strong><span>{routeCoordinates ? 'Blue line marks an approximate straight-line route; use directions for road routing' : gps && pickup.toLowerCase().includes('current location') ? 'Browser GPS coordinates' : 'Choose pickup and destination to preview a route'}</span></div><div className="nearby-count"><strong>{routeCoordinates ? effectiveDistance + ' km' : gps ? 'GPS' : 'MAP'}</strong><span>{routeCoordinates ? money(fare) + ' est. fare' : gps ? 'detected' : 'interactive'}</span></div></div>
            <div className="map-benefits"><div><span className="benefit-icon"><Crosshair size={18}/></span><strong>Device location</strong><small>Permission required</small></div><div><span className="benefit-icon"><MapPin size={18}/></span><strong>Regional places</strong><small>Tamil Nadu, AP and Telangana</small></div><div><span className="benefit-icon"><Route size={18}/></span><strong>Route estimate</strong><small>Not turn-by-turn</small></div></div>
          </div>
        </section>

        <section className="how-section">
          <div className="section-intro"><p className="eyebrow">SIMPLE AS 1, 2, 3</p><h2>Good rides. <em>No guesswork.</em></h2><p>Choose destinations across Tamil Nadu, Andhra Pradesh and Telangana, check the map and compare estimated fares.</p></div>
          <div className="steps-grid"><div className="step-card"><span className="step-number">01</span><div className="step-icon"><MapPin size={23}/></div><h3>Set your route</h3><p>Enter a pickup and destination or allow GPS to detect your current location.</p></div><div className="step-card"><span className="step-number">02</span><div className="step-icon"><Bike size={24}/></div><h3>Pick your ride</h3><p>Choose a bike or a cab and compare estimated prices before booking.</p></div><div className="step-card"><span className="step-number">03</span><div className="step-icon"><Heart size={23}/></div><h3>Ride with ease</h3><p>Review the route and booking summary. Real driver dispatch is not yet connected.</p></div></div>
        </section>

        <section className="safety-banner" id="safety"><div className="safety-symbol"><ShieldCheck size={30}/></div><div><p className="eyebrow">YOUR SAFETY MATTERS</p><h2>Location access stays in your control.</h2><p>Your browser asks before sharing GPS. You can use the city list instead of location access.</p></div><button onClick={() => notify('GPS access is controlled by your browser settings.')} className="safety-button">Location privacy <ArrowRight size={16}/></button></section>
        <section className="app-banner"><div className="app-banner-icon"><Smartphone size={30}/></div><div><p className="eyebrow">YOUR NEXT RIDE IS CLOSER</p><h2>Ready when you are.</h2><p>Prototype only — no real driver dispatch, live driver tracking, or payments.</p></div><button onClick={() => document.getElementById('booking').scrollIntoView({behavior:'smooth'})}>Book a ride <ArrowRight size={17}/></button></section>
      </main>

      <footer><a className="brand footer-brand" href="#"><span className="brand-mark"><Navigation size={18} fill="currentColor"/></span><span>ride<span className="brand-light">wave</span></span></a><span>© 2026 RideWave Prototype</span><div><a href="#safety">Safety</a><button onClick={() => notify('Help center is a demo feature.')}>Help</button><button onClick={() => setFavorite(!favorite)}><Heart size={14} fill={favorite ? 'currentColor' : 'none'}/> {favorite ? 'Saved' : 'Save app'}</button></div></footer>

      {loginOpen && <div className="login-overlay" role="presentation" onClick={e => { if (e.target === e.currentTarget) setLoginOpen(false); }}>
        <section className="login-modal" role="dialog" aria-modal="true" aria-labelledby="login-title">
          <button type="button" className="login-close" aria-label="Close sign in" onClick={() => setLoginOpen(false)}><X size={20}/></button>
          <div className="login-logo"><Navigation size={22} fill="currentColor"/></div>
          <p className="eyebrow">WELCOME TO RIDEWAVE</p>
          <h2 id="login-title">{loginMode === 'signup' ? 'Create your account' : 'Good to have you back.'}</h2>
          <p className="login-subtitle">Sign in to personalize your demo ride experience on this device.</p>
          <form onSubmit={handleLogin} className="login-form">
            {loginMode === 'signup' && <label>Full name<input value={loginName} onChange={e => setLoginName(e.target.value)} placeholder="Enter your name" required autoComplete="name"/></label>}
            <label>Email address<input type="email" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="you@example.com" required autoComplete="email"/></label>
            <label>Password<input type="password" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="At least 6 characters" required minLength={6} autoComplete={loginMode === 'signup' ? 'new-password' : 'current-password'}/></label>
            <button type="submit" className="primary-button"><span>{loginMode === 'signup' ? 'Create demo account' : 'Sign in'}</span><ArrowRight size={18}/></button>
          </form>
          <p className="login-switch">{loginMode === 'signup' ? 'Already have an account?' : 'New to RideWave?'} <button type="button" onClick={() => setLoginMode(loginMode === 'signup' ? 'login' : 'signup')}>{loginMode === 'signup' ? 'Sign in' : 'Create account'}</button></p>
          <p className="login-disclaimer"><ShieldCheck size={14}/> Prototype login only. No server authentication, password storage, or account recovery is connected. Do not use a real password.</p>
        </section>
      </div>}
      {toast && <div className="toast" role="status"><CheckCircle2 size={17}/>{toast}</div>}
      <div className="prototype-disclaimer">DEMO PROTOTYPE · GPS REQUIRES PERMISSION · NOT A REAL TRANSPORT SERVICE</div>
    </div>
  );
}
