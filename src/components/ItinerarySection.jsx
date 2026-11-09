import React, { useState } from 'react';
import { Calendar, Clock, MapPin, Users, ArrowRight, CheckCircle2, Sparkles, ChevronDown } from 'lucide-react';
import { sampleItineraries } from '../data/packages';

export default function ItinerarySection({ onOpenInquiry }) {
  const [selectedItinerary, setSelectedItinerary] = useState(sampleItineraries[0]);
  const [activeDayIdx, setActiveDayIdx] = useState(0);

  return (
    <section id="itineraries" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 text-brand-goldDark text-xs font-bold uppercase tracking-wider mb-3">
            <Calendar className="w-3.5 h-3.5" />
            <span>Curated Blueprints</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Sample Corporate MICE Itineraries
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            See how our native Odisha knowledge and global execution translate into minute-by-minute perfection for your delegates.
          </p>
        </div>

        {/* Tab Switcher for Packages */}
        <div className="flex flex-wrap justify-center gap-2 sm:gap-3 mb-10">
          {sampleItineraries.map((itinerary) => {
            const isSelected = selectedItinerary.id === itinerary.id;
            return (
              <button
                key={itinerary.id}
                onClick={() => {
                  setSelectedItinerary(itinerary);
                  setActiveDayIdx(0);
                }}
                className={`px-5 py-2.5 rounded-full text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
                  isSelected
                    ? 'bg-brand-navy text-white shadow-md ring-2 ring-brand-gold/40'
                    : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                }`}
              >
                <span>{itinerary.destination}</span>
                <span className={`text-[10px] px-2 py-0.5 rounded-full font-semibold ${isSelected ? 'bg-brand-gold text-brand-navy' : 'bg-slate-200 text-slate-600'}`}>
                  {itinerary.days.length} Days
                </span>
              </button>
            );
          })}
        </div>

        {/* Active Itinerary Showcase Card */}
        <div className="bg-slate-50 rounded-3xl p-6 sm:p-10 border border-slate-200 shadow-xl max-w-5xl mx-auto">
          {/* Top Banner */}
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-slate-200">
            <div>
              <span className="text-xs font-bold text-brand-royal uppercase tracking-wider block mb-1">
                {selectedItinerary.tag} • {selectedItinerary.destination}
              </span>
              <h3 className="font-display text-2xl sm:text-3xl font-extrabold text-slate-900">
                {selectedItinerary.title}
              </h3>
            </div>

            <div className="flex items-center gap-4 text-xs font-semibold text-slate-600">
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Users className="w-4 h-4 text-brand-gold" />
                <span>{selectedItinerary.delegates}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-white px-3 py-1.5 rounded-lg border border-slate-200">
                <Clock className="w-4 h-4 text-brand-gold" />
                <span>{selectedItinerary.idealFor}</span>
              </div>
            </div>
          </div>

          {/* Days Accordion / List */}
          <div className="py-8 space-y-6">
            {selectedItinerary.days.map((d, idx) => (
              <div
                key={idx}
                className="bg-white rounded-2xl p-5 sm:p-6 border border-slate-200/90 shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 rounded-full bg-brand-navy text-white text-xs font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <h4 className="font-display text-base sm:text-lg font-bold text-slate-900">
                    {d.day}
                  </h4>
                </div>

                <div className="space-y-2.5 pl-0 sm:pl-11">
                  {d.schedule.map((item, itemIdx) => (
                    <div key={itemIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom Action */}
          <div className="pt-6 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
            <span className="text-xs text-slate-500 font-medium text-center sm:text-left">
              *All itineraries are 100% customizable based on corporate group sizes, budgets, and executive preferences.
            </span>

            <button
              onClick={() => onOpenInquiry({ destination: selectedItinerary.destination, notes: `Customizing ${selectedItinerary.title}` })}
              className="w-full sm:w-auto bg-brand-navy hover:bg-brand-royal text-white font-bold text-xs sm:text-sm px-7 py-3 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
            >
              <span>Customize This Itinerary</span>
              <ArrowRight className="w-4 h-4 text-brand-gold" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

