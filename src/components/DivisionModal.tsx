import React from 'react';
import { X, CheckCircle, ArrowRight, Package, Check } from 'lucide-react';
import { BUSINESSES_DATA } from '../data/content';
import { BusinessType } from '../types';

interface DivisionModalProps {
  businessId: BusinessType | null;
  onClose: () => void;
  onSelectForEnquiry: (businessId: BusinessType) => void;
}

export const DivisionModal: React.FC<DivisionModalProps> = ({
  businessId,
  onClose,
  onSelectForEnquiry,
}) => {
  if (!businessId) return null;

  const biz = BUSINESSES_DATA.find((b) => b.id === businessId);
  if (!biz) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-black/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      
      <div className="relative bg-[#FAF8F5] rounded-2xl max-w-3xl w-full border border-[#DCD5C6] shadow-2xl overflow-hidden my-8">
        
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-10 p-2 text-[#46534C] hover:text-[#163E2B] bg-white/90 rounded-full shadow-xs hover:bg-white transition-colors cursor-pointer"
          aria-label="Close dialog"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Division Header Banner */}
        <div className="relative aspect-[16/9] sm:aspect-[21/9] bg-[#E8E2D4] overflow-hidden">
          <img
            src={biz.image}
            alt={biz.imageAlt}
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent flex flex-col justify-end p-6 sm:p-8">
            <div className="text-xs font-bold uppercase tracking-wider text-[#E5A93C] mb-1">
              {biz.audience}
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
              {biz.name}
            </h2>
            <p className="text-xs sm:text-sm text-neutral-200 mt-1">
              {biz.tagline}
            </p>
          </div>
        </div>

        {/* Modal Content */}
        <div className="p-6 sm:p-8 space-y-6 max-h-[60vh] overflow-y-auto">
          
          <div>
            <h3 className="text-xl font-bold text-[#14261C] mb-3">
              {biz.detailsTitle}
            </h3>
            <div className="space-y-3 text-sm text-[#45564C] leading-relaxed">
              {biz.detailsParagraphs.map((para, i) => (
                <p key={i}>{para}</p>
              ))}
            </div>
          </div>

          {/* Available Pack Options */}
          <div className="p-4 bg-white rounded-xl border border-[#E7E1D4] space-y-2.5">
            <div className="text-xs font-bold uppercase tracking-wider text-[#163E2B] flex items-center gap-1.5">
              <Package className="w-4 h-4 text-[#1E543A]" />
              Supply & Volume Options
            </div>
            <div className="flex flex-wrap gap-2 pt-1">
              {biz.packOptions.map((pack, idx) => (
                <span
                  key={idx}
                  className="px-3 py-1 bg-[#F4F1EA] text-xs font-semibold text-[#2D3E33] rounded-md border border-[#E2DBD0]"
                >
                  {pack}
                </span>
              ))}
            </div>
          </div>

          {/* Checklist before ordering */}
          <div>
            <div className="text-xs font-bold uppercase tracking-wider text-[#163E2B] mb-2.5">
              Information to prepare for your enquiry
            </div>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#3E4F44]">
              {biz.requirementsList.map((req, idx) => (
                <li key={idx} className="flex items-start gap-2 bg-[#F7F4EB] p-2.5 rounded-lg border border-[#EAE3D5]">
                  <Check className="w-3.5 h-3.5 text-[#1E543A] shrink-0 mt-0.5" />
                  <span>{req}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="text-[11px] text-[#69796F] italic">
            * Actual results, availability and freight terms are confirmed for the batch offered. Confirm quotation before placement.
          </div>

        </div>

        {/* Modal Footer Actions */}
        <div className="p-4 sm:p-6 bg-[#F4F0E6] border-t border-[#E4DECFA0] flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={onClose}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-semibold text-[#47574D] hover:text-[#163E2B] cursor-pointer"
          >
            Close Overview
          </button>

          <button
            type="button"
            onClick={() => {
              onClose();
              onSelectForEnquiry(biz.id);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 text-xs font-bold text-white bg-[#163E2B] hover:bg-[#1E543A] rounded-lg transition-colors shadow-sm cursor-pointer"
          >
            <span>Proceed to {biz.name} Enquiry</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>

    </div>
  );
};
