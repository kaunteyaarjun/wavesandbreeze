import React, { useState } from 'react';
import { Clock, MapPin, Check, ArrowUpRight, Sparkles, Filter, ChevronRight } from 'lucide-react';
import { tourPackagesData } from '../data/packages';
import FadeContent from './FadeContent';

// Authentic Official WhatsApp Icon
const WhatsAppIcon = ({ className = "w-4 h-4 text-white" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function TourPackagesSection({ onOpenInquiry }) {
  const [activeCategory, setActiveCategory] = useState('All');

  const categories = ['All', 'Odisha Holidays', 'India Holidays', 'International', 'Wildlife & Nature', 'Hill Stations', 'Corporate MICE'];

  const filteredPackages = activeCategory === 'All'
    ? tourPackagesData
    : tourPackagesData.filter(pkg => pkg.category === activeCategory);

  const handleWhatsAppEnquiry = (pkg) => {
    const text = encodeURIComponent(
      `Hello Waves and Breeze Hospitality! 👋\n\nI am interested in booking / customizing this tour package:\n• Package: ${pkg.title}\n• Duration: ${pkg.duration}\n• Destination: ${pkg.destination}\n• Route: ${pkg.route}\n\nPlease share availability, hotels, and custom quotation.`
    );
    window.open(`https://wa.me/919040577429?text=${text}`, '_blank');
  };

  return (
    <section id="packages" className="bg-[#f9f9f9] py-14 sm:py-24 lg:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeContent trigger="scroll" duration={0.9} threshold={0.1} ease="power2.out">
          {/* Section Tag */}
          <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-neutral-400 mb-4 sm:mb-6 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#fff033] text-black font-black text-xs">02</span>
            <span className="text-neutral-700">CURATED ODISHA TOURS &amp; MICE PACKAGES</span>
          </div>

          {/* Heading with Maroon Accent */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] sm:leading-[1.08]">
                Handcrafted Itineraries.<br />
                <span className="text-[#8b181b]">From Pilgrimage to Corporate Summits.</span>
              </h2>
            </div>
            <p className="text-neutral-600 text-sm sm:text-base max-w-md leading-relaxed">
              Every tour is crafted with handpicked 4/5-star oceanfront &amp; heritage hotels, seamless sightseeing logistics, and personalized VIP assistance across Odisha and beyond.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 sm:gap-3 mb-8 sm:mb-12">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 sm:px-5 py-2 sm:py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all ${
                  activeCategory === cat
                    ? 'bg-black text-white shadow-md'
                    : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-neutral-200'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </FadeContent>

        {/* Packages Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredPackages.map((pkg) => (
            <div
              key={pkg.id}
              className="group bg-white rounded-none border border-neutral-200 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Photo Header */}
                <div className="relative h-56 sm:h-64 overflow-hidden bg-neutral-900">
                  <img
                    src={pkg.image}
                    alt={pkg.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Top Badge */}
                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <span className="px-2.5 py-1 bg-[#fff033] text-black text-[10px] font-black uppercase tracking-wider shadow">
                      {pkg.badge}
                    </span>
                    <span className="px-2.5 py-1 bg-black/80 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {pkg.category}
                    </span>
                  </div>

                  {/* Duration Pill at bottom */}
                  <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-white z-10">
                    <div className="flex items-center gap-1.5 text-xs font-bold bg-black/60 px-2.5 py-1 backdrop-blur-sm">
                      <Clock className="w-3.5 h-3.5 text-[#fff033]" />
                      <span>{pkg.duration}</span>
                    </div>
                    <span className="text-[11px] font-semibold text-neutral-200">
                      All-Inclusive Curated Tour
                    </span>
                  </div>
                </div>

                {/* Body Details */}
                <div className="p-5 sm:p-6">
                  {/* Route */}
                  <div className="flex items-start gap-1.5 text-xs text-neutral-500 font-semibold mb-2">
                    <MapPin className="w-3.5 h-3.5 text-[#8b181b] shrink-0 mt-0.5" />
                    <span className="line-clamp-1">{pkg.route}</span>
                  </div>

                  {/* Title */}
                  <h3 className="font-display text-lg sm:text-xl font-bold text-black group-hover:text-[#8b181b] transition-colors leading-snug mb-3">
                    {pkg.title}
                  </h3>

                  {/* Description */}
                  <p className="text-neutral-600 text-xs sm:text-sm line-clamp-2 leading-relaxed mb-4 font-normal">
                    {pkg.description}
                  </p>

                  {/* Highlights Bullet Points */}
                  <div className="space-y-1.5 mb-5 pb-5 border-b border-neutral-100">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 block mb-1">
                      Key Highlights:
                    </span>
                    {pkg.highlights.slice(0, 3).map((hl, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#25D366] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{hl}</span>
                      </div>
                    ))}
                  </div>

                  {/* Inclusions summary */}
                  <div className="text-[11px] text-neutral-500 flex items-center gap-1 font-medium">
                    <Sparkles className="w-3 h-3 text-[#fff033]" />
                    <span>Includes: Stays + Sightseeing + Meals + Transfers</span>
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="p-5 sm:p-6 pt-0 space-y-2">
                <button
                  onClick={() => handleWhatsAppEnquiry(pkg)}
                  className="w-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white py-2.5 px-4 font-bold text-xs sm:text-sm rounded-none transition-all flex items-center justify-center gap-2 shadow active:scale-98"
                >
                  <WhatsAppIcon className="w-4 h-4 text-white" />
                  <span>Enquire via WhatsApp</span>
                </button>

                <button
                  onClick={() => onOpenInquiry({
                    destination: pkg.destination,
                    service: pkg.category === 'Corporate MICE' ? 'Corporate MICE / Offsite / Conference' : pkg.category === 'International' ? 'International Holiday Package' : pkg.category === 'India Holidays' ? 'India Domestic Tour Package' : 'Odisha Tour & Holiday Package',
                    notes: `Interested in: ${pkg.title} (${pkg.duration})`
                  })}
                  className="w-full bg-neutral-100 hover:bg-neutral-200 active:bg-neutral-300 text-black py-2 px-4 font-semibold text-xs rounded-none transition-colors flex items-center justify-center gap-1.5"
                >
                  <span>Customise Itinerary</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Itinerary Banner */}
        <div className="mt-12 sm:mt-16 p-6 sm:p-10 bg-black text-white flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#fff033] block mb-1">
              TAILOR-MADE ODISHA HOLIDAYS &amp; B2B TRAVEL
            </span>
            <h3 className="font-display text-xl sm:text-3xl font-bold leading-tight">
              Looking for a custom family vacation, temple pilgrimage, or corporate offsite?
            </h3>
            <p className="text-xs sm:text-sm text-neutral-400 mt-2 max-w-xl">
              Tell us your dates, group size, and destination preferences. Our founder Biswaranjan Behera will design a bespoke itinerary within 4 hours.
            </p>
          </div>

          <button
            onClick={() => onOpenInquiry({ notes: 'Requesting Custom Tailor-Made Tour Itinerary' })}
            className="w-full md:w-auto px-6 py-3.5 bg-[#fff033] active:bg-white text-black font-bold text-xs sm:text-sm transition-all flex items-center justify-center gap-2 group whitespace-nowrap active:scale-98"
          >
            <span>Request Custom Tour Quote</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}

