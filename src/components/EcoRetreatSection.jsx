import React, { useState } from 'react';
import { Tent, MapPin, Check, ArrowRight, Compass, Sparkles } from 'lucide-react';
import { ecoRetreatLocations } from '../data/ecoRetreats';
import { teamData } from '../data/team';
import FadeContent from './FadeContent';

const WhatsAppIcon = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function EcoRetreatSection({ onOpenInquiry }) {
  const [activeFilter, setActiveFilter] = useState('All');

  const filters = ['All', 'Beach & Coastal', 'Hills & Valleys', 'Wildlife & River'];

  const visibleRetreats =
    activeFilter === 'All'
      ? ecoRetreatLocations
      : ecoRetreatLocations.filter((item) => item.category === activeFilter);

  const handleConsultRetreat = (retreat) => {
    onOpenInquiry({
      service: 'Eco Retreat by Odisha Tourism (Glamping)',
      destination: retreat.modalDestination,
      notes: `Consulting for ${retreat.name} by Odisha Tourism (${retreat.location}). Cottages: ${retreat.tents.join(', ')}. Please share tent availability, glamping season dates, tariff & sightseeing transfers.`
    });
  };

  const handleWhatsAppConsult = (retreat) => {
    const text = encodeURIComponent(
      `Hello Waves and Breeze Hospitality! ⛺\n\nI would like to consult about booking ${retreat.name} (Eco Retreat by Odisha Tourism):\n• Location: ${retreat.location}\n• Cottage Options: ${retreat.tents.join(', ')}\n\nPlease share glamping season availability, tariff details, meal inclusions, and travel assistance from Bhubaneswar.`
    );
    window.open(`https://wa.me/${teamData.founders[0].whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="eco-retreat" className="bg-[#fbf8f3] py-14 sm:py-24 lg:py-28 border-b border-[#ebdccf]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent trigger="scroll" duration={0.9} threshold={0.1} ease="power2.out">
          {/* Top Partner Header with Authentic Eco Retreat Odisha Logo */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 mb-10 pb-8 border-b border-[#e5d9c8]">
            <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-7">
              <div className="bg-white border border-[#e5d9c8] rounded-2xl px-5 py-3 shadow-sm inline-flex items-center justify-center shrink-0 self-start">
                <img
                  src="/eco-retreat-odisha.png"
                  alt="Eco Retreat Odisha by Odisha Tourism"
                  className="h-14 sm:h-16 w-auto object-contain"
                />
              </div>

              <div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#e8f5e9] border border-[#bbf7d0] text-[#166534] text-[10px] font-extrabold uppercase tracking-widest mb-2">
                  <Compass className="w-3.5 h-3.5" />
                  <span>OFFICIAL ODISHA TOURISM LUXURY GLAMPING</span>
                </div>
                <h2 className="font-display text-3xl sm:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.1]">
                  Eco Retreat by <span className="font-serif italic font-normal text-[#14532d]">Odisha Tourism</span>
                </h2>
                <p className="text-neutral-600 text-xs sm:text-base mt-2 max-w-2xl leading-relaxed font-normal">
                  Book and plan seasonal luxury Swiss cottage glamping across all 7 Eco Retreat Odisha locations with our Bhubaneswar consultation desk — including cottage selection, meals, water sports, and end-to-end transfers.
                </p>
              </div>
            </div>

            <div className="shrink-0">
              <button
                onClick={() =>
                  onOpenInquiry({
                    service: 'Eco Retreat by Odisha Tourism (Glamping)',
                    destination: 'Eco Retreat by Odisha Tourism (All 7 Sites)',
                    notes: 'Consultation request for Eco Retreat by Odisha Tourism (Konark, Satkosia, Bhitarkanika, Daringbadi, Hirakud, Sonapur or Putsil). Please advise best dates, cottage tier & tariff.'
                  })
                }
                className="bg-black hover:bg-[#14532d] text-white font-bold px-6 py-3.5 rounded-full text-xs sm:text-sm inline-flex items-center gap-2.5 shadow-lg transition-all"
              >
                <Sparkles className="w-4 h-4 text-[#f5b324]" />
                <span>Consult for Eco Retreat Booking</span>
                <ArrowRight className="w-4 h-4 text-[#f5b324]" />
              </button>
            </div>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-8 sm:mb-10">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-bold transition-all ${
                    activeFilter === filter
                      ? 'bg-[#14532d] text-white shadow-sm'
                      : 'bg-white text-neutral-700 hover:bg-neutral-100 border border-[#e5d9c8]'
                  }`}
                >
                  {filter === 'All' ? 'All 7 Retreats' : filter}
                </button>
              ))}
            </div>
            <span className="text-xs font-semibold text-neutral-500">
              Swiss Cottage Tiers: Deluxe • Premium • Royal Luxury • Presidential Suite (Konark)
            </span>
          </div>
        </FadeContent>

        {/* 7 Eco Retreat Locations Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
          {visibleRetreats.map((retreat) => (
            <div
              key={retreat.id}
              className="group bg-white rounded-2xl border border-[#e8dfd1] overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                {/* Retreat Photo */}
                <div className="relative h-56 overflow-hidden bg-neutral-900">
                  <img
                    src={retreat.image}
                    alt={retreat.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  <div className="absolute top-3 left-3 flex items-center gap-2 z-10">
                    <span className="px-2.5 py-1 rounded-full bg-[#f5b324] text-black text-[10px] font-black uppercase tracking-wider shadow">
                      {retreat.badge}
                    </span>
                    <span className="px-2.5 py-1 rounded-full bg-black/75 text-white text-[10px] font-bold uppercase tracking-wider backdrop-blur-sm">
                      {retreat.category}
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-3 right-3 text-white z-10">
                    <div className="flex items-center gap-1.5 text-[11px] font-medium text-neutral-200">
                      <MapPin className="w-3.5 h-3.5 text-[#f5b324] shrink-0" />
                      <span className="truncate">{retreat.location}</span>
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className="p-5 sm:p-6">
                  <h3 className="font-display text-xl font-bold text-neutral-900 group-hover:text-[#14532d] transition-colors mb-2">
                    {retreat.name}
                  </h3>
                  <p className="text-neutral-600 text-xs sm:text-sm leading-relaxed mb-4 line-clamp-3 font-normal">
                    {retreat.description}
                  </p>

                  {/* Cottage Types */}
                  <div className="mb-4 pb-4 border-b border-neutral-100">
                    <span className="text-[10px] font-extrabold uppercase tracking-widest text-neutral-400 flex items-center gap-1 mb-2">
                      <Tent className="w-3 h-3 text-[#14532d]" />
                      Available Tent Categories
                    </span>
                    <div className="flex flex-wrap gap-1.5">
                      {retreat.tents.map((tent) => (
                        <span
                          key={tent}
                          className="text-[11px] font-semibold bg-[#f4f7f4] text-[#14532d] border border-[#dce8dc] px-2.5 py-0.5 rounded-full"
                        >
                          {tent}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Key Highlights */}
                  <div className="space-y-1.5">
                    {retreat.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-start gap-2 text-xs text-neutral-700 leading-snug">
                        <Check className="w-3.5 h-3.5 text-[#16a34a] shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Consultation Buttons */}
              <div className="p-5 sm:p-6 pt-0 flex flex-col sm:flex-row gap-2">
                <button
                  onClick={() => handleConsultRetreat(retreat)}
                  className="flex-1 bg-black hover:bg-[#14532d] text-white py-2.5 px-4 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                >
                  <span>Consult &amp; Book</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#f5b324]" />
                </button>
                <button
                  onClick={() => handleWhatsAppConsult(retreat)}
                  className="bg-[#25D366] hover:bg-[#20bd5a] text-white py-2.5 px-3.5 rounded-xl font-bold text-xs transition-all flex items-center justify-center gap-1.5 shadow-sm"
                  title={`WhatsApp Inquiry for ${retreat.name}`}
                >
                  <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                  <span>WhatsApp</span>
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Corporate & Family Consultation Callout */}
        <div className="mt-10 sm:mt-14 bg-[#0f1f17] text-white rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 border border-[#244232]">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="bg-white rounded-xl px-4 py-2 shrink-0 self-start">
              <img
                src="/eco-retreat-odisha.png"
                alt="Eco Retreat Odisha Logo"
                className="h-10 w-auto object-contain"
              />
            </div>
            <div>
              <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#f5b324] block mb-1">
                BESPOKE GLAMPING PACKAGES &amp; GROUP BUYOUTS
              </span>
              <h3 className="font-display text-lg sm:text-2xl font-bold text-white leading-snug">
                Unsure which Eco Retreat matches your dates or group?
              </h3>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 max-w-2xl">
                Consult Biswaranjan Behera for seasonal opening dates, Swiss tent tiers, all-inclusive packages, and airport-to-campsite ground coordination across Odisha.
              </p>
            </div>
          </div>

          <button
            onClick={() =>
              onOpenInquiry({
                service: 'Eco Retreat by Odisha Tourism (Glamping)',
                destination: 'Eco Retreat by Odisha Tourism (All 7 Sites)',
                notes: 'Need expert consultation to choose between Konark, Satkosia, Bhitarkanika, Daringbadi, Hirakud, Sonapur, and Putsil Eco Retreat.'
              })
            }
            className="bg-[#f5b324] hover:bg-white text-black font-extrabold text-xs sm:text-sm px-6 py-3.5 rounded-full inline-flex items-center gap-2 shrink-0 transition-all shadow-lg"
          >
            <span>Get Eco Retreat Quote</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </section>
  );
}
