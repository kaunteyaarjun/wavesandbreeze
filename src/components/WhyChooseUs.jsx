import React from 'react';
import { CalendarCheck2, Compass, ShieldCheck, HeartHandshake, Award, Users, CheckCircle2, ArrowRight } from 'lucide-react';
import { teamData } from '../data/team';

export default function WhyChooseUs({ onOpenInquiry }) {
  const features = [
    {
      icon: <CalendarCheck2 className="w-6 h-6 text-brand-gold" />,
      title: "Flexible & Turnkey Planning",
      desc: "From initial budget allocation and flight logistics to keynote stage fabrication and gala nights — we manage the complete puzzle so you focus on business."
    },
    {
      icon: <Compass className="w-6 h-6 text-brand-gold" />,
      title: "Best Choice Destinations & Direct Venues",
      desc: "Direct corporate contracts with Mayfair Hotels, ITC Welcomhotel, Vivanta by Taj, and global resort chains ensure guaranteed best tariffs and room blocks."
    },
    {
      icon: <ShieldCheck className="w-6 h-6 text-brand-gold" />,
      title: "Native Odisha & Global On-Ground Concierge",
      desc: "Founded and operated by native Odisha hospitality leaders. We provide real-time crisis mitigation, government liaison, and 24/7 dedicated event managers."
    }
  ];

  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        {/* Left Column: Visual Collage matching Mockup Reference */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
              alt="Waves and Breeze Hospitality Conference Execution"
              className="w-full h-[450px] sm:h-[520px] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/90 via-brand-dark/20 to-transparent" />

            {/* Floating destination badge card (like the "Bali Island" pill in the mockup!) */}
            <div className="absolute top-6 left-6 bg-white/95 backdrop-blur-md p-3.5 sm:p-4 rounded-2xl shadow-xl border border-white/50 flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl overflow-hidden bg-brand-navy">
                <img 
                  src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=150&q=80" 
                  alt="Puri Beach" 
                  className="w-full h-full object-cover" 
                />
              </div>
              <div>
                <span className="text-[10px] font-bold text-slate-400 uppercase tracking-wider block">Featured Hotspot</span>
                <span className="text-xs sm:text-sm font-extrabold text-slate-900 block">Puri Blue Flag Beach</span>
                <span className="text-[10px] font-semibold text-emerald-600">✓ 5-Star Mayfair Verified</span>
              </div>
            </div>

            {/* Bottom Card Overlay inside image */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-brand-dark/85 backdrop-blur-md border border-brand-gold/30 text-white">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[11px] font-bold text-brand-goldLight uppercase tracking-wider">
                    Hospitality Guarantee
                  </span>
                  <h4 className="font-display text-lg font-bold">Zero-Hassle Corporate Delivery</h4>
                </div>
                <div className="text-right">
                  <span className="text-2xl font-extrabold text-brand-goldLight">100%</span>
                  <span className="text-[10px] block text-slate-300">On-Time Execution</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & 3 Pillars matching Mockup */}
        <div className="lg:col-span-6 flex flex-col justify-center">
          <span className="text-brand-royal font-extrabold text-xs sm:text-sm uppercase tracking-widest mb-3">
            Why Waves and Breeze Hospitality
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
            Unique Corporate Packages <br />
            For Every Organization.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-8">
            Enjoy exclusive corporate deals, negotiated bulk room blocks, and personalized itinerary designs crafted specifically for your team's size, budget, and strategic goals.
          </p>

          {/* 3 Pillar Cards */}
          <div className="space-y-5 mb-10">
            {features.map((item, index) => (
              <div
                key={index}
                className="p-4 sm:p-5 rounded-2xl bg-white border border-slate-200/80 shadow-sm hover:shadow-md hover:border-brand-gold/40 transition-all flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0 border border-brand-gold/20">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-display font-bold text-base text-slate-900 mb-1">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Button */}
          <div>
            <button
              onClick={() => onOpenInquiry()}
              className="bg-brand-navy hover:bg-brand-royal text-white font-bold text-sm px-7 py-3.5 rounded-full shadow-lg hover:shadow-xl transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Explore Tailored Packages</span>
              <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>

      {/* Stats Bar */}
      <div className="mt-16 sm:mt-24 pt-12 border-t border-slate-200 grid grid-cols-2 lg:grid-cols-4 gap-6 text-center">
        {teamData.stats.map((stat, i) => (
          <div key={i} className="p-4 rounded-2xl bg-white border border-slate-100 shadow-sm">
            <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-brand-navy block mb-1">
              {stat.number}
            </span>
            <span className="text-xs sm:text-sm font-bold text-slate-800 block">
              {stat.label}
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              {stat.sub}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

