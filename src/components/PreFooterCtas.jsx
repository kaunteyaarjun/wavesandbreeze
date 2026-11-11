import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export default function PreFooterCtas({ onOpenInquiry }) {
  return (
    <>
      {/* Banner 1: Clean White Minimal Banner */}
      <section className="bg-white py-12 sm:py-20 border-b border-neutral-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 sm:gap-8">
            <div>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-neutral-500 block mb-2 sm:mb-3">
                PLANNING A HOLIDAY, ECO RETREAT OR MICE OFFSITE?
              </span>
              <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black mb-2 sm:mb-3 leading-snug">
                Let's Plan Your Next Journey Together.
              </h2>
              <p className="text-neutral-600 text-xs sm:text-base max-w-2xl leading-relaxed">
                Share your destination ideas, Eco Retreat camp preference, travel dates, or group size. Our founder will prepare a custom itinerary and stay tariff for your trip.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onOpenInquiry()}
                className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-3 bg-neutral-100 hover:bg-neutral-200 sm:bg-transparent text-black font-bold text-sm sm:text-lg py-3 px-5 sm:p-0 rounded-xl sm:rounded-none active:scale-98 transition-all group"
              >
                <span>Speak With Our Founder</span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fff033] text-black flex items-center justify-center font-bold shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Banner 2: High-Contrast Black & Yellow Banner */}
      <section className="bg-black text-white py-14 sm:py-24 lg:py-28 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 sm:gap-10">
            <div>
              <span className="text-xs font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-neutral-400 block mb-3 sm:mb-4 flex items-center gap-2">
                <span className="w-3 sm:w-4 h-0.5 bg-[#fff033]"></span>
                <span>LET'S WORK TOGETHER</span>
              </span>

              <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.08] sm:leading-[1.05] mb-3 sm:mb-4">
                Planning your next <span className="text-[#fff033]">travel<br className="hidden sm:inline" /> destination?</span>
              </h2>

              <p className="text-neutral-400 text-xs sm:text-base max-w-xl leading-relaxed">
                From Odisha holidays and Eco Retreat glamping stays to Kashmir, Bali, Europe holidays, and corporate MICE programs — we curate every detail from planning to seamless execution.
              </p>
            </div>

            <div className="shrink-0 w-full sm:w-auto">
              <button
                onClick={() => onOpenInquiry()}
                className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-4 bg-[#fff033] active:bg-yellow-300 text-black pl-6 sm:pl-8 pr-2.5 sm:pr-3 py-2.5 sm:py-3 rounded-full font-bold text-sm sm:text-lg transition-all shadow-xl active:scale-98 group"
              >
                <span>Plan Your Next Trip</span>
                <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black text-[#fff033] flex items-center justify-center font-bold shrink-0">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
