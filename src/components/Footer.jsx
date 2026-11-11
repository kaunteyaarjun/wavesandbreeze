import React from 'react';
import { Phone, MapPin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { teamData } from '../data/team';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-black text-white pt-12 sm:pt-16 pb-10 border-t border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 sm:gap-12 pb-12 sm:pb-16 border-b border-neutral-800">
          
          {/* Brand & Summary Column */}
          <div className="lg:col-span-5 space-y-4 sm:space-y-6">
            <div className="flex items-center gap-3">
              <img 
                src="/logo.png" 
                alt="Waves & Breeze Hospitality" 
                className="h-12 sm:h-16 w-auto object-contain"
                onError={(e) => { e.target.onerror = null; e.target.src = '/logo.jpg'; }}
              />
              <div className="flex flex-col">
                <span className="font-display font-bold text-lg sm:text-xl text-white">
                  Waves &amp; Breeze
                </span>
                <span className="text-[10px] uppercase tracking-widest text-[#fff033] font-bold">
                  Odisha Travel Agency • Eco Retreat • MICE Agency
                </span>
              </div>
            </div>

            <p className="text-neutral-400 text-xs sm:text-sm leading-relaxed max-w-sm">
              Bhubaneswar's trusted Odisha Travel Agency &amp; specialist MICE Agency: Custom Odisha &amp; global travel packages, official Eco Retreat by Odisha Tourism glamping bookings, luxury resorts, and corporate MICE events.
            </p>

            <div className="space-y-2 text-xs text-neutral-400 pt-1">
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#fff033] shrink-0" />
                <span>Email: <a href="mailto:info@wavesandbreeze.in" className="text-white hover:text-[#fff033] font-semibold">info@wavesandbreeze.in</a></span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#fff033] shrink-0" />
                <span>Biswaranjan Behera (Founder): <a href="tel:9040577429" className="text-white hover:text-[#fff033] font-semibold">+91 9040577429</a></span>
              </div>
              <div className="flex items-start gap-2 pt-1">
                <MapPin className="w-3.5 h-3.5 text-[#fff033] shrink-0 mt-0.5" />
                <span className="leading-snug">Near Hanuman Temple Lane, Old Town, Bhubaneswar, Odisha</span>
              </div>
            </div>
          </div>

          {/* Links Column 1: Company */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-neutral-400">
              Company
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li>
                <a href="#about" className="hover:text-white transition-colors block py-1">About Us</a>
              </li>
              <li>
                <a href="#destinations" className="hover:text-white transition-colors block py-1">Destinations</a>
              </li>
              <li>
                <a href="#founders" className="hover:text-white transition-colors block py-1">Leadership</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors block py-1">Management Process</a>
              </li>
              <li>
                <a href="#faqs" className="hover:text-white transition-colors block py-1">FAQs</a>
              </li>
            </ul>
          </div>

          {/* Links Column 2: Services */}
          <div className="lg:col-span-3 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-neutral-400">
              Tours &amp; Services
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li>
                <a href="#packages" className="hover:text-white transition-colors block py-1">Odisha Tour Packages</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors block py-1">India &amp; Global Holidays</a>
              </li>
              <li>
                <a href="#packages" className="hover:text-white transition-colors block py-1">Puri &amp; Golden Triangle</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors block py-1">Corporate MICE &amp; Offsites</a>
              </li>
              <li>
                <a href="#eco-retreat" className="hover:text-white transition-colors block py-1">Eco Retreat by Odisha Tourism</a>
              </li>
            </ul>
          </div>

          {/* Links Column 3: Connect */}
          <div className="lg:col-span-2 space-y-3 sm:space-y-4">
            <h4 className="text-[11px] sm:text-xs font-extrabold uppercase tracking-widest text-neutral-400">
              Connect
            </h4>
            <ul className="space-y-2 text-xs sm:text-sm text-neutral-300">
              <li>
                <a href="tel:9040577429" className="hover:text-white transition-colors flex items-center gap-1.5 py-1">
                  <span>Call Biswaranjan</span>
                  <ArrowUpRight className="w-3 h-3 text-[#fff033]" />
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${teamData.founders[0].whatsapp}?text=Hello%20Waves%20and%20Breeze%20Hospitality%2C%20I%20would%20like%20to%20plan%20a%20trip%20or%20Eco%20Retreat%20Odisha%20stay.`}
                  target="_blank"
                  rel="noreferrer"
                  className="hover:text-[#fff033] transition-colors flex items-center gap-1.5 text-[#fff033] font-semibold py-1"
                >
                  <span>WhatsApp Chat</span>
                  <ArrowUpRight className="w-3 h-3" />
                </a>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-[11px] sm:text-xs text-neutral-500 text-center sm:text-left">
          <p>
            &copy; {currentYear} Waves and Breeze Hospitality. All Rights Reserved.
          </p>
          <div className="font-extrabold uppercase tracking-widest text-neutral-400 text-[10px] sm:text-[11px]">
            ODISHA TRAVEL AGENCY • ECO RETREAT ODISHA • CORPORATE MICE AGENCY
          </div>
          <div className="flex items-center gap-3 text-neutral-500 text-[11px]">
            <span>Bhubaneswar, Odisha</span>
            <span>•</span>
            <span>Global Reach</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
