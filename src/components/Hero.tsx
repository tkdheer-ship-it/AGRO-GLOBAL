import React from 'react';
import { ArrowRight, ChevronDown, CheckCircle2 } from 'lucide-react';
import { ASSETS } from '../data/content';

interface HeroProps {
  onExploreBusinesses: () => void;
  onOpenEnquiry: (businessId?: 'hydro-maize' | 'hydro-fodder' | 'expo-maize') => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreBusinesses, onOpenEnquiry }) => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F4F0E6]/80 via-[#FAF8F5] to-[#FAF8F5] pt-12 pb-20 lg:pt-16 lg:pb-28 border-b border-[#E7E1D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Regional marker kicker (Natural text, strictly no static pill box) */}
        <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-[#163E2B]/80 mb-4">
          <span>Khagaria, Bihar, India</span>
          <span aria-hidden="true">·</span>
          <span>Integrated Agri-Venture</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline and Value Proposition */}
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-[#14261C] tracking-tight leading-[1.1] text-balance">
              Better maize. <br />
              <span className="text-[#1E543A]">Better fodder.</span> <br />
              Global reach.
            </h1>

            <p className="text-lg sm:text-xl text-[#3E4F45] font-normal leading-relaxed max-w-2xl text-pretty">
              Quality maize for hydroponic centres. Fresh green fodder for local farms.
              Maize supply for export partners. Three focused businesses, growing together from Bihar.
            </p>

            {/* Value checklist - clean typography */}
            <div className="pt-2 grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-[#2D3F34]">
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1E543A] shrink-0" />
                <span>Exclusively cleaned & graded for hydroponics</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1E543A] shrink-0" />
                <span>Daily fresh fodder mats in Khagaria</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1E543A] shrink-0" />
                <span>Verified batch germination testing</span>
              </div>
              <div className="flex items-center gap-2.5">
                <CheckCircle2 className="w-4 h-4 text-[#1E543A] shrink-0" />
                <span>Export-standard grain specifications</span>
              </div>
            </div>

            {/* Action buttons */}
            <div className="pt-4 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <button
                onClick={() => onOpenEnquiry('hydro-maize')}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#FAF8F5] bg-[#163E2B] hover:bg-[#1E543A] active:bg-[#0D2619] rounded-lg transition-all shadow-md hover:shadow-lg whitespace-nowrap cursor-pointer"
              >
                Request B2B Maize Supply
                <ArrowRight className="w-4 h-4" />
              </button>

              <button
                onClick={onExploreBusinesses}
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 text-base font-semibold text-[#163E2B] bg-[#EAE5D8] hover:bg-[#DFD9C9] active:bg-[#D5CEBC] rounded-lg transition-colors whitespace-nowrap cursor-pointer"
              >
                Explore Our Businesses
                <ChevronDown className="w-4 h-4" />
              </button>
            </div>

            {/* Zero-pill unboxed metadata footer */}
            <div className="pt-4 flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#607166]">
              <span>Direct Farm Procurement</span>
              <span aria-hidden="true">/</span>
              <span>Controlled Aerated Storage</span>
              <span aria-hidden="true">/</span>
              <span>25 kg & Bulk Pallet Logistics</span>
            </div>
          </div>

          {/* Right Column: Hero Visual */}
          <div className="lg:col-span-5">
            <div className="relative group">
              <div className="overflow-hidden rounded-2xl border border-[#DED7C8] bg-[#F0EBE0] shadow-xl">
                <img
                  src={ASSETS.heroPack}
                  alt="Dheer Hydro Maize 25 kg bag with golden kernels on a wooden workbench"
                  className="w-full h-auto aspect-[16/10] sm:aspect-[4/3] lg:aspect-[16/11] object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  referrerPolicy="no-referrer"
                />
              </div>

              {/* Informational caption block */}
              <div className="mt-3 px-1 flex items-center justify-between text-xs text-[#5D6F64]">
                <span>Product illustration · 25 kg pack shown</span>
                <span className="font-mono tabular-nums">Lot Ready Kharif 2026</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
