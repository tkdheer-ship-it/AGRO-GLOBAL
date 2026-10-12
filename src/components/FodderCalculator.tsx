import React, { useState } from 'react';
import { Calculator, ArrowRight, Droplets, Leaf, Scale, Check } from 'lucide-react';
import { BusinessType } from '../types';

interface FodderCalculatorProps {
  onApplyRequirement: (dailyKg: number, businessTarget: BusinessType) => void;
}

export const FodderCalculator: React.FC<FodderCalculatorProps> = ({ onApplyRequirement }) => {
  const [cows, setCows] = useState<number>(8);
  const [buffaloes, setBuffaloes] = useState<number>(4);
  const [goats, setGoats] = useState<number>(0);
  const [feedingTarget, setFeedingTarget] = useState<'standard' | 'high-yield'>('standard');

  // Daily fodder intake norms:
  // Cow: standard 12kg/day, high-yield 15kg/day
  // Buffalo: standard 15kg/day, high-yield 18kg/day
  // Goat: standard 2.5kg/day, high-yield 3.5kg/day
  const cowRate = feedingTarget === 'standard' ? 12 : 15;
  const buffaloRate = feedingTarget === 'standard' ? 15 : 18;
  const goatRate = feedingTarget === 'standard' ? 2.5 : 3.5;

  const totalDailyFodderKg = Math.round(cows * cowRate + buffaloes * buffaloRate + goats * goatRate);
  const monthlyFodderTonnes = ((totalDailyFodderKg * 30) / 1000).toFixed(2);
  
  // Hydroponic conversion ratio: 1 kg clean maize grain yields ~7.5 kg fresh green fodder
  const dailyMaizeSeedKg = (totalDailyFodderKg / 7.5).toFixed(1);
  const monthlyMaizeBags25kg = Math.ceil(((parseFloat(dailyMaizeSeedKg) * 30) / 25));

  // Ecological impact metrics
  // Conventional fodder: ~80L water per kg; Hydroponic: ~2.5L water per kg
  const waterSavedLitersDaily = Math.round(totalDailyFodderKg * (80 - 2.5));

  return (
    <section id="calculator" className="py-20 bg-[#F4F1EA] border-y border-[#E6E0D4]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#163E2B]/80 mb-2">
            Interactive Planning Tool
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261C] tracking-tight">
            Fodder requirement & seed calculator.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-[#47574D] leading-relaxed">
            Estimate your farm’s daily fresh hydroponic fodder demand or determine how much cleaned maize seed your commercial growing facility requires.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls Column */}
          <div className="lg:col-span-6 bg-[#FFFFFF] p-6 sm:p-8 rounded-2xl border border-[#E3DCCE] shadow-sm space-y-6">
            <div className="flex items-center justify-between pb-4 border-b border-[#F0EBE0]">
              <span className="text-sm font-semibold text-[#163E2B] flex items-center gap-2">
                <Calculator className="w-4 h-4 text-[#1E543A]" />
                Herd Configuration
              </span>
              <div className="flex items-center gap-1 bg-[#F4F1EA] p-1 rounded-lg">
                <button
                  type="button"
                  onClick={() => setFeedingTarget('standard')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    feedingTarget === 'standard'
                      ? 'bg-white text-[#163E2B] shadow-xs'
                      : 'text-[#607166] hover:text-[#163E2B]'
                  }`}
                >
                  Standard Diet
                </button>
                <button
                  type="button"
                  onClick={() => setFeedingTarget('high-yield')}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    feedingTarget === 'high-yield'
                      ? 'bg-white text-[#163E2B] shadow-xs'
                      : 'text-[#607166] hover:text-[#163E2B]'
                  }`}
                >
                  High-Lactation Diet
                </button>
              </div>
            </div>

            {/* Slider 1: Cows */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="cows-range" className="font-semibold text-[#223328]">
                  Dairy Cows
                </label>
                <span className="font-mono font-bold text-[#163E2B] bg-[#F4F1EA] px-2.5 py-0.5 rounded text-sm tabular-nums">
                  {cows} heads
                </span>
              </div>
              <input
                id="cows-range"
                type="range"
                min="0"
                max="50"
                value={cows}
                onChange={(e) => setCows(parseInt(e.target.value) || 0)}
                className="w-full accent-[#163E2B] h-2 bg-[#E9E4D7] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#69796F]">
                <span>0</span>
                <span>25</span>
                <span>50 heads</span>
              </div>
            </div>

            {/* Slider 2: Buffaloes */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="buffaloes-range" className="font-semibold text-[#223328]">
                  Dairy Buffaloes
                </label>
                <span className="font-mono font-bold text-[#163E2B] bg-[#F4F1EA] px-2.5 py-0.5 rounded text-sm tabular-nums">
                  {buffaloes} heads
                </span>
              </div>
              <input
                id="buffaloes-range"
                type="range"
                min="0"
                max="40"
                value={buffaloes}
                onChange={(e) => setBuffaloes(parseInt(e.target.value) || 0)}
                className="w-full accent-[#163E2B] h-2 bg-[#E9E4D7] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#69796F]">
                <span>0</span>
                <span>20</span>
                <span>40 heads</span>
              </div>
            </div>

            {/* Slider 3: Goats */}
            <div className="space-y-2">
              <div className="flex items-center justify-between text-sm">
                <label htmlFor="goats-range" className="font-semibold text-[#223328]">
                  Goats / Sheep
                </label>
                <span className="font-mono font-bold text-[#163E2B] bg-[#F4F1EA] px-2.5 py-0.5 rounded text-sm tabular-nums">
                  {goats} heads
                </span>
              </div>
              <input
                id="goats-range"
                type="range"
                min="0"
                max="100"
                step="5"
                value={goats}
                onChange={(e) => setGoats(parseInt(e.target.value) || 0)}
                className="w-full accent-[#163E2B] h-2 bg-[#E9E4D7] rounded-lg cursor-pointer"
              />
              <div className="flex justify-between text-[11px] text-[#69796F]">
                <span>0</span>
                <span>50</span>
                <span>100 heads</span>
              </div>
            </div>

            {/* Conversion explanation */}
            <div className="pt-2 text-xs text-[#5D6F64] leading-relaxed border-t border-[#F0EBE0]">
              <p>
                Calculated on recommended green fodder allowance: ~{cowRate} kg/cow, ~{buffaloRate} kg/buffalo, ~{goatRate} kg/goat.
                Hydroponic conversion efficiency benchmark: 1 kg seed maize = 7.5 kg fresh fodder harvest.
              </p>
            </div>
          </div>

          {/* Results Column */}
          <div className="lg:col-span-6 bg-[#FAF8F5] p-6 sm:p-8 rounded-2xl border border-[#E3DCCE] shadow-sm flex flex-col justify-between space-y-6">
            <div>
              <div className="text-xs font-bold uppercase tracking-wider text-[#163E2B] mb-1">
                Calculated Requirement Summary
              </div>
              <h3 className="text-2xl font-bold text-[#14261C]">
                {totalDailyFodderKg.toLocaleString()} kg / day fresh fodder
              </h3>
              <p className="text-xs text-[#5F7166] mt-1 font-mono">
                Equivalent to {monthlyFodderTonnes} tonnes monthly fresh biomass
              </p>

              {/* 2-Box Metric Comparison */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
                
                {/* For Dairy Farmers (Fresh Fodder) */}
                <div className="p-4 bg-white rounded-xl border border-[#E6E0D4] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#1E543A]">
                    <Leaf className="w-4 h-4" />
                    <span>Dheer Hydro Fodder</span>
                  </div>
                  <div className="text-xl font-extrabold text-[#14261C] font-mono tabular-nums">
                    {totalDailyFodderKg} kg/day
                  </div>
                  <p className="text-xs text-[#596A60] leading-snug">
                    Fresh daily harvested mat delivery for your Khagaria area livestock.
                  </p>
                  <button
                    onClick={() => onApplyRequirement(totalDailyFodderKg, 'hydro-fodder')}
                    className="mt-2 text-xs font-bold text-[#163E2B] hover:text-[#0D2619] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Pre-fill Fodder Enquiry</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

                {/* For Hydroponic Growers (Seed Maize) */}
                <div className="p-4 bg-white rounded-xl border border-[#E6E0D4] space-y-2">
                  <div className="flex items-center gap-2 text-xs font-semibold text-[#B37B15]">
                    <Scale className="w-4 h-4" />
                    <span>Dheer Hydro Maize</span>
                  </div>
                  <div className="text-xl font-extrabold text-[#14261C] font-mono tabular-nums">
                    {dailyMaizeSeedKg} kg/day
                  </div>
                  <p className="text-xs text-[#596A60] leading-snug">
                    Seed maize needed to grow this yield (~{monthlyMaizeBags25kg} bags of 25kg/mo).
                  </p>
                  <button
                    onClick={() => onApplyRequirement(totalDailyFodderKg, 'hydro-maize')}
                    className="mt-2 text-xs font-bold text-[#163E2B] hover:text-[#0D2619] inline-flex items-center gap-1 cursor-pointer"
                  >
                    <span>Pre-fill Maize Enquiry</span>
                    <ArrowRight className="w-3 h-3" />
                  </button>
                </div>

              </div>

              {/* Resource Conservation Highlights */}
              <div className="mt-6 p-4 bg-[#EDF4EF] rounded-xl border border-[#D5E3D8] space-y-2">
                <div className="flex items-center gap-2 text-xs font-bold text-[#194E34]">
                  <Droplets className="w-4 h-4 text-[#1E543A]" />
                  <span>Sustainability Impact</span>
                </div>
                <div className="text-xs text-[#2A4434] space-y-1">
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1E543A]" />
                    <span>Saves approx. <strong className="font-mono">{waterSavedLitersDaily.toLocaleString()} liters</strong> of irrigation water each day vs open pasture.</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-3.5 h-3.5 text-[#1E543A]" />
                    <span>Zero soil chemical runoff; tender root mat is 100% edible and digestible.</span>
                  </div>
                </div>
              </div>

            </div>

            <div className="pt-2 text-xs text-[#6C7D73]">
              * Feeding recommendations can vary depending on milk production stage, animal weight, and dry roughage balance.
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};
