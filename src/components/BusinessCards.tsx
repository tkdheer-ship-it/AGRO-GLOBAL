import React from 'react';
import { ArrowRight, Info, Check } from 'lucide-react';
import { BUSINESSES_DATA } from '../data/content';
import { BusinessType } from '../types';

interface BusinessCardsProps {
  onSelectBusinessForEnquiry: (businessId: BusinessType) => void;
  onViewDetails: (businessId: BusinessType) => void;
}

export const BusinessCards: React.FC<BusinessCardsProps> = ({
  onSelectBusinessForEnquiry,
  onViewDetails,
}) => {
  return (
    <section id="businesses" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#163E2B]/80 mb-2">
            Find Your Way to Grow
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261C] tracking-tight">
            Three businesses. <br className="hidden sm:inline" />
            One clear purpose.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#47574D] leading-relaxed">
            Choose the supply that matches your operation. Each business has its own product, customers and enquiry path.
          </p>
        </div>

        {/* 3 Business Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
          {BUSINESSES_DATA.map((biz) => (
            <div
              key={biz.id}
              className="flex flex-col bg-[#FFFFFF] rounded-2xl border border-[#E4DECFA0] overflow-hidden hover:border-[#1E543A]/40 transition-all duration-300 shadow-sm hover:shadow-md group"
            >
              {/* Image Frame with subtle caption */}
              <div className="relative overflow-hidden bg-[#F0ECE1] aspect-[16/10]">
                <img
                  src={biz.image}
                  alt={biz.imageAlt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-2.5 left-3 right-3 text-[11px] text-white/90 truncate drop-shadow-sm font-medium">
                  {biz.id === 'hydro-maize' && 'B2B Hydroponic Grade · 25 kg Bag'}
                  {biz.id === 'hydro-fodder' && 'Fresh Daily Mat · Local Farm Supply'}
                  {biz.id === 'expo-maize' && 'Export Lot · Containerized Specifications'}
                </div>
              </div>

              {/* Card Body */}
              <div className="flex-1 p-6 sm:p-7 flex flex-col justify-between">
                <div>
                  {/* Clean unboxed audience kicker */}
                  <div className="text-xs font-bold uppercase tracking-wider text-[#1E543A] mb-2">
                    {biz.audience}
                  </div>

                  <h3 className="text-2xl font-bold text-[#14261C] tracking-tight">
                    {biz.name}
                  </h3>

                  <p className="mt-3 text-sm text-[#4E5E54] leading-relaxed">
                    {biz.description}
                  </p>

                  {/* Highlights checklist */}
                  <ul className="mt-5 space-y-2.5 text-xs text-[#38483E]">
                    {biz.highlights.map((highlight, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-3.5 h-3.5 text-[#1E543A] shrink-0 mt-0.5" />
                        <span>{highlight}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card CTA Actions */}
                <div className="mt-8 pt-5 border-t border-[#F0EBE0] flex flex-col gap-2.5">
                  <button
                    onClick={() => onSelectBusinessForEnquiry(biz.id)}
                    className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-[#FAF8F5] bg-[#163E2B] hover:bg-[#1E543A] active:bg-[#0E281C] rounded-lg transition-colors cursor-pointer"
                  >
                    <span>{biz.primaryAction}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onViewDetails(biz.id)}
                    className="w-full inline-flex items-center justify-center gap-1.5 px-4 py-2 text-xs font-medium text-[#48594F] hover:text-[#163E2B] hover:bg-[#F5F2EB] rounded-lg transition-colors cursor-pointer"
                  >
                    <Info className="w-3.5 h-3.5" />
                    <span>View Specifications & Notes</span>
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
