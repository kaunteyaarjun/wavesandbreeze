import React from 'react';

export default function MiceStrip() {
  const items = [
    { letter: 'M', title: 'Meetings' },
    { letter: 'I', title: 'Incentives' },
    { letter: 'C', title: 'Conferences' },
    { letter: 'E', title: 'Exhibitions' },
  ];

  return (
    <div className="bg-black text-white border-y border-neutral-900 py-4 sm:py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 sm:gap-8 items-center divide-x-0 sm:divide-x divide-neutral-800">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2.5 sm:gap-3 py-2 sm:py-0 sm:pl-6 first:pl-0">
              <span className="font-display font-black text-2xl sm:text-4xl text-[#fff033] shrink-0">
                {item.letter}
              </span>
              <span className="text-xs sm:text-base font-bold uppercase tracking-wider text-neutral-200">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
