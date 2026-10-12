import React from 'react';
import { SUPPLY_STEPS } from '../data/content';
import { MapPin } from 'lucide-react';

export const SupplyChain: React.FC = () => {
  return (
    <section className="py-20 bg-[#F5F2EB] border-t border-[#E6E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Supply Chain Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#163E2B]/80 mb-2">
            Connected From The Start
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261C] tracking-tight">
            One supply chain. <br className="hidden sm:inline" />
            Three ways forward.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#47574D] leading-relaxed">
            Shared maize procurement and grain handling support our three businesses.
            Fresh fodder adds our own growing operation; exports add buyer-specific preparation.
          </p>
        </div>

        {/* 4 Process Steps (Clean editorial numbering, no mechanical comments) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
          {SUPPLY_STEPS.map((step) => (
            <div
              key={step.step}
              className="p-6 bg-white rounded-xl border border-[#E3DCce] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-sm font-bold font-mono text-[#163E2B] mb-4">
                  {step.step}.
                </div>
                <h3 className="text-lg font-bold text-[#14261C]">
                  {step.title}
                </h3>
                <div className="text-xs font-semibold text-[#1E543A] mt-1 mb-3">
                  {step.subtitle}
                </div>
                <p className="text-xs text-[#526358] leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Our Story Banner */}
        <div className="bg-[#FFFFFF] rounded-2xl border border-[#E3DCCE] p-8 sm:p-12 shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-[#1E543A]">
                <MapPin className="w-4 h-4 text-[#1E543A]" />
                Our Story Starts In Bihar
              </div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-[#14261C] tracking-tight">
                Rooted in Khagaria. <br />
                Built around real agricultural needs.
              </h3>
              <p className="text-sm sm:text-base text-[#46564C] leading-relaxed">
                Dheer Agro Global is building an integrated maize and fodder business from Khagaria, Bihar.
                Our focus is practical: support commercial hydroponic growers, serve local livestock owners,
                and develop long-term maize export partnerships.
              </p>
              <p className="text-sm text-[#54645B] leading-relaxed">
                Operating our own commercial hydroponic fodder growing racks directly connects the grain we source
                with the physical germination process and the real-world nutrition needs of nearby dairy farms.
              </p>
            </div>

            <div className="lg:col-span-4 bg-[#FAF8F5] p-6 rounded-xl border border-[#ECE6D8] space-y-3">
              <div className="text-xs font-bold uppercase tracking-wider text-[#163E2B]">
                Regional Hub Facts
              </div>
              <div className="space-y-2 text-xs text-[#3C4C42]">
                <div className="pb-2 border-b border-[#E8E2D4]">
                  <span className="font-semibold block text-[#14261C]">Hub Location</span>
                  <span>Khagaria, Bihar, India (North Bihar Maize Belt)</span>
                </div>
                <div className="pb-2 border-b border-[#E8E2D4]">
                  <span className="font-semibold block text-[#14261C]">Direct Operations</span>
                  <span>Grain intake, screening, germination testing & fresh fodder center</span>
                </div>
                <div>
                  <span className="font-semibold block text-[#14261C]">Target Coverage</span>
                  <span>Khagaria district for fresh fodder; Pan-India & Export for maize</span>
                </div>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
