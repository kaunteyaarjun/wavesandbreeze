import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MiceStrip from './components/MiceStrip';
import WhoWeAre from './components/WhoWeAre';
import ServicesList from './components/ServicesList';
import StrategyToExecution from './components/StrategyToExecution';
import OnePartnerBanner from './components/OnePartnerBanner';
import DestinationsShowcase from './components/DestinationsShowcase';
import ProcessSection from './components/ProcessSection';
import FoundersSection from './components/FoundersSection';
import FaqSection from './components/FaqSection';
import PreFooterCtas from './components/PreFooterCtas';
import Footer from './components/Footer';
import QuickInquiryModal from './components/QuickInquiryModal';
import FloatingWhatsApp from './components/FloatingWhatsApp';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [modalData, setModalData] = useState({});

  const handleOpenInquiry = (initialData = {}) => {
    setModalData(initialData);
    setModalOpen(true);
  };

  return (
    <div className="min-h-screen bg-white text-[#111111] flex flex-col font-sans selection:bg-[#fff033] selection:text-black">
      {/* 1. Header / Navbar */}
      <Navbar onOpenInquiry={handleOpenInquiry} />

      {/* Main Content */}
      <main className="flex-1">
        {/* 2. Hero Section (MICE Event Management Company in India for Meetings...) */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 3. Black M-I-C-E Strip */}
        <MiceStrip />

        {/* 4. 01 WHO WE ARE: Your End-to-End MICE Event Partner */}
        <WhoWeAre onOpenInquiry={handleOpenInquiry} />

        {/* 5. Complete MICE Event Management Services (Black Section) */}
        <ServicesList onOpenInquiry={handleOpenInquiry} />

        {/* 6. 02 FROM STRATEGY TO ON-GROUND EXECUTION */}
        <StrategyToExecution />

        {/* 7. WHY WAVES & BREEZE: One MICE Partner. Every Moving Part. (Maroon + Yellow Box) */}
        <OnePartnerBanner />

        {/* 8. 03 ODISHA + GLOBAL DESTINATIONS (5 Places: Puri, Bhubaneswar, Konark, Chilika, Dubai) */}
        <DestinationsShowcase onOpenInquiry={handleOpenInquiry} />

        {/* 9. MICE EVENT PLANNING PROCESS: Clear Process. Seamless Execution. (Vivid Yellow Section) */}
        <ProcessSection />

        {/* 10. 04 EXECUTIVE LEADERSHIP: Biswaranjan Behera & Sameer Kumar Panigrahi */}
        <FoundersSection onOpenInquiry={handleOpenInquiry} />

        {/* 11. 05 FREQUENTLY ASKED QUESTIONS */}
        <FaqSection onOpenInquiry={handleOpenInquiry} />

        {/* 12. Pre-Footer Dual CTA Banners */}
        <PreFooterCtas onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* 13. Footer */}
      <Footer />

      {/* Quick Inquiry Modal */}
      <QuickInquiryModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        initialData={modalData}
      />

      {/* Persistent Floating WhatsApp widget */}
      <FloatingWhatsApp />
    </div>
  );
}
