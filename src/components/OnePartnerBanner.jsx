import React from 'react';

export default function OnePartnerBanner() {
  const cards = [
    {
      num: '01',
      title: 'Bespoke Holiday Curation',
      desc: 'Handcrafted Odisha, Kashmir, Goa, Bali, Dubai & Europe itineraries with hotels, sightseeing & flights arranged end to end.',
      isYellow: false
    },
    {
      num: '02',
      title: 'Eco Retreat by Odisha Tourism',
      desc: 'Stay consultation and seasonal glamping bookings across Konark, Satkosia, Bhitarkanika, Daringbadi, Hirakud, Sonapur & Putsil.',
      isYellow: false
    },
    {
      num: '03',
      title: 'Confirmed 5-Star Resort Stays',
      desc: 'Direct partner tariffs with Mayfair Hotels, Sterling Puri, Welcomhotel by ITC, Vivanta, and curated boutique luxury properties.',
      isYellow: false
    },
    {
      num: '04',
      title: 'Dedicated MICE & Corporate Wing',
      desc: 'As part of our travel desk, we also execute executive offsites, dealer incentive trips, conferences, and corporate gala events.',
      isYellow: true // The signature Yellow box!
    }
  ];

  return (
    <section className="bg-black text-white py-14 sm:py-24 lg:py-28">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Header */}
        <div className="flex items-center gap-2 mb-4 sm:mb-6">
          <span className="w-2.5 h-2.5 rounded-full bg-[#fff033]"></span>
          <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#fff033]">
            WHY WAVES &amp; BREEZE HOSPITALITY
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10 sm:mb-16 pb-8 sm:pb-12 border-b border-neutral-800">
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-7xl font-medium tracking-tight text-white leading-[1.08] sm:leading-[1.05]">
              One Travel Partner.<br />
              Every Journey Covered.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-neutral-400 text-sm sm:text-base leading-relaxed">
              From family holidays, honeymoons, and Eco Retreat Odisha glamping to international escapes and corporate MICE programs, we manage every detail with transparent local expertise.
            </p>
          </div>
        </div>

        {/* 4 Cards Grid - Touch & Mobile Optimized */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {cards.map((card, idx) => (
            <div
              key={idx}
              className={`p-6 sm:p-10 flex flex-col justify-between min-h-[220px] sm:min-h-[300px] transition-all ${
                card.isYellow
                  ? 'bg-[#fff033] text-black shadow-2xl'
                  : 'bg-neutral-950 text-white border border-neutral-800 hover:border-neutral-600'
              }`}
            >
              <div>
                <span className={`font-display font-extrabold text-xs sm:text-sm block mb-4 sm:mb-8 ${card.isYellow ? 'text-black/60' : 'text-neutral-500'}`}>
                  {card.num}
                </span>

                <h3 className={`font-display text-xl sm:text-2xl font-bold leading-tight mb-2 sm:mb-4 ${card.isYellow ? 'text-black' : 'text-white'}`}>
                  {card.title}
                </h3>
              </div>

              <p className={`text-xs sm:text-sm leading-relaxed ${card.isYellow ? 'text-neutral-800 font-medium' : 'text-neutral-400'}`}>
                {card.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
