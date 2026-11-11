import React, { useState } from 'react';
import { X } from 'lucide-react';
import { teamData } from '../data/team';

// Authentic Official WhatsApp Icon
const WhatsAppIcon = ({ className = "w-6 h-6 text-white" }) => (
  <svg 
    viewBox="0 0 24 24" 
    className={className} 
    fill="currentColor"
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
  </svg>
);

export default function FloatingWhatsApp() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40 flex flex-col items-end">
      {/* Expandable popup panel */}
      {isOpen && (
        <div className="mb-3 w-[calc(100vw-2rem)] max-w-xs sm:w-80 bg-white rounded-2xl p-5 shadow-2xl border border-neutral-200 animate-in fade-in slide-in-from-bottom-3 duration-200">
          <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-[#25D366] animate-pulse" />
              <span className="font-display font-bold text-sm text-black">
                WhatsApp Founder Directly
              </span>
            </div>
            <button 
              onClick={() => setIsOpen(false)}
              className="text-neutral-400 hover:text-black p-1 active:scale-95"
              aria-label="Close WhatsApp panel"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <p className="text-xs text-neutral-500 my-3 leading-relaxed font-normal">
            Need urgent venue procurement, MICE management, or a custom proposal? Chat directly on WhatsApp:
          </p>

          <div className="space-y-2.5">
            {/* Biswaranjan */}
            <a
              href={`https://wa.me/${teamData.founders[0].whatsapp}?text=Hello%20Biswaranjan%20Behera%2C%20I%20want%20to%20plan%20a%20corporate%20MICE%20management%20solution.`}
              target="_blank"
              rel="noreferrer"
              className="p-3 rounded-xl bg-neutral-50 hover:bg-[#25D366]/10 active:bg-[#25D366]/20 border border-neutral-200 flex items-center justify-between group transition-colors"
            >
              <div>
                <span className="text-[10px] font-extrabold uppercase text-neutral-400 block">Founder</span>
                <span className="text-xs font-bold text-black block">{teamData.founders[0].name}</span>
                <span className="text-[11px] text-neutral-500 font-medium">+91 {teamData.founders[0].phone}</span>
              </div>
              <div className="w-9 h-9 rounded-full bg-[#25D366] text-white flex items-center justify-center shrink-0 shadow">
                <WhatsAppIcon className="w-5 h-5 text-white" />
              </div>
            </a>
          </div>

          <div className="mt-3 pt-2 text-center border-t border-neutral-100">
            <span className="text-[10px] text-neutral-400 font-medium">
              📍 Old Town, Bhubaneswar, Odisha
            </span>
          </div>
        </div>
      )}

      {/* Floating WhatsApp Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="group flex items-center gap-2.5 bg-[#25D366] hover:bg-[#20bd5a] text-white p-3.5 sm:px-5 sm:py-3.5 rounded-full shadow-2xl transition-all active:scale-95 border-2 border-white focus:outline-none"
        aria-label="Chat on WhatsApp"
        title="Chat on WhatsApp"
      >
        <WhatsAppIcon className="w-6 h-6 text-white" />
        <span className="hidden sm:inline font-bold text-sm tracking-wide">
          Chat on WhatsApp
        </span>
      </button>
    </div>
  );
}
