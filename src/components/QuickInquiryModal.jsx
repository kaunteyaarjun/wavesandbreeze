import React, { useState, useEffect } from 'react';
import { X, CheckCircle, Sparkles, Mail, Phone } from 'lucide-react';
import { teamData } from '../data/team';

// Authentic Official WhatsApp Icon
const WhatsAppIcon = ({ className = "w-5 h-5 text-white" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function QuickInquiryModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    destination: initialData?.destination || 'Puri, Odisha',
    delegates: initialData?.delegates || '50 - 150 Delegates',
    eventType: initialData?.service || 'Corporate Annual Conference',
    datePreference: 'Within 3 Months',
    notes: initialData?.notes || ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (initialData) {
      setFormData(prev => ({
        ...prev,
        destination: initialData.destination || prev.destination,
        eventType: initialData.service || prev.eventType,
        delegates: initialData.delegates || prev.delegates,
        notes: initialData.notes || prev.notes
      }));
    }
  }, [initialData]);

  if (!isOpen) return null;

  const handleSendViaWhatsApp = (e) => {
    if (e) e.preventDefault();
    const text = encodeURIComponent(
      `Hello Waves and Breeze Hospitality! 👋\n\nI want to plan a corporate MICE Management Program:\n• Name: ${formData.name || 'Corporate Planner'}\n• Organization: ${formData.company || 'Enterprise Brand'}\n• Phone: ${formData.phone || 'Direct Mobile'}\n• Email: ${formData.email || 'Not provided'}\n• Destination: ${formData.destination}\n• Event Type: ${formData.eventType}\n• Delegate Count: ${formData.delegates}\n• Timeline: ${formData.datePreference}\n• Notes: ${formData.notes || 'Looking for venue options and turnkey execution.'}`
    );
    window.open(`https://wa.me/${teamData.founders[0].whatsapp}?text=${text}`, '_blank');
    setSubmitted(true);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
      <div 
        className="bg-white rounded-3xl max-w-xl w-full p-6 sm:p-8 shadow-2xl border border-slate-200 relative max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          onClick={onClose}
          className="absolute top-5 right-5 w-8 h-8 rounded-full bg-slate-100 text-slate-500 hover:bg-slate-200 flex items-center justify-center font-bold text-sm"
          aria-label="Close"
        >
          <X className="w-4 h-4" />
        </button>

        {submitted ? (
          <div className="py-8 text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#25D366] flex items-center justify-center mx-auto mb-4">
              <CheckCircle className="w-8 h-8" />
            </div>
            <h3 className="font-display text-2xl font-bold text-slate-900 mb-2">
              WhatsApp Conversation Opened!
            </h3>
            <p className="text-slate-600 text-sm max-w-md mx-auto mb-6">
              Biswaranjan Behera (+91 9040577429) will review your requirements and provide curated venue options, AV specs, and tariff details.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-3">
              <button
                onClick={handleSendViaWhatsApp}
                className="bg-[#25D366] hover:bg-[#20bd5a] text-white font-bold text-sm px-6 py-3 rounded-xl flex items-center justify-center gap-2"
              >
                <WhatsAppIcon className="w-4 h-4" />
                <span>Re-open WhatsApp</span>
              </button>
              <button
                onClick={() => {
                  setSubmitted(false);
                  onClose();
                }}
                className="border border-slate-300 text-slate-700 font-semibold text-sm px-6 py-3 rounded-xl hover:bg-slate-50"
              >
                Close
              </button>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSendViaWhatsApp} className="space-y-4">
            <div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-none bg-[#fff033] text-black text-[11px] font-extrabold uppercase tracking-wider mb-1.5">
                <Sparkles className="w-3 h-3 text-black" />
                Custom MICE Management Proposal
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-900">
                Plan Your MICE Program
              </h3>
              <p className="text-xs text-neutral-500">
                Direct turnaround from our Bhubaneswar operational headquarters via WhatsApp.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Your Name *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alok Das"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Organization *</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Enterprise / Corporate Brand"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number *</label>
                <input
                  type="tel"
                  required
                  placeholder="+91 98765 43210"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Email Address</label>
                <input
                  type="email"
                  placeholder="work@company.com"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Destination</label>
                <select
                  value={formData.destination}
                  onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                >
                  <option value="Puri, Odisha">Puri (Golden Beach & Coastal Luxury)</option>
                  <option value="Bhubaneswar, Odisha">Bhubaneswar (5-Star Conventions & Auditoriums)</option>
                  <option value="Konark, Odisha">Konark (Sun Temple & Eco-Retreat Glamping)</option>
                  <option value="Chilika Lake, Odisha">Chilika Lake (Catamarans & Island Offsites)</option>
                  <option value="Dubai & International">Dubai & Global International Stages</option>
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Delegate Count</label>
                <select
                  value={formData.delegates}
                  onChange={(e) => setFormData({ ...formData, delegates: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                >
                  <option value="20 - 50 Guests (VIP / Board)">20 - 50 Guests (VIP / Board)</option>
                  <option value="50 - 150 Guests (Regional)">50 - 150 Guests (Regional)</option>
                  <option value="150 - 500 Guests (National)">150 - 500 Guests (National)</option>
                  <option value="500 - 2,500+ Guests (Mega Convention)">500 - 2,500+ Guests (Mega Convention)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Brief Description / Requirements</label>
              <textarea
                rows={2}
                placeholder="Preferred dates, venue preferences, AV/production specs..."
                value={formData.notes}
                onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm"
              />
            </div>

            {/* Single WhatsApp Submission Button */}
            <div className="pt-2">
              <button
                type="submit"
                className="w-full bg-[#25D366] hover:bg-[#20bd5a] active:bg-[#1da850] text-white font-bold text-sm sm:text-base py-3.5 px-6 rounded-2xl shadow-lg transition-all flex items-center justify-center gap-2.5 active:scale-98"
              >
                <WhatsAppIcon className="w-5 h-5 text-white" />
                <span>Submit Inquiry via WhatsApp</span>
              </button>
            </div>

            {/* Direct Email & Call Fallback */}
            <div className="pt-3 border-t border-neutral-100 flex flex-col sm:flex-row items-center justify-between text-xs text-neutral-500 gap-2">
              <div className="flex items-center gap-1.5">
                <Mail className="w-3.5 h-3.5 text-neutral-700" />
                <span>Email: <a href="mailto:info@wavesandbreeze.in" className="font-bold text-black hover:underline">info@wavesandbreeze.in</a></span>
              </div>
              <div className="flex items-center gap-1.5">
                <Phone className="w-3.5 h-3.5 text-neutral-700" />
                <span>Call: <a href="tel:9040577429" className="font-bold text-black hover:underline">+91 9040577429</a></span>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  );
}
