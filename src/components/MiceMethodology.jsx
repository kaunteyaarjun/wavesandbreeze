import React from 'react';
import { Building2, FileText, Send, CheckCircle2, ShieldCheck, ArrowRight } from 'lucide-react';

export default function MiceMethodology({ onOpenInquiry }) {
  const steps = [
    {
      num: '01',
      icon: Building2,
      title: 'Shortlist Hotels or Locations',
      desc: 'Pick your preferred destination across Odisha (Puri, Bhubaneswar, Konark, Chilika) or global hubs like Dubai. We match you with verified 5-star inventory and convention spaces.'
    },
    {
      num: '02',
      icon: FileText,
      title: 'Share A Few Details About Your Event',
      desc: 'Tell us your expected delegate count, preferred dates, staging requirements, and catering preferences. Takes less than 60 seconds with zero obligation.'
    },
    {
      num: '03',
      icon: Send,
      title: 'Get Turnkey Proposals in Magical Turnaround Time!',
      desc: 'Receive direct corporate rates, confirmed room allocations, complete run-sheets, and transparent execution plans personally verified by our founders.'
    }
  ];

  return (
    <section id="how-it-works" className="py-16 sm:py-20 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading (miceonline.in style: So how does it work?) */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <span className="text-xs font-extrabold uppercase tracking-widest text-brand-royal bg-sky-50 px-3.5 py-1.5 rounded-full border border-sky-100 inline-block mb-3">
            Streamlined Execution
          </span>
          <h2 className="font-display text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            So how does it work?
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-2.5">
            Planning a corporate conference or incentive trip shouldn't take weeks of back-and-forth. Here is our effortless 3-step process.
          </p>
        </div>

        {/* 3 Step Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <div
                key={idx}
                className="relative bg-slate-50/80 rounded-3xl p-8 border border-slate-200 hover:border-brand-gold/60 hover:bg-white hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-14 h-14 rounded-2xl bg-white shadow-sm border border-slate-100 flex items-center justify-center text-brand-navy group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors">
                      <Icon className="w-7 h-7" />
                    </div>
                    <span className="font-display font-black text-4xl text-slate-300 group-hover:text-brand-gold transition-colors">
                      {step.num}
                    </span>
                  </div>

                  <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-royal transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-slate-200/60 flex items-center gap-2 text-xs font-semibold text-emerald-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Verified Venue Direct Rates</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Direct Action Bar */}
        <div className="rounded-2xl bg-gradient-to-r from-brand-dark via-brand-navy to-brand-royal text-white p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl border border-brand-gold/30">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-12 h-12 rounded-xl bg-brand-gold/20 flex items-center justify-center shrink-0 text-brand-gold">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h4 className="font-display text-lg sm:text-xl font-bold">
                Got an upcoming event?
              </h4>
              <p className="text-xs sm:text-sm text-slate-300 mt-0.5">
                Talk directly with Biswaranjan or Sameer to reserve dates and inspect venue floor plans.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="tel:9040577429"
              className="px-5 py-3 rounded-xl bg-white/10 hover:bg-white/20 text-white font-bold text-xs sm:text-sm border border-white/20 transition-all"
            >
              Call +91 9040577429
            </a>
            <button
              onClick={() => onOpenInquiry()}
              className="px-6 py-3 rounded-xl bg-brand-gold hover:bg-brand-goldLight text-brand-dark font-extrabold text-xs sm:text-sm shadow-md hover:shadow-lg transition-all"
            >
              Request Proposal Now
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
