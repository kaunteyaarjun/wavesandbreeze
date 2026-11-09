# Waves and Breeze Hospitality — Official MICE & Corporate Event Website

A modern, luxury web platform built for **Waves and Breeze Hospitality**, Odisha's premier MICE (Meetings, Incentives, Conferences, Exhibitions) event organisation.

---

## 🌟 Key Highlights & Features

1. **Brand Identity & Crest**:
   - Integrated royal gold and navy emblem logo (`logo.jpg`).
   - Premium luxury hospitality styling inspired by benchmark MICE leaders and reference mockup design.

2. **Leadership & Contact Integration**:
   - **Biswaranjan Behera** — Founder & Managing Director (+91 90405 77429)
   - **Sameer Kumar Panigrahi** — Co-Founder & Director of Operations (+91 82496 57614)
   - **Office Address**: Near Hanuman Temple Lane, Old Town, Bhubaneswar, Odisha - 751002.
   - One-click phone calling and pre-filled direct WhatsApp message generators for both founders.

3. **Curated Odisha Hotspots Circuit**:
   - **Puri**: Blue Flag Golden Beach resorts (Mayfair Waves, Sterling), beachside gala lawns, Jagannath heritage tours.
   - **Bhubaneswar**: Smart convention capital (Janata Maidan, Mayfair Lagoon, Welcomhotel by ITC, Vivanta).
   - **Konark**: Luxury Eco-Retreat glamping Swiss tents, Ramachandi beach, private Sun Temple light & sound shows.
   - **Chilika Lake**: Asia's largest brackish water lagoon, chartered catamarans, Irrawaddy dolphin watching, seafood barbecues.
   - **Gopalpur-on-Sea**: Quiet heritage coastal conclaves (Mayfair Palm Beach).
   - **Daringbadi**: "Kashmir of Odisha" hill station retreats and coffee plantation treks.

4. **Pan-India & International MICE Stages**:
   - **Dubai, UAE**: Mega conventions (DWTC), luxury yacht cruises, desert safari gala dinners.
   - **Bali, Indonesia**: Nusa Dua convention resorts, clifftop galas, team rejuvenating retreats.
   - **Singapore**: Marina Bay Sands, Gardens by the Bay, high-tech fintech summits.
   - **Thailand (Bangkok & Phuket)**: Centara Grand, catamaran island charters, vibrant hospitality.
   - **Goa & Rajasthan**: Beachfront sundowners and royal palace conventions.

5. **Interactive UI Capabilities**:
   - **Quick Search Filter Bar**: Filter by destination, event type, timeline, and delegate count.
   - **Interactive MICE Budget Estimator**: Real-time total and per-delegate pricing calculator with one-click export to WhatsApp.
   - **Destination Explorer & Filter Modal**: Filter by category, capacity, and view detailed inclusions.
   - **Full MICE Spectrum**: Meetings, Incentives, Conferences, Exhibitions, Odisha DMC, and Team Building.
   - **Client Testimonial Showcase & Ratings**: Formatted to match the reference mockup.
   - **Floating WhatsApp Widget**: Persistent lead generation widget for instant founder inquiries.

---

## 🚀 How to Run Locally

### Option 1: Quick Launch
Double-click `start-website.bat` or run:
```bash
npm run dev
```
Open [http://localhost:3000](http://localhost:3000) in your browser.

### Option 2: Production Build
```bash
npm run build
npm run preview
```
The optimized production files are ready inside the `dist/` directory.

---

## 📁 Project Architecture
```
waves-and-breeze/
├── dist/                     # Optimized production bundle
├── public/
│   ├── logo.jpg              # Waves and Breeze official logo
│   └── ui_reference.jpg      # UI reference design mockup
├── src/
│   ├── components/
│   │   ├── Navbar.jsx        # Pill floating navigation & founder hotline
│   │   ├── Hero.jsx          # Curved hero with multi-tab search filter bar
│   │   ├── TrustBar.jsx      # Luxury hotel & convention partners
│   │   ├── DestinationExplorer.jsx # Odisha & worldwide destination cards
│   │   ├── OdishaSpotlight.jsx     # Dedicated Odisha MICE features
│   │   ├── MiceServices.jsx  # Meetings, Incentives, Conferences, Expos
│   │   ├── WhyChooseUs.jsx   # 3-pillar feature & impact stats
│   │   ├── EventCostEstimator.jsx # Interactive budget calculator
│   │   ├── FoundersSection.jsx    # Biswaranjan & Sameer executive spotlight
│   │   ├── Testimonials.jsx  # Client review cards
│   │   ├── CtaBanner.jsx     # Curved CTA banner
│   │   ├── ContactSection.jsx# Office address & proposal form
│   │   ├── Footer.jsx        # Polished luxury footer
│   │   ├── QuickInquiryModal.jsx  # Proposal request popup
│   │   └── FloatingWhatsApp.jsx   # Sticky WhatsApp chat widget
│   ├── data/
│   │   ├── destinations.js   # Rich destination database
│   │   ├── services.js       # Complete MICE service data
│   │   ├── team.js           # Founders, phone numbers, office address
│   │   └── testimonials.js   # Corporate client reviews
│   ├── App.jsx               # Main React application
│   ├── index.css             # Tailwind base & custom luxury styling
│   └── main.jsx
├── index.html
├── tailwind.config.js
├── vite.config.js
└── package.json
```

