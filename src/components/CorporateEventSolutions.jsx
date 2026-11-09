import React from 'react';
import { Award, Briefcase, Sparkles, Megaphone, Users2, Stethoscope, Landmark, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function CorporateEventSolutions({ onOpenInquiry }) {
  const solutions = [
    {
      title: 'Annual Dealer & Channel Partner Meets',
      tagline: 'Celebrate Milestones & Motivate Performance',
      icon: <Award className="w-6 h-6 text-brand-gold" />,
      desc: 'High-energy conventions with theatrical stage reveals, target achievement awards, motivational keynote addresses, and high-impact evening entertainment.',
      features: ['Celebrity/Artist management & anchor coordination', 'Custom trophy fabrication & felicitation ceremony', 'Thematic stage design with panoramic LED backdrops', 'Interactive partner engagement zones']
    },
    {
      title: 'Sales Kick-Offs (SKO) & Team Bonding',
      tagline: 'Align Energy, Strategies & Goals for the Year Ahead',
      icon: <Users2 className="w-6 h-6 text-brand-gold" />,
      desc: 'Energizing multi-day corporate assemblies combining morning strategic roadmap sessions with afternoon beach Olympics, adventure challenges, and celebratory gala nights.',
      features: ['Beach Olympics on Puri’s Blue Flag sands', 'Certified behavioral team-building trainers', 'AV presentation production & executive speech prompters', 'Night beach bonfires with live musical ensembles']
    },
    {
      title: 'CXO & Senior Leadership Offsites',
      tagline: 'High-Level Strategy in Quiet, Ergonomic Luxury',
      icon: <Briefcase className="w-6 h-6 text-brand-gold" />,
      desc: 'Discreet board retreats and confidential strategy councils hosted in presidential suites, private beach villas, or heritage resorts with dedicated executive liaisons.',
      features: ['100% confidential, sound-isolated boardrooms', 'Encrypted high-speed video teleconferencing', 'Private chartered catamaran cruises on Chilika Lake', 'Curated fine-dining by 5-star executive masterchefs']
    },
    {
      title: 'Mega Product Launches & Brand Reveals',
      tagline: 'Create Lasting Market Buzz with Spectacular Theatrics',
      icon: <Megaphone className="w-6 h-6 text-brand-gold" />,
      desc: 'Automobile, tech hardware, and consumer product unveilings featuring 3D projection mapping, synchronized robotic lighting, dry-ice fog effects, and national media staging.',
      features: ['Custom structural entrance tunnels & experience zones', 'High-definition robotic LED screen reveal mechanisms', 'Media & press conference room setup with live streaming', 'Complete branding collaterals, backdrops & signage']
    },
    {
      title: 'Medical Congresses & Scientific Summits',
      tagline: 'Multi-Hall Academic Excellence & CME Precision',
      icon: <Stethoscope className="w-6 h-6 text-brand-gold" />,
      desc: 'State-of-the-art academic conferences with multi-track breakout halls, digital scientific poster sessions, pharmaceutical expo booths, and delegate CME accreditation desks.',
      features: ['Simultaneous multi-hall audio-visual rigging', 'Digital abstract and e-poster viewing kiosks', 'Pharma exhibition booth fabrication & electrical loads', 'Seamless delegate kit distribution & barcode check-in']
    },
    {
      title: 'Government & Association Conventions',
      tagline: 'Diplomatic Protocol, Security & Grand Scale',
      icon: <Landmark className="w-6 h-6 text-brand-gold" />,
      desc: 'Large-scale trade bodies, chamber of commerce summits, and public-sector conclaves at Bhubaneswar’s Janata Maidan and 5-star convention halls.',
      features: ['Z-category VIP security & pilot convoy logistics', 'Bilingual translation & stage podium protocols', 'Government department coordination & venue clearances', 'Banquet hosting for 2,000 to 5,000+ dignitaries']
    }
  ];

  return (
    <section className="py-16 sm:py-24 bg-slate-50 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header inspired by MICE Event India */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-navy text-white text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" />
            <span>Event Solutions By Objective</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight leading-tight">
            Tailored MICE Solutions For <br className="hidden sm:inline" />
            Every Corporate Requirement
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Every corporate gathering carries a unique purpose. Discover our customized blueprints engineered around measurable business results.
          </p>
        </div>

        {/* 6 Solutions Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-card hover:shadow-card-hover hover:border-brand-gold/60 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Icon & Tagline */}
                <div className="w-14 h-14 rounded-2xl bg-brand-navy flex items-center justify-center mb-5 border border-brand-gold/30 group-hover:scale-105 transition-transform">
                  {item.icon}
                </div>

                <span className="text-[11px] font-bold text-brand-royal uppercase tracking-wider block mb-1">
                  {item.tagline}
                </span>

                <h3 className="font-display text-xl font-bold text-slate-900 mb-3 group-hover:text-brand-navy transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed mb-6">
                  {item.desc}
                </p>

                {/* Features checklist */}
                <div className="space-y-2 mb-6">
                  {item.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button
                onClick={() => onOpenInquiry({ service: item.title })}
                className="w-full bg-slate-100 hover:bg-brand-navy hover:text-white text-slate-800 text-xs font-bold py-3 px-4 rounded-xl transition-all flex items-center justify-center gap-2 group/btn"
              >
                <span>Plan A {item.title.split(' ')[0]} Event</span>
                <ArrowRight className="w-3.5 h-3.5 text-brand-gold group-hover/btn:translate-x-1 transition-transform" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

