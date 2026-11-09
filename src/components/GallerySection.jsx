import React, { useState } from 'react';
import { Sparkles, Eye, Camera, Award, ArrowRight } from 'lucide-react';

export default function GallerySection({ onOpenInquiry }) {
  const [activeTab, setActiveTab] = useState('all');

  const galleryItems = [
    {
      id: 1,
      title: 'Grand Keynote & 3D LED Staging',
      category: 'staging',
      location: 'Mayfair Lagoon, Bhubaneswar',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&fit=crop&w=800&q=80',
      tag: 'Keynote & AV Rigging',
      capacity: '1,200 Delegates'
    },
    {
      id: 2,
      title: 'Beachside Starlit Gala Dinner',
      category: 'beach',
      location: 'Puri Golden Beach Coast',
      image: 'https://images.unsplash.com/photo-1511578314322-379afb476865?auto=format&fit=crop&w=800&q=80',
      tag: 'Coastal Celebration',
      capacity: '450 Delegates'
    },
    {
      id: 3,
      title: 'Konark Eco-Retreat Luxury Camps',
      category: 'eco',
      location: 'Marine Drive, Konark',
      image: 'https://images.unsplash.com/photo-1628107082933-07b23594f73c?auto=format&fit=crop&w=800&q=80',
      tag: 'Glamping & Offsites',
      capacity: '180 Delegates'
    },
    {
      id: 4,
      title: 'Mega Trade Expo & German Hangar Arena',
      category: 'staging',
      location: 'Janata Maidan, Bhubaneswar',
      image: 'https://images.unsplash.com/photo-1492684223066-81342ee5ff30?auto=format&fit=crop&w=800&q=80',
      tag: 'Trade Expo & Fabrication',
      capacity: '3,500 Delegates'
    },
    {
      id: 5,
      title: 'Traditional Odissi & Gotipua VIP Welcome',
      category: 'cultural',
      location: 'Heritage Circuit, Bhubaneswar',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
      tag: 'Odia Royal Hospitality',
      capacity: 'VIP Delegations'
    },
    {
      id: 6,
      title: 'Chilika Lake Catamaran Charter',
      category: 'eco',
      location: 'Satapada, Chilika',
      image: 'https://images.unsplash.com/photo-1544644181-1484b3fdfc62?auto=format&fit=crop&w=800&q=80',
      tag: 'Lagoon Incentive Cruise',
      capacity: '120 Delegates'
    }
  ];

  const filteredItems = activeTab === 'all' 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeTab);

  return (
    <section className="py-16 sm:py-24 bg-brand-dark text-white relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-96 h-96 bg-brand-gold/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-sky-500/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div>
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/20 text-brand-goldLight text-xs font-bold uppercase tracking-wider border border-brand-gold/30 mb-3">
              <Camera className="w-3.5 h-3.5 text-brand-gold" />
              <span>Execution Portfolio</span>
            </div>
            <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight">
              Our Event Production Showcase
            </h2>
            <p className="text-slate-300 text-sm sm:text-base mt-2 max-w-xl">
              From majestic 3D LED keynotes to starlit beach banquets on Puri’s shores, preview the scale and finesse Waves and Breeze Hospitality brings to every corporate stage.
            </p>
          </div>

          {/* Filter Pills */}
          <div className="flex flex-wrap gap-2">
            <button
              onClick={() => setActiveTab('all')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'all'
                  ? 'bg-brand-gold text-brand-navy shadow-glow-gold'
                  : 'bg-white/10 hover:bg-white/20 text-slate-300'
              }`}
            >
              All Setups
            </button>
            <button
              onClick={() => setActiveTab('staging')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'staging'
                  ? 'bg-brand-gold text-brand-navy shadow-glow-gold'
                  : 'bg-white/10 hover:bg-white/20 text-slate-300'
              }`}
            >
              Keynotes & Staging
            </button>
            <button
              onClick={() => setActiveTab('beach')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'beach'
                  ? 'bg-brand-gold text-brand-navy shadow-glow-gold'
                  : 'bg-white/10 hover:bg-white/20 text-slate-300'
              }`}
            >
              Beach Galas
            </button>
            <button
              onClick={() => setActiveTab('eco')}
              className={`px-4 py-2 rounded-full text-xs font-bold transition-all ${
                activeTab === 'eco'
                  ? 'bg-brand-gold text-brand-navy shadow-glow-gold'
                  : 'bg-white/10 hover:bg-white/20 text-slate-300'
              }`}
            >
              Eco-Retreats
            </button>
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group relative rounded-3xl overflow-hidden bg-white/5 border border-white/10 hover:border-brand-gold/60 transition-all duration-300 shadow-xl flex flex-col justify-end min-h-[340px]"
            >
              <img
                src={item.image}
                alt={item.title}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-brand-dark via-brand-dark/40 to-transparent opacity-90 group-hover:opacity-80 transition-opacity" />

              {/* Badges on top */}
              <div className="absolute top-4 left-4 right-4 flex items-center justify-between z-10">
                <span className="bg-brand-dark/80 backdrop-blur-md text-brand-goldLight text-[10px] font-bold px-3 py-1 rounded-full border border-brand-gold/30">
                  {item.tag}
                </span>
                <span className="bg-white/20 backdrop-blur-md text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-full">
                  {item.capacity}
                </span>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-6">
                <span className="text-xs text-brand-goldLight font-bold uppercase tracking-wider block mb-1">
                  {item.location}
                </span>
                <h3 className="font-display text-xl font-bold text-white mb-3 leading-snug">
                  {item.title}
                </h3>

                <button
                  onClick={() => onOpenInquiry({ destination: item.location, notes: `Inquiry for ${item.title}` })}
                  className="w-full bg-white/15 hover:bg-brand-gold hover:text-brand-navy text-white text-xs font-bold py-2.5 px-4 rounded-xl backdrop-blur-md transition-all flex items-center justify-center gap-2 border border-white/20"
                >
                  <span>Replicate This Setup</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

