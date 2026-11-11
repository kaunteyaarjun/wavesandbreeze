import React, { useState } from 'react';
import { Plus, Minus } from 'lucide-react';

export default function FaqSection({ onOpenInquiry }) {
  const [openIdx, setOpenIdx] = useState(0);

  const faqs = [
    {
      q: 'What makes Waves and Breeze Hospitality a leading Odisha travel agency and MICE agency?',
      a: 'Waves and Breeze Hospitality is a Bhubaneswar-based Odisha travel agency offering complete leisure travel, custom Odisha tour packages, Eco Retreat by Odisha Tourism glamping stays, Pan-India & International holidays, 5-star hotel bookings, and a dedicated corporate MICE agency wing for business offsites and conferences.'
    },
    {
      q: 'Can I consult and book Eco Retreat by Odisha Tourism glamping stays through your travel agency?',
      a: 'Yes. As an experienced Odisha travel agency, we provide full Eco Retreat consultation, seasonal tariff comparisons, Swiss cottage selection (Deluxe, Premium, Royal Luxury & Presidential Suites), and trip logistics across all 7 Eco Retreat Odisha locations: Konark, Satkosia, Bhitarkanika, Daringbadi, Hirakud, Sonapur, and Putsil.'
    },
    {
      q: 'What Odisha travel packages and India/global holidays do you organize?',
      a: 'In Odisha, we curate the Golden Triangle (Bhubaneswar, Puri VIP Jagannath Darshan & Konark), Chilika Lake dolphin safaris, Daringbadi pine hill retreats, Bhitarkanika mangroves, and Similipal wildlife tours. For outstation travelers from Odisha, we build end-to-end travel packages for Kashmir, Goa, Rajasthan, Andaman, Dubai, Singapore, Thailand, Bali, and Europe.'
    },
    {
      q: 'Do you operate as a MICE agency for corporate events and company offsites?',
      a: 'Yes. Alongside leisure travel, our specialized MICE agency division plans executive board meetings, dealer incentive tours, conferences, expos, and gala dinners across top 5-star hotels (Mayfair Lagoon, Mayfair Waves Puri, Welcomhotel by ITC, Vivanta, Swosti Premium) and Eco Retreat group buyouts.'
    },
    {
      q: 'Do you organize international holidays and overseas corporate incentive trips?',
      a: 'Yes. We organize turnkey international family holidays, honeymoons, and corporate incentive delegations across Dubai, Singapore, Thailand, Bali, and Europe — complete with luxury hotel stays, guided sightseeing, and visa guidance.'
    },
    {
      q: 'Why plan your travel, Eco Retreat stay, or corporate event with Waves & Breeze Hospitality?',
      a: 'Founder Biswaranjan Behera (+91 9040577429) personally oversees every itinerary from consultation through arrival. With direct hotel & Eco Retreat partnerships across Odisha since 2020, you receive transparent recommendations, confirmed stays, and responsive WhatsApp support.'
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
              Travel, Eco Retreat<br />
              &amp; MICE FAQs
            </h2>

            <p className="text-neutral-600 text-sm sm:text-base leading-relaxed mb-6 sm:mb-8">
              Common questions about Odisha &amp; global tour packages, Eco Retreat by Odisha Tourism bookings, luxury stays, and corporate MICE programs.
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
