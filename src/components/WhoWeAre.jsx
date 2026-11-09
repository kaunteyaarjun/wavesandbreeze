import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import FadeContent from './FadeContent';

export default function WhoWeAre({ onOpenInquiry }) {
  return (
    <section id="about" className="bg-white py-12 sm:py-20 lg:py-24 border-b border-neutral-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeContent trigger="scroll" duration={1} threshold={0.15} ease="power2.out">
          {/* Section Tag */}
          <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-neutral-400 mb-5 sm:mb-8 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#fff033] text-black font-black text-xs">01</span>
            <span className="text-neutral-700">WHO WE ARE</span>
          </div>

          {/* Big Editorial Heading in Black and Maroon */}
          <h2 className="font-display text-2xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.15] sm:leading-[1.1] mb-8 sm:mb-12 max-w-5xl">
            Your End-to-End MICE Management Organisation in Odisha <br className="hidden sm:inline" />
            <span className="text-[#8b181b]">with international reach.</span>
          </h2>

          {/* Two-Column Copy with Target SEO Keywords: MICE organisation in Odisha, Meetings organisers in Odisha */}
          <div className="speakable-about grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8 lg:gap-14 text-neutral-600 text-sm sm:text-lg leading-relaxed mb-8 sm:mb-10">
            <div>
              <p>
                As the premier <strong>MICE organisation in Odisha</strong> and high-profile corporate <strong>meetings organisers in Odisha</strong> (with operational hub in Bhubaneswar), Waves and Breeze Hospitality orchestrates executive board retreats, annual dealer meets, national trade conferences, and luxury incentive tours across the state.
              </p>
            </div>
            <div>
              <p>
                Founded in Old Town, Bhubaneswar by Biswaranjan Behera and Sameer Kumar Panigrahi, our team provides single-point accountability for complex <strong>MICE events in Odisha</strong>: 5-star venue procurement, hotel room blocks, chartered fleet transport, 3D AV stage fabrication, and live on-site event direction.
              </p>
            </div>
          </div>

          {/* Alliances line */}
          <p className="text-xs sm:text-sm text-neutral-400 mb-6 sm:mb-8 leading-normal">
            Direct preferred hotel alliances with Mayfair Hotels &amp; Resorts, Vivanta by Taj, Welcomhotel by ITC, Swosti Premium, and international convention bureaus.
          </p>

          {/* CTA Link */}
          <div>
            <button
              onClick={() => onOpenInquiry({ notes: 'Inquiry regarding MICE Management Capabilities' })}
              className="inline-flex items-center gap-2 text-sm sm:text-base font-bold text-black hover:text-neutral-600 transition-colors border-b-2 border-black hover:border-neutral-600 pb-0.5 active:opacity-75"
            >
              <span>About Waves &amp; Breeze MICE Management</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
          </div>
        </FadeContent>

      </div>
    </section>
  );
}
