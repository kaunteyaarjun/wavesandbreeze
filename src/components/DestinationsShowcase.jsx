import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeContent from './FadeContent';

export default function DestinationsShowcase({ onOpenInquiry }) {
  const destinations = [
    {
      id: 'puri',
      name: 'Puri',
      state: 'Odisha',
      tag: 'BEACH RESORTS & PILGRIMAGE',
      desc: 'Blue Flag Golden Beach, Mayfair Waves, open-air starry galas, luxury oceanfront retreats, and VIP Shree Jagannath Temple Darshan.',
      image: '/destinations/jagannath.jpg'
    },
    {
      id: 'bhubaneswar',
      name: 'Bhubaneswar',
      state: 'Odisha',
      tag: 'HERITAGE CAPITAL & EXPOS',
      desc: 'Smart capital city, Ekamra millennium temple circuits, mega auditoriums at Janata Maidan, Mayfair Lagoon, and Vivanta convention halls.',
      image: '/destinations/lingaraj_hd.jpg'
    },
    {
      id: 'konark',
      name: 'Konark',
      state: 'Odisha',
      tag: 'UNESCO SUN TEMPLE & ECO RETREAT',
      desc: 'Architectural wonder of the 13th-century Sun Temple, official Eco Retreat by Odisha Tourism Swiss glamping along Ramchandi Beach, and coastal trails.',
      image: '/destinations/konark_hd.jpg'
    },
    {
      id: 'chilika',
      name: 'Chilika Lake',
      state: 'Odisha',
      tag: 'LAGOON SAFARIS & DOLPHINS',
      desc: 'Asia’s largest brackish lagoon, chartered boat cruises, Irrawaddy dolphin watching, island picnics, and fresh coastal seafood dining.',
      image: '/destinations/chilika.jpg'
    },
    {
      id: 'daringbadi',
      name: 'Daringbadi',
      state: 'Odisha',
      tag: 'KASHMIR OF ODISHA & ECO RETREAT',
      desc: 'Pristine 3,000-foot hill station with Eco Retreat pine valley glamping, fragrant coffee plantations, Midubanda waterfall, and misty valleys.',
      image: '/destinations/daringbadi.jpg'
    },
    {
      id: 'bhitarkanika',
      name: 'Bhitarkanika & Satkosia',
      state: 'Odisha',
      tag: 'WILDLIFE SAFARIS & ECO RETREATS',
      desc: 'Estuarine crocodile creek safaris at Pentha Beach & Satkosia Mahanadi Gorge glamping, Barehipani waterfalls, and canopy forest eco-stays.',
      image: '/destinations/bhitarkanika_hd.jpg'
    },
    {
      id: 'dubai',
      name: 'Dubai & Global',
      state: 'International Hubs',
      tag: 'GLOBAL HOLIDAYS & MICE TRAVEL',
      desc: 'Custom family escapes, Dubai Marina yachts, Burj Khalifa access, Singapore, Bali, Europe tours, and corporate incentive circuits.',
      image: '/destinations/dubai_hd.jpg'
    }
  ];

  return (
    <section id="destinations" className="bg-white py-14 sm:py-24 lg:py-28 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeContent trigger="scroll" duration={0.9} threshold={0.1} ease="power2.out">
          {/* Section Tag */}
          <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-neutral-400 mb-4 sm:mb-6 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#fff033] text-black font-black text-xs">04</span>
            <span className="text-neutral-700">SIGNATURE DESTINATIONS IN ODISHA &amp; GLOBAL</span>
          </div>

          {/* Section Heading & Explore Link */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] sm:leading-[1.08]">
                Iconic Destinations.<br />
                <span className="text-[#8b181b]">From Golden Beaches to Pine Valleys.</span>
              </h2>
            </div>
            <button
              onClick={() => onOpenInquiry({ notes: 'Inquiry for Destinations Planning' })}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-black hover:text-neutral-600 transition-colors border-b-2 border-black hover:border-neutral-600 pb-0.5 self-start lg:self-end"
            >
              <span>Plan a Trip or Corporate Event</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-8 text-neutral-600 text-xs sm:text-base leading-relaxed mb-8 sm:mb-14">
            <p>
              We plan end-to-end leisure holidays, Eco Retreat by Odisha Tourism glamping camps, and corporate offsites across Puri, Bhubaneswar, Konark, Satkosia, Chilika Lake, Daringbadi, Bhitarkanika, Hirakud, Sonapur &amp; Putsil.
            </p>
            <p>
              For travelers heading beyond Odisha, we curate complete holiday packages across Kashmir, Goa, Rajasthan, Andaman, Dubai, Singapore, Thailand, Bali &amp; Europe with trusted hotel alliances.
            </p>
          </div>
        </FadeContent>

        {/* Destination Cards Grid */}
        <FadeContent trigger="scroll" duration={0.8} threshold={0.1} stagger={0.08} ease="power2.out" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {destinations.map((dest) => (
            <div
              key={dest.id}
              onClick={() => onOpenInquiry({ destination: `${dest.name}, ${dest.state}` })}
              className="group relative h-[380px] sm:h-[460px] rounded-none overflow-hidden cursor-pointer bg-neutral-900 flex flex-col justify-end p-5 sm:p-6 transition-all shadow-md active:scale-[0.99]"
            >
              <img
                src={dest.image}
                alt={dest.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent"></div>

              <div className="relative z-10 text-white">
                <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-widest text-[#fff033] block mb-1">
                  {dest.tag}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold tracking-tight text-white mb-1.5 sm:mb-2 group-hover:text-[#fff033] transition-colors">
                  {dest.name}
                </h3>
                <p className="text-xs text-neutral-300 line-clamp-2 leading-relaxed mb-3 sm:mb-4 font-normal">
                  {dest.desc}
                </p>

                <div className="pt-2 sm:pt-3 border-t border-white/20 flex items-center justify-between text-xs font-bold text-white group-hover:text-[#fff033]">
                  <span>Enquire / Check Packages</span>
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
