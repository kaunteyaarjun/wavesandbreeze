import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Sparkles, Building2, Truck } from 'lucide-react';

export default function SplitFeatureCards({ onOpenInquiry }) {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Centered Header matching Inspiration layout */}
      <div className="text-center max-w-2xl mx-auto mb-14">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          Get A Flawless Corporate Event Experience
        </h2>
        <p className="text-slate-500 text-xs sm:text-sm mt-3">
          A great corporate gathering is not just about the venue—it's about the seamless precision, hospitality warmth, and technical perfection behind every moment.
        </p>
      </div>

      {/* Two Wide Split Cards matching Inspiration layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
        {/* Card 1: Stage & AV Production */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-[380px] sm:h-[420px] flex items-end p-5 sm:p-7 group">
          <img
            src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=80"
            alt="Waves and Breeze Stage Production"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* White Inner Content Box matching Inspiration */}
          <div className="relative z-10 w-full bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-100 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-goldDark block mb-1">
                Technical Production
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Turnkey MICE & Stage Engineering
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                3D panoramic LED video walls, acoustic line array systems, intelligent robotic lighting, and custom German hangar exhibition stalls.
              </p>
            </div>

            <button
              onClick={() => onOpenInquiry({ service: 'Turnkey MICE & Stage Production' })}
              className="text-xs sm:text-sm font-bold text-brand-royal hover:text-brand-navy flex items-center gap-1.5 transition-colors group/btn pt-2 border-t border-slate-100"
            >
              <span>Explore Technical Capabilities</span>
              <ArrowRight className="w-4 h-4 text-brand-gold group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Card 2: Native Odisha DMC & Logistics */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-slate-200 h-[380px] sm:h-[420px] flex items-end p-5 sm:p-7 group">
          <img
            src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=1000&q=80"
            alt="Odisha Hospitality & Fleet"
            className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

          {/* White Inner Content Box matching Inspiration */}
          <div className="relative z-10 w-full bg-white rounded-2xl p-6 sm:p-7 shadow-2xl border border-slate-100 flex flex-col justify-between">
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-brand-goldDark block mb-1">
                Ground Execution
              </span>
              <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900 mb-2">
                Native Odisha DMC & Airport Fleets
              </h3>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-4">
                BBI Airport meet & greet with Odia royal chandan tikka, luxury AC Volvo coaches, and direct 5-star hotel block contracting.
              </p>
            </div>

            <button
              onClick={() => onOpenInquiry({ service: 'Native Odisha DMC & Airport Logistics' })}
              className="text-xs sm:text-sm font-bold text-brand-royal hover:text-brand-navy flex items-center gap-1.5 transition-colors group/btn pt-2 border-t border-slate-100"
            >
              <span>Explore DMC Services</span>
              <ArrowRight className="w-4 h-4 text-brand-gold group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

