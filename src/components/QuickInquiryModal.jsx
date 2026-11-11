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

const PRESET_SERVICES = [
  'Odisha Tour & Holiday Package',
  'India Domestic Tour Package',
  'International Holiday Package',
  'Corporate MICE / Offsite / Conference',
  'Puri Jagannath VIP Darshan & Coastal',
  '5-Star Hotel & Eco-Retreat Booking'
];

const PRESET_DESTINATIONS = [
  { value: 'Kashmir', label: 'Kashmir (Srinagar, Gulmarg & Pahalgam)' },
  { value: 'Goa', label: 'Goa Beaches & Coastal Holidays' },
  { value: 'Europe', label: 'Europe (Paris, Swiss Alps, Rome)' },
  { value: 'Dubai', label: 'Dubai & Middle East Holidays / MICE' },
  { value: 'Singapore', label: 'Singapore (Marina Bay & Sentosa)' },
  { value: 'Thailand', label: 'Thailand (Bangkok, Pattaya & Phuket)' },
  { value: 'Bali', label: 'Bali (Island & Temple Escapes)' },
  { value: 'Rajasthan', label: 'Rajasthan (Jaipur, Udaipur & Desert)' },
  { value: 'Andaman', label: 'Andaman Islands (Havelock & Neil)' },
  { value: 'Puri & Golden Triangle', label: 'Puri & Golden Triangle (Bhubaneswar-Konark)' },
  { value: 'Chilika Lake & Mangalajodi', label: 'Chilika Lake & Mangalajodi Bird Sanctuary' },
  { value: 'Daringbadi Hill Station', label: 'Daringbadi (Kashmir of Odisha)' },
  { value: 'Bhitarkanika Wildlife Safari', label: 'Bhitarkanika Mangrove & Wildlife Safari' },
  { value: 'Bhubaneswar Convention & MICE', label: 'Bhubaneswar (Corporate MICE & Conventions)' }
];

export default function QuickInquiryModal({ isOpen, onClose, initialData = {} }) {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    phone: '',
    email: '',
    destination: initialData?.destination || 'Puri & Golden Triangle',
    delegates: initialData?.delegates || '2 - 6 Travelers (Family / Small Group)',
    eventType: initialData?.service || 'Odisha Tour & Holiday Package',
    datePreference: 'Flexible Dates',
    notes: initialData?.notes || ''
  });

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (isOpen) {
      setSubmitted(false);
      setFormData(prev => ({
        ...prev,
        destination: initialData?.destination || 'Puri & Golden Triangle',
        eventType: initialData?.service || 'Odisha Tour & Holiday Package',
        delegates: initialData?.delegates || prev.delegates || '2 - 6 Travelers (Family / Small Group)',
        notes: initialData?.notes ?? ''
      }));
    }
  }, [initialData, isOpen]);

  if (!isOpen) return null;

  const handleSendViaWhatsApp = (e) => {
    if (e) e.preventDefault();
    const text = encodeURIComponent(
      `Hello Waves and Breeze Hospitality! 👋\n\nI would like to inquire about:\n• Service / Package: ${formData.eventType}\n• Destination: ${formData.destination}\n• Group Size / Travellers: ${formData.delegates}\n• Name: ${formData.name || 'Traveler / Planner'}\n• Organization / Family: ${formData.company || 'Private Inquiry'}\n• Phone: ${formData.phone || 'Direct Mobile'}\n• Email: ${formData.email || 'Not provided'}\n• Notes / Dates: ${formData.notes || 'Looking for best itinerary & competitive quote.'}`
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
                Odisha Tours • Global Holidays • Corporate MICE
              </div>
              <h3 className="font-display text-2xl font-bold text-neutral-900">
                Plan Your Journey &amp; Event
              </h3>
              <p className="text-xs text-neutral-500">
                Direct quotation &amp; customized itinerary from our Bhubaneswar headquarters via WhatsApp.
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
                <label className="block text-xs font-bold text-slate-700 mb-1">Company / Group Name</label>
                <input
                  type="text"
                  placeholder="e.g. Family / Enterprise Brand"
                  value={formData.company}
                  onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Phone Number (WhatsApp) *</label>
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
                <label className="block text-xs font-bold text-slate-700 mb-1">Service / Requirement</label>
                <select
                  value={formData.eventType}
                  onChange={(e) => setFormData({ ...formData, eventType: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                >
                  {!PRESET_SERVICES.includes(formData.eventType) && formData.eventType && (
                    <option value={formData.eventType}>{formData.eventType}</option>
                  )}
                  {PRESET_SERVICES.map((srv) => (
                    <option key={srv} value={srv}>{srv}</option>
                  ))}
                </select>
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
                  {!PRESET_DESTINATIONS.some(d => d.value === formData.destination) && formData.destination && (
                    <option value={formData.destination}>{formData.destination}</option>
                  )}
                  {PRESET_DESTINATIONS.map((dest) => (
                    <option key={dest.value} value={dest.value}>{dest.label}</option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 mb-1">Group Size / Travellers</label>
                <select
                  value={formData.delegates}
                  onChange={(e) => setFormData({ ...formData, delegates: e.target.value })}
                  className="w-full px-3.5 py-2 rounded-xl border border-slate-200 text-xs sm:text-sm bg-white"
                >
                  <option value="1 - 3 Travelers (Couple / Solo)">1 - 3 Travelers (Couple / Solo)</option>
                  <option value="2 - 6 Travelers (Family / Small Group)">2 - 6 Travelers (Family / Small Group)</option>
                  <option value="4 - 7 Travelers (Family Group)">4 - 7 Travelers (Family Group)</option>
                  <option value="8 - 25 Travelers (Extended Group)">8 - 25 Travelers (Extended Group)</option>
                  <option value="25 - 100+ Delegates (Corporate Offsite)">25 - 100+ Delegates (Corporate Offsite)</option>
                  <option value="100 - 1000+ Guests (Mega Convention / Expo)">100 - 1000+ Guests (Mega Convention / Expo)</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-bold text-slate-700 mb-1">Travel Dates &amp; Notes</label>
              <textarea
                rows={2}
                placeholder="Preferred travel dates, pick-up location, hotel preference, custom requests..."
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
