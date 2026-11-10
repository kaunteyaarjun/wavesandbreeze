import React, { useState, useEffect, useRef } from 'react';
import { 
  ArrowUpRight, 
  ArrowRight, 
  MapPin, 
  Calendar, 
  Users, 
  Car, 
  ShieldCheck, 
  Star, 
  Sparkles, 
  ChevronLeft, 
  ChevronRight, 
  Pause, 
  Play, 
  Compass, 
  PhoneCall,
  Clock,
  CheckCircle2
} from 'lucide-react';
import { teamData } from '../data/team';

// Official WhatsApp SVG icon
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

// High-definition slide places matrix inspired by top Odisha travel organisations
const heroSlides = [
  {
    id: 'puri-jagannath',
    name: 'Puri & Shree Jagannath Dham',
    shortName: 'Puri & Jagannath',
    category: 'Pilgrimage & Coastal Heritage',
    tagline: 'VIP Temple Darshan • Blue Flag Golden Beach',
    image: '/destinations/jagannath.jpg',
    duration: '3 Nights / 4 Days',
    badge: 'Most Popular Tour',
    accentColor: '#fff033',
    route: 'Bhubaneswar Airport ➔ Dhauli Stupa ➔ Puri Beach ➔ Konark',
    title: 'Sacred Jagannath Puri & Golden Beach Tour',
    description: 'Experience VIP Darshan coordination at the holy 12th-century Shree Jagannath Temple, unwind along the Blue Flag certified Golden Beach, and journey along the marine drive to Konark.',
    startingTariff: '₹6,499 per person / Cabs @ ₹1,499',
    fleetOptions: 'Innova Crysta • Swift Dzire • Tempo Traveller',
    highlights: [
      'Guaranteed VIP Darshan assistance at Shree Jagannath Temple',
      'Blue Flag Golden Beach & Swargadwar coastal bazaar tour',
      'Scenic marine drive along Kushabhadra river to Konark',
      'Dedicated AC vehicle & verified local Odia chauffeur'
    ]
  },
  {
    id: 'konark-sun-temple',
    name: 'Konark Sun Temple & Eco-Retreat',
    shortName: 'Konark Sun Temple',
    category: 'UNESCO World Heritage',
    tagline: '13th-Century Stone Chariot • Luxury Glamping',
    image: '/destinations/konark_hd.jpg',
    duration: 'Day Tour / 2N Stay',
    badge: 'UNESCO Heritage',
    accentColor: '#fff033',
    route: 'Puri ➔ Chandrabhaga Beach ➔ Konark ➔ Eco-Retreat',
    title: 'Architectural Wonder of Konark Sun Temple',
    description: 'Marvel at 24 intricately carved stone chariot wheels, witness breath-taking sunsets at Chandrabhaga beach, and enjoy Swiss luxury tent glamping on the Marine Drive.',
    startingTariff: 'Day Excursion from ₹1,800 per cab',
    fleetOptions: 'Sedan • SUV • AC Luxury Coach',
    highlights: [
      'Certified historian guide for Konark Sun Temple marvels',
      'Chandrabhaga Beach sunset & Ramachandi watersports',
      'Luxury Swiss tent bookings at Eco-Retreat Konark',
      'Puri-Konark Marine Drive scenic coastal highway transfer'
    ]
  },
  {
    id: 'chilika-lake-dolphins',
    name: 'Chilika Lake & Satapada Dolphin Safari',
    shortName: 'Chilika Lake',
    category: 'Asia’s Largest Lagoon',
    tagline: 'Irrawaddy Dolphins • Migratory Bird Paradise',
    image: '/destinations/chilika_hd.jpg',
    duration: '2 Nights / 3 Days',
    badge: 'Scenic Lagoon Safari',
    accentColor: '#fff033',
    route: 'Puri ➔ Satapada Sea Mouth ➔ Kalijai Island ➔ Mangalajodi',
    title: 'Chilika Lake Lagoon & Dolphin Boat Safari',
    description: 'Glide through the tranquil azure waters of Chilika Lake. Witness playful Irrawaddy dolphins at the Satapada sea mouth and spot over 200 species of migratory birds at Mangalajodi.',
    startingTariff: '₹5,200 per person / Boat Safaris Included',
    fleetOptions: 'Innova Crysta • Force Urbania • Private Boat',
    highlights: [
      'Private motorized catamaran safari with safety jackets',
      'Rare Irrawaddy dolphin spotting at Satapada sea confluence',
      'Island excursion to historic Kalijai Temple in the lagoon',
      'Gourmet lunch featuring fresh Chilika crab and prawn delicacies'
    ]
  },
  {
    id: 'daringbadi-hill-station',
    name: 'Daringbadi - "The Kashmir of Odisha"',
    shortName: 'Daringbadi Hills',
    category: 'Hill Station Retreat',
    tagline: '3,000 ft Mountain Valleys • Pine Forests & Coffee Gardens',
    image: '/destinations/daringbadi.jpg',
    duration: '3 Nights / 4 Days',
    badge: 'Hill Station Escape',
    accentColor: '#fff033',
    route: 'Bhubaneswar ➔ Bhanjanagar ➔ Daringbadi Valley ➔ Mandasaru Kuti',
    title: 'Misty Pine Forest Escape to Daringbadi',
    description: 'Perched at 3,000 feet above sea level with cool mountain breezes, pine canopies, coffee plantations, gushing waterfalls, and the spectacular Mandasaru Silent Valley gorge.',
    startingTariff: '₹8,999 per person (All Meals & Hill Transport)',
    fleetOptions: 'High-Ground-Clearance Innova • Bolero Neo • SUV',
    highlights: [
      'Sub-zero winter climate, pine canopies & coffee gardens',
      'Excursion to Midubanda Waterfall, Hill View Park & Lovers Point',
      'Sunset over Mandasaru Kuti (the Silent Valley of Odisha)',
      'Bonfire evenings with authentic local tribal cuisine'
    ]
  },
  {
    id: 'bhitarkanika-mangroves',
    name: 'Bhitarkanika Mangrove & Crocodile Safari',
    shortName: 'Bhitarkanika Mangroves',
    category: 'Wildlife Sanctuary',
    tagline: '"The Amazon of Odisha" • Giant Estuarine Crocodiles',
    image: '/destinations/bhitarkanika_hd.jpg',
    duration: '2 Nights / 3 Days',
    badge: 'Wild Mangrove Safari',
    accentColor: '#fff033',
    route: 'Bhubaneswar ➔ Kendrapara ➔ Khola Gate ➔ Dangmal Creeks',
    title: 'Untamed Mangrove Safari in Bhitarkanika',
    description: 'Venture deep into India’s second-largest mangrove ecosystem on forest boat safaris to encounter giant 20-foot saltwater crocodiles, kingfishers, and deer along protected creeks.',
    startingTariff: '₹7,500 per person (Forest Permits Included)',
    fleetOptions: 'AC Sedan • Innova SUV • Forest Boat Safari',
    highlights: [
      'Deep creek boat safari into dense mangrove forest canopies',
      'Encounter giant saltwater crocodiles in their natural habitat',
      'Birdwatching at Bagagahana heronry (migratory waterfowl)',
      'Nature trails, museum orientation & forest eco-cottage stays'
    ]
  },
  {
    id: 'similipal-tiger-reserve',
    name: 'Similipal Biosphere & Barehipani Falls',
    shortName: 'Similipal Tiger Reserve',
    category: 'UNESCO Biosphere Reserve',
    tagline: 'India’s 2nd Highest Waterfall • Royal Bengal Tigers',
    image: '/destinations/similipal.jpg',
    duration: '3 Nights / 4 Days',
    badge: 'Biosphere Reserve',
    accentColor: '#fff033',
    route: 'Bhubaneswar ➔ Balasore ➔ Baripada ➔ Barehipani Falls ➔ Jashipur',
    title: 'Similipal Jungle Safaris & Towering Cascades',
    description: 'Explore ancient sal forest canopies, the thunderous 399m Barehipani waterfall, Joranda cascades, and open-top 4x4 jungle jeep safaris tracking elephants and royal Bengal tigers.',
    startingTariff: '₹9,800 per person (4x4 Jeep Safari & Permits)',
    fleetOptions: '4x4 Forest Gypsy • Innova Crysta • Forest Permits',
    highlights: [
      'Spectacular Barehipani (399m) & Joranda (181m) waterfalls',
      'Open-top 4x4 jungle jeep safaris across dense sal reserves',
      'Home to elephants, leopards, and rare melanistic black tigers',
      'Eco-cottage stays inside the pristine national park boundary'
    ]
  },
  {
    id: 'bhubaneswar-heritage',
    name: 'Bhubaneswar "City of Temples" & Cabs',
    shortName: 'Bhubaneswar City',
    category: 'Capital Heritage & Fleet',
    tagline: '1,000+ Millennium Temples • Smart City Conventions',
    image: '/destinations/lingaraj_hd.jpg',
    duration: 'Full Day Sightseeing / 2N Stay',
    badge: 'Temple Capital',
    accentColor: '#fff033',
    route: 'Lingaraj ➔ Mukteshwar ➔ Khandagiri Caves ➔ Dhauli Stupa',
    title: 'Ekamra Kshetra Heritage & Airport Cab Fleet',
    description: 'Discover millennium-old architectural marvels at Lingaraj, Mukteshwar, and Rajarani temples, explore 1st-century Jain rock-cut caves at Udayagiri, and book fixed-rate airport cabs.',
    startingTariff: 'City Sightseeing from ₹1,600 / Airport Cab ₹600',
    fleetOptions: 'Swift Dzire • Toyota Etios • Innova Crysta • Volvo',
    highlights: [
      'Comprehensive temple city tour covering Ekamra heritage trail',
      'Udayagiri & Khandagiri 1st-century BCE Jain rock sanctuaries',
      'Dhauli Shanti Stupa peace pagoda on historic Daya river bank',
      'Guaranteed on-time Biju Patnaik Airport (BBI) pick-and-drop'
    ]
  },
  {
    id: 'puri-golden-beach',
    name: 'Puri Golden Beach Coastline',
    shortName: 'Golden Beach Coast',
    category: 'Coastal Luxury',
    tagline: 'Blue Flag Certified • Luxury Beach Resorts',
    image: '/destinations/puri_hd.jpg',
    duration: '2 Nights / 3 Days',
    badge: 'Blue Flag Beach',
    accentColor: '#fff033',
    route: 'Bhubaneswar Airport ➔ Puri Marine Drive ➔ Golden Beach',
    title: 'Blue Flag Golden Beach & Luxury Oceanfront',
    description: 'Relax along pristine Blue Flag certified shoreline, enjoy private beach setups, direct access to top 5-star properties (Mayfair Waves, Sterling Puri), and coastal Odia gourmet cuisine.',
    startingTariff: 'Resort Packages from ₹5,500 / night',
    fleetOptions: 'Innova Crysta • Mercedes / Audi On-Demand • Coach',
    highlights: [
      'Exclusive Blue Flag certified clean swimming beach access',
      'Special B2B tariffs for Mayfair Waves, Sterling & Swosti',
      'Private sunrise yoga, beach breakfast & coastal seafood dinners',
      'Chauffeur-driven airport transfer with zero waiting time'
    ]
  }
];

export default function Hero({ onOpenInquiry }) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);
  const [progress, setProgress] = useState(0);

  // Quick Travel Search bar states
  const [selectedDestination, setSelectedDestination] = useState('Puri & Golden Triangle');
  const [selectedService, setSelectedService] = useState('Tour Package (Hotel + Cab + Darshan)');
  const [selectedGuests, setSelectedGuests] = useState('Family (3 - 6 in Innova Crysta)');

  const slideDuration = 6000; // 6 seconds per slide
  const activePlace = heroSlides[currentSlide];

  // Auto-slide effect with animated progress bar
  useEffect(() => {
    if (!isPlaying) return;

    const intervalTime = 50; // update progress every 50ms
    const step = (intervalTime / slideDuration) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setCurrentSlide((curr) => (curr + 1) % heroSlides.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isPlaying, currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    setProgress(0);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
    setProgress(0);
  };

  const handleSelectSlide = (index) => {
    setCurrentSlide(index);
    setProgress(0);
  };

  // Instant WhatsApp booking trigger
  const handleInstantWhatsApp = (customNotes = '') => {
    const text = encodeURIComponent(
      `Hello Waves & Breeze Travel DMC! 👋\n\nI want to inquire about Odisha travel:\n• Destination: ${selectedDestination}\n• Travel Style: ${selectedService}\n• Group Size: ${selectedGuests}\n• Current Featured Place: ${activePlace.name} (${activePlace.duration})\n• Notes: ${customNotes || 'Please send customized itinerary with vehicle options and best quote.'}`
    );
    window.open(`https://wa.me/${teamData.founders[0].whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section className="bg-white overflow-hidden border-b border-neutral-200">
      
      {/* 1. TOP CREDIBILITY & TRUST RIBBON (DMC + MICE Credentials) */}
      <div className="bg-neutral-900 text-white text-[11px] sm:text-xs py-2 sm:py-2.5 px-4 sm:px-6 lg:px-8 border-b border-neutral-800">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#fff033] animate-ping"></span>
            <span className="font-extrabold uppercase tracking-widest text-[#fff033] text-[10px] sm:text-[11px]">
              ODISHA'S PREMIER DESTINATION MANAGEMENT COMPANY (DMC) &amp; MICE ORGANISATION
            </span>
          </div>

          <div className="flex flex-wrap items-center gap-4 sm:gap-6 text-neutral-300 font-semibold text-[11px]">
            <span className="inline-flex items-center gap-1 text-white font-bold">
              <Star className="w-3.5 h-3.5 fill-[#fff033] text-[#fff033]" />
              <span>4.9 / 5 Rating (1,400+ Satisfied Guests)</span>
            </span>
            <span className="hidden sm:inline text-neutral-600">•</span>
            <span className="inline-flex items-center gap-1">
              <ShieldCheck className="w-3.5 h-3.5 text-[#fff033]" />
              <span>Puri VIP Darshan Desk</span>
            </span>
            <span className="hidden md:inline text-neutral-600">•</span>
            <span className="hidden md:inline-flex items-center gap-1">
              <Car className="w-3.5 h-3.5 text-[#fff033]" />
              <span>50+ In-House Verified Cabs</span>
            </span>
          </div>
        </div>
      </div>

      {/* 2. INTERACTIVE SLIDING HERO CONTAINER */}
      <div className="relative bg-black text-white min-h-[580px] sm:min-h-[640px] lg:min-h-[720px] flex items-center">
        
        {/* Background Slide Images with Crossfade & Ken Burns Scale Transition */}
        {heroSlides.map((slide, index) => (
          <div
            key={slide.id}
            className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
              index === currentSlide ? 'opacity-100 z-0' : 'opacity-0 -z-10 pointer-events-none'
            }`}
          >
            <img
              src={slide.image}
              alt={slide.name}
              className={`w-full h-full object-cover transition-transform duration-[7000ms] ease-out ${
                index === currentSlide ? 'scale-105' : 'scale-100'
              }`}
            />
            {/* Cinematic Multilayer Gradient Overlay for Maximum Readability */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/80 to-black/40"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/60"></div>
          </div>
        ))}

        {/* Floating Top Progress Bar (Moving interaction indicator) */}
        <div className="absolute top-0 left-0 right-0 h-1 bg-white/20 z-30">
          <div
            className="h-full bg-[#fff033] transition-all ease-linear"
            style={{ width: `${progress}%` }}
          ></div>
        </div>

        {/* Hero Content Area */}
        <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 w-full">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Left Column: Slide Narrative, Badges, & Action Triggers */}
            <div className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              {/* Badge Row with Active Slide Details */}
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 bg-[#fff033] text-black font-extrabold text-[11px] uppercase tracking-wider shadow-sm">
                  {activePlace.badge}
                </span>
                <span className="px-3 py-1 bg-black/80 backdrop-blur-md text-white border border-white/20 font-bold text-[11px] uppercase tracking-wider">
                  {activePlace.duration}
                </span>
                <span className="hidden sm:inline-flex items-center gap-1 px-3 py-1 bg-white/10 text-neutral-200 text-[11px] font-semibold border border-white/10">
                  <MapPin className="w-3 h-3 text-[#fff033]" />
                  <span>{activePlace.tagline}</span>
                </span>
              </div>

              {/* Main Headline */}
              <div className="space-y-2">
                <h1 className="font-display text-3xl xs:text-4xl sm:text-5xl lg:text-[58px] font-extrabold text-white tracking-tight leading-[1.08] sm:leading-[1.05]">
                  {activePlace.name}
                </h1>
                <p className="text-sm xs:text-base sm:text-xl font-bold text-[#fff033] tracking-tight">
                  {activePlace.title}
                </p>
              </div>

              {/* Route Path pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-black/60 backdrop-blur-md border border-neutral-700 text-xs text-neutral-200 max-w-xl">
                <span className="text-[#fff033] font-bold text-[11px] uppercase">CIRCUIT:</span>
                <span className="truncate">{activePlace.route}</span>
              </div>

              {/* Description */}
              <p className="text-neutral-300 text-xs sm:text-sm lg:text-base leading-relaxed max-w-xl font-normal">
                {activePlace.description}
              </p>

              {/* Highlights 4-Check Matrix (Animated on active slide) */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 sm:gap-2.5 max-w-xl pt-1">
                {activePlace.highlights.map((highlight, idx) => (
                  <div key={idx} className="flex items-start gap-2 text-xs sm:text-[13px] text-neutral-200">
                    <CheckCircle2 className="w-4 h-4 text-[#fff033] shrink-0 mt-0.5" />
                    <span className="leading-snug">{highlight}</span>
                  </div>
                ))}
              </div>

              {/* Tariff & Fleet Strip */}
              <div className="pt-2 flex flex-wrap items-center gap-4 text-xs">
                <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 border border-white/15">
                  <span className="text-[10px] text-neutral-400 block uppercase font-bold">ESTIMATED TARIFF</span>
                  <span className="text-white font-extrabold sm:text-sm">{activePlace.startingTariff}</span>
                </div>
                <div className="bg-white/10 backdrop-blur-md px-3.5 py-2 border border-white/15">
                  <span className="text-[10px] text-neutral-400 block uppercase font-bold">FLEET OPTIONS</span>
                  <span className="text-[#fff033] font-bold sm:text-sm">{activePlace.fleetOptions}</span>
                </div>
              </div>

              {/* Primary Action Buttons */}
              <div className="pt-2 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => handleInstantWhatsApp(`Inquiry for ${activePlace.name} (${activePlace.duration})`)}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-extrabold text-xs sm:text-sm py-3.5 px-6 flex items-center gap-2.5 shadow-lg active:scale-98 transition-all"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Book {activePlace.shortName} on WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>

                <a
                  href="#packages"
                  className="bg-white hover:bg-neutral-100 text-black font-extrabold text-xs sm:text-sm py-3.5 px-5 flex items-center gap-2 transition-colors"
                >
                  <span>View All Packages</span>
                  <ArrowRight className="w-4 h-4" />
                </a>

                <a
                  href="#fleet"
                  className="border border-white/40 hover:border-white text-white font-bold text-xs sm:text-sm py-3.5 px-5 transition-colors"
                >
                  <span>Cab Rates</span>
                </a>
              </div>

            </div>

            {/* Right Column: Interactive Quick Travel Booking & Instant Quote Widget */}
            <div className="lg:col-span-5">
              <div className="bg-white text-black p-5 sm:p-6 shadow-2xl border-2 border-[#fff033] relative">
                
                {/* Yellow Tag */}
                <div className="flex items-center justify-between pb-3 mb-4 border-b border-neutral-200">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="font-extrabold uppercase tracking-wider text-xs text-black">
                      PLAN YOUR ODISHA JOURNEY
                    </span>
                  </div>
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#8b181b] bg-[#8b181b]/10 px-2 py-0.5">
                    DIRECT FOUNDER QUOTE
                  </span>
                </div>

                {/* Form Fields */}
                <div className="space-y-3.5 text-left">
                  
                  {/* Destination */}
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-neutral-700 mb-1 flex items-center gap-1">
                      <MapPin className="w-3.5 h-3.5 text-black" />
                      <span>Select Destination Circuit</span>
                    </label>
                    <select
                      value={selectedDestination}
                      onChange={(e) => setSelectedDestination(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 font-bold text-xs sm:text-sm p-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="Puri & Jagannath Dham">Puri &amp; Jagannath Dham (VIP Darshan + Beach)</option>
                      <option value="Konark Sun Temple & Eco-Retreat">Konark Sun Temple &amp; Marine Drive</option>
                      <option value="Chilika Lake & Satapada Dolphins">Chilika Lake &amp; Dolphin Safari</option>
                      <option value="Daringbadi Hill Station">Daringbadi "Kashmir of Odisha" Hills</option>
                      <option value="Bhitarkanika Wildlife Safari">Bhitarkanika Mangrove &amp; Crocodile Safari</option>
                      <option value="Similipal Biosphere Reserve">Similipal Tiger Reserve &amp; Falls</option>
                      <option value="Bhubaneswar Temple City">Bhubaneswar Heritage Sightseeing</option>
                      <option value="Dubai & International MICE">Dubai &amp; Corporate MICE</option>
                    </select>
                  </div>

                  {/* Travel Type */}
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-neutral-700 mb-1 flex items-center gap-1">
                      <Compass className="w-3.5 h-3.5 text-black" />
                      <span>Travel Type / Requirement</span>
                    </label>
                    <select
                      value={selectedService}
                      onChange={(e) => setSelectedService(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 font-bold text-xs sm:text-sm p-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="Complete Tour Package (Hotel + Cab + Darshan)">Complete Tour Package (Hotel + Cab + Darshan)</option>
                      <option value="Cab Rental Only (Per KM / Daily Tariff)">Cab Rental Only (Innova Crysta / Dzire)</option>
                      <option value="Tempo Traveller / Force Urbania (Group)">Tempo Traveller / Force Urbania (Group)</option>
                      <option value="Corporate MICE Offsite / Conclave">Corporate MICE Offsite / Conclave</option>
                      <option value="Luxury Eco-Retreat / 5-Star Resort">5-Star Resort / Eco-Retreat Booking</option>
                    </select>
                  </div>

                  {/* Guests */}
                  <div>
                    <label className="block text-[11px] font-extrabold uppercase tracking-wider text-neutral-700 mb-1 flex items-center gap-1">
                      <Users className="w-3.5 h-3.5 text-black" />
                      <span>Group Size / Passengers</span>
                    </label>
                    <select
                      value={selectedGuests}
                      onChange={(e) => setSelectedGuests(e.target.value)}
                      className="w-full bg-neutral-50 border border-neutral-300 font-bold text-xs sm:text-sm p-3 text-black focus:outline-none focus:ring-2 focus:ring-black"
                    >
                      <option value="1 - 2 Guests (Couple / Solo)">1 - 2 Guests (Couple / Solo)</option>
                      <option value="Family (3 - 6 Guests in Innova Crysta)">Family (3 - 6 Guests in Innova Crysta)</option>
                      <option value="Group (7 - 17 Guests in Tempo Traveller)">Group (7 - 17 Guests in Tempo Traveller)</option>
                      <option value="Corporate Delegation (20 - 500+ Guests)">Corporate Delegation (20 - 500+ Guests)</option>
                    </select>
                  </div>

                  {/* Submit via WhatsApp */}
                  <div className="pt-2">
                    <button
                      onClick={() => handleInstantWhatsApp()}
                      className="w-full bg-[#25D366] hover:bg-[#20bd5a] text-white font-black text-xs sm:text-sm py-3.5 px-4 flex items-center justify-center gap-2 shadow-md active:scale-98 transition-all"
                    >
                      <WhatsAppIcon className="w-4 h-4 text-white" />
                      <span>Get Instant Quotation on WhatsApp</span>
                      <ArrowUpRight className="w-4 h-4" />
                    </button>
                    <p className="text-[10px] text-center text-neutral-500 mt-1.5 font-medium">
                      ⚡ Average response time: Under 15 minutes directly from our founders.
                    </p>
                  </div>

                  {/* Direct Founder Hotlines */}
                  <div className="pt-2 border-t border-neutral-200 flex items-center justify-between text-[11px] font-semibold text-neutral-600">
                    <a href="tel:9040577429" className="text-black hover:underline font-bold flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-[#8b181b]" />
                      <span>+91 9040577429</span>
                    </a>
                    <span>•</span>
                    <a href="tel:8249657614" className="text-black hover:underline font-bold flex items-center gap-1">
                      <PhoneCall className="w-3 h-3 text-[#8b181b]" />
                      <span>+91 8249657614</span>
                    </a>
                  </div>

                </div>

              </div>
            </div>

          </div>
        </div>

        {/* Slide Controls (Arrow Buttons & Play/Pause) */}
        <div className="absolute bottom-6 right-4 sm:right-8 z-30 flex items-center gap-2 bg-black/80 backdrop-blur-md p-1.5 border border-white/20">
          <button
            onClick={handlePrevSlide}
            aria-label="Previous destination"
            className="w-9 h-9 rounded-none bg-white/10 hover:bg-[#fff033] hover:text-black text-white flex items-center justify-center transition-colors"
          >
            <ChevronLeft className="w-5 h-5" />
          </button>

          <button
            onClick={() => setIsPlaying(!isPlaying)}
            aria-label={isPlaying ? 'Pause slideshow' : 'Play slideshow'}
            className="w-9 h-9 rounded-none bg-white/10 hover:bg-white hover:text-black text-white flex items-center justify-center transition-colors text-xs font-bold"
          >
            {isPlaying ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
          </button>

          <button
            onClick={handleNextSlide}
            aria-label="Next destination"
            className="w-9 h-9 rounded-none bg-white/10 hover:bg-[#fff033] hover:text-black text-white flex items-center justify-center transition-colors"
          >
            <ChevronRight className="w-5 h-5" />
          </button>

          <span className="text-xs font-mono font-bold text-[#fff033] px-2">
            0{currentSlide + 1} / 0{heroSlides.length}
          </span>
        </div>

      </div>

      {/* 3. INTERACTIVE DESTINATION THUMBNAILS & PILLS BAR (Moving Interaction Element) */}
      <div className="bg-neutral-100 border-t border-b border-neutral-300 py-3 sm:py-4 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto flex items-center justify-between gap-3 overflow-x-auto scrollbar-none pb-1">
          <div className="flex items-center gap-2 text-xs font-extrabold uppercase text-neutral-600 shrink-0 mr-2">
            <Compass className="w-4 h-4 text-[#8b181b]" />
            <span className="hidden sm:inline">SELECT PLACE:</span>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto scrollbar-none">
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                onClick={() => handleSelectSlide(idx)}
                className={`flex items-center gap-2 px-3 py-2 text-xs font-bold whitespace-nowrap transition-all border ${
                  idx === currentSlide
                    ? 'bg-black text-[#fff033] border-black shadow-md font-extrabold scale-102'
                    : 'bg-white text-neutral-800 border-neutral-300 hover:border-black hover:bg-neutral-50'
                }`}
              >
                <span className={`w-1.5 h-1.5 rounded-full ${idx === currentSlide ? 'bg-[#fff033]' : 'bg-neutral-400'}`}></span>
                <span>{slide.shortName}</span>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* 4. FOUR TRUST PILLARS STRIP */}
      <div className="bg-white py-6 sm:py-8 border-b border-neutral-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          
          <div className="p-3.5 bg-neutral-50 border-l-4 border-[#fff033]">
            <span className="text-xl sm:text-2xl font-black font-display text-black block">8+ Circuits</span>
            <span className="text-xs text-neutral-600 font-semibold leading-tight block">
              Puri, Konark, Chilika, Daringbadi, Bhitarkanika, Similipal
            </span>
          </div>

          <div className="p-3.5 bg-neutral-50 border-l-4 border-black">
            <span className="text-xl sm:text-2xl font-black font-display text-black block">50+ Verified Cabs</span>
            <span className="text-xs text-neutral-600 font-semibold leading-tight block">
              Innova Crysta, Dzire, Force Urbania &amp; Volvo Coaches
            </span>
          </div>

          <div className="p-3.5 bg-neutral-50 border-l-4 border-[#8b181b]">
            <span className="text-xl sm:text-2xl font-black font-display text-black block">100% Transparent</span>
            <span className="text-xs text-neutral-600 font-semibold leading-tight block">
              Fixed tariffs, verified chauffeurs, zero surge pricing
            </span>
          </div>

          <div className="p-3.5 bg-neutral-50 border-l-4 border-emerald-500">
            <span className="text-xl sm:text-2xl font-black font-display text-black block">15 Min Reply</span>
            <span className="text-xs text-neutral-600 font-semibold leading-tight block">
              Direct founder quotation &amp; customized itinerary on WhatsApp
            </span>
          </div>

        </div>
      </div>

    </section>
  );
}
