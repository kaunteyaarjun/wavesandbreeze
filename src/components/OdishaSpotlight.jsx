import React from 'react';
import { Sparkles, MapPin, CheckCircle, ArrowRight, Compass, Shield, Award } from 'lucide-react';

export default function OdishaSpotlight({ onOpenInquiry }) {
  const odishaHighlights = [
    {
      title: 'Puri Golden Beach Galas',
      subtitle: 'Blue Flag Certified Coastal Splendor',
      desc: 'Exclusive beachfront lawns overlooking the Bay of Bengal. Pair daytime corporate strategy sessions with evening beachside galas, live barbecue shacks, and Odissi classical performances.',
      image: 'https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=800&q=80',
      badge: 'Beachfront MICE'
    },
    {
      title: 'Konark Eco-Retreat Glamping',
      subtitle: 'Luxury Swiss Tents & Marine Sand Dunes',
      desc: 'Nestled between the Kushabhadra river mouth and Ramachandi beach. Offers 5-star glamping hospitality, watersports, and private sunset laser-light viewings of the Sun Temple.',
      image: 'https://images.unsplash.com/photo-1628107082933-07b23594f73c?auto=format&fit=crop&w=800&q=80',
      badge: 'Eco Luxury'
    },
    {
      title: 'Bhubaneswar Mega Conventions',
      subtitle: 'Eastern India’s Smart Capital',
      desc: 'Janata Maidan, Mayfair Lagoon & 5-star business properties provide pillarless convention halls capable of hosting 5,000+ delegates with world-class AV, translation, and hybrid streaming.',
      image: 'https://images.unsplash.com/photo-1598890777032-bde835ba27c2?auto=format&fit=crop&w=800&q=80',
      badge: 'Convention Hub'
    },
    {
      title: 'Chilika Lake Houseboat Expeditions',
      subtitle: 'Asia’s Largest Brackish Water Lagoon',
      desc: 'Host senior leadership councils aboard chartered luxury catamarans, spot playful Irrawaddy dolphins at Satapada, and indulge in gourmet fresh crab and prawn feast.',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      badge: 'Lagoon Retreat'
    }
  ];

  return (
    <section id="odisha-spotlight" className="py-16 sm:py-24 bg-gradient-to-b from-brand-dark via-brand-navy to-brand-dark text-white relative overflow-hidden">
      {/* Decorative ambient background glows */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Title area */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-brand-gold/20 text-brand-goldLight text-xs font-bold uppercase tracking-widest border border-brand-gold/30 mb-4">
            <Sparkles className="w-3.5 h-3.5" />
            <span>The Soul Of India • Odisha MICE Circuit</span>
          </div>

          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight leading-tight mb-4">
            Why India's Top Enterprises Are Choosing <br />
            <span className="text-gradient-gold">Odisha For Corporate Offsites</span>
          </h2>

          <p className="text-slate-300 text-sm sm:text-base leading-relaxed">
            Odisha combines rapid smart-city infrastructure with pristine coastlines, mystical temple architecture, and tranquil eco-retreats. As Bhubaneswar-based natives, Waves and Breeze unlocks unmatched local access, VIP government coordination, and exclusive venue tariffs.
          </p>
        </div>

        {/* 4 Spotlight Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
          {odishaHighlights.map((card, i) => (
            <div
              key={i}
              className="bg-white/5 backdrop-blur-md rounded-3xl overflow-hidden border border-white/10 hover:border-brand-gold/50 transition-all duration-300 group flex flex-col justify-between"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                <span className="absolute top-3 left-3 bg-brand-dark/80 backdrop-blur-sm text-brand-goldLight text-[10px] font-bold px-2.5 py-1 rounded-full border border-brand-gold/30">
                  {card.badge}
                </span>
                <div className="absolute bottom-3 left-3 right-3">
                  <h3 className="font-display font-bold text-lg leading-tight text-white">
                    {card.title}
                  </h3>
                  <span className="text-xs text-brand-goldLight font-medium">
                    {card.subtitle}
                  </span>
                </div>
              </div>

              <div className="p-5 flex-1 flex flex-col justify-between">
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                  {card.desc}
                </p>

                <button
                  onClick={() => onOpenInquiry({ destination: `Odisha - ${card.title}` })}
                  className="text-xs font-bold text-brand-gold hover:text-white flex items-center gap-1.5 transition-colors group/link mt-auto pt-3 border-t border-white/10"
                >
                  <span>Inquire for this circuit</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Odisha Advantage Strip */}
        <div className="p-6 sm:p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-4 text-center sm:text-left">
            <div className="w-14 h-14 rounded-2xl bg-brand-gold/20 border border-brand-gold/40 flex items-center justify-center shrink-0 text-brand-gold">
              <Compass className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-display text-lg sm:text-xl font-bold text-white">
                Native Destination Management Company (DMC) Advantage
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-1">
                Headquartered Near Hanuman Temple Lane, Old Town, Bhubaneswar — we possess direct operational contracts with local hospitality authorities, luxury resort groups, transport fleets, and cultural artists.
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry({ destination: 'Odisha Full Circuit' })}
            className="w-full lg:w-auto bg-gradient-to-r from-brand-gold to-brand-goldDark text-brand-navy font-bold text-sm px-7 py-3.5 rounded-full shadow-glow-gold hover:scale-105 transition-all whitespace-nowrap"
          >
            Plan An Odisha Corporate Retreat
          </button>
        </div>
      </div>
    </section>
  );
}

