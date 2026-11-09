import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeContent from './FadeContent';

export default function DestinationsShowcase({ onOpenInquiry }) {
  const destinations = [
    {
      id: 'puri',
      name: 'Puri',
      state: 'Odisha',
      tag: 'BEACHFRONT GALAS / OFF-SITES',
      desc: 'Golden Beach coast, 5-star luxury beach resorts (Mayfair Waves, Sterling), open-air starry galas & executive retreats.',
      image: '/destinations/puri.jpg'
    },
    {
      id: 'bhubaneswar',
      name: 'Bhubaneswar',
      state: 'Odisha',
      tag: 'CONVENTION HUBS / EXPOS',
      desc: 'Smart capital city, mega auditoriums at Janata Maidan, Mayfair Lagoon, ITC Welcomhotel, and Vivanta convention halls.',
      image: '/destinations/bhubaneswar.jpg'
    },
    {
      id: 'konark',
      name: 'Konark',
      state: 'Odisha',
      tag: 'ECO-RETREAT / HERITAGE',
      desc: 'UNESCO World Heritage Sun Temple, Marine Drive luxury Swiss tent glamping, private cultural evenings & executive retreats.',
      image: '/destinations/konark.jpg'
    },
    {
      id: 'chilika',
      name: 'Chilika Lake',
      state: 'Odisha',
      tag: 'LAGOON CHARTERS / CATAMARANS',
      desc: 'Asia’s largest brackish lagoon, chartered catamarans, island team offsites, dolphin sanctuaries and fresh coastal banquets.',
      image: '/destinations/chilika.jpg'
    },
    {
      id: 'dubai',
      name: 'Dubai & Global',
      state: 'International Hubs',
      tag: 'GLOBAL CONVENTIONS / WORLD EXPOS',
      desc: 'Dubai World Trade Centre, luxury Dubai Marina yacht galas, premier international convention stages and world expos.',
      image: '/destinations/dubai.jpg'
    }
  ];

  return (
    <section id="destinations" className="bg-white py-14 sm:py-24 lg:py-28 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeContent trigger="scroll" duration={0.9} threshold={0.1} ease="power2.out">
          {/* Section Tag */}
          <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-neutral-400 mb-4 sm:mb-6 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#fff033] text-black font-black text-xs">03</span>
            <span className="text-neutral-700">ODISHA + GLOBAL DESTINATIONS</span>
          </div>

          {/* Section Heading & Explore Link */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-4 sm:gap-6 mb-8 sm:mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] sm:leading-[1.08] max-w-3xl">
                MICE Destinations Across Odisha with Global Reach
              </h2>
            </div>

            <div className="shrink-0">
              <button
                onClick={() => onOpenInquiry({ notes: 'Exploring All MICE Destinations' })}
                className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-black hover:text-neutral-600 transition-colors border-b-2 border-black hover:border-neutral-600 pb-0.5 active:opacity-75"
              >
                <span>Explore All Destinations</span>
                <ArrowUpRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Descriptions */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 text-neutral-600 text-xs sm:text-base leading-relaxed mb-8 sm:mb-14">
            <p>
              We deliver complete MICE management across Odisha’s premier coastal and convention destinations: Puri’s luxury beach resorts, Bhubaneswar’s 5-star auditoriums, Konark’s eco-retreat glamping, and Chilika Lake catamaran offsites.
            </p>
            <p>
              For organizations with international MICE requirements, our operational capabilities extend to premier global destinations like Dubai and Southeast Asia through confirmed hotel alliances and reliable local execution teams.
            </p>
          </div>
        </FadeContent>

        {/* Vertical Destination Cards with Stagger Reveal & Touch Optimization */}
        <FadeContent trigger="scroll" duration={0.8} threshold={0.1} stagger={0.08} ease="power2.out" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onOpenInquiry({ destination: `${dest.name}, ${dest.state}` })}
              className="group relative h-[340px] sm:h-[480px] rounded-none overflow-hidden cursor-pointer bg-neutral-900 flex flex-col justify-end p-5 sm:p-6 transition-all shadow-md active:scale-[0.99]"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="relative z-10 text-white">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-neutral-300 block mb-1">
                  {dest.tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1.5 sm:mb-2 group-hover:text-[#fff033] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-3 sm:mb-4 font-normal">
                  {dest.desc}
                </p>

                <div className="pt-2 sm:pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#fff033]">
                  <span>Enquire For Dates</span>
                  <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </div>
              </div>
            </div>
          ))}
        </FadeContent>

      </div>
    </section>
  );
}
