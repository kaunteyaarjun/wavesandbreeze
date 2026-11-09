import React from 'react';
import { teamData } from '../data/team';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export default function StoryStatsSection({ onOpenInquiry }) {
  return (
    <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Column: Tall rounded photo matching Inspiration layout */}
        <div className="lg:col-span-5">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border border-slate-200 h-[480px] sm:h-[540px] group">
            <img
              src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1000&q=80"
              alt="Waves and Breeze Hospitality Conference Experience"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/70 via-transparent to-transparent" />
            <div className="absolute bottom-6 left-6 right-6 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60">
              <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">
                Flagship Experience
              </span>
              <p className="font-display font-bold text-sm text-slate-900 leading-snug">
                Puri Beachfront Lawns & Mayfair Waves Conclave
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Copy & Vertical Stats matching Inspiration layout */}
        <div className="lg:col-span-7 flex flex-col justify-center">
          <span className="text-brand-royal font-bold text-xs uppercase tracking-widest mb-3">
            Impact & Vision
          </span>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.18] mb-6">
            Corporate events make your organization rich in synergy, vision, and shared victories.
          </h2>
          <p className="text-slate-600 text-sm sm:text-base leading-relaxed mb-10 max-w-2xl">
            Each corporate gathering is an opportunity to forge lasting camaraderie, align leadership horizons, and reward high performers. Waves and Breeze Hospitality unites native Odisha warmth with global operational rigor.
          </p>

          {/* Clean Vertical Stats matching Inspiration layout */}
          <div className="grid grid-cols-3 gap-6 sm:gap-8 border-y border-slate-200 py-8 mb-8">
            <div>
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 block tracking-tight">
                99.8%
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 block mt-1 leading-snug">
                Client Satisfaction
              </span>
            </div>

            <div>
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 block tracking-tight">
                60+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 block mt-1 leading-snug">
                5-Star Partner Venues
              </span>
            </div>

            <div>
              <span className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 block tracking-tight">
                350+
              </span>
              <span className="text-xs sm:text-sm font-semibold text-slate-500 block mt-1 leading-snug">
                MICE Events Hosted
              </span>
            </div>
          </div>

          <div>
            <button
              onClick={() => onOpenInquiry({ notes: 'Inquiring about Corporate Retreats & MICE Packages' })}
              className="bg-brand-navy hover:bg-brand-royal text-white font-bold text-xs sm:text-sm px-7 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all flex items-center gap-2 group w-full sm:w-auto justify-center"
            >
              <span>Explore Custom Corporate Packages</span>
              <ArrowRight className="w-4 h-4 text-brand-gold group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

