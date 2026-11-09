import React from 'react';

export default function StrategyToExecution() {
  const pillars = [
    {
      title: 'Planning & Sourcing',
      desc: 'Concepts, budget blueprints, venue procurement, timelines, and master run-sheets.'
    },
    {
      title: 'Technical Production',
      desc: 'Stage architecture, 3D LED screens, acoustic rigging, robotic lighting, and redundant power.'
    },
    {
      title: 'Hospitality Management',
      desc: '5-star room blocks, airport fleet convoys, VIP protocol handling, curated fine dining, and guest relations.'
    },
    {
      title: 'On-Ground Operations',
      desc: 'Statutory government clearances, vendor orchestration, security, and live command-center execution.'
    }
  ];

  return (
    <section className="bg-white py-14 sm:py-24 lg:py-28 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Image */}
          <div className="lg:col-span-6 order-2 lg:order-1">
            <div className="relative rounded-none overflow-hidden shadow-xl bg-neutral-900">
              <img
                src="https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=1200&q=85"
                alt="Corporate Summit Floor & Execution"
                className="w-full h-[260px] sm:h-[420px] lg:h-[600px] object-cover filter contrast-[1.05]"
              />
            </div>
          </div>

          {/* Right Column: Copy & 4-Pillar Grid */}
          <div className="lg:col-span-6 flex flex-col justify-center order-1 lg:order-2">
            
            {/* Tag */}
            <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-neutral-400 mb-4 sm:mb-6 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#fff033] text-black font-black text-xs">02</span>
              <span className="text-neutral-700">MICE MANAGEMENT PLANNING</span>
            </div>

            <h2 className="font-display text-2xl sm:text-4xl lg:text-5xl font-medium tracking-tight text-black leading-[1.15] sm:leading-[1.1] mb-4 sm:mb-6">
              From Strategy to On-Ground Management
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base lg:text-lg leading-relaxed mb-8 sm:mb-10">
              Successful MICE management depends on hundreds of logistical details working together synchronously. Our MICE directors oversee the complete operational framework, from destination research and vendor negotiation to guest movement, technical production, and live event delivery.
            </p>

            {/* 4 Pillars Grid with Thin Lines */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-6 sm:gap-y-8 pt-6 border-t border-neutral-200">
              {pillars.map((pillar, idx) => (
                <div key={idx} className="space-y-1 sm:space-y-2">
                  <h3 className="font-display font-bold text-base sm:text-lg text-black">
                    {pillar.title}
                  </h3>
                  <p className="text-neutral-500 text-xs sm:text-sm leading-relaxed font-normal">
                    {pillar.desc}
                  </p>
                </div>
              ))}
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
