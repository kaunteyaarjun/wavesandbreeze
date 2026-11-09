import React, { useState, useMemo } from 'react';
import { Calculator, CheckCircle2, MessageCircle, Send, Sparkles, Building, Calendar, Users, IndianRupee } from 'lucide-react';
import { teamData } from '../data/team';

export default function EventCostEstimator({ onOpenInquiry }) {
  const [destination, setDestination] = useState('Puri - Beachfront Resorts');
  const [eventType, setEventType] = useState('2-Day Annual Conference & Beach Gala');
  const [delegates, setDelegates] = useState(120);
  const [durationDays, setDurationDays] = useState(2);
  const [hotelTier, setHotelTier] = useState('5-Star Luxury Resort (Mayfair / ITC)');
  const [includeAV, setIncludeAV] = useState(true);
  const [includeTeamBuilding, setIncludeTeamBuilding] = useState(true);
  const [includeAirportFleet, setIncludeAirportFleet] = useState(true);

  // Approximate base calculation for demonstration & planning transparency
  const calculation = useMemo(() => {
    let baseRatePerDayPerPax = 5500; // Base lodging + food

    if (destination.includes('Dubai') || destination.includes('Bali') || destination.includes('Singapore')) {
      baseRatePerDayPerPax = 18000;
    } else if (destination.includes('Konark') || destination.includes('Puri')) {
      baseRatePerDayPerPax = 6500;
    } else if (destination.includes('Goa')) {
      baseRatePerDayPerPax = 7500;
    }

    if (hotelTier.includes('5-Star')) {
      baseRatePerDayPerPax += 2000;
    }

    let stayAndFoodTotal = baseRatePerDayPerPax * delegates * durationDays;
    
    // Add-ons
    let avProduction = includeAV ? (durationDays * 65000 + (delegates > 200 ? 50000 : 25000)) : 0;
    let teamBuilding = includeTeamBuilding ? (delegates * 1200) : 0;
    let fleetLogistics = includeAirportFleet ? (delegates * 1500) : 0;

    let totalEstimate = stayAndFoodTotal + avProduction + teamBuilding + fleetLogistics;
    let perPaxEstimate = Math.round(totalEstimate / delegates);

    return {
      stayAndFoodTotal,
      avProduction,
      teamBuilding,
      fleetLogistics,
      totalEstimate,
      perPaxEstimate
    };
  }, [destination, eventType, delegates, durationDays, hotelTier, includeAV, includeTeamBuilding, includeAirportFleet]);

  const handleSendToWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Waves and Breeze Hospitality Team! 🌊✨\n\nI just calculated an estimate on your website:\n- Destination: ${destination}\n- Event: ${eventType}\n- Delegates: ${delegates} Guests\n- Duration: ${durationDays} Days\n- Tier: ${hotelTier}\n- Estimated Budget: ~₹${calculation.totalEstimate.toLocaleString('en-IN')}\n\nPlease share a formal customized proposal.`
    );
    window.open(`https://wa.me/${teamData.founders[0].whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="calculator" className="py-16 sm:py-24 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 text-brand-goldDark text-xs font-bold uppercase tracking-wider mb-3">
            <Calculator className="w-3.5 h-3.5" />
            <span>Interactive MICE Budget Tool</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Estimate Your Corporate Gathering Budget
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Get instant ballpark figures for your upcoming conference, executive offsite, or incentive tour with full transparency.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Controls Form */}
          <div className="lg:col-span-7 bg-slate-50 p-6 sm:p-8 rounded-3xl border border-slate-200 space-y-6">
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                1. Select Target Destination
              </label>
              <select
                value={destination}
                onChange={(e) => setDestination(e.target.value)}
                className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800 focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
              >
                <option value="Puri - Beachfront Resorts">Puri - Blue Flag Beachfront Resorts (Mayfair Waves / Sterling)</option>
                <option value="Bhubaneswar - Smart Convention City">Bhubaneswar - 5-Star Conventions (Mayfair Lagoon / Welcomhotel)</option>
                <option value="Konark Eco-Retreat">Konark Eco-Retreat - Luxury Swiss Glamping</option>
                <option value="Chilika Lake & Houseboat Cruises">Chilika Lake - Houseboat & Island Retreat</option>
                <option value="Gopalpur-on-Sea">Gopalpur-on-Sea - Heritage Coastal Conclave</option>
                <option value="Goa - Beachside Offsites">Goa - 5-Star Beach Resorts & Sundowners</option>
                <option value="Dubai, UAE">Dubai, UAE - Mega Convention & Desert Galas</option>
                <option value="Bali, Indonesia">Bali, Indonesia - Tropical Incentive Retreats</option>
              </select>
            </div>

            {/* Delegate Slider */}
            <div>
              <div className="flex justify-between items-center mb-2">
                <label className="text-xs font-bold uppercase tracking-wider text-slate-500">
                  2. Number of Attendees / Delegates
                </label>
                <span className="text-base font-extrabold text-brand-navy bg-white px-3 py-1 rounded-lg border border-slate-200">
                  {delegates} Delegates
                </span>
              </div>
              <input
                type="range"
                min="20"
                max="800"
                step="10"
                value={delegates}
                onChange={(e) => setDelegates(Number(e.target.value))}
                className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-brand-navy"
              />
              <div className="flex justify-between text-[11px] text-slate-400 mt-1 font-semibold">
                <span>20 (Board)</span>
                <span>200 (Regional)</span>
                <span>500 (National)</span>
                <span>800+ (Convention)</span>
              </div>
            </div>

            {/* Duration Selector */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  3. Event Duration (Days)
                </label>
                <select
                  value={durationDays}
                  onChange={(e) => setDurationDays(Number(e.target.value))}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800"
                >
                  <option value={1}>1 Day (Single Day Summit / Banquet)</option>
                  <option value={2}>2 Days / 1 Night (Weekend Offsite)</option>
                  <option value={3}>3 Days / 2 Nights (Annual Conference)</option>
                  <option value={4}>4 Days / 3 Nights (Grand Incentive Tour)</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
                  4. Accommodation Tier
                </label>
                <select
                  value={hotelTier}
                  onChange={(e) => setHotelTier(e.target.value)}
                  className="w-full p-3.5 rounded-xl border border-slate-200 bg-white text-sm font-semibold text-slate-800"
                >
                  <option value="5-Star Luxury Resort (Mayfair / ITC)">5-Star Luxury Resort / Hotel</option>
                  <option value="4-Star Premium Business Property">4-Star Premium Business Property</option>
                  <option value="Luxury Eco-Retreat Glamping Tents">Luxury Eco-Retreat Glamping Tents</option>
                </select>
              </div>
            </div>

            {/* Inclusions Checkboxes */}
            <div>
              <label className="block text-xs font-bold uppercase tracking-wider text-slate-500 mb-2.5">
                5. Required Turnkey Add-ons
              </label>
              <div className="space-y-2.5">
                <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-brand-gold/40">
                  <input
                    type="checkbox"
                    checked={includeAV}
                    onChange={(e) => setIncludeAV(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-navy focus:ring-brand-gold"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Stage Fabrication, LED Video Walls, Studio Sound & Intelligent Lighting
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-brand-gold/40">
                  <input
                    type="checkbox"
                    checked={includeTeamBuilding}
                    onChange={(e) => setIncludeTeamBuilding(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-navy focus:ring-brand-gold"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    Beach Olympics / Outdoor Team Building Facilitator & Equipment
                  </span>
                </label>

                <label className="flex items-center gap-3 p-3 bg-white rounded-xl border border-slate-200 cursor-pointer hover:border-brand-gold/40">
                  <input
                    type="checkbox"
                    checked={includeAirportFleet}
                    onChange={(e) => setIncludeAirportFleet(e.target.checked)}
                    className="w-4 h-4 rounded text-brand-navy focus:ring-brand-gold"
                  />
                  <span className="text-xs sm:text-sm font-semibold text-slate-800">
                    BBI Airport Meet & Greet + AC Luxury Coaches & VIP Sedans
                  </span>
                </label>
              </div>
            </div>
          </div>

          {/* Real-time Calculation Summary Card */}
          <div className="lg:col-span-5 bg-brand-navy text-white p-6 sm:p-8 rounded-3xl border border-brand-gold/30 shadow-2xl relative overflow-hidden flex flex-col justify-between">
            <div className="relative z-10">
              <span className="text-xs font-bold uppercase tracking-widest text-brand-goldLight block mb-1">
                Estimated Ballpark Investment
              </span>
              <div className="flex items-baseline gap-2 mb-4">
                <span className="font-display text-4xl sm:text-5xl font-extrabold text-white">
                  ₹{calculation.totalEstimate.toLocaleString('en-IN')}
                </span>
                <span className="text-xs text-slate-400 font-semibold">*Approx Total</span>
              </div>

              <div className="p-4 rounded-2xl bg-white/10 backdrop-blur-md border border-white/10 mb-6">
                <div className="flex justify-between items-center text-sm font-bold">
                  <span className="text-slate-300">Estimated Cost Per Delegate:</span>
                  <span className="text-brand-gold text-lg font-extrabold">
                    ₹{calculation.perPaxEstimate.toLocaleString('en-IN')}
                  </span>
                </div>
                <span className="text-[11px] text-slate-400 block mt-1">
                  Includes stay, meals, conference hall, and selected add-ons.
                </span>
              </div>

              {/* Breakdown */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-300 border-t border-white/15 pt-4 mb-6">
                <div className="flex justify-between">
                  <span>Hotel Stay & Full Board Banquet:</span>
                  <span className="font-bold text-white">₹{calculation.stayAndFoodTotal.toLocaleString('en-IN')}</span>
                </div>
                {includeAV && (
                  <div className="flex justify-between">
                    <span>Keynote AV, LED Wall & Staging:</span>
                    <span className="font-bold text-white">₹{calculation.avProduction.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {includeTeamBuilding && (
                  <div className="flex justify-between">
                    <span>Team Building & Excursion:</span>
                    <span className="font-bold text-white">₹{calculation.teamBuilding.toLocaleString('en-IN')}</span>
                  </div>
                )}
                {includeAirportFleet && (
                  <div className="flex justify-between">
                    <span>Airport Transfer Fleet:</span>
                    <span className="font-bold text-white">₹{calculation.fleetLogistics.toLocaleString('en-IN')}</span>
                  </div>
                )}
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-3 relative z-10 pt-4 border-t border-white/15">
              <button
                type="button"
                onClick={handleSendToWhatsApp}
                className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3.5 px-4 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-5 h-5" />
                <span>Send This Estimate to WhatsApp</span>
              </button>

              <button
                type="button"
                onClick={() => onOpenInquiry({ 
                  destination, 
                  delegates: `${delegates} Guests`, 
                  notes: `Estimated Budget: ₹${calculation.totalEstimate.toLocaleString('en-IN')}` 
                })}
                className="w-full bg-white/15 hover:bg-white/25 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl border border-white/20 transition-all text-center"
              >
                Request Detailed PDF Proposal
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

