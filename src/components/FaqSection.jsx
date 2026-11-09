import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection({ onOpenInquiry }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What is MICE management and how does Waves & Breeze operate in Bhubaneswar?',
      a: 'MICE stands for Meetings, Incentives, Conferences, and Exhibitions. Headquartered in Old Town, Bhubaneswar, Waves and Breeze Hospitality operates as an end-to-end MICE management partner handling venue procurement, hotel blocks, flight transfers, AV staging, and live on-ground operations across Odisha and global destinations.'
    },
    {
      q: 'Are you top-rated meetings organisers in Bhubaneswar?',
      a: 'Yes, Waves and Breeze Hospitality is recognized among the premier meetings organisers in Bhubaneswar, providing direct venue booking with 5-star hotels like Mayfair Lagoon, Welcomhotel by ITC, and Vivanta, along with complete delegate hospitality and executive board offsite coordination.'
    },
    {
      q: 'Which destinations in Odisha do you manage for corporate offsites and MICE events?',
      a: 'We manage flagship corporate MICE destinations across Odisha including Bhubaneswar (convention halls & Janata Maidan), Puri (Golden Beach luxury resorts), Konark (Marine Drive Eco-Retreat glamping), and Chilika Lake (private catamaran charters and island offsites).'
    },
    {
      q: 'What scale of corporate meetings and conferences can you handle?',
      a: 'We manage gatherings ranging from 20-delegate VIP board meetings to 2,500+ delegate national conventions, managing multiple breakout halls, LED display walls, high-definition audio, and simultaneous delegate dining.'
    },
    {
      q: 'Do you manage international corporate incentive travel?',
      a: 'Yes. We have established ground partner alliances in Dubai, Singapore, Thailand, and Bali for turnkey international incentive reward travel and corporate summits.'
    },
    {
      q: 'Why choose Waves & Breeze Hospitality instead of a generic event broker?',
      a: 'Our founders Biswaranjan Behera and Sameer Kumar Panigrahi personally oversee your event on the ground. We have direct hotel agreements ensuring guaranteed room inventory, competitive corporate tariffs, and single-point accountability.'
    }
  ];

  return (
    <section id="faqs" className="bg-white py-14 sm:py-24 lg:py-28 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading (Static on mobile, sticky on desktop) */}
          <div className="lg:col-span-5 static lg:sticky lg:top-28">
            <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-neutral-400 mb-4 sm:mb-6 flex items-center gap-2">
              <span className="px-2 py-0.5 bg-[#fff033] text-black font-black text-xs">05</span>
              <span className="text-neutral-700">FREQUENTLY ASKED QUESTIONS</span>
            </div>

            <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] sm:leading-[1.08] mb-4 sm:mb-6">
              MICE Management<br />
              FAQs
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Common questions about corporate MICE management, meetings organisers in Bhubaneswar, and turnkey event planning.
            </p>

            <button
              onClick={() => onOpenInquiry({ notes: 'General Inquiry / FAQ Clarification' })}
              className="text-xs sm:text-sm font-bold text-black hover:text-neutral-600 border-b-2 border-black pb-0.5 inline-block active:opacity-75"
            >
              Have a different question? Ask us directly &rarr;
            </button>
          </div>

          {/* Right Column: Clean Accordion List with Large Touch Targets */}
          <div className="lg:col-span-7 divide-y divide-neutral-200 border-t border-b border-neutral-200">
            {faqs.map((faq, idx) => {
              const isOpen = openIdx === idx;
              return (
                <div key={idx} className="py-4 sm:py-7">
                  <button
                    onClick={() => setOpenIdx(isOpen ? -1 : idx)}
                    className="w-full text-left flex items-start justify-between gap-4 py-2 group active:opacity-75"
                    aria-expanded={isOpen}
                  >
                    <span className="font-display font-medium text-base sm:text-xl text-black leading-snug">
                      {faq.q}
                    </span>
                    <span className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-black text-white flex items-center justify-center shrink-0 mt-0.5">
                      {isOpen ? <Minus className="w-3.5 h-3.5 sm:w-4 sm:h-4" /> : <Plus className="w-3.5 h-3.5 sm:w-4 sm:h-4" />}
                    </span>
                  </button>

                  {isOpen && (
                    <div className="mt-2 sm:mt-4 text-neutral-600 text-xs sm:text-base leading-relaxed pr-2 sm:pr-8 animate-in fade-in duration-150">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
