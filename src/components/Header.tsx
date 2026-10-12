import React, { useState } from 'react';
import { Menu, X, ArrowRight } from 'lucide-react';

interface HeaderProps {
  onNavigate: (sectionId: string) => void;
  onOpenEnquiry: (businessId?: 'hydro-maize' | 'hydro-fodder' | 'expo-maize') => void;
}

export const Header: React.FC<HeaderProps> = ({ onNavigate, onOpenEnquiry }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-[#FAF8F5]/95 backdrop-blur-md border-b border-[#E6E0D4] transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-8 h-20">
          
          {/* Zone 1: Brand Wordmark (Single text element in display face, no subtext) */}
          <button
            onClick={() => handleLinkClick('top')}
            className="text-left font-serif tracking-tight text-xl sm:text-2xl font-bold text-[#163E2B] whitespace-nowrap shrink-0 hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-[#163E2B] rounded-sm"
          >
            DHEER AGRO GLOBAL
          </button>

          {/* Zone 2: 4-5 Clean single-line text navigation links */}
          <nav className="hidden md:flex items-center gap-7 text-sm font-medium text-[#46534C]">
            <button
              onClick={() => handleLinkClick('businesses')}
              className="hover:text-[#163E2B] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              Our Businesses
            </button>
            <button
              onClick={() => handleLinkClick('quality')}
              className="hover:text-[#163E2B] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              Quality Approach
            </button>
            <button
              onClick={() => handleLinkClick('calculator')}
              className="hover:text-[#163E2B] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              Fodder Calculator
            </button>
            <button
              onClick={() => handleLinkClick('batches')}
              className="hover:text-[#163E2B] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              Batch Records
            </button>
            <button
              onClick={() => handleLinkClick('faqs')}
              className="hover:text-[#163E2B] transition-colors whitespace-nowrap shrink-0 focus:outline-none"
            >
              FAQs
            </button>
          </nav>

          {/* Zone 3: 1 Primary Action */}
          <div className="hidden md:flex items-center gap-3 shrink-0">
            <button
              onClick={() => onOpenEnquiry()}
              className="inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold text-[#FAF8F5] bg-[#163E2B] hover:bg-[#1E4D36] active:bg-[#0E281C] rounded-lg transition-colors shadow-sm whitespace-nowrap shrink-0 cursor-pointer"
            >
              Make an Enquiry
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile hamburger button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-[#163E2B] hover:bg-[#EFEBE0] rounded-md transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-[#E6E0D4] bg-[#FAF8F5] px-4 pt-4 pb-6 space-y-3">
          <div className="flex flex-col space-y-2 text-base font-medium text-[#2E3C34]">
            <button
              onClick={() => handleLinkClick('businesses')}
              className="text-left py-2 px-2 hover:bg-[#EFEBE0] rounded-md transition-colors"
            >
              Our Businesses
            </button>
            <button
              onClick={() => handleLinkClick('quality')}
              className="text-left py-2 px-2 hover:bg-[#EFEBE0] rounded-md transition-colors"
            >
              Quality Approach
            </button>
            <button
              onClick={() => handleLinkClick('calculator')}
              className="text-left py-2 px-2 hover:bg-[#EFEBE0] rounded-md transition-colors"
            >
              Fodder Calculator
            </button>
            <button
              onClick={() => handleLinkClick('batches')}
              className="text-left py-2 px-2 hover:bg-[#EFEBE0] rounded-md transition-colors"
            >
              Batch Records
            </button>
            <button
              onClick={() => handleLinkClick('faqs')}
              className="text-left py-2 px-2 hover:bg-[#EFEBE0] rounded-md transition-colors"
            >
              FAQs
            </button>
          </div>
          <div className="pt-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenEnquiry();
              }}
              className="w-full flex items-center justify-center gap-2 py-3 px-4 text-sm font-semibold text-[#FAF8F5] bg-[#163E2B] rounded-lg shadow-sm"
            >
              Make an Enquiry
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
