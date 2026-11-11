import React, { useState } from 'react';
import { Phone, Mail, MapPin, Send, MessageCircle, Clock, Building, CheckCircle, Sparkles } from 'lucide-react';
import { teamData } from '../data/team';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    destination: 'Puri - Golden Beach Resorts',
    eventType: 'Corporate Annual Conference',
    delegates: '100 - 250 Delegates',
    tentativeDates: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const handleWhatsAppDirect = () => {
    const text = encodeURIComponent(
      `Hello Biswaranjan! 👋\n\nI want to organize a MICE event with Waves & Breeze:\n- Name: ${formData.name || 'Corporate Planner'}\n- Company: ${formData.company || 'Enterprise'}\n- Destination: ${formData.destination}\n- Type: ${formData.eventType}\n- Delegates: ${formData.delegates}\n- Message: ${formData.message || 'Please connect for proposal.'}`
    );
    window.open(`https://wa.me/${teamData.founders[0].whatsapp}?text=${text}`, '_blank');
  };

  return (
    <section id="contact" className="py-16 sm:py-24 bg-white border-t border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-gold/15 text-brand-goldDark text-xs font-bold uppercase tracking-wider mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Direct Line To Leadership</span>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
            Connect With Our MICE Specialists
          </h2>
          <p className="text-slate-600 text-sm sm:text-base mt-3">
            Visit our registered office in Old Town Bhubaneswar or reach out directly to our founder for instantaneous support and proposals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Office & Direct Founders Info */}
          <div className="lg:col-span-5 space-y-6">
            {/* Office Address Card */}
            <div className="p-6 sm:p-8 rounded-3xl bg-brand-navy text-white shadow-xl border border-brand-gold/30 relative overflow-hidden">
              <div className="relative z-10">
                <span className="text-brand-goldLight text-[11px] font-bold uppercase tracking-widest block mb-1">
                  Registered Corporate Office
                </span>
                <h3 className="font-display text-2xl font-bold mb-4">
                  Waves and Breeze Hospitality
                </h3>

                <div className="space-y-4 text-sm text-slate-300">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-brand-gold shrink-0 mt-0.5" />
                    <div>
                      <p className="font-bold text-white">Office Address:</p>
                      <p className="text-slate-300 leading-snug">
                        {teamData.officeAddress}
                      </p>
                      <span className="text-xs text-brand-goldLight block mt-1">
                        Landmark: Old Town Cultural Corridor, Bhubaneswar
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Clock className="w-5 h-5 text-brand-gold shrink-0" />
                    <div>
                      <p className="font-bold text-white">Operations & Support:</p>
                      <p className="text-slate-300">Monday - Sunday: 9:00 AM – 9:00 PM</p>
                      <span className="text-[11px] text-emerald-400">24/7 On-Ground Emergency Event Concierge</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Founder Call Card */}
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200">
              <h4 className="font-display text-base font-bold text-slate-900 mb-4">
                Direct Contact With Founder
              </h4>

              <div className="space-y-4">
                {/* Founder */}
                <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-between gap-3">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 block">Founder &amp; Managing Director</span>
                    <h5 className="font-bold text-sm text-slate-900">{teamData.founders[0].name}</h5>
                    <a href={`tel:${teamData.founders[0].phone}`} className="text-xs font-bold text-brand-royal hover:underline">
                      +91 {teamData.founders[0].phone}
                    </a>
                  </div>
                  <div className="flex gap-2">
                    <a
                      href={`tel:${teamData.founders[0].phone}`}
                      className="w-9 h-9 rounded-full bg-brand-navy text-white flex items-center justify-center hover:bg-brand-royal transition-colors"
                      title="Call Biswaranjan"
                    >
                      <Phone className="w-4 h-4 text-brand-gold" />
                    </a>
                    <a
                      href={`https://wa.me/${teamData.founders[0].whatsapp}?text=Hello%20Biswaranjan%20Behera%2C%20I%20want%20to%20discuss%20a%20MICE%20event.`}
                      target="_blank"
                      rel="noreferrer"
                      className="w-9 h-9 rounded-full bg-emerald-600 text-white flex items-center justify-center hover:bg-emerald-700 transition-colors"
                      title="WhatsApp Biswaranjan"
                    >
                      <MessageCircle className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Interactive Proposal Request Form */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-xl">
            {submitted ? (
              <div className="py-12 text-center">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-9 h-9" />
                </div>
                <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
                  Proposal Request Received!
                </h3>
                <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
                  Thank you! Biswaranjan Behera has been notified. A comprehensive corporate itinerary and customized pricing will be sent to your contact details.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3">
                  <button
                    onClick={handleWhatsAppDirect}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm px-6 py-3 rounded-full flex items-center justify-center gap-2 shadow"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Open in WhatsApp Now</span>
                  </button>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="border border-slate-300 text-slate-700 text-sm font-semibold px-6 py-3 rounded-full hover:bg-slate-50"
                  >
                    Send Another Request
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="mb-2">
                  <h3 className="font-display text-xl sm:text-2xl font-bold text-slate-900">
                    Request A Customized MICE Proposal
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 mt-1">
                    Fill out your requirements below or send instantly via WhatsApp.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Your Full Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Priyabrata Mohanty"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Company / Organization *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Tata Consultancy / Reliance"
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Work Email Address *</label>
                    <input
                      type="email"
                      required
                      placeholder="name@company.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (Calling / WhatsApp) *</label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98765 43210"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Target Destination</label>
                    <select
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    >
                      <option value="Puri - Golden Beach Resorts">Puri - Golden Beach Resorts</option>
                      <option value="Bhubaneswar - 5-Star Conventions">Bhubaneswar - 5-Star Conventions</option>
                      <option value="Konark Eco-Retreat & Glamping">Konark Eco-Retreat & Glamping</option>
                      <option value="Chilika Lake & Houseboat Cruises">Chilika Lake & Houseboat Cruises</option>
                      <option value="Dubai & International Stages">Dubai & International Stages</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">Expected Delegates</label>
                    <select
                      value={formData.delegates}
                      onChange={(e) => setFormData({ ...formData, delegates: e.target.value })}
                      className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm bg-white focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                    >
                      <option value="20 - 50 Delegates (VIP / Board)">20 - 50 Delegates (VIP / Board)</option>
                      <option value="50 - 150 Delegates (Regional Meet)">50 - 150 Delegates (Regional Meet)</option>
                      <option value="150 - 500 Delegates (Annual Conference)">150 - 500 Delegates (Annual Conference)</option>
                      <option value="500 - 2,000+ Delegates (Mega Expo)">500 - 2,000+ Delegates (Mega Expo)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">Additional Requirements / Dates / Notes</label>
                  <textarea
                    rows={3}
                    placeholder="Tell us about your event agenda, preferred dates, AV/staging needs, or questions..."
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 rounded-xl border border-slate-200 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50"
                  />
                </div>

                <div className="pt-2 flex flex-col sm:flex-row gap-3">
                  <button
                    type="submit"
                    className="flex-1 bg-brand-navy hover:bg-brand-royal text-white font-bold text-sm py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <Send className="w-4 h-4 text-brand-gold" />
                    <span>Submit Proposal Request</span>
                  </button>

                  <button
                    type="button"
                    onClick={handleWhatsAppDirect}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-sm py-3 px-6 rounded-xl shadow-md transition-all flex items-center justify-center gap-2"
                  >
                    <MessageCircle className="w-4 h-4" />
                    <span>Inquire via WhatsApp</span>
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}

