import React from 'react';
import { ArrowUpRight, ArrowRight } from 'lucide-react';
import FadeContent from './FadeContent';

export default function Hero({ onOpenInquiry }) {
  return (
    <section className="bg-white pt-3 sm:pt-10 pb-8 sm:pb-20 lg:pb-24 border-b border-neutral-100 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Two-Column Grid on Desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-10 lg:gap-14 items-center">
          
          {/* Left Column: Editorial Headline & Actions */}
          <div className="lg:col-span-7 flex flex-col justify-center">
            
            <FadeContent trigger="mount" duration={0.9} delay={0.1} ease="power2.out">
              {/* Massive Editorial Headline */}
              <h1 className="font-display text-[28px] xs:text-[33px] sm:text-6xl lg:text-[70px] font-medium tracking-tight text-black leading-[1.06] sm:leading-[1.05] mb-3.5 sm:mb-6">
                Premier Travel &amp;<br />
                MICE Organisation in Odisha<br />
                <span className="text-[#8b181b] block">for Curated Tours,</span>
                <span className="text-[#8b181b] block">Puri &amp; Heritage Holidays,</span>
                <span className="text-[#8b181b] block">Corporate Offsites &amp;</span>
                <span className="text-[#8b181b] block">Global Conventions</span>
              </h1>

              {/* Paragraph with Target SEO Keywords: Odisha holiday packages, MICE organisation in Odisha, Travel DMC */}
              <p className="speakable-summary text-neutral-600 text-xs xs:text-sm sm:text-lg leading-relaxed max-w-xl mb-4 sm:mb-8 font-normal">
                Waves and Breeze Hospitality is Odisha's premier <strong>Destination Management Company (DMC)</strong> and leading corporate <strong>MICE organisation in Odisha</strong>. From handcrafted <strong>Odisha holiday packages</strong>, Jagannath Puri temple darshan tours, and Chilika dolphin safaris to executive board meetings, dealer summits, and verified luxury fleet rentals across Odisha.
              </p>

              {/* Primary Actions: Black Pill with Yellow Arrow + MICE Button + Fleet Link */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 sm:gap-4 mb-4 sm:mb-8">
                <a
                  href="#packages"
                  className="w-full sm:w-auto inline-flex items-center justify-between sm:justify-start gap-3 bg-black active:bg-neutral-800 text-white rounded-full pl-5 sm:pl-7 pr-2 py-2 sm:py-2.5 font-bold text-sm sm:text-base transition-all group shadow-sm active:scale-98"
                >
                  <span>Explore Odisha Packages</span>
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-[#fff033] text-black flex items-center justify-center font-bold shrink-0">
                    <ArrowUpRight className="w-5 h-5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </span>
                </a>

                <button
                  onClick={() => onOpenInquiry({ eventType: 'Corporate MICE Management' })}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 text-xs sm:text-sm font-bold text-black border border-black hover:bg-neutral-50 px-5 py-2.5 rounded-full transition-all active:scale-98"
                >
                  <span>Corporate MICE Offsites</span>
                </button>

                <a
                  href="#fleet"
                  className="inline-flex items-center justify-center sm:justify-start gap-1.5 text-xs sm:text-sm font-semibold text-neutral-700 hover:text-black py-1 transition-colors group"
                >
                  <span>Cab &amp; Fleet Rentals</span>
                  <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>

              {/* Contact & Office Sub-line (Visible in Hero) */}
              <div className="pt-3 sm:pt-6 border-t border-neutral-200 text-[10.5px] xs:text-[11px] sm:text-[13px] font-semibold text-neutral-500 uppercase tracking-wider flex flex-wrap items-center gap-x-3 gap-y-1 sm:gap-x-4 sm:gap-y-2 mb-6 lg:mb-0">
                <span>PHONE: <a href="tel:9040577429" className="text-black font-bold">+91-9040577429</a> / <a href="tel:8249657614" className="text-black font-bold">+91-8249657614</a></span>
                <span className="hidden sm:inline">•</span>
                <span>EMAIL: <a href="mailto:info@wavesandbreeze.in" className="text-black font-bold lowercase">info@wavesandbreeze.in</a></span>
                <span className="hidden sm:inline">•</span>
                <span>OFFICE: <strong className="text-black">OLD TOWN, BHUBANESWAR</strong></span>
              </div>

              {/* Mobile-Only Visual Stage Picture (flows directly after actions) */}
              <div className="block lg:hidden mt-5">
                <div className="relative rounded-none overflow-hidden shadow-xl bg-neutral-900">
                  <img
                    src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1000&q=85"
                    alt="Corporate Stage Production & Keynote Convention"
                    className="w-full h-[200px] xs:h-[240px] sm:h-[320px] object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent"></div>

                  {/* Vivid Yellow 360° Floating Badge */}
                  <div className="absolute left-0 bottom-2.5 bg-[#fff033] text-black p-3 max-w-[140px] shadow-2xl z-10">
                    <div className="font-display font-black text-xl leading-none mb-1">
                      360°
                    </div>
                    <p className="text-[9.5px] font-bold leading-tight text-black">
                      Tours, Luxury Stays, Cabs &amp; MICE.
                    </p>
                  </div>

                  {/* Bottom Tag */}
                  <div className="absolute right-2.5 bottom-2.5 text-right z-10">
                    <span className="text-[8.5px] font-extrabold uppercase tracking-widest text-neutral-400 block">
                      DMC &amp; MICE ORGANISATION
                    </span>
                    <span className="text-white font-bold text-xs">
                      Odisha + Global
                    </span>
                  </div>
                </div>
              </div>
            </FadeContent>

          </div>

          {/* Right Column: Desktop Visual Stage Frame + Yellow 360 Card */}
          <div className="hidden lg:block lg:col-span-5 relative">
            <FadeContent trigger="mount" duration={1.1} delay={0.2} ease="power2.out">
              <div className="relative rounded-none overflow-hidden shadow-2xl bg-neutral-900">
                {/* Event stage photo */}
                <img
                  src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=1200&q=85"
                  alt="Corporate Stage Production & Keynote Convention"
                  className="w-full h-[620px] object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

                {/* Vivid Yellow 360° Floating Card on bottom-left */}
                <div className="absolute left-0 bottom-10 bg-[#fff033] text-black p-6 sm:p-7 max-w-[220px] shadow-2xl z-10">
                  <div className="font-display font-black text-4xl sm:text-5xl leading-none mb-2">
                    360°
                  </div>
                  <p className="text-xs sm:text-[13px] font-bold leading-tight text-black">
                    Tours, Luxury Stays, Fleet &amp; MICE Management.
                  </p>
                </div>

                {/* Bottom black tag */}
                <div className="absolute right-4 bottom-4 text-right z-10">
                  <span className="text-[11px] font-extrabold uppercase tracking-widest text-neutral-400 block">
                    ODISHA TRAVEL DMC &amp; MICE
                  </span>
                  <span className="text-white font-bold text-lg sm:text-xl">
                    Odisha + Global
                  </span>
                </div>
              </div>
            </FadeContent>
          </div>

        </div>

      </div>
    </section>
  );
}
