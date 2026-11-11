import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Consult & Discover',
      desc: 'Share your travel dates, preferred destination or Eco Retreat camp, group size, accommodation style, and budget.'
    },
    {
      num: '02',
      title: 'Design Your Itinerary',
      desc: 'We craft a day-by-day itinerary with curated 5-star resort or Swiss cottage stays, flight routing, and transparent quotes.'
    },
    {
      num: '03',
      title: 'Confirm & Coordinate',
      desc: 'We lock hotel rooms, Eco Retreat cottages, temple darshan / safari permits, and MICE conference setups when needed.'
    },
    {
      num: '04',
      title: 'Travel With Peace of Mind',
      desc: 'Our Bhubaneswar team stays a WhatsApp message away throughout your trip — from airport welcome to safe return home.'
    }
  ];

  return (
    <section id="process" className="bg-[#fff033] text-black py-14 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading (Static on mobile, sticky on desktop) */}
          <div className="lg:col-span-5 static lg:sticky lg:top-28">
            <div className="flex items-center gap-2 mb-4 sm:mb-6">
              <span className="w-2.5 h-2.5 rounded-full bg-black"></span>
              <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-black/80">
                HOW WE PLAN YOUR TRIP
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-[68px] font-medium tracking-tight text-black leading-[1.08] sm:leading-[1.05]">
              Clear Process.<br />
              Effortless<br />
              Travel.
            </h2>

            {/* Animated Tour Bus Element (Adapted from travel.zip by Chandan Choudhary, MIT License) */}
            <div className="mt-8 sm:mt-10 flex flex-col items-start pointer-events-none select-none" aria-hidden="true">
              <img
                src="/images/travel-bus.webp"
                alt=""
                className="w-36 sm:w-44 lg:w-48 h-auto drop-shadow-[0_10px_14px_rgba(0,0,0,0.16)]"
              />
              <div className="w-40 sm:w-48 lg:w-52 h-2.5 -mt-1.5 bg-black/20 blur-[3px] rounded-full ml-1" />
              <div className="w-48 sm:w-56 border-t-2 border-dashed border-black/30 mt-1" />
            </div>
          </div>

          {/* Right Column: 4 Numbered Steps with Black Lines */}
          <div className="lg:col-span-7 divide-y divide-black/30 border-t border-b border-black/30">
            {steps.map((step, idx) => (
              <div key={idx} className="py-6 sm:py-10 grid grid-cols-1 sm:grid-cols-12 gap-2 sm:gap-8 items-start">
                <div className="sm:col-span-2">
                  <span className="font-display font-black text-xs sm:text-base text-black/60">
                    {step.num}
                  </span>
                </div>

                <div className="sm:col-span-10">
                  <h3 className="font-display text-xl sm:text-3xl font-bold text-black mb-1.5 sm:mb-3">
                    {step.title}
                  </h3>
                  <p className="text-black/80 text-xs sm:text-base leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
