import React, { useMemo, useState } from 'react';
import {
  Bike, CarFront, MapPin, Navigation, Clock3, ShieldCheck, Wallet,
  Star, ArrowRight, LocateFixed, ChevronDown, Menu, X, CheckCircle2,
  Route, CircleUserRound, CalendarClock, Headphones, Zap, Heart, Plus,
  Minus, Smartphone, MapPinned
} from 'lucide-react';

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
  { id: 1, from: 'Madhapur', to: 'HITEC City', type: 'Bike', price: 86, date: 'Yesterday' },
  { id: 2, from: 'Home', to: 'Central Mall', type: 'Mini Cab', price: 214, date: '12 Oct' },
];

function money(n) { return '₹' + Math.round(n); }

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
  const [toast, setToast] = useState('');
  const options = rideOptions[mode];
  const selectedRide = options.find(o => o.id === ride) || options[0];
  const fare = useMemo(() => {
    const base = mode === 'bike' ? 25 : 55;
    return base + distance * (mode === 'bike' ? 9 : 15) * selectedRide.multiplier;
  }, [mode, distance, selectedRide]);
  const eta = Math.max(8, Math.round(distance * 4 + (mode === 'cab' ? 5 : 0)));

  function switchMode(next) {
    setMode(next);
    setRide(rideOptions[next][0].id);
    setBooking(null);
  }
  function notify(message) {
    setToast(message);
    window.setTimeout(() => setToast(''), 2800);
  }
  function bookRide(e) {
    e.preventDefault();
    if (!pickup.trim() || !destination.trim()) {
      notify('Enter both pickup and destination to continue.');
      return;
    }
    const trip = {
      id: Date.now(), from: pickup.trim(), to: destination.trim(),
      type: selectedRide.name, price: Math.round(fare), date: when === 'now' ? 'Just now' : when,
      mode, status: 'Driver assigned'
    };
    setBooking(trip);
    setShowTrips(false);
  }
  function cancelBooking() {
    setBooking(null);
    notify('Ride cancelled in this demo.');
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
        <button className="profile-button" onClick={() => notify('Profile and sign-in are demo features.')}><CircleUserRound size={19} /> <span>Sign in</span></button>
        <button className="mobile-menu" aria-label="Toggle menu" onClick={() => setMenuOpen(!menuOpen)}>{menuOpen ? <X /> : <Menu />}</button>
      </header>

      <main>
        <section className="hero">
          <div className="hero-copy">
            <div className="eyebrow"><span className="live-dot"></span> YOUR CITY. YOUR RIDE.</div>
            <h1>Every journey,<br /><em>your way.</em></h1>
            <p className="hero-sub">Zip through traffic on a bike or settle in for a comfortable cab. Your next ride is just a few taps away.</p>
            <div className="hero-points"><span><ShieldCheck size={16}/> Safer rides</span><span><Wallet size={16}/> Clear fares</span><span><Zap size={16}/> Quick pickup</span></div>
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
                <p className="eyebrow">BOOKING CONFIRMED · DEMO</p>
                <h2>Your ride is on its way!</h2>
                <p className="muted">This is a prototype confirmation. No real driver has been contacted.</p>
                <div className="driver-card">
                  <div className="driver-avatar"><CircleUserRound size={30}/></div>
                  <div className="driver-info"><strong>Ravi Kumar</strong><span><Star size={13} fill="currentColor"/> 4.9 · Demo driver</span><small>TS 09 AB 4821 · White {booking.mode === 'bike' ? 'scooter' : 'cab'}</small></div>
                  <div className="driver-eta"><strong>4 min</strong><span>away</span></div>
                </div>
                <div className="route-summary"><div className="route-dots"><i></i><b></b></div><div><span>Pickup</span><strong>{booking.from}</strong><span className="route-dest-label">Destination</span><strong>{booking.to}</strong></div></div>
                <div className="fare-row"><span>{booking.type} · Pay by {payment}</span><strong>{money(booking.price)}</strong></div>
                <button className="primary-button" onClick={() => notify('Calling is not available in this demo.')}><Headphones size={18}/> Contact driver (demo)</button>
                <button className="text-button" onClick={cancelBooking}>Cancel ride</button>
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
                  <label className="location-field"><span>Pickup location</span><input value={pickup} onChange={e => setPickup(e.target.value)} placeholder="Enter pickup point" autoComplete="street-address"/><button type="button" aria-label="Use current location" className="locate-button" onClick={() => { setPickup('My current location'); notify('Demo location selected.'); }}><LocateFixed size={17}/></button></label>
                  <label className="location-field"><span>Where to?</span><input value={destination} onChange={e => setDestination(e.target.value)} placeholder="Enter your destination" autoComplete="off"/></label>
                </div>
                <div className="quick-destinations"><span>Popular:</span>{['Airport', 'HITEC City', 'Railway station'].map(place => <button type="button" key={place} onClick={() => setDestination(place)}>{place}</button>)}</div>
                <div className="section-label"><span>Choose your ride</span><span className="muted">Estimated pickup</span></div>
                <div className="ride-options">
                  {options.map(opt => {
                    const Icon = opt.icon;
                    const optFare =  (mode === 'bike' ? 25 : 55) + distance * (mode === 'bike' ? 9 : 15) * opt.multiplier;
                    return <button type="button" key={opt.id} className={ride === opt.id ? 'ride-option chosen' : 'ride-option'} onClick={() => setRide(opt.id)}>
                      <span className="ride-option-icon"><Icon size={25}/></span><span className="ride-option-text"><strong>{opt.name}{opt.tag && <i>{opt.tag}</i>}</strong><small>{opt.detail}</small></span><span className="ride-option-price"><strong>{money(optFare)}</strong><small><Clock3 size={12}/> {opt.time}</small></span>
                    </button>;
                  })}
                </div>
                <div className="distance-control"><span><Route size={15}/> Trip distance</span><div className="distance-stepper"><button type="button" aria-label="Decrease distance" onClick={() => setDistance(Math.max(1, distance - 1))}><Minus size={14}/></button><strong>{distance} km</strong><button type="button" aria-label="Increase distance" onClick={() => setDistance(Math.min(40, distance + 1))}><Plus size={14}/></button></div></div>
                <div className="form-bottom">
                  <label className="payment-select"><Wallet size={17}/><select value={payment} onChange={e => setPayment(e.target.value)} aria-label="Payment method"><option>UPI</option><option>Cash</option><option>Card</option></select><ChevronDown size={14}/></label>
                  <label className="schedule-select"><CalendarClock size={17}/><select value={when} onChange={e => setWhen(e.target.value)} aria-label="Pickup time"><option value="now">Ride now</option><option value="Scheduled 9:00 AM">Schedule 9:00 AM</option><option value="Scheduled 6:00 PM">Schedule 6:00 PM</option></select><ChevronDown size={14}/></label>
                </div>
                <button className="primary-button" type="submit"><span>Confirm {selectedRide.name}</span><span>{money(fare)} <ArrowRight size={18}/></span></button>
                <p className="fine-print"><ShieldCheck size={13}/> Fare is an estimate for this demo, not a live quote.</p>
              </form>
            )}
          </div>
          <div className="map-panel">
            <div className="map-topline"><div><span className="live-dot"></span> LIVE CITY VIEW <small>· DEMO MAP</small></div><button onClick={() => notify('Live GPS map will be added in a production version.')}><MapPin size={15}/> Map details</button></div>
            <div className="illustrated-map">
              <div className="map-grid"></div><div className="park park-a"><span>GREEN PARK</span></div><div className="park park-b"></div>
              <div className="waterway"></div><div className="road road-h"></div><div className="road road-v"></div><div className="road road-diag"></div>
              <div className="map-street street-a">JUBILEE HILLS RD</div><div className="map-street street-b">MADHAPUR MAIN RD</div><div className="map-street street-c">TECH PARK ROAD</div>
              <div className="map-pin pin-a"><span><MapPin size={18} fill="currentColor"/></span><b>Pickup zone</b></div><div className="map-pin pin-b"><span><Navigation size={17} fill="currentColor"/></span><b>Destination</b></div>
              <div className="map-route"></div><div className="map-car"><CarFront size={22}/></div><div className="map-bike"><Bike size={20}/></div>
              <div className="map-zoom"><button onClick={() => setDistance(Math.min(40, distance + 1))} aria-label="Zoom in"><Plus size={16}/></button><button onClick={() => setDistance(Math.max(1, distance - 1))} aria-label="Zoom out"><Minus size={16}/></button></div>
              <div className="map-scale">Hyderabad, India <span>Map illustration · not to scale</span></div>
            </div>
            <div className="map-footer"><div className="nearby-icon"><CarFront size={20}/></div><div><strong>Rides nearby</strong><span>Drivers shown are illustrative</span></div><div className="nearby-count"><strong>12</strong><span>available</span></div></div>
            <div className="map-benefits"><div><span className="benefit-icon"><Clock3 size={18}/></span><strong>Quick pickup</strong><small>Estimated arrival times</small></div><div><span className="benefit-icon"><ShieldCheck size={18}/></span><strong>Ride with care</strong><small>Safety-first experience</small></div><div><span className="benefit-icon"><Wallet size={18}/></span><strong>Know the fare</strong><small>Estimate before booking</small></div></div>
          </div>
        </section>

        <section className="how-section">
          <div className="section-intro"><p className="eyebrow">SIMPLE AS 1, 2, 3</p><h2>Good rides. <em>No guesswork.</em></h2><p>From your first tap to your final stop, we keep it simple.</p></div>
          <div className="steps-grid"><div className="step-card"><span className="step-number">01</span><div className="step-icon"><MapPin size={23}/></div><h3>Set your route</h3><p>Choose where you're going and see your estimated fare up front.</p></div><div className="step-card"><span className="step-number">02</span><div className="step-icon"><Bike size={24}/></div><h3>Pick your ride</h3><p>Go light with a bike or choose a cab for more room and comfort.</p></div><div className="step-card"><span className="step-number">03</span><div className="step-icon"><Heart size={23}/></div><h3>Ride with ease</h3><p>Review your driver details and enjoy a smoother trip experience.</p></div></div>
        </section>

        <section className="safety-banner" id="safety"><div className="safety-symbol"><ShieldCheck size={30}/></div><div><p className="eyebrow">YOUR SAFETY MATTERS</p><h2>A little more peace of mind.</h2><p>Driver details, trip summary and support options are part of the RideWave concept.</p></div><button onClick={() => notify('Safety center is a demo feature.')} className="safety-button">Explore safety <ArrowRight size={16}/></button></section>
        <section className="app-banner"><div className="app-banner-icon"><Smartphone size={30}/></div><div><p className="eyebrow">YOUR NEXT RIDE IS CLOSER</p><h2>Ready when you are.</h2><p>Prototype only — no real rides, payments, GPS, or driver dispatch.</p></div><button onClick={() => document.getElementById('booking').scrollIntoView({behavior:'smooth'})}>Book a ride <ArrowRight size={17}/></button></section>
      </main>

      <footer><a className="brand footer-brand" href="#"><span className="brand-mark"><Navigation size={18} fill="currentColor"/></span><span>ride<span className="brand-light">wave</span></span></a><span>© 2026 RideWave Prototype</span><div><a href="#safety">Safety</a><button onClick={() => notify('Help center is a demo feature.')}>Help</button><button onClick={() => setFavorite(!favorite)}><Heart size={14} fill={favorite ? 'currentColor' : 'none'}/> {favorite ? 'Saved' : 'Save app'}</button></div></footer>
      {toast && <div className="toast" role="status"><CheckCircle2 size={17}/>{toast}</div>}
      <div className="prototype-disclaimer">DEMO PROTOTYPE · NOT A REAL TRANSPORT SERVICE</div>
    </div>
  );
}