import React from 'react';
import { Award, Building2, Hotel, ShieldCheck } from 'lucide-react';

export default function TrustBar() {
  const partners = [
    { name: 'Mayfair Hotels & Resorts', desc: 'Puri, Bhubaneswar & Gopalpur' },
    { name: 'Welcomhotel by ITC', desc: 'Luxury Convention Partner' },
    { name: 'Vivanta by Taj', desc: '5-Star Business Hospitality' },
    { name: 'Swosti Premium & Chilika', desc: 'Convention & Lake Resort' },
    { name: 'OTDC Eco-Tourism', desc: 'Odisha Tourism Partner' },
    { name: 'Marriott International', desc: 'Global MICE Alliance' },
    { name: 'Radisson Hotel Group', desc: 'Conferences & Banquets' }
  ];

  return (
    <section className="py-8 sm:py-10 border-b border-slate-200/70 bg-white/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-6">
          <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-slate-400">
            Preferred Hospitality Alliances & 5-Star Luxury Convention Venues
          </p>
        </div>

        {/* Brand Badges Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-3 sm:gap-4 items-center justify-center">
          {partners.map((partner, index) => (
            <div 
              key={index} 
              className="p-3 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-md hover:border-brand-gold/50 transition-all text-center flex flex-col items-center justify-center group"
            >
              <div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center mb-1.5 group-hover:bg-brand-navy group-hover:text-brand-gold transition-colors text-slate-600">
                <Hotel className="w-4 h-4" />
              </div>
              <span className="text-xs font-bold text-slate-800 leading-tight">
                {partner.name}
              </span>
              <span className="text-[10px] text-slate-400 mt-0.5 font-medium">
                {partner.desc}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

