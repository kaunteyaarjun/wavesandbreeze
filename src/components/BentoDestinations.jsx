import React from 'react';
import { MapPin, ArrowRight, Sparkles } from 'lucide-react';
import { destinationsData } from '../data/destinations';

export default function BentoDestinations({ onOpenInquiry }) {
  const bentoItems = {
    puri: destinationsData.find(d => d.id === 'puri'),
    konark: destinationsData.find(d => d.id === 'konark'),
    bhubaneswar: destinationsData.find(d => d.id === 'bhubaneswar'),
    chilika: destinationsData.find(d => d.id === 'chilika'),
    dubai: destinationsData.find(d => d.id === 'dubai'),
  };

  return (
    <section id="destinations" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Centered Title */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 text-slate-700 text-xs font-semibold mb-3">
          <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
          <span>Curated MICE Locations</span>
        </div>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Experience Our Destinations
        </h2>
        <p className="text-slate-500 text-sm sm:text-base mt-2">
          Handpicked corporate venues across Odisha and premier global circuits. Select any destination to enquire for availability and customized itineraries.
        </p>
      </div>

      {/* Bento Grid */}
      <div className="space-y-6">
        {/* Row 1: Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 1: Puri */}
          <div 
            onClick={() => onOpenInquiry({ destination: bentoItems.puri.name })}
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={bentoItems.puri.image}
              alt={bentoItems.puri.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/30">
                Odisha Hotspot
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-goldLight mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Puri, Odisha</span>
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight group-hover:text-brand-goldLight transition-colors">
                  Puri Golden Beach Coast
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  Blue Flag beach, oceanfront banquets, Mayfair Waves & Sterling resorts.
                </p>
              </div>

              <span className="shrink-0 text-xs font-bold px-4 py-2 rounded-full bg-white text-slate-900 group-hover:bg-brand-gold transition-colors flex items-center gap-1">
                <span>Enquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 2: Konark */}
          <div 
            onClick={() => onOpenInquiry({ destination: bentoItems.konark.name })}
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={bentoItems.konark.image}
              alt={bentoItems.konark.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/30">
                Eco-Luxury
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-goldLight mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Konark Marine Drive, Odisha</span>
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight group-hover:text-brand-goldLight transition-colors">
                  Konark Eco-Retreat & Glamping
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  Luxury Swiss tents, private Sun Temple viewings & beach dune adventures.
                </p>
              </div>

              <span className="shrink-0 text-xs font-bold px-4 py-2 rounded-full bg-white text-slate-900 group-hover:bg-brand-gold transition-colors flex items-center gap-1">
                <span>Enquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>

        {/* Row 2: Wide Full-Width Panorama Card - Bhubaneswar */}
        <div 
          onClick={() => onOpenInquiry({ destination: bentoItems.bhubaneswar.name })}
          className="group relative h-80 sm:h-[420px] rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
        >
          <img
            src={bentoItems.bhubaneswar.image}
            alt={bentoItems.bhubaneswar.name}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute top-6 left-6">
            <span className="bg-brand-gold text-brand-navy text-xs font-extrabold px-3.5 py-1 rounded-full uppercase tracking-wider shadow">
              Convention Hub
            </span>
          </div>
          <div className="absolute bottom-8 left-6 sm:left-10 right-6 sm:right-10 text-white flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-goldLight mb-1">
                <MapPin className="w-4 h-4" />
                <span>Bhubaneswar, Odisha</span>
              </div>
              <h3 className="font-display text-2xl sm:text-4xl font-extrabold leading-tight group-hover:text-brand-goldLight transition-colors">
                Bhubaneswar Smart Convention Hub
              </h3>
              <p className="text-xs sm:text-sm text-slate-200 mt-2 max-w-2xl leading-relaxed">
                Eastern India's premier MICE hub. Host up to 5,000+ delegates across Janata Maidan, Mayfair Lagoon, Welcomhotel by ITC, and Vivanta.
              </p>
            </div>
            <div className="shrink-0">
              <span className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white text-slate-900 font-bold text-xs shadow hover:bg-brand-gold transition-all">
                <span>Enquire for Venues</span>
                <ArrowRight className="w-4 h-4" />
              </span>
            </div>
          </div>
        </div>

        {/* Row 3: Two cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Card 4: Chilika Lake */}
          <div 
            onClick={() => onOpenInquiry({ destination: bentoItems.chilika.name })}
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={bentoItems.chilika.image}
              alt={bentoItems.chilika.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/30">
                Natural Wonder
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-goldLight mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Chilika Lagoon, Odisha</span>
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight group-hover:text-brand-goldLight transition-colors">
                  Chilika Lake & Houseboat Cruises
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  Asia's largest brackish lagoon, chartered catamarans, Irrawaddy dolphin watching & seafood barbecues.
                </p>
              </div>

              <span className="shrink-0 text-xs font-bold px-4 py-2 rounded-full bg-white text-slate-900 group-hover:bg-brand-gold transition-colors flex items-center gap-1">
                <span>Enquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>

          {/* Card 5: Dubai & Global */}
          <div 
            onClick={() => onOpenInquiry({ destination: bentoItems.dubai.name })}
            className="group relative h-80 sm:h-96 rounded-3xl overflow-hidden cursor-pointer shadow-md hover:shadow-2xl transition-all duration-500"
          >
            <img
              src={bentoItems.dubai.image}
              alt={bentoItems.dubai.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            <div className="absolute top-5 left-5">
              <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-bold px-3 py-1 rounded-full border border-white/30">
                Global Horizons
              </span>
            </div>
            <div className="absolute bottom-6 left-6 right-6 text-white flex items-end justify-between gap-4">
              <div>
                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-goldLight mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>Dubai & Global Stages</span>
                </div>
                <h3 className="font-display text-2xl font-bold leading-tight group-hover:text-brand-goldLight transition-colors">
                  International MICE Horizons
                </h3>
                <p className="text-xs text-slate-300 mt-1 line-clamp-1">
                  Mega conventions at DWTC, luxury Dubai Marina yacht charters & Bali incentive galas.
                </p>
              </div>

              <span className="shrink-0 text-xs font-bold px-4 py-2 rounded-full bg-white text-slate-900 group-hover:bg-brand-gold transition-colors flex items-center gap-1">
                <span>Enquire</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
