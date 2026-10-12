import React from 'react';
import { MapPin, Mail, Phone } from 'lucide-react';

interface FooterProps {
  onNavigate: (sectionId: string) => void;
  onSelectBusiness: (businessId: 'hydro-maize' | 'hydro-fodder' | 'expo-maize') => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onSelectBusiness }) => {
  return (
    <footer className="bg-[#12241A] text-[#D8E2DC] pt-16 pb-12 border-t border-[#1C3A2A]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-[#234331]">
          
          {/* Brand info */}
          <div className="md:col-span-5 space-y-4">
            <div className="font-serif text-2xl font-bold tracking-tight text-white">
              DHEER AGRO GLOBAL
            </div>
            <p className="text-sm text-[#9BB1A5] max-w-sm leading-relaxed">
              Better maize. Better fodder. Global reach.
              Operating commercial hydroponic seed grading, fresh local fodder production, and export logistics from Khagaria, Bihar.
            </p>
            <div className="flex items-center gap-2 text-xs text-[#80968A] pt-1">
              <MapPin className="w-4 h-4 text-[#C69C45] shrink-0" />
              <span>Khagaria, Bihar 851204, India</span>
            </div>
          </div>

          {/* Businesses */}
          <div className="md:col-span-4 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Our Businesses
            </div>
            <ul className="space-y-2 text-sm text-[#9BB1A5]">
              <li>
                <button
                  onClick={() => onSelectBusiness('hydro-maize')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dheer Hydro Maize (B2B Hydroponic Centers)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectBusiness('hydro-fodder')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dheer Hydro Fodder (Khagaria Daily Green Fodder)
                </button>
              </li>
              <li>
                <button
                  onClick={() => onSelectBusiness('expo-maize')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Dheer Expo Maize (Maize Trade & Exports)
                </button>
              </li>
            </ul>
          </div>

          {/* Quick links */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-bold uppercase tracking-wider text-white">
              Navigation
            </div>
            <ul className="space-y-2 text-sm text-[#9BB1A5]">
              <li>
                <button
                  onClick={() => onNavigate('quality')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Quality Approach & Standards
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('calculator')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Fodder & Seed Calculator
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('batches')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Batch Inspection Logs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('faqs')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Frequently Asked Questions
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('enquiry')}
                  className="hover:text-white transition-colors cursor-pointer text-left"
                >
                  Make an Enquiry
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom copyright notice */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9184]">
          <p>
            &copy; {new Date().getFullYear()} Dheer Agro Global. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span>Illustrative photography labelled</span>
            <span aria-hidden="true">·</span>
            <span>Khagaria Hub, Bihar</span>
            <span aria-hidden="true">·</span>
            <span>Private Preview Mode</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
