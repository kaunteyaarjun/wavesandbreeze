import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeContent from './FadeContent';

export default function ServicesList({ onOpenInquiry }) {
  const services = [
    {
      num: '01',
      title: 'Corporate Meetings & Executive Gatherings',
      desc: 'Board meetings, leadership councils, sales kick-offs, annual strategy offsites, and professional business event management.',
    },
    {
      num: '02',
      title: 'MICE Incentive Travel Management',
      desc: 'Destination selection, 5-star beachfront resorts, chartered catamaran cruises on Chilika, curated Odia heritage tours, hospitality, and group travel management across Odisha and international hubs.',
    },
    {
      num: '03',
      title: 'Conference & Symposium Management',
      desc: 'Venue selection, delegate registration desks, multi-hall acoustic rigging, 3D LED stage production, branding, VIP speaker hospitality, and live operations.',
    },
    {
      num: '04',
      title: 'Exhibition & Trade Fair Management',
      desc: 'Exhibition planning, German hangar structural fabrication, modular stall coordination, trade branding, exhibitor support, logistics, and complete on-ground management.',
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
              MICE MANAGEMENT SERVICES
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10 sm:mb-16 pb-8 sm:pb-10 border-b border-neutral-800">
            <div className="lg:col-span-8">
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-white leading-[1.1] sm:leading-[1.08]">
                Complete MICE Management<br />
                Services &amp; Capabilities
              </h2>
            </div>
            <div className="lg:col-span-4">
              <p className="text-neutral-400 text-sm sm:text-base leading-relaxed font-normal">
                From corporate meetings and luxury incentive travel to multi-day conferences, trade exhibitions, and destination logistics, our MICE management solutions ensure flawless corporate execution.
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
