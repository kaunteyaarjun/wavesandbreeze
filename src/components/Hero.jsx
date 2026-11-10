import React, { useState, useEffect } from 'react';
import { 
  ShieldCheck, 
  ChevronDown, 
  Plane,
  Phone,
  Sparkles
} from 'lucide-react';
import { teamData } from '../data/team';

// Authentic Official WhatsApp Icon
const WhatsAppIcon = ({ className = "w-4 h-4 text-white" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

// Exact destination matrix inspired 100% by Bhubaneswar Travel Mart's live website
const popularPackages = [
  {
    id: 'goa',
    num: '01',
    name: 'Goa',
    subRegion: 'WEST INDIA • BEACHES',
    categoryBadge: 'INDIA HOLIDAY',
    italicSubtitle: 'Beaches, sun and easy days',
    description: 'Goa tour packages with hotels, transfers and sightseeing — planned from Bhubaneswar.',
    image: '/destinations/goa.jpg',
    locations: ['CALANGUTE', 'OLD GOA', 'PALOLEM'],
    tourButtonText: 'VIEW GOA TOUR',
    targetAnchor: '#packages'
  },
  {
    id: 'dubai',
    num: '02',
    name: 'Dubai',
    subRegion: 'UAE • DUBAI',
    categoryBadge: 'MIDDLE EAST & MICE',
    italicSubtitle: 'Skylines, desert dunes & luxury galas',
    description: 'Dubai holiday & corporate MICE packages with 5-star desert resorts, yacht charters, and Burj Khalifa tours from Bhubaneswar.',
    image: '/destinations/dubai.jpg',
    locations: ['DOWNTOWN BURJ', 'DUBAI MARINA', 'DESERT SAFARI'],
    tourButtonText: 'VIEW DUBAI TOUR',
    targetAnchor: '#services'
  },
  {
    id: 'thailand',
    num: '03',
    name: 'Thailand',
    subRegion: 'THAILAND • ASIA',
    categoryBadge: 'ASIA HOLIDAY',
    italicSubtitle: 'Tropical isles, temples & vibrant nights',
    description: 'Thailand tour packages covering Bangkok temples, Pattaya coral islands & Phuket beach resorts planned seamlessly from Bhubaneswar.',
    image: '/destinations/thailand.jpg',
    locations: ['BANGKOK', 'PATTAYA', 'PHUKET'],
    tourButtonText: 'VIEW THAILAND TOUR',
    targetAnchor: '#packages'
  },
  {
    id: 'europe',
    num: '04',
    name: 'Europe',
    subRegion: 'EUROPE',
    categoryBadge: 'INTERNATIONAL HOLIDAY',
    italicSubtitle: 'Historic capitals, alpine peaks & romantic canals',
    description: 'Comprehensive Europe tour packages covering Swiss Alps, Paris Eiffel, Rome monuments & Venice gondolas from Bhubaneswar.',
    image: '/destinations/europe.jpg',
    locations: ['PARIS', 'SWISS ALPS', 'ROME'],
    tourButtonText: 'VIEW EUROPE TOUR',
    targetAnchor: '#packages'
  },
  {
    id: 'singapore',
    num: '05',
    name: 'Singapore',
    subRegion: 'SINGAPORE',
    categoryBadge: 'ASIA HOLIDAY',
    italicSubtitle: 'Gardens, lights and Sentosa',
    description: 'Singapore packages with hotels, sightseeing and easy flight connections planned from Bhubaneswar.',
    image: '/destinations/singapore.jpg',
    locations: ['MARINA BAY', 'GARDENS', 'SENTOSA'],
    tourButtonText: 'VIEW SINGAPORE TOUR',
    targetAnchor: '#packages'
  },
  {
    id: 'kashmir',
    num: '06',
    name: 'Kashmir',
    subRegion: 'NORTH INDIA • KASHMIR',
    categoryBadge: 'INDIA HOLIDAY',
    italicSubtitle: 'Snow valleys, shikaras & pine meadows',
    description: 'Kashmir holiday packages covering Srinagar Dal Lake houseboats, Gulmarg gondolas & Pahalgam valleys from Bhubaneswar.',
    image: '/destinations/kashmir.jpg',
    locations: ['SRINAGAR', 'GULMARG', 'PAHALGAM'],
    tourButtonText: 'VIEW KASHMIR TOUR',
    targetAnchor: '#packages'
  },
  {
    id: 'puri-odisha',
    num: '07',
    name: 'Puri',
    subRegion: 'ODISHA • GOLDEN TRIANGLE',
    categoryBadge: 'ODISHA HERITAGE',
    italicSubtitle: 'Shree Jagannath VIP Darshan & Blue Flag Golden Beach',
    description: 'Odisha Golden Triangle heritage packages with VIP Jagannath temple darshan assistance, Konark Sun Temple & luxury Puri beach resorts.',
    image: '/destinations/jagannath.jpg',
    locations: ['JAGANNATH TEMPLE', 'BLUE FLAG BEACH', 'KONARK SUN TEMPLE'],
    tourButtonText: 'VIEW PURI TOUR',
    targetAnchor: '#packages'
  },
  {
    id: 'daringbadi-odisha',
    num: '08',
    name: 'Daringbadi',
    subRegion: 'ODISHA • KASHMIR OF ODISHA',
    categoryBadge: 'ODISHA HILL STATION',
    italicSubtitle: '3,000 ft pine canopies, coffee gardens & misty valleys',
    description: 'Daringbadi pine forest escapes with Midubanda waterfall, coffee estates, Mandasaru Silent Valley & mountain resort cottages.',
    image: '/destinations/daringbadi.jpg',
    locations: ['PINE FORESTS', 'MIDUBANDA FALLS', 'MANDASARU GORGE'],
    tourButtonText: 'VIEW DARINGBADI TOUR',
    targetAnchor: '#packages'
  }
];

export default function Hero({ onOpenInquiry }) {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const activePackage = popularPackages[currentSlideIndex];

  // Auto-slide every 6 seconds unless paused by mouse hover
  useEffect(() => {
    if (isHovered) return;
    const interval = setInterval(() => {
      setCurrentSlideIndex((prev) => (prev + 1) % popularPackages.length);
    }, 6000);
    return () => clearInterval(interval);
  }, [isHovered]);

  // Direct WhatsApp inquiry trigger opening conversation with prefilled details
  const handleEnquireWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Waves and Breeze Hospitality! 👋\n\nI want to inquire about the ${activePackage.name} tour package (${activePackage.subRegion}):\n• Destination: ${activePackage.name}\n• Category: ${activePackage.categoryBadge}\n• Key Places: ${activePackage.locations.join(', ')}\n\nPlease share customized itinerary options, hotel inclusions, cab tariffs, and best pricing from Bhubaneswar.`
    );
    window.open(`https://wa.me/${teamData.founders[0].whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section 
      className="relative w-full h-[90vh] min-h-[660px] max-h-[960px] bg-neutral-950 overflow-hidden flex flex-col justify-between select-none"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* =========================================================================
          1. BACKGROUND PANORAMIC DESTINATION PHOTOGRAPHY (Full-bleed crossfade)
         ========================================================================= */}
      {popularPackages.map((pkg, idx) => (
        <div
          key={pkg.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            idx === currentSlideIndex ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
          }`}
        >
          <img
            src={pkg.image}
            alt={pkg.name}
            className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
              idx === currentSlideIndex ? 'scale-105' : 'scale-100'
            }`}
          />
          {/* Subtle multi-stop gradient for readable text and golden-hour warmth */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/55 to-transparent"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30"></div>
        </div>
      ))}

      {/* Decorative Dashed Flight Trajectory Arc Across Sky (Signature Travel Mart Motif) */}
      <svg 
        className="absolute top-12 left-1/4 w-[600px] h-[300px] pointer-events-none opacity-40 hidden md:block z-10" 
        viewBox="0 0 600 300" 
        fill="none"
      >
        <path
          d="M 20 220 C 180 40, 420 40, 580 200"
          stroke="#ffffff"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
        {/* Plane / Compass Waypoint on the Arc */}
        <circle cx="300" cy="78" r="6" fill="#f5b324" />
        <circle cx="300" cy="78" r="14" stroke="#f5b324" strokeWidth="1" opacity="0.6" />
      </svg>

      {/* Top Right Floating Badge (Like the rotating circular emblem in the reference) */}
      <div className="absolute top-6 right-6 lg:right-12 z-20 hidden sm:flex items-center gap-2">
        <div className="w-14 h-14 rounded-full border border-white/30 backdrop-blur-md bg-black/40 flex flex-col items-center justify-center text-center shadow-lg">
          <Plane className="w-4 h-4 text-[#f5b324] -rotate-45" />
          <span className="text-[8px] font-extrabold tracking-widest uppercase text-white/90 leading-none mt-1">
            TOUR
          </span>
          <span className="text-[8px] text-[#f5b324] font-bold">{activePackage.name}</span>
        </div>
      </div>

      {/* =========================================================================
          2. MAIN HERO CONTENT & INTERACTIVE RIGHT CARD STACK
         ========================================================================= */}
      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex-1 flex flex-col justify-center pt-8 pb-4">
        
        {/* Top Left Slide Counter & Breadcrumb Index (01 ___ 06 • REGION) */}
        <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-widest text-white/80 uppercase mb-4 sm:mb-6">
          <span className="text-[#f5b324] text-sm font-bold">{activePackage.num}</span>
          <span className="text-white/40">___</span>
          <span className="text-white/60">0{popularPackages.length}</span>
          <span className="text-[#f5b324] mx-2">•</span>
          <span className="tracking-wider text-neutral-200 text-[11px] sm:text-xs">
            {activePackage.subRegion}
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Big Serif Destination, Tagline, Description & CTA */}
          <div className="lg:col-span-8 max-w-2xl text-left">
            
            {/* Small uppercase sub-tag with accent lines (—— INDIA HOLIDAY ——) */}
            <div className="flex items-center gap-2.5 mb-3 sm:mb-4">
              <span className="w-8 h-px bg-[#f5b324]"></span>
              <span className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-[#f5b324]">
                {activePackage.categoryBadge}
              </span>
              <span className="w-8 h-px bg-[#f5b324]"></span>
            </div>

            {/* Huge Majestic Serif Display Title (e.g. "Goa" / "Singapore" / "Puri") */}
            <h1 className="font-serif text-6xl xs:text-7xl sm:text-8xl lg:text-[100px] font-medium tracking-tight text-white leading-none mb-2 sm:mb-3 drop-shadow-lg">
              {activePackage.name}
            </h1>

            {/* Italic Script/Serif Subtitle (e.g. "Beaches, sun and easy days") */}
            <p className="font-serif italic font-light text-2xl xs:text-3xl sm:text-4xl text-neutral-100 tracking-wide mb-4 drop-shadow">
              {activePackage.italicSubtitle}
            </p>

            {/* Description Paragraph */}
            <p className="text-neutral-200 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl mb-5 drop-shadow font-normal">
              {activePackage.description}
            </p>

            {/* Location Highlights Pills with Diamonds (CALANGUTE ❖ OLD GOA ❖ PALOLEM) */}
            <div className="flex flex-wrap items-center gap-2 sm:gap-3 text-[11px] sm:text-xs font-bold uppercase tracking-wider text-neutral-300 mb-7">
              {activePackage.locations.map((loc, i) => (
                <React.Fragment key={loc}>
                  {i > 0 && <span className="text-[#f5b324] text-[10px]">❖</span>}
                  <span className="hover:text-white transition-colors cursor-default">
                    {loc}
                  </span>
                </React.Fragment>
              ))}
            </div>

            {/* Dual Action Pill Buttons (Gold Gradient + Glassmorphic Enquire) */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4">
              
              {/* Primary Golden Pill Button with Dark Circle Arrow */}
              <a
                href={activePackage.targetAnchor}
                className="group inline-flex items-center gap-3 bg-gradient-to-r from-[#e5a93c] via-[#f5b324] to-[#e5a93c] hover:brightness-110 active:scale-98 text-black pl-6 sm:pl-7 pr-2 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-xl transition-all"
              >
                <span className="tracking-wide uppercase font-extrabold text-[12px] sm:text-[13px]">
                  {activePackage.tourButtonText}
                </span>
                <span className="w-8 h-8 rounded-full bg-black text-[#f5b324] flex items-center justify-center font-bold transition-transform group-hover:translate-x-0.5">
                  ➔
                </span>
              </a>

              {/* Secondary Glassmorphic Enquire Button with WhatsApp Icon */}
              <button
                onClick={handleEnquireWhatsApp}
                className="inline-flex items-center gap-2.5 bg-white/10 hover:bg-white/20 active:scale-98 text-white px-6 py-3 rounded-full font-semibold text-xs sm:text-sm backdrop-blur-md border border-white/25 shadow-lg transition-all"
              >
                <WhatsAppIcon className="w-4 h-4 text-white" />
                <span className="tracking-wider uppercase text-[11px] sm:text-xs font-bold">
                  ENQUIRE NOW
                </span>
              </button>

            </div>

          </div>

          {/* Right Column: VERTICAL INTERACTIVE SLIDER PACKAGES CARD STACK (Signature Reference Design!) */}
          <div className="lg:col-span-4 flex flex-col items-end">
            <div className="w-full max-w-[310px] space-y-1.5 bg-black/40 backdrop-blur-md p-2.5 rounded-2xl border border-white/15 shadow-2xl">
              
              {/* Top label */}
              <div className="flex items-center justify-between px-2 pt-1 pb-1.5 text-[10px] font-mono tracking-widest uppercase text-white/70">
                <span className="font-extrabold text-[#f5b324]">PACKAGES</span>
                <span>{activePackage.num} / 0{popularPackages.length}</span>
              </div>

              {/* Scrollable / Stacked Package Cards */}
              <div className="space-y-1.5 max-h-[380px] overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-white/20 scrollbar-track-transparent">
                {popularPackages.map((pkg, idx) => {
                  const isActive = idx === currentSlideIndex;
                  return (
                    <button
                      key={pkg.id}
                      onClick={() => setCurrentSlideIndex(idx)}
                      className={`w-full text-left p-2 rounded-xl transition-all duration-300 flex items-center gap-3 border ${
                        isActive
                          ? 'bg-gradient-to-r from-black/90 to-[#1e293b]/95 border-[#f5b324] shadow-lg scale-[1.02]'
                          : 'bg-white/5 hover:bg-white/10 border-white/10 opacity-70 hover:opacity-100'
                      }`}
                    >
                      {/* Destination Thumbnail */}
                      <img
                        src={pkg.image}
                        alt={pkg.name}
                        className="w-12 h-10 object-cover rounded-lg shrink-0 shadow-sm"
                      />

                      {/* Content */}
                      <div className="flex-1 min-w-0">
                        <div className="flex items-baseline gap-1.5">
                          <span className={`text-[10px] font-mono font-bold ${isActive ? 'text-[#f5b324]' : 'text-white/50'}`}>
                            {pkg.num}
                          </span>
                          <span className="font-display font-bold text-white text-xs sm:text-sm truncate">
                            {pkg.name}
                          </span>
                        </div>
                        <p className="text-[9.5px] uppercase tracking-wider text-neutral-300 truncate">
                          {pkg.subRegion}
                        </p>
                      </div>

                      {/* Active Indicator Arrow */}
                      {isActive && (
                        <span className="w-1.5 h-1.5 rounded-full bg-[#f5b324] shrink-0 mr-1 shadow-glow-gold"></span>
                      )}
                    </button>
                  );
                })}
              </div>

            </div>
          </div>

        </div>

      </div>

      {/* =========================================================================
          3. BOTTOM HERO BAR (Docked at base with stats, accreditations & explore link)
         ========================================================================= */}
      <div className="relative z-20 w-full bg-gradient-to-t from-black via-black/95 to-black/80 backdrop-blur-md border-t border-white/10 py-3.5 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs">
          
          {/* Left Stats Strip (SINCE 2020 • TRAVELLERS 18K+ • OFFICE BBSR • SUPPORT 24*7) */}
          <div className="flex items-center gap-6 sm:gap-8 text-neutral-300">
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">SINCE</span>
              <span className="font-display font-black text-white text-sm sm:text-base">2020</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">TRAVELLERS</span>
              <span className="font-display font-black text-white text-sm sm:text-base">18K+</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">OFFICE</span>
              <span className="font-display font-black text-white text-sm sm:text-base">BBSR</span>
            </div>
            <div>
              <span className="text-[10px] uppercase tracking-widest text-neutral-500 block">SUPPORT</span>
              <span className="font-display font-black text-white text-sm sm:text-base">24*7</span>
            </div>
          </div>

          {/* Center Accreditation (IATA & TAAI accredited • custom holiday packages from Bhubaneswar) */}
          <div className="text-center text-neutral-400 text-[11px] sm:text-xs flex items-center justify-center gap-1.5">
            <ShieldCheck className="w-4 h-4 text-[#f5b324] shrink-0" />
            <span>
              IATA &amp; TAAI accredited • custom holiday packages from Bhubaneswar
            </span>
          </div>

          {/* Right Action: EXPLORE ↓ */}
          <a
            href="#packages"
            className="flex items-center gap-1.5 text-neutral-300 hover:text-white uppercase font-bold text-xs tracking-widest border border-white/20 px-3.5 py-1.5 rounded-full hover:border-[#f5b324] hover:text-[#f5b324] transition-all"
          >
            <span>EXPLORE</span>
            <ChevronDown className="w-3.5 h-3.5 animate-bounce" />
          </a>

        </div>
      </div>

    </section>
  );
}
