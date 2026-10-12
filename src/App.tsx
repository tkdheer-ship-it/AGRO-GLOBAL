/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { BusinessCards } from './components/BusinessCards';
import { BatchInspector } from './components/BatchInspector';
import { FodderCalculator } from './components/FodderCalculator';
import { SupplyChain } from './components/SupplyChain';
import { FaqSection } from './components/FaqSection';
import { EnquiryForm } from './components/EnquiryForm';
import { DivisionModal } from './components/DivisionModal';
import { Footer } from './components/Footer';
import { BusinessType } from './types';
import { MessageSquare } from 'lucide-react';

export default function App() {
  const [selectedEnquiryBusiness, setSelectedEnquiryBusiness] = useState<BusinessType>('hydro-maize');
  const [enquiryRequirement, setEnquiryRequirement] = useState<string>('');
  const [enquiryNotes, setEnquiryNotes] = useState<string>('');
  const [activeModalBusiness, setActiveModalBusiness] = useState<BusinessType | null>(null);

  const scrollToSection = (id: string) => {
    if (id === 'top') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    const elem = document.getElementById(id);
    if (elem) {
      elem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnquiry = (businessId?: BusinessType) => {
    if (businessId) {
      setSelectedEnquiryBusiness(businessId);
    }
    scrollToSection('enquiry');
  };

  const handleInquireBatch = (lotNumber: string) => {
    setSelectedEnquiryBusiness('hydro-maize');
    setEnquiryNotes(`Inquiry regarding Batch Lot #${lotNumber}. Please provide available lot test results and freight quotation.`);
    scrollToSection('enquiry');
  };

  const handleApplyCalculatorRequirement = (dailyKg: number, businessTarget: BusinessType) => {
    setSelectedEnquiryBusiness(businessTarget);
    if (businessTarget === 'hydro-fodder') {
      const option =
        dailyKg <= 25
          ? 'Under 25 kg per day'
          : dailyKg <= 50
          ? '25–50 kg per day'
          : dailyKg <= 100
          ? '50–100 kg per day'
          : 'Over 100 kg per day';
      setEnquiryRequirement(option);
      setEnquiryNotes(`Calculated daily herd fodder requirement: ${dailyKg} kg/day fresh green biomass.`);
    } else {
      const option =
        dailyKg <= 25
          ? '25 kg pack'
          : dailyKg <= 100
          ? '100 kg trial lot'
          : '1 tonne or more';
      setEnquiryRequirement(option);
      setEnquiryNotes(`Hydroponic centre daily consumption: ~${dailyKg} kg fresh fodder target (calculated seed requirement).`);
    }
    scrollToSection('enquiry');
  };

  return (
    <div id="top" className="min-h-screen bg-[#FAF8F5] text-[#19241E] flex flex-col selection:bg-[#163E2B] selection:text-white">
      {/* Top Bar Navigation */}
      <Header
        onNavigate={scrollToSection}
        onOpenEnquiry={handleOpenEnquiry}
      />

      <main className="flex-1">
        {/* Hero Section */}
        <Hero
          onExploreBusinesses={() => scrollToSection('businesses')}
          onOpenEnquiry={handleOpenEnquiry}
        />

        {/* 3 Focused Businesses */}
        <BusinessCards
          onSelectBusinessForEnquiry={(bizId) => {
            setSelectedEnquiryBusiness(bizId);
            scrollToSection('enquiry');
          }}
          onViewDetails={(bizId) => setActiveModalBusiness(bizId)}
        />

        {/* Interactive Fodder & Seed Calculator */}
        <FodderCalculator
          onApplyRequirement={handleApplyCalculatorRequirement}
        />

        {/* Quality Approach & Interactive Batch Inspector */}
        <BatchInspector
          onInquireBatch={handleInquireBatch}
        />

        {/* 4-Step Supply Chain & Khagaria Hub Story */}
        <SupplyChain />

        {/* Interactive FAQs Accordion */}
        <FaqSection
          onOpenEnquiry={() => scrollToSection('enquiry')}
        />

        {/* Dynamic Universal Enquiry Form */}
        <EnquiryForm
          initialBusiness={selectedEnquiryBusiness}
          initialRequirement={enquiryRequirement}
          initialNotes={enquiryNotes}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={scrollToSection}
        onSelectBusiness={(bizId) => {
          setSelectedEnquiryBusiness(bizId);
          scrollToSection('enquiry');
        }}
      />

      {/* Division Deep-Dive Modal */}
      <DivisionModal
        businessId={activeModalBusiness}
        onClose={() => setActiveModalBusiness(null)}
        onSelectForEnquiry={(bizId) => {
          setSelectedEnquiryBusiness(bizId);
          scrollToSection('enquiry');
        }}
      />

      {/* Sticky Mobile Floating Action Button */}
      <div className="md:hidden fixed bottom-4 right-4 z-30">
        <button
          onClick={() => scrollToSection('enquiry')}
          className="flex items-center gap-2 px-4 py-3 bg-[#163E2B] text-white rounded-full shadow-lg font-semibold text-xs cursor-pointer active:scale-95 transition-transform"
          aria-label="Enquire now"
        >
          <MessageSquare className="w-4 h-4" />
          <span>Enquire Now</span>
        </button>
      </div>
    </div>
  );
}
