import React from 'react';
import { Star, Quote, Building2 } from 'lucide-react';
import { testimonialsData } from '../data/testimonials';

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6">
      {/* Header matching reference mockup */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <span className="text-brand-royal font-bold text-xs uppercase tracking-widest mb-2 block">
          Corporate Client Endorsements
        </span>
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
          Trusted By Industry Leaders & Corporate Enterprises
        </h2>
        <p className="text-slate-600 text-sm sm:text-base mt-3">
          From nationwide healthcare summits to international executive retreats, read how corporate leaders evaluate our on-ground execution.
        </p>
      </div>

      {/* Testimonials 4-column Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {testimonialsData.map((item) => (
          <div
            key={item.id}
            className="p-6 rounded-3xl bg-white border border-slate-200/80 shadow-card hover:shadow-card-hover hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Quote Mark */}
              <div className="w-10 h-10 rounded-2xl bg-sky-50 text-brand-royal flex items-center justify-center mb-4">
                <Quote className="w-5 h-5 fill-brand-royal/20" />
              </div>

              {/* Quote text */}
              <p className="text-slate-700 text-xs sm:text-sm leading-relaxed italic mb-6">
                "{item.quote}"
              </p>
            </div>

            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-400 text-amber-400" />
                ))}
                <span className="text-xs font-bold text-slate-700 ml-1.5">5.0</span>
              </div>

              {/* Author & Corporate Monogram Badge */}
              <div className="flex items-center gap-3 pt-3 border-t border-slate-100">
                <div className="w-10 h-10 rounded-xl bg-brand-navy text-brand-gold font-display font-extrabold text-xs flex items-center justify-center shrink-0 border border-brand-gold/30">
                  {item.initials}
                </div>
                <div>
                  <h4 className="font-display font-bold text-xs sm:text-sm text-slate-900">
                    {item.author}
                  </h4>
                  <p className="text-[11px] text-slate-500 line-clamp-1">
                    {item.designation}, {item.company}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
