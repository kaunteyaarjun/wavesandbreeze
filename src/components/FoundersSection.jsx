import React from 'react';
import { Phone, MapPin, Mail, MessageSquare, ArrowUpRight } from 'lucide-react';
import { teamData } from '../data/team';

export default function FoundersSection({ onOpenInquiry }) {
  const founders = teamData.founders;

  return (
    <section id="founders" className="bg-white py-14 sm:py-24 lg:py-28 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Tag & Header */}
        <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-neutral-400 mb-4 sm:mb-6 flex items-center gap-2">
          <span className="px-2 py-0.5 bg-[#fff033] text-black font-black text-xs">04</span>
          <span className="text-neutral-700">EXECUTIVE LEADERSHIP</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-14 items-end mb-10 sm:mb-16 pb-8 sm:pb-10 border-b border-neutral-200">
          <div className="lg:col-span-8">
            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] sm:leading-[1.08]">
              Personal Accountability.<br />
              Direct Founder Supervision.
            </h2>
          </div>
          <div className="lg:col-span-4">
            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed">
              No middle-tier account managers or fragmented hand-offs. When you choose Waves &amp; Breeze Hospitality, our founder personally architects and oversees your travel and MICE management on the ground.
            </p>
          </div>
        </div>

        {/* Executive Founder Spotlight Card */}
        <div className="grid grid-cols-1 gap-6 sm:gap-8 mb-10 sm:mb-14">
          {founders.map((founder, idx) => (
            <div
              key={idx}
              className="bg-neutral-50 rounded-none p-6 sm:p-10 lg:p-12 border border-neutral-200 flex flex-col lg:flex-row lg:items-center justify-between gap-8 hover:border-black transition-all group"
            >
              <div className="lg:max-w-2xl">
                <div className="flex items-center gap-4 mb-5 sm:mb-6">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-black text-[#fff033] font-display font-black text-xl sm:text-2xl flex items-center justify-center shrink-0">
                    {founder.initials}
                  </div>
                  <div>
                    <span className="inline-block text-[10px] sm:text-xs font-bold uppercase tracking-widest px-2.5 sm:px-3 py-1 bg-white border border-neutral-300 text-neutral-800 mb-1.5">
                      {founder.role}
                    </span>
                    <h3 className="font-display text-2xl sm:text-3xl font-bold text-black">
                      {founder.name}
                    </h3>
                  </div>
                </div>

                {founder.focus && (
                  <p className="text-xs font-bold uppercase tracking-wider text-neutral-600 mb-3">
                    {founder.focus}
                  </p>
                )}

                <p className="text-neutral-600 text-xs sm:text-base leading-relaxed">
                  {founder.bio}
                </p>
              </div>

              {/* Direct Contacts - Touch Friendly on Phone */}
              <div className="pt-5 lg:pt-0 lg:pl-8 border-t lg:border-t-0 lg:border-l border-neutral-200 space-y-3 lg:min-w-[290px] shrink-0">
                <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
                  <span className="text-neutral-500 font-medium">Direct Mobile:</span>
                  <a
                    href={`tel:${founder.phone}`}
                    className="font-bold text-black hover:text-neutral-600 active:opacity-75 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <Phone className="w-3.5 h-3.5 text-black" />
                    <span>+91 {founder.phone}</span>
                  </a>
                </div>

                <div className="flex items-center justify-between gap-4 text-xs sm:text-sm">
                  <span className="text-neutral-500 font-medium">WhatsApp:</span>
                  <a
                    href={`https://wa.me/${founder.whatsapp}?text=Hello%20${encodeURIComponent(founder.name)}%2C%20I%20would%20like%20to%20enquire%20about%20Odisha%20travel%20packages%2C%20Eco%20Retreat%20booking%2C%20or%20corporate%20MICE%20services.`}
                    target="_blank"
                    rel="noreferrer"
                    className="font-bold text-black hover:underline active:opacity-75 transition-colors flex items-center gap-1.5 py-1"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-black" />
                    <span>Chat on WhatsApp &rarr;</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Office & Headquarters Bar */}
        <div className="p-6 sm:p-10 bg-black text-white flex flex-col md:flex-row items-stretch md:items-center justify-between gap-6">
          <div className="flex items-start sm:items-center gap-4 sm:gap-5">
            <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-[#fff033] flex items-center justify-center text-black shrink-0 mt-0.5 sm:mt-0">
              <MapPin className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-widest text-[#fff033] block">
                HEADQUARTERS &amp; OPERATIONAL OFFICE
              </span>
              <p className="text-sm sm:text-lg font-bold text-white mt-0.5 leading-snug">
                Near Hanuman Temple Lane, Old Town, Bhubaneswar, Odisha
              </p>
              <p className="text-xs sm:text-sm text-neutral-300 mt-1 flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-[#fff033]" />
                <span>Official Email: <a href="mailto:info@wavesandbreeze.in" className="text-white hover:text-[#fff033] font-semibold underline">info@wavesandbreeze.in</a></span>
              </p>
            </div>
          </div>

          <button
            onClick={() => onOpenInquiry({ notes: 'Requesting In-Person Meeting at Bhubaneswar Office' })}
            className="w-full md:w-auto px-6 py-3.5 bg-[#fff033] active:bg-white text-black font-bold text-sm transition-all flex items-center justify-center gap-2 group whitespace-nowrap active:scale-98"
          >
            <span>Schedule Office Consultation</span>
            <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </button>
        </div>

      </div>
    </section>
  );
}
