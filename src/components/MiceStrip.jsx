import React from 'react';

export default function MiceStrip() {
  const items = [
    { letter: 'T', title: 'Odisha Tours & Holidays', sub: 'Puri, Konark, Chilika & Daringbadi' },
    { letter: 'M', title: 'Corporate MICE Management', sub: 'Meetings, Summits & Galas' },
    { letter: 'C', title: 'Cab & Fleet Rentals', sub: 'Innova, Crysta & Volvo Coaches' },
    { letter: 'H', title: '5-Star Resort Stays', sub: 'Mayfair, Sterling & Eco-Retreats' },
  ];

  return (
    <div className="bg-black text-white border-y border-neutral-900 py-4 sm:py-6">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-center divide-x-0 lg:divide-x divide-neutral-800">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-3 py-1.5 sm:py-0 lg:pl-6 first:pl-0">
              <span className="font-display font-black text-2xl sm:text-4xl text-[#fff033] shrink-0">
                {item.letter}
              </span>
              <div>
                <span className="text-xs sm:text-sm font-bold uppercase tracking-wider text-white block">
                  {item.title}
                </span>
                <span className="text-[10px] sm:text-xs text-neutral-400 font-medium hidden sm:block">
                  {item.sub}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
