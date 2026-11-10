import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeContent from './FadeContent';

export default function ServicesList({ onOpenInquiry }) {
  const services = [
    {
      num: '01',
      title: 'Curated Odisha Tour Packages & Heritage Holidays',
      desc: 'Handcrafted leisure itineraries across Puri, Konark, Chilika Lake, Daringbadi, and Bhitarkanika. Includes VIP Jagannath temple darshan, luxury beachside stays, private chauffeur transfers, and authentic Odia dining.',
    },
    {
      num: '02',
      title: 'Corporate MICE Management & Executive Offsites',
      desc: 'Turnkey corporate event management across Odisha and Dubai: executive board meetings, CXO summits, annual sales kick-offs, dealer incentive tours, award gala nights, and technical 4K LED audio-visual production.',
    },
    {
      num: '03',
      title: 'Verified Cab & Fleet Rentals Across Odisha',
      desc: 'Spotless private transport fleet: AC Sedans (Dzire), Premium SUVs (Innova Crysta), Luxury Mini-Coaches (Force Urbania / Tempo Traveller), and heavy Volvo coaches with punctual, verified local chauffeurs.',
    },
    {
      num: '04',
      title: 'Luxury Hotel Bookings & Eco-Retreat Reservations',
      desc: 'Direct preferred corporate and holiday tariffs with leading hospitality brands: Mayfair Hotels & Resorts, Sterling Puri, Welcomhotel by ITC, Vivanta, Swosti, and luxury beachside Swiss glamping camps.',
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
              TRAVEL DMC &amp; MICE SERVICES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10 sm:mb-16 pb-8 sm:pb-10 border-b border-neutral-800">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
                Complete Odisha Travel<br />
                &amp; MICE Capabilities
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
                Whether you need a bespoke family holiday across Puri and Chilika, verified cab rentals, or a 1,500-delegate corporate convention, we deliver seamless hospitality backed by native Odisha mastery.
              </p>
            </div>
          </div>
        </FadeContent>

        {/* Rows with Stagger Animation - Touch & Mobile Optimized */}
        <FadeContent trigger="scroll" duration={0.8} threshold={0.1} stagger={0.1} ease="power2.out" className="divide-y divide-neutral-800">
          {services.map((service, idx) => (
            <div
              key={idx}
              onClick={() => onOpenInquiry({ service: service.title })}
              className="py-7 sm:py-12 group cursor-pointer active:bg-neutral-900 hover:bg-neutral-950 transition-all flex flex-col md:flex-row md:items-center justify-between gap-4 sm:gap-6"
            >
              <div className="flex items-start md:items-center gap-4 sm:gap-10 md:w-5/12">
                <span className="font-display font-black text-lg sm:text-xl text-[#fff033] shrink-0">
                  {service.num}
                </span>
                <h3 className="font-display text-xl sm:text-3xl font-medium text-white group-hover:text-[#fff033] transition-colors leading-snug">
                  {service.title}
                </h3>
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
