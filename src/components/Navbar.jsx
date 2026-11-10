import React, { useState, useEffect } from 'react';
import { ArrowUpRight, Phone, MapPin, Menu, X } from 'lucide-react';
import { teamData } from '../data/team';

export default function Navbar({ onOpenInquiry }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Prevent background scroll when mobile menu is open
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
    <header className="sticky top-0 z-50 bg-white border-b border-neutral-200 transition-all duration-200">
      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20 lg:h-24">
          
          {/* Logo Brand on Left */}
          <a href="#" className="flex items-center gap-2.5 sm:gap-3 group select-none">
            <img 
              src="/logo.png" 
              alt="Waves & Breeze Hospitality" 
              className="h-12 sm:h-16 lg:h-20 w-auto object-contain transition-transform"
              onError={(e) => { e.target.onerror = null; e.target.src = '/logo.jpg'; }}
            />
            <div className="flex flex-col">
              <span className="font-display font-extrabold text-base sm:text-lg lg:text-xl tracking-tight text-black leading-tight">
                Waves &amp; Breeze
              </span>
              <span className="text-[9px] sm:text-[10px] lg:text-[11px] font-bold tracking-widest uppercase text-neutral-500">
                ODISHA TRAVEL DMC • TOURS • MICE
              </span>
            </div>
          </a>

          {/* Center Navigation Links - Desktop Only */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-[15px] font-medium text-neutral-700">
            <a href="#" className="hover:text-black transition-colors">
              Home
            </a>
            <a href="#packages" className="hover:text-black transition-colors">
              Tours &amp; Packages
            </a>
            <a href="#fleet" className="hover:text-black transition-colors">
              Cab Rentals
            </a>
            <a href="#services" className="hover:text-black transition-colors">
              Corporate MICE
            </a>
            <a href="#destinations" className="hover:text-black transition-colors">
              Destinations
            </a>
            <a href="#founders" className="hover:text-black transition-colors">
              Founders
            </a>
            <a href="#faqs" className="hover:text-black transition-colors">
              FAQs
            </a>
          </nav>

          {/* Right Action: Desktop Let's Talk */}
          <div className="hidden sm:flex items-center gap-4">
            <div className="h-6 w-px bg-neutral-200"></div>

            <button
              onClick={() => onOpenInquiry()}
              className="flex items-center gap-2.5 group text-black font-semibold text-[15px] active:scale-95 transition-transform"
            >
              <span>Let's Talk</span>
              <span className="w-9 h-9 rounded-full bg-[#fff033] group-hover:bg-black text-black group-hover:text-[#fff033] flex items-center justify-center font-bold transition-colors shadow-sm">
                <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </button>
          </div>

          {/* Mobile Right Action + Hamburger */}
          <div className="flex items-center gap-2 sm:hidden">
            <button
              onClick={() => onOpenInquiry()}
              className="px-3.5 py-1.5 rounded-full bg-black text-[#fff033] text-xs font-bold active:scale-95 transition-transform"
            >
              Let's Talk ↗
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="w-10 h-10 flex items-center justify-center rounded-lg text-black active:bg-neutral-100 transition-colors"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer (Full Height Slide Down with Smooth Touch Scrolling) */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-[calc(40px+4rem)] bottom-0 bg-white z-50 flex flex-col justify-between p-6 overflow-y-auto scroll-touch animate-in slide-in-from-top-2 duration-200 border-t border-neutral-200">
          <div className="space-y-4 pt-2">
            <a 
              href="#" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-xl font-bold text-black border-b border-neutral-100 pb-3"
            >
              Home
            </a>
            <a 
              href="#packages" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-xl font-bold text-black border-b border-neutral-100 pb-3"
            >
              Odisha Tours &amp; Packages
            </a>
            <a 
              href="#fleet" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-xl font-bold text-black border-b border-neutral-100 pb-3"
            >
              Cab &amp; Fleet Rentals
            </a>
            <a 
              href="#services" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-xl font-bold text-black border-b border-neutral-100 pb-3"
            >
              Corporate MICE Management
            </a>
            <a 
              href="#destinations" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-xl font-bold text-black border-b border-neutral-100 pb-3"
            >
              Destinations (Puri, Chilika, Daringbadi, Dubai)
            </a>
            <a 
              href="#founders" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-xl font-bold text-black border-b border-neutral-100 pb-3"
            >
              Founders &amp; Leadership
            </a>
            <a 
              href="#faqs" 
              onClick={() => setMobileMenuOpen(false)} 
              className="block text-xl font-bold text-black pb-2"
            >
              FAQs
            </a>
          </div>
          
          <div className="pt-6 border-t border-neutral-200 space-y-3 pb-8">
            <div className="bg-neutral-50 p-4 rounded-xl space-y-2 border border-neutral-100">
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 block">
                DIRECT FOUNDER HOTLINES
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
              className="w-full py-4 bg-black text-[#fff033] font-extrabold text-sm text-center rounded-none active:scale-98 transition-transform shadow-md"
            >
              Plan Your MICE Management Solution ↗
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
