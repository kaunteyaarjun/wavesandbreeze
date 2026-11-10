import React, { useState, useEffect } from 'react';
import { Phone, Menu, X, Search, Plane, ArrowRight } from 'lucide-react';
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

// WhatsApp icon
const WhatsAppIcon = ({ className = "w-3.5 h-3.5" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

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
      <div className="bg-[#fcfaf6]/95 backdrop-blur-md py-2 sm:py-2.5 px-3 sm:px-6 border-b border-neutral-200">
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

          {/* Center Navigation Links - Desktop Only (Matching Reference System) */}
          <nav className="hidden lg:flex items-center gap-1 text-[13px] xl:text-[14px] font-bold text-neutral-700">
            <a 
              href="#" 
              className="px-3.5 py-1.5 rounded-full bg-neutral-900 text-white font-extrabold transition-colors shadow-sm"
            >
              Home
            </a>
            <a href="#packages" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
              Odisha Packages
            </a>
            <a href="#fleet" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
              Cabs &amp; Fleet
            </a>
            <a href="#destinations" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
              Destinations
            </a>
            <a href="#services" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
              Corporate MICE
            </a>
            <a href="#founders" className="px-3 py-1.5 rounded-full hover:bg-neutral-100 hover:text-black transition-colors">
              Founders
            </a>
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
              href="#fleet" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              Cabs &amp; Fleet Rentals
            </a>
            <a 
              href="#destinations" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              Destinations (Puri, Konark, Chilika, Daringbadi)
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              Corporate MICE Management
            </a>
            <a 
              href="#founders" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-lg font-bold text-black border-b border-neutral-100 pb-2.5"
            >
              Founders &amp; Leadership
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
                DIRECT FOUNDER HOTLINES (BBSR HQ)
              </span>
              <a href="tel:9040577429" className="text-sm font-bold text-black flex items-center gap-2">
                <Phone className="w-4 h-4 text-black" />
                <span>Biswaranjan Behera: +91 9040577429</span>
              </a>
              <a href="tel:8249657614" className="text-sm font-bold text-black flex items-center gap-2">
                <Phone className="w-4 h-4 text-black" />
                <span>Sameer Kumar Panigrahi: +91 8249657614</span>
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
