import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import MiceStrip from './components/MiceStrip';
import TourPackagesSection from './components/TourPackagesSection';
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
        {/* 2. Hero Section */}
        <Hero onOpenInquiry={handleOpenInquiry} />

        {/* 3. Black 4-Pillar Strip (Tours • MICE • Holidays • Hotels) */}
        <MiceStrip />

        {/* 4. Curated Odisha, India & International Tour Packages */}
        <TourPackagesSection onOpenInquiry={handleOpenInquiry} />

        {/* 5. Who We Are: Trusted Odisha Travel DMC & Corporate MICE Partner */}
        <WhoWeAre onOpenInquiry={handleOpenInquiry} />

        {/* 6. Comprehensive Travel, Resort & MICE Services */}
        <ServicesList onOpenInquiry={handleOpenInquiry} />

        {/* 8. From Strategy to On-Ground Execution */}
        <StrategyToExecution />

        {/* 9. Why Waves & Breeze Banner */}
        <OnePartnerBanner />

        {/* 10. Destinations Showcase (Puri, Bhubaneswar, Konark, Chilika, Daringbadi, Dubai) */}
        <DestinationsShowcase onOpenInquiry={handleOpenInquiry} />

        {/* 11. Planning Process */}
        <ProcessSection />

        {/* 12. Leadership / Founders */}
        <FoundersSection onOpenInquiry={handleOpenInquiry} />

        {/* 13. Frequently Asked Questions */}
        <FaqSection onOpenInquiry={handleOpenInquiry} />

        {/* 14. Pre-Footer Dual CTA Banners */}
        <PreFooterCtas onOpenInquiry={handleOpenInquiry} />
      </main>

      {/* 15. Footer */}
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
