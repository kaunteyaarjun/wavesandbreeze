import React from 'react';
import { ArrowRight, ShieldCheck, Award, Heart, Check } from 'lucide-react';
import FadeContent from './FadeContent';

export default function WhoWeAre({ onOpenInquiry }) {
  return (
    <section id="about" className="relative bg-[#faf7f2] py-16 sm:py-24 border-b border-[#e8dfd3] overflow-hidden">
      
      {/* Background Subtle Dashed Flight Arc Line */}
      <svg 
        className="absolute top-10 left-0 w-full h-[320px] pointer-events-none opacity-25" 
        viewBox="0 0 1200 320" 
        fill="none"
      >
        <path
          d="M -50 180 C 300 40, 750 40, 1250 200"
          stroke="#b89358"
          strokeWidth="1.5"
          strokeDasharray="6 8"
        />
      </svg>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeContent trigger="scroll" duration={0.9} threshold={0.15} ease="power2.out">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
            
            {/* Left Column: Framed Main Destination Photo + Overlapping Polaroids + Gold Stamp (100% Match to Reference) */}
            <div className="lg:col-span-6 relative flex justify-center lg:justify-start">
              
              {/* Main Vertical Photo Card with Golden Border */}
              <div className="relative w-full max-w-[420px] h-[520px] sm:h-[580px] rounded-2xl shadow-2xl border-2 border-[#d4af37]/60 p-2 bg-[#f4ebe1]">
                
                <div className="relative w-full h-full rounded-xl overflow-hidden bg-neutral-900">
                  <img
                    src="/destinations/dal_lake.jpg"
                    alt="Dal Lake Kashmir"
                    className="w-full h-full object-cover"
                  />
                  {/* Subtle dark gradient for badge readability */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/30"></div>

                  {/* Top-Left Location Badge */}
                  <div className="absolute top-4 left-4 z-10 bg-black/60 backdrop-blur-md text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full border border-white/20 flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#f5b324]"></span>
                    <span>DAL LAKE • KASHMIR</span>
                  </div>

                  {/* Circular Gold "SINCE 2020" Stamp on Bottom-Right */}
                  <div className="absolute bottom-4 right-4 z-10 w-16 h-16 rounded-full border-2 border-[#d4af37] bg-black/70 backdrop-blur-md flex flex-col items-center justify-center text-center shadow-lg">
                    <span className="text-[8px] uppercase tracking-widest text-neutral-300 font-bold leading-none">SINCE</span>
                    <span className="font-serif font-bold text-[#f5b324] text-base leading-none my-0.5">2020</span>
                    <span className="text-[7px] text-[#d4af37] tracking-wider leading-none">BBSR</span>
                  </div>
                </div>

                {/* Overlapping Polaroid 1 (Top-Right): Gulmarg Gondola */}
                <div className="absolute -top-4 -right-4 sm:-right-8 w-36 sm:w-44 bg-white p-2 sm:p-2.5 rounded-sm shadow-2xl rotate-6 border border-neutral-200 z-20 transition-transform hover:scale-105 duration-200">
                  <div className="h-24 sm:h-28 w-full overflow-hidden bg-neutral-100">
                    <img 
                      src="/destinations/gulmarg_gondola.jpg" 
                      alt="Gulmarg Gondola" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-serif italic text-[11px] sm:text-xs text-center text-neutral-700 mt-1.5 font-medium">
                    Gulmarg Gondola
                  </p>
                </div>

                {/* Overlapping Polaroid 2 (Bottom-Left): Srinagar Gardens */}
                <div className="absolute -bottom-6 -left-4 sm:-left-8 w-36 sm:w-44 bg-white p-2 sm:p-2.5 rounded-sm shadow-2xl -rotate-6 border border-neutral-200 z-20 transition-transform hover:scale-105 duration-200">
                  <div className="h-24 sm:h-28 w-full overflow-hidden bg-neutral-100">
                    <img 
                      src="/destinations/srinagar_garden.jpg" 
                      alt="Srinagar Garden" 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="font-serif italic text-[11px] sm:text-xs text-center text-neutral-700 mt-1.5 font-medium">
                    Srinagar garden
                  </p>
                </div>

              </div>

            </div>

            {/* Right Column: Narrative, Typography & Trust Cards (100% Match to Reference) */}
            <div className="lg:col-span-6 space-y-5 text-left">
              
              {/* Kicker Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 bg-[#ede4d7] text-neutral-800 text-[11px] font-extrabold uppercase tracking-widest rounded-full border border-[#ded1bf]">
                <ShieldCheck className="w-3.5 h-3.5 text-[#b89358]" />
                <span>ODISHA TRAVEL AGENCY • SINCE 2020</span>
              </div>

              {/* Big Serif Heading */}
              <h2 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-normal text-neutral-900 tracking-tight leading-[1.1]">
                Your trusted Odisha <span className="italic text-[#c8923a]">travel</span><br />
                agency <span className="italic text-[#c8923a]">&amp; MICE partner</span>
              </h2>

              {/* Italic Script Sub-heading */}
              <p className="font-serif italic text-xl sm:text-2xl text-neutral-600 font-light">
                Custom travel, Eco Retreat Odisha &amp; corporate MICE agency from Bhubaneswar
              </p>

              {/* Paragraphs */}
              <div className="space-y-3 text-neutral-600 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Since 2020 we have served 18,000+ travellers as a premier Odisha travel agency — curating honeymoons, family travel packages, Puri pilgrimage tours, official Eco Retreat by Odisha Tourism glamping stays, and global vacations.
                </p>
                <p>
                  From Puri, Konark, Chilika, and Daringbadi to Kashmir, Goa, Bali, Dubai, and Europe, our Bhubaneswar planners customize hotels, flights, and transfers around your dates — alongside our specialized corporate MICE agency wing for conferences and incentive travel.
                </p>
              </div>

              {/* Location Highlights with Diamonds */}
              <div className="flex flex-wrap items-center gap-2.5 text-xs font-bold uppercase tracking-wider text-neutral-700 pt-1">
                <span>DAL LAKE</span>
                <span className="text-[#c8923a]">❖</span>
                <span>GULMARG</span>
                <span className="text-[#c8923a]">❖</span>
                <span>PURI</span>
                <span className="text-[#c8923a]">❖</span>
                <span>KONARK</span>
                <span className="text-[#c8923a]">❖</span>
                <span>DARINGBADI</span>
              </div>

              {/* Three White Feature Cards with Golden Details */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                
                {/* Card 1: Registered Odisha DMC */}
                <div className="bg-white p-3.5 rounded-xl border border-[#e2d5c3] shadow-sm space-y-1">
                  <div className="w-8 h-8 rounded-full bg-[#fcf8f0] border border-[#d4af37]/40 flex items-center justify-center text-[#c8923a]">
                    <Award className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-neutral-900 text-xs sm:text-sm">
                    Registered DMC
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    Trusted across Odisha
                  </p>
                </div>

                {/* Card 2: Luxury Resort Partnerships */}
                <div className="bg-white p-3.5 rounded-xl border border-[#e2d5c3] shadow-sm space-y-1">
                  <div className="w-8 h-8 rounded-full bg-[#fcf8f0] border border-[#d4af37]/40 flex items-center justify-center text-[#c8923a]">
                    <ShieldCheck className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-neutral-900 text-xs sm:text-sm">
                    Luxury Resorts
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    60+ 5-Star partners
                  </p>
                </div>

                {/* Card 3: Personal Planners */}
                <div className="bg-white p-3.5 rounded-xl border border-[#e2d5c3] shadow-sm space-y-1">
                  <div className="w-8 h-8 rounded-full bg-[#fcf8f0] border border-[#d4af37]/40 flex items-center justify-center text-[#c8923a]">
                    <Heart className="w-4 h-4" />
                  </div>
                  <h4 className="font-display font-bold text-neutral-900 text-xs sm:text-sm">
                    Personal Planners
                  </h4>
                  <p className="text-[11px] text-neutral-500">
                    You talk to the founder
                  </p>
                </div>

              </div>

              {/* Pill Button: ABOUT US ➔ */}
              <div className="pt-2">
                <button
                  onClick={() => onOpenInquiry({ notes: 'Inquiry regarding about us & custom package planning' })}
                  className="group inline-flex items-center gap-3 bg-neutral-900 hover:bg-neutral-800 text-white pl-6 pr-2 py-2.5 rounded-full font-bold text-xs sm:text-sm shadow-md transition-all active:scale-95"
                >
                  <span className="uppercase tracking-wider font-extrabold text-[12px]">ABOUT US</span>
                  <span className="w-7 h-7 rounded-full bg-[#c8923a] text-black flex items-center justify-center font-bold transition-transform group-hover:translate-x-0.5">
                    ➔
                  </span>
                </button>
              </div>

            </div>

          </div>

        </FadeContent>
      </div>

    </section>
  );
}
