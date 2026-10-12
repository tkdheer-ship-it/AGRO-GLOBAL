import React, { useState } from 'react';
import { BATCH_RECORDS, QUALITY_PILLARS } from '../data/content';
import { BatchRecord } from '../types';
import { ShieldCheck, CheckCircle, FileText, ArrowRight, Copy, Check } from 'lucide-react';

interface BatchInspectorProps {
  onInquireBatch: (lotNumber: string) => void;
}

export const BatchInspector: React.FC<BatchInspectorProps> = ({ onInquireBatch }) => {
  const [selectedBatch, setSelectedBatch] = useState<BatchRecord>(BATCH_RECORDS[0]);
  const [copied, setCopied] = useState(false);

  const handleCopySpec = () => {
    const specText = `Dheer Agro Global - Batch Specification Report
Lot Reference: ${selectedBatch.lotNumber}
Variety: ${selectedBatch.variety}
Origin: ${selectedBatch.origin}
Germination Rate: ${selectedBatch.germinationRate}% (7-day tray test)
Moisture Content: ${selectedBatch.moistureContent}% (Target < 12%)
Purity Rate: ${selectedBatch.purityRate}%
Broken Grain: ${selectedBatch.brokenGrainRate}%
Mold & Aflatoxin: ${selectedBatch.moldAflatoxin}
Recommended Soak Time: ${selectedBatch.recommendedSoakTime}
Tested: ${selectedBatch.testDate}`;

    navigator.clipboard.writeText(specText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="quality" className="py-20 bg-[#FAF8F5]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#163E2B]/80 mb-2">
            Quality With A Clear Record
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261C] tracking-tight">
            The grain matters. <br className="hidden sm:inline" />
            So does its story.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#47574D] leading-relaxed">
            Our quality approach starts with knowing the source, checking the grain and recording the batch.
            For hydroponic supply, review germination results and test conditions before choosing a lot.
          </p>
        </div>

        {/* 4 Quality Pillars (Editorial numbering, zero pills) */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {QUALITY_PILLARS.map((pillar) => (
            <div
              key={pillar.number}
              className="p-6 bg-white rounded-xl border border-[#E8E2D6] shadow-xs flex flex-col justify-between"
            >
              <div>
                <div className="text-xs font-mono font-bold text-[#1E543A] mb-3">
                  {pillar.number} / Quality Standard
                </div>
                <h3 className="text-lg font-bold text-[#14261C]">
                  {pillar.title}
                </h3>
                <div className="text-xs font-medium text-[#738379] mt-1 mb-3">
                  {pillar.lead}
                </div>
                <p className="text-xs text-[#4F6055] leading-relaxed">
                  {pillar.detail}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Batch Inspector */}
        <div id="batches" className="bg-[#FFFFFF] rounded-2xl border border-[#E3DCCE] p-6 sm:p-8 lg:p-10 shadow-sm">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-[#F0EBE0]">
            <div>
              <div className="flex items-center gap-2 text-xs font-semibold text-[#1E543A] uppercase tracking-wider">
                <ShieldCheck className="w-4 h-4 text-[#1E543A]" />
                Live Laboratory Batch Log
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-[#14261C] mt-1">
                Sample Lot Quality Verification
              </h3>
            </div>

            {/* Interactive Batch Selector Tabs (Interactive functional buttons) */}
            <div className="flex flex-wrap items-center gap-1.5 p-1 bg-[#F4F1EA] rounded-lg">
              {BATCH_RECORDS.map((batch) => (
                <button
                  key={batch.id}
                  onClick={() => setSelectedBatch(batch)}
                  className={`px-3.5 py-1.5 text-xs font-semibold rounded-md transition-all cursor-pointer ${
                    selectedBatch.id === batch.id
                      ? 'bg-white text-[#163E2B] shadow-xs'
                      : 'text-[#5B6D62] hover:text-[#163E2B]'
                  }`}
                >
                  Lot {batch.lotNumber}
                </button>
              ))}
            </div>
          </div>

          {/* Active Batch Inspector Grid */}
          <div className="mt-8 grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Left specifications list */}
            <div className="lg:col-span-8 space-y-6">
              <div className="flex flex-wrap items-center justify-between gap-3 bg-[#FAF8F5] p-4 rounded-xl border border-[#ECE6D8]">
                <div>
                  <div className="text-xs text-[#6B7D72]">Lot Reference</div>
                  <div className="text-lg font-extrabold font-mono text-[#163E2B]">{selectedBatch.lotNumber}</div>
                </div>
                <div>
                  <div className="text-xs text-[#6B7D72]">Grain Variety</div>
                  <div className="text-sm font-semibold text-[#1F2C24]">{selectedBatch.variety}</div>
                </div>
                <div>
                  <div className="text-xs text-[#6B7D72]">Harvest Origin</div>
                  <div className="text-sm font-semibold text-[#1F2C24]">{selectedBatch.origin}</div>
                </div>
                <div>
                  <div className="text-xs text-[#6B7D72]">Tested On</div>
                  <div className="text-sm font-semibold text-[#1F2C24]">{selectedBatch.testDate}</div>
                </div>
              </div>

              {/* Metric Cards Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                
                <div className="p-4 bg-white rounded-xl border border-[#E5E0D4] space-y-1">
                  <div className="text-[11px] font-medium text-[#65766B]">Germination Rate</div>
                  <div className="text-2xl font-black font-mono tabular-nums text-[#163E2B]">
                    {selectedBatch.germinationRate}%
                  </div>
                  <div className="text-[11px] text-[#738379]">7-day tray soak test</div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E5E0D4] space-y-1">
                  <div className="text-[11px] font-medium text-[#65766B]">Moisture Level</div>
                  <div className="text-2xl font-black font-mono tabular-nums text-[#163E2B]">
                    {selectedBatch.moistureContent}%
                  </div>
                  <div className="text-[11px] text-[#738379]">Target: &lt; 12.0%</div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E5E0D4] space-y-1">
                  <div className="text-[11px] font-medium text-[#65766B]">Purity Grade</div>
                  <div className="text-2xl font-black font-mono tabular-nums text-[#163E2B]">
                    {selectedBatch.purityRate}%
                  </div>
                  <div className="text-[11px] text-[#738379]">Double air aspirator</div>
                </div>

                <div className="p-4 bg-white rounded-xl border border-[#E5E0D4] space-y-1">
                  <div className="text-[11px] font-medium text-[#65766B]">Broken / Cracked</div>
                  <div className="text-2xl font-black font-mono tabular-nums text-[#163E2B]">
                    {selectedBatch.brokenGrainRate}%
                  </div>
                  <div className="text-[11px] text-[#738379]">Prevents tray slime</div>
                </div>

              </div>

              {/* Additional parameters list */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EDE7D9]">
                  <span className="text-[#6D7F74] block">Aflatoxin / Mold:</span>
                  <span className="font-semibold text-[#14261C] mt-0.5 block">{selectedBatch.moldAflatoxin}</span>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EDE7D9]">
                  <span className="text-[#6D7F74] block">Recommended Soak:</span>
                  <span className="font-semibold text-[#14261C] mt-0.5 block">{selectedBatch.recommendedSoakTime}</span>
                </div>
                <div className="p-3 bg-[#FAF8F5] rounded-lg border border-[#EDE7D9]">
                  <span className="text-[#6D7F74] block">Harvest Season:</span>
                  <span className="font-semibold text-[#14261C] mt-0.5 block">{selectedBatch.harvestSeason}</span>
                </div>
              </div>
            </div>

            {/* Right actions card */}
            <div className="lg:col-span-4 bg-[#FAF8F5] p-6 rounded-xl border border-[#E5E0D4] space-y-4">
              <div className="flex items-center gap-2 text-sm font-bold text-[#14261C]">
                <FileText className="w-4 h-4 text-[#163E2B]" />
                Batch Actions
              </div>

              <p className="text-xs text-[#526358] leading-relaxed">
                Confirm actual batch results and assess suitability for your growing trays.
                Hydroponic germination can vary depending on water temperature, soaking duration, and aeration.
              </p>

              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => onInquireBatch(selectedBatch.lotNumber)}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold text-[#FAF8F5] bg-[#163E2B] hover:bg-[#1E543A] rounded-lg transition-colors cursor-pointer"
                >
                  <span>Inquire About Lot {selectedBatch.lotNumber}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>

                <button
                  onClick={handleCopySpec}
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2 text-xs font-medium text-[#2F3F35] bg-white hover:bg-[#F2EFE8] border border-[#DDD5C5] rounded-lg transition-colors cursor-pointer"
                >
                  {copied ? (
                    <>
                      <Check className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Copied Spec to Clipboard</span>
                    </>
                  ) : (
                    <>
                      <Copy className="w-3.5 h-3.5" />
                      <span>Copy Full Batch Spec</span>
                    </>
                  )}
                </button>
              </div>

              <div className="pt-2 text-[11px] text-[#718277] flex items-center gap-1.5">
                <CheckCircle className="w-3.5 h-3.5 text-[#1E543A]" />
                <span>Verified physical inspection records on file</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
