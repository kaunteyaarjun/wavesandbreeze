import React from 'react';
import { Users, Briefcase, ShieldCheck, ArrowUpRight, Phone, Check } from 'lucide-react';
import { fleetVehicles } from '../data/packages';
import FadeContent from './FadeContent';

// Authentic Official WhatsApp Icon
const WhatsAppIcon = ({ className = "w-4 h-4 text-white" }) => (
  <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function FleetRentalSection({ onOpenInquiry }) {
  const handleBookVehicleWhatsApp = (veh) => {
    const text = encodeURIComponent(
      `Hello Waves and Breeze Hospitality! 👋\n\nI want to book / enquire for Cab & Fleet Rental in Odisha:\n• Vehicle: ${veh.name} (${veh.category})\n• Capacity: ${veh.capacity}\n• Requirement: Sightseeing / Airport Transfer / Corporate Event\n\nPlease share availability and fare chart.`
    );
    window.open(`https://wa.me/919040577429?text=${text}`, '_blank');
  };

  return (
    <section id="fleet" className="bg-white py-14 sm:py-24 lg:py-28 border-b border-neutral-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <FadeContent trigger="scroll" duration={0.9} threshold={0.1} ease="power2.out">
          {/* Section Tag */}
          <div className="text-xs sm:text-sm font-extrabold tracking-widest uppercase text-neutral-400 mb-4 sm:mb-6 flex items-center gap-2">
            <span className="px-2 py-0.5 bg-[#fff033] text-black font-black text-xs">03</span>
            <span className="text-neutral-700">VERIFIED CAB &amp; FLEET RENTALS IN ODISHA</span>
          </div>

          {/* Heading */}
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-8 sm:mb-12">
            <div>
              <h2 className="font-display text-3xl sm:text-5xl lg:text-6xl font-medium tracking-tight text-black leading-[1.1] sm:leading-[1.08]">
                Punctual Chauffeurs.<br />
                <span className="text-[#8b181b]">Spotless Fleet Across Odisha.</span>
              </h2>
            </div>
            <p className="text-neutral-600 text-sm sm:text-base max-w-md leading-relaxed">
              From airport pickups at BBI Bhubaneswar to multi-day temple circuits in Puri, Konark, and Chilika, our private fleet guarantees fixed transparent rates with no surge pricing.
            </p>
          </div>
        </FadeContent>

        {/* Fleet Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {fleetVehicles.map((veh, idx) => (
            <div
              key={idx}
              className="group bg-neutral-50 hover:bg-white rounded-none border border-neutral-200 hover:border-black p-6 sm:p-7 transition-all duration-300 flex flex-col justify-between shadow-sm hover:shadow-lg"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 bg-[#fff033] text-black text-[10px] font-black uppercase tracking-wider">
                    {veh.tag}
                  </span>
                  <span className="text-xs font-bold text-neutral-400">
                    {veh.category}
                  </span>
                </div>

                <h3 className="font-display text-xl font-bold text-black group-hover:text-[#8b181b] transition-colors mb-2">
                  {veh.name}
                </h3>

                <div className="flex items-center gap-2 text-xs font-semibold text-neutral-600 mb-4 pb-4 border-b border-neutral-200">
                  <Users className="w-4 h-4 text-black shrink-0" />
                  <span>{veh.capacity}</span>
                </div>

                <p className="text-xs text-neutral-500 mb-5 leading-relaxed font-normal">
                  {veh.idealFor}
                </p>

                {/* Features */}
                <div className="space-y-2 mb-6">
                  {veh.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-[11px] text-neutral-700">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#25D366] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleBookVehicleWhatsApp(veh)}
                className="w-full bg-black group-hover:bg-[#25D366] text-white py-2.5 px-4 font-bold text-xs rounded-none transition-all flex items-center justify-center gap-2 shadow active:scale-98"
              >
                <WhatsAppIcon className="w-3.5 h-3.5 text-white" />
                <span>Book / Check Tariff</span>
              </button>
            </div>
          ))}
        </div>

        {/* Airport Transfers Quick Strip */}
        <div className="mt-10 p-5 sm:p-6 bg-neutral-100 border border-neutral-200 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-sm">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] shrink-0 animate-pulse" />
            <span className="font-bold text-black">
              Popular Routes: Bhubaneswar Airport ⇄ Puri (60 mins) • Bhubaneswar ⇄ Konark • Bhubaneswar ⇄ Chilika
            </span>
          </div>
          <a
            href="tel:9040577429"
            className="font-bold text-black hover:text-[#8b181b] flex items-center gap-1.5 shrink-0"
          >
            <Phone className="w-4 h-4 text-[#8b181b]" />
            <span>Instant Cab Booking: +91 9040577429</span>
          </a>
        </div>

      </div>
    </section>
  );
}
