import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeContent from './FadeContent';

export default function ServicesList({ onOpenInquiry }) {
  const services = [
    {
      num: '01',
      title: 'Odisha Travel Agency & Curated Holiday Packages',
      desc: 'Handcrafted Odisha travel itineraries across Puri, Konark, Chilika Lake, Daringbadi, and Bhitarkanika — including VIP Jagannath temple darshan, beachfront resorts, guided sightseeing, and private transfers.',
    },
    {
      num: '02',
      title: 'Corporate MICE Agency — Events, Offsites & Conferences',
      desc: 'Full-service corporate MICE agency across Odisha and Dubai: executive board meetings, CXO summits, annual sales kick-offs, dealer incentive travel, award gala nights, and technical 4K LED production.',
    },
    {
      num: '03',
      title: 'Pan-India & International Travel Packages',
      desc: 'Bespoke leisure travel, honeymoon suites, and family holiday packages across Kashmir, Goa, Rajasthan, Andaman, Dubai, Singapore, Thailand, Bali, and Europe — planned end-to-end from Bhubaneswar.',
    },
    {
      num: '04',
      title: 'Eco Retreat by Odisha Tourism & 5-Star Stays',
      desc: 'Dedicated Eco Retreat consultation & cottage bookings across all 7 Eco Retreat Odisha locations (Konark, Satkosia, Bhitarkanika, Daringbadi, Hirakud, Sonapur & Putsil) plus Mayfair, Welcomhotel ITC, Vivanta & Sterling stays.',
      modalService: 'Eco Retreat by Odisha Tourism (Glamping)',
      badgeLogo: '/eco-retreat-odisha.png',
    },
  ];

  return (
    <section id="services" className="bg-black text-white py-14 sm:py-24 lg:py-28 border-b border-neutral-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeContent trigger="scroll" duration={0.9} threshold={0.1} ease="power2.out">
          {/* Top Tag & Header */}
          <div className="flex items-center gap-2 mb-4 sm:mb-6">
            <span className="w-2.5 h-2.5 rounded-full bg-[#fff033] shrink-0"></span>
            <span className="text-xs sm:text-[13px] font-extrabold uppercase tracking-[0.16em] sm:tracking-[0.2em] text-[#fff033]">
              ODISHA TRAVEL AGENCY • ECO RETREAT • MICE AGENCY
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10 sm:mb-16 pb-8 sm:pb-10 border-b border-neutral-800">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
                Odisha Travel Agency,<br />
                Eco Retreat &amp; MICE Agency
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
                Whether you want custom family travel across Puri and Chilika, an Eco Retreat by Odisha Tourism glamping getaway, an international vacation, or a 1,500-delegate MICE convention, we deliver seamless execution.
              </p>
            </div>
          </div>
        </FadeContent>

        {/* Rows with Stagger Animation - Touch & Mobile Optimized */}
        <FadeContent trigger="scroll" duration={0.8} threshold={0.1} stagger={0.1} ease="power2.out" className="divide-y divide-neutral-800">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => onOpenInquiry({
                service: service.modalService || service.title,
                ...(service.badgeLogo ? { destination: 'Eco Retreat by Odisha Tourism (All 7 Sites)' } : {})
              })}
              className="py-7 sm:py-12 group cursor-pointer active:bg-neutral-900 hover:bg-neutral-950 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6"
            >
              <div className="flex items-start md:items-center gap-4 sm:gap-10 md:w-5/12">
                <span className="font-display font-black text-lg sm:text-xl text-[#fff033] shrink-0">
                  {service.num}
                </span>
                <div>
                  <h3 className="font-display text-xl sm:text-3xl font-medium text-white group-hover:text-[#fff033] transition-colors leading-snug">
                    {service.title}
                  </h3>
                  {service.badgeLogo && (
                    <div className="mt-2.5 inline-flex items-center gap-2 bg-white rounded-lg px-2.5 py-1">
                      <img src={service.badgeLogo} alt="Eco Retreat Odisha" className="h-6 w-auto object-contain" />
                    </div>
                  )}
                </div>
              </div>

              <div className="md:w-5/12 text-neutral-400 text-xs sm:text-base leading-relaxed pl-8 md:pl-0 font-normal">
                {service.desc}
              </div>

              <div className="pl-8 md:pl-0 shrink-0 self-end md:self-center">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-neutral-700 group-hover:border-[#fff033] group-hover:bg-[#fff033] text-white group-hover:text-black flex items-center justify-center transition-all">
                  <ArrowUpRight className="w-4 h-4 sm:w-5 sm:h-5 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </FadeContent>

      </div>
    </section>
  );
}
