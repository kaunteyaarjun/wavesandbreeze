import React from 'react';

export default function ProcessSection() {
  const steps = [
    {
      num: '01',
      title: 'Understand & Brief',
      desc: 'We analyze your strategic objectives, delegate count, destination preference, budget parameters, and business KPIs.'
    },
    {
      num: '02',
      title: 'Design & Plan',
      desc: 'We structure the complete event framework: direct 5-star venue procurement, hotel room allocations, AV staging blueprints, and itemized timelines.'
    },
    {
      num: '03',
      title: 'Coordinate & Clear',
      desc: 'We coordinate hotels, airlines, chartered fleet logistics, audio-visual rigging, statutory clearances, and delegate secretariats.'
    },
    {
      num: '04',
      title: 'Manage & Execute',
      desc: 'Our founders and operational directors manage every detail on the ground, from airport arrivals and keynote staging to gala dinners.'
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
                MICE MANAGEMENT PROCESS
              </span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-[68px] font-medium tracking-tight text-black leading-[1.08] sm:leading-[1.05]">
              Clear Process.<br />
              Seamless<br />
              Management.
            </h2>
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
