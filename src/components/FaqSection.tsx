import React, { useState } from 'react';
import { FAQS } from '../data/content';
import { ChevronDown, Plus, Minus, HelpCircle } from 'lucide-react';

interface FaqSectionProps {
  onOpenEnquiry: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenEnquiry }) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#163E2B]/80 mb-2">
            Before We Get Started
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261C] tracking-tight">
            Find the right fit for your needs.
          </h2>
          <p className="mt-4 text-base text-[#4C5D52] leading-relaxed">
            A few answers to help you choose the right business division and prepare your enquiry.
          </p>
        </div>

        {/* FAQs Accordion */}
        <div className="space-y-3">
          {FAQS.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="bg-white rounded-xl border border-[#E5E0D4] overflow-hidden transition-colors"
              >
                <button
                  type="button"
                  onClick={() => toggleIndex(idx)}
                  className="w-full py-4.5 px-6 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-[#FBF9F4] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#163E2B]"
                  aria-expanded={isOpen}
                >
                  <span className="text-base font-bold text-[#14261C]">
                    {faq.question}
                  </span>
                  <span className="text-[#163E2B] shrink-0 p-1 rounded-md bg-[#F4F1EA]">
                    {isOpen ? <Minus className="w-4 h-4" /> : <Plus className="w-4 h-4" />}
                  </span>
                </button>

                {isOpen && (
                  <div className="px-6 pb-5 pt-1 text-sm text-[#4E5E54] leading-relaxed border-t border-[#F2ECE0]">
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom helper */}
        <div className="mt-12 text-center p-6 bg-[#F4F1EA] rounded-xl border border-[#E4DECFA0]">
          <p className="text-sm text-[#3E4F45]">
            Have a custom agricultural specification or need immediate logistical consultation?
          </p>
          <button
            onClick={onOpenEnquiry}
            className="mt-3 inline-flex items-center gap-1.5 text-sm font-bold text-[#163E2B] hover:text-[#0C2417] underline underline-offset-4 cursor-pointer"
          >
            Start a direct enquiry with our team &rarr;
          </button>
        </div>

      </div>
    </section>
  );
};
