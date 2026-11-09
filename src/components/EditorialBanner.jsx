import React from 'react';
import { Sparkles } from 'lucide-react';

export default function EditorialBanner() {
  return (
    <section className="py-14 sm:py-20 max-w-5xl mx-auto px-4 sm:px-6 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-xs font-semibold mb-6">
        <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
        <span>Tailored MICE & Corporate Hospitality</span>
      </div>

      <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-[1.3] sm:leading-[1.35] max-w-4xl mx-auto">
        Elevate your corporate gatherings{' '}
        <span className="inline-block align-middle mx-1.5 w-14 sm:w-20 h-7 sm:h-10 rounded-full overflow-hidden border-2 border-white shadow-md relative -translate-y-0.5">
          <img
            src="https://images.unsplash.com/photo-1590523741831-ab7e8b8f9c7f?auto=format&fit=crop&w=200&q=80"
            alt="Puri Beach Pill"
            className="w-full h-full object-cover"
          />
        </span>{' '}
        and discover the world-class circuits{' '}
        <span className="inline-block align-middle mx-1.5 w-14 sm:w-20 h-7 sm:h-10 rounded-full overflow-hidden border-2 border-white shadow-md relative -translate-y-0.5">
          <img
            src="https://images.unsplash.com/photo-1628107082933-07b23594f73c?auto=format&fit=crop&w=200&q=80"
            alt="Konark Sun Temple Pill"
            className="w-full h-full object-cover"
          />
        </span>{' '}
        waiting for your organization.
      </h2>

      <p className="text-slate-500 text-xs sm:text-base max-w-2xl mx-auto mt-6 leading-relaxed font-normal">
        Exceptional corporate events transform collective ambition into measurable achievement. We combine native Odisha hospitality with seamless global execution so your leadership commands the stage with effortless poise.
      </p>
    </section>
  );
}

