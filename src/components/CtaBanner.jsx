import React from 'react';
import { ArrowRight, Phone, MessageSquare, Sparkles } from 'lucide-react';
import { teamData } from '../data/team';

export default function CtaBanner({ onOpenInquiry }) {
  return (
    <section className="px-3 sm:px-6 py-12 sm:py-16">
      <div className="relative max-w-7xl mx-auto rounded-[2rem] sm:rounded-[2.8rem] overflow-hidden shadow-2xl border border-slate-200/50 bg-brand-dark min-h-[420px] flex items-center justify-center text-center p-8 sm:p-14">
        {/* Background Image matching mockup */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=2000&q=80"
            alt="Waves and Breeze Hospitality Global Horizons"
            className="w-full h-full object-cover scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/80 to-brand-dark/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
          <span className="text-brand-goldLight text-xs sm:text-sm font-bold uppercase tracking-[0.2em] mb-3 inline-flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-brand-gold" />
            <span>Turn Your Corporate Vision Into Reality</span>
          </span>

          <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-extrabold text-white tracking-tight leading-tight mb-5 drop-shadow">
            Choose Your Destination, <br />
            We’re Ready To Make It Happen.
          </h2>

          <p className="text-slate-200 text-sm sm:text-base max-w-xl mb-8 leading-relaxed">
            Connect directly with Biswaranjan Behera to receive a tailored blueprint, VIP venue options, and complete cost breakdown within 24 hours.
          </p>

          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
            <button
              onClick={() => onOpenInquiry()}
              className="w-full sm:w-auto bg-gradient-to-r from-brand-gold to-brand-goldLight text-brand-navy font-bold text-sm sm:text-base px-8 py-3.5 rounded-full shadow-glow-gold hover:scale-105 transition-all flex items-center justify-center gap-2"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="w-4 h-4" />
            </button>

            <a
              href={`tel:${teamData.founders[0].phone}`}
              className="w-full sm:w-auto bg-white/15 hover:bg-white/25 text-white font-bold text-sm sm:text-base px-6 py-3.5 rounded-full backdrop-blur-md border border-white/25 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4 text-brand-gold" />
              <span>Call +91 {teamData.founders[0].phone}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

