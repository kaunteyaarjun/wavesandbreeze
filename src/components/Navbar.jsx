import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Search, Plane, ArrowRight, ChevronDown } from 'lucide-react';
import { teamData } from '../data/team';

// Social SVG Icons
const InstagramIcon = ({ className = "w-3 h-3" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
  </svg>
);

const FacebookIcon = ({ className = "w-3 h-3" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
  </svg>
);

const WhatsAppIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeMegaMenu, setActiveMegaMenu] = useState(null); // 'odisha' | 'india' | 'international' | null

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    const openPackageInquiry = (destination, label, service = 'Odisha Tour & Holiday Package') => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    onOpenInquiry({
      destination,
      service,
      notes: `Enquiring about ${label}`
    });
  };

  return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const openPackageInquiry = (destination, label, service = 'Odisha Tour & Holiday Package') => {
    setActiveMegaMenu(null);
    setMobileMenuOpen(false);
    onOpenInquiry({
      destination,
      service,
      notes: `Enquiring about ${label}`
    });
  };

  return (
    <header className="sticky top-0 z-50 transition-all duration-200">
      
      {/* 1. TOP CREAM/GOLD BAR (Exact Match to Reference Site) */}
      <div className="bg-[#fcfaf6] border-b border-[#e8dfd3] py-1.5 px-4 sm:px-6 lg:px-8 text-neutral-700">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Left: Call Now Pill */}
          <a 
            href="tel:9040577429" 
            className="inline-flex items-center gap-2 bg-[#f4ebe1] hover:bg-[#ebdccf] text-neutral-800 text-[11px] sm:text-xs font-bold px-3 py-1 rounded-full border border-[#decbb7] transition-colors"
          >
            <Phone className="w-3 h-3 text-[#d97706]" />
            <span className="uppercase text-[10px] text-neutral-500 font-extrabold hidden xs:inline">CALL NOW</span>
            <span className="font-extrabold">+91 9040577429</span>
          </a>

          {/* Center: Decorative Flying Birds Silhouette Motif */}
          <div className="hidden md:flex items-center gap-6 opacity-60">
            <span className="text-[14px]">🕊️</span>
            <span className="text-[18px]">🕊️</span>
            <span className="text-[12px]">🕊️</span>
          </div>

          {/* Right: Social Media Pills & Language Selector */}
          <div className="flex items-center gap-2 sm:gap-3 text-xs">
            <div className="flex items-center gap-1.5 text-neutral-500">
              <a href="#" className="w-6 h-6 rounded-full bg-[#f4ebe1] hover:bg-[#f5b324] hover:text-black flex items-center justify-center transition-colors" aria-label="Instagram">
                <InstagramIcon className="w-3 h-3" />
              </a>
              <a href="#" className="w-6 h-6 rounded-full bg-[#f4ebe1] hover:bg-[#f5b324] hover:text-black flex items-center justify-center transition-colors" aria-label="Facebook">
                <FacebookIcon className="w-3 h-3" />
              </a>
              <a href={`https://wa.me/${teamData.founders[0].whatsapp}`} target="_blank" rel="noreferrer" className="w-6 h-6 rounded-full bg-[#f4ebe1] hover:bg-[#25D366] hover:text-white flex items-center justify-center transition-colors" aria-label="WhatsApp">
                <WhatsAppIcon className="w-3 h-3" />
              </a>
            </div>

            <div className="h-4 w-px bg-neutral-300 hidden sm:block"></div>

            <span className="text-[11px] font-bold text-neutral-700 hidden sm:inline-flex items-center gap-1 bg-[#f4ebe1] px-2.5 py-0.5 rounded-full border border-[#decbb7]">
              <span>🇮🇳 English</span>
            </span>
          </div>

        </div>
      </div>

      {/* 2. FLOATING WHITE ROUNDED PILL NAVIGATION BAR */}
      <div 
        className="bg-[#fcfaf6]/95 backdrop-blur-md py-2 sm:py-2.5 px-3 sm:px-6 border-b border-neutral-200 relative"
        onMouseLeave={() => setActiveMegaMenu(null)}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo Brand on Left */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group select-none">
            <img 
              src="/logo.png" 
              alt="Waves & Breeze Hospitality" 
              className="h-10 sm:h-12 w-auto object-contain transition-transform group-hover:scale-105"
              onError={(e) => { e.target.onerror = null; e.target.src = '/logo.jpg'; }}
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg tracking-tight text-neutral-900 leading-tight">
                Waves &amp; Breeze
              </span>
              <span className="text-[9px] font-extrabold tracking-widest uppercase text-[#d97706]">
                TRAVEL DMC • TOURS • MICE
              </span>
            </div>
          </a>

          {/* Center Navigation Links with Dropdown Triggers */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] xl:text-[14px] font-bold text-neutral-700">
            <a 
              href="#" 
              className="px-3.5 py-1.5 rounded-full bg-neutral-900 text-white font-extrabold transition-colors shadow-sm"
            >
              Home
            </a>

            {/* Odisha ▾ */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('odisha')}
            >
              <button className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors flex items-center gap-1 font-bold">
                <span>Odisha</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            </div>

            {/* India ▾ (Exact Match to Screenshot 2) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('india')}
            >
              <button className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors flex items-center gap-1 font-bold">
                <span>India</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            </div>

            {/* International ▾ (Exact Match to Screenshots 3 & 4) */}
            <div 
              className="relative"
              onMouseEnter={() => setActiveMegaMenu('international')}
            >
              <button className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors flex items-center gap-1 font-bold">
                <span>International</span>
                <ChevronDown className="w-3.5 h-3.5 opacity-60" />
              </button>
            </div>

            {/* Destinations */}
            <a href="#destinations" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
              Destinations
            </a>

            {/* Corporate MICE */}
            <a href="#services" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
              Corporate MICE
            </a>

            {/* About Us */}
            <a href="#about" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
              About Us
            </a>

            {/* Contact / FAQs */}
            <a href="#faqs" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
              FAQs
            </a>
          </nav>

          {/* Right Action: Search Icon + Golden BOOK NOW Button */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={() => onOpenInquiry()}
              className="w-9 h-9 rounded-full bg-neutral-100 hover:bg-neutral-200 text-neutral-700 flex items-center justify-center transition-colors"
              aria-label="Search"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Golden Gradient BOOK NOW Button (Exact Reference Match) */}
            <button
              onClick={() => onOpenInquiry()}
              className="group flex items-center gap-2.5 bg-gradient-to-r from-[#e5a93c] via-[#f5b324] to-[#e5a93c] hover:brightness-110 text-black font-extrabold text-xs sm:text-sm pl-4 pr-1.5 py-1.5 rounded-full shadow-md active:scale-95 transition-all"
            >
              <Plane className="w-3.5 h-3.5 -rotate-45" />
              <span className="uppercase tracking-wider font-extrabold text-[12px]">BOOK NOW</span>
              <span className="w-7 h-7 rounded-full bg-black text-[#f5b324] flex items-center justify-center font-bold transition-transform group-hover:translate-x-0.5">
                ➔
              </span>
            </button>
          </div>

          {/* Mobile Right Action + Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenInquiry()}
              className="px-3 py-1.5 rounded-full bg-gradient-to-r from-[#e5a93c] to-[#f5b324] text-black text-xs font-extrabold active:scale-95 transition-transform shadow-sm"
            >
              Book Now ➔
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-9 h-9 flex items-center justify-center rounded-lg text-black hover:bg-neutral-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>

        {/* =========================================================================
            3. MEGA-MENU FLYOUT CONTAINERS (100% Match to Screenshots 2, 3, 4)
           ========================================================================= */}

        {/* MEGA-MENU 1: INDIA PACKAGES (Screenshot 2) */}
        {activeMegaMenu === 'india' && (
          <div 
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-1 w-full max-w-5xl bg-[#fdfbf7] border border-[#e5dcd0] shadow-2xl rounded-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            onMouseEnter={() => setActiveMegaMenu('india')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="grid grid-cols-12 gap-6 p-6">
              
              {/* Left Promotional Image Card */}
              <div className="col-span-3 rounded-xl overflow-hidden relative shadow-md bg-neutral-900 group">
                <img 
                  src="/destinations/india_desert.jpg" 
                  alt="India Desert Tours" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-5 left-4 right-4 z-10 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#f5b324] block mb-1">
                    INDIA TOURS
                  </span>
                  <h3 className="font-serif text-2xl font-bold leading-tight mb-1">
                    India packages
                  </h3>
                  <p className="font-serif italic text-xs text-neutral-200 mb-3">
                    Kashmir to Kerala, planned from here.
                  </p>
                  <a 
                    href="#packages" 
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-[#f5b324] px-3 py-1.5 rounded-full hover:bg-white transition-colors"
                  >
                    <span>VIEW TOURS</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Center & Right 3 Columns */}
              <div className="col-span-9 space-y-4">
                
                {/* Top Category Tags */}
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500 border-b border-[#ebdccf] pb-2">
                  <span className="text-[#d97706]">POPULAR</span>
                  <span>❖</span>
                  <span className="hover:text-black cursor-pointer">HONEYMOON</span>
                  <span>❖</span>
                  <span className="hover:text-black cursor-pointer">FAMILY</span>
                  <span>❖</span>
                  <span className="hover:text-black cursor-pointer">HERITAGE</span>
                </div>

                <div className="grid grid-cols-3 gap-6 text-xs">
                  
                  {/* Column 1: Tour packages */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2.5 pb-1 border-b border-neutral-200">
                      Tour packages
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      {[
                        { num: 'N°01', label: 'Kashmir - 7 Days', dest: 'Kashmir' },
                        { num: 'N°02', label: 'Kerala - 7 Days', dest: 'Kerala' },
                        { num: 'N°03', label: 'Sikkim - 6 Days', dest: 'Sikkim' },
                        { num: 'N°04', label: 'Darjeeling - 5 Days', dest: 'Darjeeling' },
                        { num: 'N°05', label: 'Andaman - 6 Days', dest: 'Andaman' },
                        { num: 'N°06', label: 'Rajasthan - 8 Days', dest: 'Rajasthan' },
                        { num: 'N°07', label: 'Goa - 5 Days', dest: 'Goa' }
                      ].map((item) => (
                        <li key={item.num}>
                          <button
                            type="button"
                            onClick={() => openPackageInquiry(item.dest, item.label, 'India Domestic Tour Package')}
                            className="hover:text-[#d97706] transition-colors block text-left w-full"
                          >
                            <strong className="text-[10px] text-neutral-400 font-mono">{item.num}</strong> {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Honeymoon Packages */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2.5 pb-1 border-b border-neutral-200 flex items-center gap-1">
                      <span>💖 Honeymoon Packages</span>
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      {[
                        { num: 'N°01', label: 'Kerala Honeymoon - 6 Days', dest: 'Kerala' },
                        { num: 'N°02', label: 'Kashmir Honeymoon - 6 Days', dest: 'Kashmir' },
                        { num: 'N°03', label: 'Andaman Honeymoon - 6 Days', dest: 'Andaman' },
                        { num: 'N°04', label: 'Sikkim Honeymoon - 6 Days', dest: 'Sikkim' },
                        { num: 'N°05', label: 'Meghalaya Honeymoon - 6 Days', dest: 'Meghalaya' },
                        { num: 'N°06', label: 'Rajasthan Honeymoon - 7 Days', dest: 'Rajasthan' }
                      ].map((item) => (
                        <li key={item.num}>
                          <button
                            type="button"
                            onClick={() => openPackageInquiry(item.dest, item.label, 'India Domestic Tour Package')}
                            className="hover:text-[#d97706] transition-colors block text-left w-full"
                          >
                            <strong className="text-[10px] text-neutral-400 font-mono">{item.num}</strong> {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Family Packages */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2.5 pb-1 border-b border-neutral-200 flex items-center gap-1">
                      <span>👨‍👩‍👧 Family Packages</span>
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      {[
                        { num: 'N°01', label: 'Kerala Family - 7 Days', dest: 'Kerala' },
                        { num: 'N°02', label: 'Kashmir Family - 7 Days', dest: 'Kashmir' },
                        { num: 'N°03', label: 'Andaman Family - 6 Days', dest: 'Andaman' },
                        { num: 'N°04', label: 'Rajasthan Family - 7 Days', dest: 'Rajasthan' },
                        { num: 'N°05', label: 'Sikkim Family - 6 Days', dest: 'Sikkim' },
                        { num: 'N°06', label: 'Himachal Family - 7 Days', dest: 'Himachal' }
                      ].map((item) => (
                        <li key={item.num}>
                          <button
                            type="button"
                            onClick={() => openPackageInquiry(item.dest, item.label, 'India Domestic Tour Package')}
                            className="hover:text-[#d97706] transition-colors block text-left w-full"
                          >
                            <strong className="text-[10px] text-neutral-400 font-mono">{item.num}</strong> {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Bar inside mega menu */}
                <div className="pt-3 border-t border-[#ebdccf] flex items-center justify-between text-xs text-neutral-600">
                  <a href="#packages" className="font-bold text-black hover:text-[#d97706] flex items-center gap-1">
                    <span>View all India tour packages</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <span className="text-neutral-400">All itineraries custom-crafted from Bhubaneswar</span>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* MEGA-MENU 2: INTERNATIONAL PACKAGES (Screenshots 3 & 4) */}
        {activeMegaMenu === 'international' && (
          <div 
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-1 w-full max-w-5xl bg-[#fdfbf7] border border-[#e5dcd0] shadow-2xl rounded-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            onMouseEnter={() => setActiveMegaMenu('international')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="grid grid-cols-12 gap-6 p-6">
              
              {/* Left Promotional Image Card */}
              <div className="col-span-3 rounded-xl overflow-hidden relative shadow-md bg-neutral-900 group">
                <img 
                  src="/destinations/world_tours.jpg" 
                  alt="International Tours" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-5 left-4 right-4 z-10 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#f5b324] block mb-1">
                    WORLD TOURS
                  </span>
                  <h3 className="font-serif text-2xl font-bold leading-tight mb-1">
                    International packages
                  </h3>
                  <p className="font-serif italic text-xs text-neutral-200 mb-3">
                    Dubai, Europe, Asia and more.
                  </p>
                  <a 
                    href="#packages" 
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-[#f5b324] px-3 py-1.5 rounded-full hover:bg-white transition-colors"
                  >
                    <span>VIEW TOURS</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Center & Right 3 Columns */}
              <div className="col-span-9 space-y-4">
                
                {/* Top Category Tags */}
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500 border-b border-[#ebdccf] pb-2">
                  <span className="text-[#d97706]">POPULAR</span>
                  <span>❖</span>
                  <span className="hover:text-black cursor-pointer">WORLD</span>
                  <span>❖</span>
                  <span className="hover:text-black cursor-pointer">EUROPE</span>
                  <span>❖</span>
                  <span className="hover:text-black cursor-pointer">HONEYMOON</span>
                </div>

                <div className="grid grid-cols-3 gap-6 text-xs">
                  
                  {/* Column 1: Tour packages */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2.5 pb-1 border-b border-neutral-200">
                      Tour packages
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      {[
                        { num: 'N°01', label: 'Dubai - 5 Days', dest: 'Dubai' },
                        { num: 'N°02', label: 'Thailand - 7 Days', dest: 'Thailand' },
                        { num: 'N°03', label: 'Bali - 7 Days', dest: 'Bali' },
                        { num: 'N°04', label: 'Singapore - 5 Days', dest: 'Singapore' },
                        { num: 'N°05', label: 'Vietnam - 8 Days', dest: 'Vietnam' },
                        { num: 'N°06', label: 'Maldives - 5 Days', dest: 'Maldives' },
                        { num: 'N°07', label: 'Europe - 10 Days', dest: 'Europe' }
                      ].map((item) => (
                        <li key={item.num}>
                          <button
                            type="button"
                            onClick={() => openPackageInquiry(item.dest, item.label, 'International Holiday Package')}
                            className="hover:text-[#d97706] transition-colors block text-left w-full"
                          >
                            <strong className="text-[10px] text-neutral-400 font-mono">{item.num}</strong> {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Gulf, Europe & Groups */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2.5 pb-1 border-b border-neutral-200">
                      Gulf, Europe &amp; Groups
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      {[
                        { num: 'N°01', label: 'Abu Dhabi - 5 Days', dest: 'Abu Dhabi' },
                        { num: 'N°02', label: 'Turkey - 8 Days', dest: 'Turkey' },
                        { num: 'N°03', label: 'Switzerland - 7 Days', dest: 'Switzerland' },
                        { num: 'N°04', label: 'Egypt - 8 Days', dest: 'Egypt' },
                        { num: 'N°05', label: 'Spain - 8 Days', dest: 'Spain' },
                        { num: 'N°06', label: 'Uzbekistan - 7 Days', dest: 'Uzbekistan' }
                      ].map((item) => (
                        <li key={item.num}>
                          <button
                            type="button"
                            onClick={() => openPackageInquiry(item.dest, item.label, 'International Holiday Package')}
                            className="hover:text-[#d97706] transition-colors block text-left w-full"
                          >
                            <strong className="text-[10px] text-neutral-400 font-mono">{item.num}</strong> {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: Honeymoon Packages */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2.5 pb-1 border-b border-neutral-200 flex items-center gap-1">
                      <span>💖 Honeymoon Packages</span>
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      {[
                        { num: 'N°01', label: 'Bali Honeymoon - 6 Days', dest: 'Bali' },
                        { num: 'N°02', label: 'Maldives Honeymoon - 5 Days', dest: 'Maldives' },
                        { num: 'N°03', label: 'Europe Honeymoon - 8 Days', dest: 'Europe' },
                        { num: 'N°04', label: 'Switzerland Honeymoon - 6 Days', dest: 'Switzerland' },
                        { num: 'N°05', label: 'Paris Honeymoon - 5 Days', dest: 'Europe' },
                        { num: 'N°06', label: 'Dubai Honeymoon - 5 Days', dest: 'Dubai' }
                      ].map((item) => (
                        <li key={item.num}>
                          <button
                            type="button"
                            onClick={() => openPackageInquiry(item.dest, item.label, 'International Holiday Package')}
                            className="hover:text-[#d97706] transition-colors block text-left w-full"
                          >
                            <strong className="text-[10px] text-neutral-400 font-mono">{item.num}</strong> {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Bar inside mega menu */}
                <div className="pt-3 border-t border-[#ebdccf] flex items-center justify-between text-xs text-neutral-600">
                  <a href="#packages" className="font-bold text-black hover:text-[#d97706] flex items-center gap-1">
                    <span>View all International packages</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                  <span className="text-neutral-400">Complete visa, flight &amp; hotel assistance from Bhubaneswar</span>
                </div>

              </div>

            </div>
          </div>
        )}

        {/* MEGA-MENU 3: ODISHA DMC & CIRCUITS */}
        {activeMegaMenu === 'odisha' && (
          <div 
            className="hidden lg:block absolute left-1/2 -translate-x-1/2 top-full mt-1 w-full max-w-5xl bg-[#fdfbf7] border border-[#e5dcd0] shadow-2xl rounded-2xl overflow-hidden z-50 animate-in fade-in slide-in-from-top-2 duration-150"
            onMouseEnter={() => setActiveMegaMenu('odisha')}
            onMouseLeave={() => setActiveMegaMenu(null)}
          >
            <div className="grid grid-cols-12 gap-6 p-6">
              
              {/* Left Promotional Image Card */}
              <div className="col-span-3 rounded-xl overflow-hidden relative shadow-md bg-neutral-900 group">
                <img 
                  src="/destinations/jagannath.jpg" 
                  alt="Odisha Golden Triangle" 
                  className="w-full h-full object-cover transition-transform group-hover:scale-105 duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent"></div>
                <div className="absolute bottom-5 left-4 right-4 z-10 text-white">
                  <span className="text-[10px] uppercase font-bold tracking-widest text-[#f5b324] block mb-1">
                    ODISHA TOURS
                  </span>
                  <h3 className="font-serif text-2xl font-bold leading-tight mb-1">
                    Odisha packages
                  </h3>
                  <p className="font-serif italic text-xs text-neutral-200 mb-3">
                    Temple coasts, tribal trails &amp; lagoon mornings.
                  </p>
                  <a 
                    href="#packages" 
                    className="inline-flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-black bg-[#f5b324] px-3 py-1.5 rounded-full hover:bg-white transition-colors"
                  >
                    <span>VIEW TOURS</span>
                    <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Center & Right 3 Columns */}
              <div className="col-span-9 space-y-4">
                
                {/* Top Category Tags */}
                <div className="flex items-center gap-4 text-[10px] font-bold uppercase tracking-widest text-neutral-500 border-b border-[#ebdccf] pb-2">
                  <span className="text-[#d97706]">HERITAGE</span>
                  <span>❖</span>
                  <span className="hover:text-black cursor-pointer">WILDLIFE &amp; NATURE</span>
                  <span>❖</span>
                  <span className="hover:text-black cursor-pointer">HILL STATIONS</span>
                  <span>❖</span>
                  <span className="hover:text-black cursor-pointer">SPIRITUAL &amp; MICE</span>
                </div>

                <div className="grid grid-cols-3 gap-6 text-xs">
                  
                  {/* Column 1: Signature Circuits */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2.5 pb-1 border-b border-neutral-200">
                      Signature Odisha Circuits
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      {[
                        { num: 'N°01', label: 'Golden Triangle (Puri-Konark-BBSR)', dest: 'Puri & Golden Triangle' },
                        { num: 'N°02', label: 'Chilika Lagoon & Dolphin Safari', dest: 'Chilika Lake & Mangalajodi' },
                        { num: 'N°03', label: 'Daringbadi (Kashmir of Odisha)', dest: 'Daringbadi Hill Station' },
                        { num: 'N°04', label: 'Bhitarkanika Mangrove Safari', dest: 'Bhitarkanika Wildlife Safari' },
                        { num: 'N°05', label: 'Similipal Tiger Reserve & Falls', dest: 'Bhitarkanika Wildlife Safari' },
                        { num: 'N°06', label: 'Puri VIP Jagannath Darshan', dest: 'Puri & Golden Triangle' }
                      ].map((item) => (
                        <li key={item.num}>
                          <button
                            type="button"
                            onClick={() => openPackageInquiry(item.dest, item.label, 'Odisha Tour & Holiday Package')}
                            className="hover:text-[#d97706] transition-colors block text-left w-full"
                          >
                            <strong className="text-[10px] text-neutral-400 font-mono">{item.num}</strong> {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 2: Pilgrimage & Cultural Stays */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2.5 pb-1 border-b border-neutral-200">
                      Pilgrimage &amp; Eco Retreat Odisha
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      {[
                        { num: 'N°01', label: 'Shree Jagannath Temple VIP Darshan', dest: 'Puri & Golden Triangle' },
                        { num: 'N°02', label: 'Konark Sun Temple Heritage Walk', dest: 'Puri & Golden Triangle' },
                        { num: 'N°03', label: 'Bhubaneswar Lingaraj & Caves Tour', dest: 'Puri & Golden Triangle' },
                        { num: 'N°04', label: 'Satkosia Gorge Eco Retreat Glamping', dest: 'Eco Retreat Satkosia', service: 'Eco Retreat by Odisha Tourism (Glamping)' },
                        { num: 'N°05', label: 'Daringbadi & Putsil Eco Retreat', dest: 'Eco Retreat Daringbadi', service: 'Eco Retreat by Odisha Tourism (Glamping)' },
                        { num: 'N°06', label: 'Konark Marine Drive Eco-Retreat', dest: 'Eco Retreat Konark', service: 'Eco Retreat by Odisha Tourism (Glamping)' }
                      ].map((item) => (
                        <li key={item.num}>
                          <button
                            type="button"
                            onClick={() => openPackageInquiry(item.dest, item.label, item.service || 'Puri Jagannath VIP Darshan & Coastal')}
                            className="hover:text-[#d97706] transition-colors block text-left w-full"
                          >
                            <strong className="text-[10px] text-neutral-400 font-mono">{item.num}</strong> {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Column 3: MICE & Luxury Stays */}
                  <div>
                    <h4 className="font-bold text-neutral-900 mb-2.5 pb-1 border-b border-neutral-200">
                      Corporate MICE &amp; Stays
                    </h4>
                    <ul className="space-y-2 text-neutral-700">
                      {[
                        { num: 'N°01', label: 'Puri Oceanfront Conclaves', dest: 'Puri & Golden Triangle' },
                        { num: 'N°02', label: 'Bhubaneswar Mega Conventions', dest: 'Bhubaneswar Convention & MICE' },
                        { num: 'N°03', label: 'Eco Retreat by Odisha Tourism (All 7)', dest: 'Eco Retreat by Odisha Tourism (All 7 Sites)', service: 'Eco Retreat by Odisha Tourism (Glamping)' },
                        { num: 'N°04', label: '5-Star Hotel Alliances (Mayfair/ITC)', dest: 'Bhubaneswar Convention & MICE' },
                        { num: 'N°05', label: 'Hirakud & Sonapur Eco Retreat', dest: 'Eco Retreat Hirakud', service: 'Eco Retreat by Odisha Tourism (Glamping)' }
                      ].map((item) => (
                        <li key={item.num}>
                          <button
                            type="button"
                            onClick={() => openPackageInquiry(item.dest, item.label, item.service || 'Corporate MICE / Offsite / Conference')}
                            className="hover:text-[#d97706] transition-colors block text-left w-full"
                          >
                            <strong className="text-[10px] text-neutral-400 font-mono">{item.num}</strong> {item.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                </div>

                {/* Bottom Bar inside mega menu */}
                <div className="pt-3 border-t border-[#ebdccf] flex items-center justify-between text-xs text-neutral-600">
                  <div className="flex items-center gap-4">
                    <a href="#packages" onClick={() => setActiveMegaMenu(null)} className="font-bold text-black hover:text-[#d97706] flex items-center gap-1">
                      <span>View all Odisha tour packages</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                    <span className="text-neutral-300">|</span>
                    <a href="#eco-retreat" onClick={() => setActiveMegaMenu(null)} className="font-bold text-[#14532d] hover:text-[#d97706] flex items-center gap-1.5">
                      <img src="/eco-retreat-odisha.png" alt="Eco Retreat Odisha" className="h-4 w-auto object-contain" />
                      <span>All 7 Eco Retreat Camps</span>
                      <ArrowRight className="w-3 h-3" />
                    </a>
                  </div>
                  <span className="text-neutral-400">Headquartered in Old Town, Bhubaneswar</span>
                </div>

              </div>

            </div>
          </div>
        )}

      </div>

      {/* Mobile Full Screen Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[88px] bottom-0 bg-white z-50 flex flex-col justify-between p-6 overflow-y-auto border-t border-neutral-200">
          <div className="space-y-3 pt-2">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              Home
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              Odisha Tour Packages
            </a>
            <a 
              href="#eco-retreat" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-[#14532d] border-b border-neutral-100 pb-2.5"
            >
              Eco Retreat by Odisha Tourism
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              India Tour Packages (Kashmir, Goa, Kerala)
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              International Packages (Dubai, Singapore, Thailand)
            </a>
            <a 
              href="#destinations" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              Curated Destinations
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              Corporate MICE Management
            </a>
            <a 
              href="#about" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              About Us
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black pb-2"
            >
              FAQs
            </a>
          </div>
          
          <div className="pt-6 border-t border-neutral-200 space-y-3 pb-8">
            <div className="bg-neutral-50 p-4 rounded-xl space-y-2 border border-neutral-100">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#d97706] block">
                DIRECT FOUNDER HOTLINE (BBSR HQ)
              </span>
              <a href="tel:9040577429" className="text-sm font-bold text-black flex items-center gap-2">
                <Phone className="w-4 h-4 text-black" />
                <span>Biswaranjan Behera: +91 9040577429</span>
              </a>
            </div>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenInquiry();
              }}
              className="w-full py-3.5 bg-gradient-to-r from-[#e5a93c] via-[#f5b324] to-[#e5a93c] text-black font-extrabold text-sm text-center rounded-full shadow-md active:scale-98 transition-transform"
            >
              Plan Your Journey ➔
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
