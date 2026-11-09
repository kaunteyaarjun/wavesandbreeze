import React, { useState } from 'react';
import { Briefcase, Compass, Users, Layers, MapPin, Award, CheckCircle, ArrowRight, ShieldCheck } from 'lucide-react';
import { miceServices } from '../data/services';

export default function MiceServices({ onOpenInquiry }) {
  const [activeServiceId, setActiveServiceId] = useState(miceServices[0].id);

  const activeService = miceServices.find(s => s.id === activeServiceId) || miceServices[0];

  const getIcon = (iconName) => {
    switch (iconName) {
      case 'Briefcase': return <Briefcase className="w-5 h-5" />;
      case 'Compass': return <Compass className="w-5 h-5" />;
      case 'Users': return <Users className="w-5 h-5" />;
      case 'Layers': return <Layers className="w-5 h-5" />;
      case 'MapPin': return <MapPin className="w-5 h-5" />;
      case 'Award': return <Award className="w-5 h-5" />;
      default: return <Briefcase className="w-5 h-5" />;
    }
  };

  return (
    <section id="services" className="py-16 sm:py-24 bg-slate-50 border-y border-slate-200/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy text-white text-xs font-bold uppercase tracking-widest mb-3">
            <span>Complete MICE Capabilities</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Comprehensive Corporate Event <br className="hidden sm:inline" />
            & Hospitality Spectrum
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Every element of your corporate event — from initial concept and venue negotiation to on-ground transport, AV production, and VIP concierge — executed under one accountable roof.
          </p>
        </div>

        {/* Desktop Interactive Service Selector */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Buttons Column */}
          <div className="lg:col-span-5 space-y-3">
            {miceServices.map((service) => {
              const isSelected = service.id === activeServiceId;
              return (
                <button
                  key={service.id}
                  onClick={() => setActiveServiceId(service.id)}
                  className={`w-full text-left p-4 sm:p-5 rounded-2xl transition-all duration-300 border flex items-center justify-between gap-4 group ${
                    isSelected
                      ? 'bg-brand-navy text-white border-brand-navy shadow-lg shadow-brand-navy/15 translate-x-1'
                      : 'bg-white text-slate-800 border-slate-200 hover:border-brand-gold/60 hover:bg-slate-50/80'
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center font-display font-extrabold text-xl shrink-0 transition-colors ${
                      isSelected ? 'bg-brand-gold text-brand-navy' : 'bg-slate-100 text-slate-700 group-hover:bg-brand-gold/20'
                    }`}>
                      {service.letter}
                    </div>
                    <div>
                      <h3 className={`font-display font-bold text-sm sm:text-base leading-snug ${isSelected ? 'text-white' : 'text-slate-900'}`}>
                        {service.title}
                      </h3>
                      <p className={`text-xs mt-0.5 line-clamp-1 ${isSelected ? 'text-slate-300' : 'text-slate-500'}`}>
                        {service.tagline}
                      </p>
                    </div>
                  </div>

                  <ArrowRight className={`w-5 h-5 shrink-0 transition-transform ${
                    isSelected ? 'text-brand-gold translate-x-1' : 'text-slate-300 group-hover:text-brand-navy'
                  }`} />
                </button>
              );
            })}
          </div>

          {/* Right Active Service Showcase Card */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl relative overflow-hidden flex flex-col justify-between min-h-[500px]">
            {/* Header and Image */}
            <div>
              <div className="relative h-60 sm:h-72 rounded-2xl overflow-hidden mb-6 shadow-md">
                <img
                  src={activeService.image}
                  alt={activeService.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-brand-dark/80 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4 text-white">
                  <span className="bg-brand-gold text-brand-navy text-[10px] font-extrabold px-2.5 py-1 rounded-md uppercase tracking-wider mb-1 inline-block">
                    Pillar: {activeService.letter}
                  </span>
                  <h3 className="font-display text-2xl font-bold leading-tight">
                    {activeService.title}
                  </h3>
                </div>
              </div>

              <p className="text-slate-700 text-sm sm:text-base leading-relaxed mb-6">
                {activeService.description}
              </p>

              {/* Deliverables Checklist */}
              <div className="mb-8">
                <h4 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-3">
                  Key Deliverables & Included Capabilities
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {activeService.deliverables.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <CheckCircle className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="text-xs sm:text-sm font-semibold text-slate-800 leading-snug">
                        {item}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Bottom Action Footer */}
            <div className="pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <span className="text-xs text-slate-400 font-medium">Turnkey Management</span>
                <p className="text-xs sm:text-sm font-bold text-slate-800">Customized proposals within 24 hours</p>
              </div>

              <button
                onClick={() => onOpenInquiry({ service: activeService.title })}
                className="w-full sm:w-auto bg-brand-navy hover:bg-brand-royal text-white text-xs sm:text-sm font-bold px-6 py-3 rounded-full shadow-md hover:shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <span>Inquire About {activeService.title}</span>
                <ArrowRight className="w-4 h-4 text-brand-gold" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

