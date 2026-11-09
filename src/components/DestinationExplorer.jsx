import React, { useState, useMemo } from 'react';
import { MapPin, Users, ArrowRight, Star, Sparkles, Filter, ChevronRight, CheckCircle2 } from 'lucide-react';
import { destinationsData } from '../data/destinations';

export default function DestinationExplorer({ onSelectDestination, onOpenInquiry }) {
  const [filter, setFilter] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredDestinations = useMemo(() => {
    return destinationsData.filter((item) => {
      const matchesFilter = filter === 'all' || item.category === filter;
      const matchesSearch = 
        item.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.idealFor.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesFilter && matchesSearch;
    });
  }, [filter, searchQuery]);

  return (
    <section id="destinations" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 gap-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-gold/10 text-brand-goldDark text-xs font-bold uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            Curated Corporate Circuits
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Dive Into The Beauty <br className="hidden sm:inline" />
            Of Odisha & The World
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2 max-w-xl">
            Whether you envision a serene beachside gala at Puri, an eco-retreat at Konark, or a high-octane summit in Dubai or Bali, our destination managers ensure flawless execution.
          </p>
        </div>

        {/* Search input on desktop */}
        <div className="w-full md:w-72">
          <input
            type="text"
            placeholder="Search destination, venue, or activity..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-2.5 rounded-full border border-slate-200 text-sm text-slate-800 placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-brand-gold/50 shadow-sm"
          />
        </div>
      </div>

      {/* Filter Tabs matching UI design */}
      <div className="flex flex-wrap items-center gap-2 sm:gap-3 mb-8 pb-2 overflow-x-auto">
        <button
          onClick={() => setFilter('all')}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
            filter === 'all'
              ? 'bg-brand-navy text-white shadow-md'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          All Locations ({destinationsData.length})
        </button>

        <button
          onClick={() => setFilter('odisha')}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-1.5 ${
            filter === 'odisha'
              ? 'bg-brand-royal text-white shadow-md ring-2 ring-brand-gold/50'
              : 'bg-white text-brand-royal border border-sky-200 hover:bg-sky-50'
          }`}
        >
          <span>🛕 Odisha Hotspots</span>
          <span className="bg-brand-gold text-brand-navy px-1.5 py-0.2 rounded-full text-[10px] font-extrabold">Hot</span>
        </button>

        <button
          onClick={() => setFilter('world')}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
            filter === 'world'
              ? 'bg-brand-navy text-white shadow-md'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          ✈️ International MICE
        </button>

        <button
          onClick={() => setFilter('india')}
          className={`px-5 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
            filter === 'india'
              ? 'bg-brand-navy text-white shadow-md'
              : 'bg-white text-slate-700 border border-slate-200 hover:bg-slate-50'
          }`}
        >
          🏝️ Pan-India Favorites
        </button>
      </div>

      {/* Destination Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {filteredDestinations.map((item) => (
          <div
            key={item.id}
            className="group bg-white rounded-3xl overflow-hidden border border-slate-100 shadow-card hover:shadow-card-hover hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
          >
            {/* Image Box */}
            <div className="relative h-64 sm:h-72 overflow-hidden bg-slate-900">
              <img
                src={item.image}
                alt={item.name}
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

              {/* Badges on Top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                <span className="bg-brand-dark/80 backdrop-blur-md text-brand-goldLight text-[11px] font-bold px-3 py-1 rounded-full border border-brand-gold/30">
                  {item.badge}
                </span>

                <span className="bg-white/90 backdrop-blur-md text-slate-900 text-xs font-extrabold px-3 py-1 rounded-full shadow">
                  {item.priceStarting} <span className="text-[10px] font-normal text-slate-600">{item.unit}</span>
                </span>
              </div>

              {/* Capacity & Location on bottom overlay */}
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <div className="flex items-center gap-1.5 text-xs font-semibold text-brand-goldLight mb-1">
                  <MapPin className="w-3.5 h-3.5" />
                  <span>{item.location}</span>
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-bold leading-tight">
                  {item.name}
                </h3>
              </div>
            </div>

            {/* Content Details */}
            <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
              <div>
                <p className="text-xs text-brand-royal font-bold uppercase tracking-wider mb-2">
                  {item.tag}
                </p>
                <p className="text-slate-600 text-xs sm:text-sm line-clamp-2 mb-4 leading-relaxed">
                  {item.description}
                </p>

                {/* Key Highlights list */}
                <div className="space-y-1.5 mb-5">
                  {item.highlights.slice(0, 3).map((hl, i) => (
                    <div key={i} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span>{hl}</span>
                    </div>
                  ))}
                </div>

                {/* Capacity & Venues info */}
                <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500 mb-4">
                  <div className="flex items-center gap-1.5 font-medium">
                    <Users className="w-3.5 h-3.5 text-brand-gold" />
                    <span>{item.capacity}</span>
                  </div>
                  <span className="text-slate-400 font-semibold">{item.venues.length} Partner Venues</span>
                </div>
              </div>

              {/* Action buttons */}
              <div className="flex items-center gap-2 pt-2">
                <button
                  onClick={() => onOpenInquiry({ destination: item.name, price: item.priceStarting })}
                  className="flex-1 bg-brand-navy hover:bg-brand-royal text-white text-xs sm:text-sm font-bold py-2.5 px-4 rounded-xl shadow-sm transition-all text-center flex items-center justify-center gap-2 group/btn"
                >
                  <span>Request Proposal</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/btn:translate-x-1 transition-transform text-brand-gold" />
                </button>
                <button
                  onClick={() => setSelectedItem(item)}
                  className="px-3 py-2.5 rounded-xl border border-slate-200 text-slate-700 hover:bg-slate-50 text-xs font-semibold transition-colors"
                >
                  Details
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Destination Detail Modal */}
      {selectedItem && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-white rounded-3xl max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-8 shadow-2xl border border-slate-100 relative">
            <button
              onClick={() => setSelectedItem(null)}
              className="absolute top-4 right-4 w-9 h-9 rounded-full bg-slate-100 text-slate-600 hover:bg-slate-200 flex items-center justify-center font-bold text-lg"
            >
              ✕
            </button>

            <div className="relative h-56 rounded-2xl overflow-hidden mb-6">
              <img src={selectedItem.image} alt={selectedItem.name} className="w-full h-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-4 left-4 right-4 text-white">
                <span className="text-xs font-bold text-brand-goldLight uppercase tracking-wider">{selectedItem.location}</span>
                <h3 className="text-2xl font-bold font-display">{selectedItem.name}</h3>
              </div>
            </div>

            <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-6">
              {selectedItem.description}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Featured Luxury Venues</h4>
                <ul className="space-y-1 text-xs sm:text-sm font-semibold text-slate-800">
                  {selectedItem.venues.map((v, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-brand-gold" />
                      {v}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-100">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Ideal Event Formats</h4>
                <ul className="space-y-1 text-xs sm:text-sm font-semibold text-slate-800">
                  {selectedItem.idealFor.map((idf, i) => (
                    <li key={i} className="flex items-center gap-1.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-sky-500" />
                      {idf}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="mb-6">
              <h4 className="text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">Curated Highlights & Inclusions</h4>
              <div className="space-y-2">
                {selectedItem.highlights.map((h, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs sm:text-sm text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                    <span>{h}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-100">
              <div>
                <span className="text-xs text-slate-400 font-medium">Estimated Pricing</span>
                <p className="text-xl font-extrabold text-slate-900">
                  {selectedItem.priceStarting} <span className="text-xs font-normal text-slate-500">{selectedItem.unit}</span>
                </p>
              </div>

              <button
                onClick={() => {
                  const target = selectedItem.name;
                  setSelectedItem(null);
                  onOpenInquiry({ destination: target });
                }}
                className="w-full sm:w-auto bg-brand-navy hover:bg-brand-royal text-white text-sm font-bold px-6 py-3 rounded-xl shadow-lg transition-all"
              >
                Book This Destination with Us
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

