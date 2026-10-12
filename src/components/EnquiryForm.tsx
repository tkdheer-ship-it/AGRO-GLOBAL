import React, { useState, useEffect } from 'react';
import { BusinessType, EnquiryFormData } from '../types';
import { Send, Copy, Check, MessageSquare, AlertCircle, Sparkles, Building, Phone, Mail, MapPin, Package } from 'lucide-react';

interface EnquiryFormProps {
  initialBusiness?: BusinessType;
  initialRequirement?: string;
  initialNotes?: string;
}

export const EnquiryForm: React.FC<EnquiryFormProps> = ({
  initialBusiness = 'hydro-maize',
  initialRequirement = '',
  initialNotes = '',
}) => {
  const [formData, setFormData] = useState<EnquiryFormData>({
    business: initialBusiness,
    name: '',
    businessName: '',
    contactNumber: '',
    email: '',
    deliveryPin: '',
    maizeRequirement: initialRequirement || '25 kg pack',
    villageLocation: '',
    dailyFodderRequirement: initialRequirement || '25–50 kg per day',
    livestockType: 'Dairy Cows & Buffaloes',
    destinationPort: '',
    expectedVolume: '100 - 500 Tonnes',
    additionalDetails: initialNotes || '',
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  // Sync props if changed externally (e.g. from Calculator or Batch Inspector)
  useEffect(() => {
    if (initialBusiness) {
      setFormData((prev) => ({
        ...prev,
        business: initialBusiness,
        ...(initialRequirement
          ? initialBusiness === 'hydro-fodder'
            ? { dailyFodderRequirement: initialRequirement }
            : initialBusiness === 'hydro-maize'
            ? { maizeRequirement: initialRequirement }
            : { expectedVolume: initialRequirement }
          : {}),
        ...(initialNotes ? { additionalDetails: initialNotes } : {}),
      }));
    }
  }, [initialBusiness, initialRequirement, initialNotes]);

  const validate = () => {
    const errs: { [key: string]: string } = {};

    if (!formData.contactNumber.trim()) {
      errs.contactNumber = 'Mobile / WhatsApp number is required.';
    }

    if (formData.business === 'hydro-maize') {
      if (!formData.deliveryPin.trim()) {
        errs.deliveryPin = 'Delivery PIN code is required for freight calculation.';
      } else if (!/^\d{6}$/.test(formData.deliveryPin.trim())) {
        errs.deliveryPin = 'Please enter a valid 6-digit Indian PIN code.';
      }
      if (!formData.maizeRequirement) {
        errs.maizeRequirement = 'Please select a maize requirement.';
      }
    } else if (formData.business === 'hydro-fodder') {
      if (!formData.villageLocation.trim()) {
        errs.villageLocation = 'Village or delivery point in Khagaria is required.';
      }
      if (!formData.dailyFodderRequirement) {
        errs.dailyFodderRequirement = 'Please select daily fodder quantity.';
      }
    } else if (formData.business === 'expo-maize') {
      if (!formData.destinationPort.trim()) {
        errs.destinationPort = 'Destination country and target port are required.';
      }
      if (!formData.email.trim()) {
        errs.email = 'Official contact email is required for export documentation.';
      } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
        errs.email = 'Please provide a valid email address.';
      }
    }

    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      setIsSubmitted(true);
    }
  };

  const getBusinessTitle = (biz: BusinessType) => {
    switch (biz) {
      case 'hydro-maize':
        return 'Dheer Hydro Maize (Commercial Hydroponic Centres)';
      case 'hydro-fodder':
        return 'Dheer Hydro Fodder (Fresh Fodder Supply)';
      case 'expo-maize':
        return 'Dheer Expo Maize (Maize Trade & Export)';
    }
  };

  const generateSummaryText = () => {
    const lines: string[] = [];
    lines.push('--- DHEER AGRO GLOBAL ENQUIRY ---');
    lines.push(`Division: ${getBusinessTitle(formData.business)}`);
    if (formData.name) lines.push(`Contact Person: ${formData.name}`);
    if (formData.businessName) lines.push(`Organization / Farm: ${formData.businessName}`);
    lines.push(`Mobile/WhatsApp: ${formData.contactNumber}`);
    if (formData.email) lines.push(`Email: ${formData.email}`);

    if (formData.business === 'hydro-maize') {
      lines.push(`Delivery PIN: ${formData.deliveryPin}`);
      lines.push(`Maize Requirement: ${formData.maizeRequirement}`);
    } else if (formData.business === 'hydro-fodder') {
      lines.push(`Delivery Location: ${formData.villageLocation}`);
      lines.push(`Daily Fodder Requirement: ${formData.dailyFodderRequirement}`);
      if (formData.livestockType) lines.push(`Livestock: ${formData.livestockType}`);
    } else if (formData.business === 'expo-maize') {
      lines.push(`Destination Port/Country: ${formData.destinationPort}`);
      lines.push(`Expected Volume: ${formData.expectedVolume}`);
    }

    if (formData.additionalDetails) {
      lines.push(`Notes / Batch Requirements: ${formData.additionalDetails}`);
    }
    lines.push('---------------------------------');
    return lines.join('\n');
  };

  const handleCopySummary = () => {
    const text = generateSummaryText();
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSendWhatsApp = () => {
    const text = generateSummaryText();
    const url = `https://wa.me/919931000000?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="enquiry" className="py-20 bg-[#FAF8F5] border-t border-[#E6E0D4]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="max-w-3xl mb-12">
          <div className="text-xs font-semibold uppercase tracking-wider text-[#163E2B]/80 mb-2">
            Let's Grow The Right Connection
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#14261C] tracking-tight">
            Your requirement. <br className="hidden sm:inline" />
            Our next conversation.
          </h2>
          <p className="mt-4 text-base text-[#4C5D52] leading-relaxed">
            Choose the business that fits your needs. Share a few details so the conversation starts in the right place.
          </p>
        </div>

        {/* Business Selector Tabs (Interactive segmented buttons) */}
        <div className="mb-8 p-1.5 bg-[#EFECE3] rounded-xl flex flex-col sm:flex-row gap-1">
          <button
            type="button"
            onClick={() => {
              setFormData((prev) => ({ ...prev, business: 'hydro-maize' }));
              setErrors({});
            }}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              formData.business === 'hydro-maize'
                ? 'bg-white text-[#163E2B] shadow-xs'
                : 'text-[#55675C] hover:text-[#163E2B]'
            }`}
          >
            B2B Hydro Maize
          </button>
          <button
            type="button"
            onClick={() => {
              setFormData((prev) => ({ ...prev, business: 'hydro-fodder' }));
              setErrors({});
            }}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              formData.business === 'hydro-fodder'
                ? 'bg-white text-[#163E2B] shadow-xs'
                : 'text-[#55675C] hover:text-[#163E2B]'
            }`}
          >
            Fresh Fodder
          </button>
          <button
            type="button"
            onClick={() => {
              setFormData((prev) => ({ ...prev, business: 'expo-maize' }));
              setErrors({});
            }}
            className={`flex-1 py-3 px-4 rounded-lg text-sm font-semibold transition-all cursor-pointer ${
              formData.business === 'expo-maize'
                ? 'bg-white text-[#163E2B] shadow-xs'
                : 'text-[#55675C] hover:text-[#163E2B]'
            }`}
          >
            Maize Export Trade
          </button>
        </div>

        {/* Main Card */}
        <div className="bg-white rounded-2xl border border-[#E3DCCE] p-6 sm:p-10 shadow-sm">
          
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* Division specific guidance */}
            <div className="p-4 bg-[#FAF8F5] rounded-xl border border-[#EBE5D8] flex items-start gap-3">
              <Package className="w-5 h-5 text-[#1E543A] shrink-0 mt-0.5" />
              <div className="text-xs text-[#44554B] leading-relaxed">
                {formData.business === 'hydro-maize' && (
                  <>
                    <strong className="text-[#14261C]">For commercial hydroponic centres:</strong> Tell us your quantity, delivery PIN code and whether you need a 100 kg trial lot or recurring contract.
                  </>
                )}
                {formData.business === 'hydro-fodder' && (
                  <>
                    <strong className="text-[#14261C]">For Khagaria dairy farms & gaushalas:</strong> Tell us your approximate daily kilogram requirement and village location for fresh morning supply.
                  </>
                )}
                {formData.business === 'expo-maize' && (
                  <>
                    <strong className="text-[#14261C]">For export trade partners:</strong> Share your destination country/port, required volume in tonnes, and buyer specifications.
                  </>
                )}
              </div>
            </div>

            {/* General contact fields */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                  Your Name <span className="text-neutral-400 font-normal">(optional)</span>
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Ramesh Kumar"
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DED7C8] rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 focus:border-[#163E2B]"
                />
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                  {formData.business === 'expo-maize' ? 'Company Name *' : 'Business / Centre / Farm (optional)'}
                </label>
                <input
                  type="text"
                  value={formData.businessName}
                  onChange={(e) => setFormData({ ...formData, businessName: e.target.value })}
                  placeholder={
                    formData.business === 'expo-maize'
                      ? 'e.g. Apex Global Commodities Ltd.'
                      : 'e.g. Krishna Dairy or GreenFodder Hub'
                  }
                  className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DED7C8] rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 focus:border-[#163E2B]"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                  Mobile / WhatsApp Number *
                </label>
                <input
                  type="tel"
                  value={formData.contactNumber}
                  onChange={(e) => setFormData({ ...formData, contactNumber: e.target.value })}
                  placeholder="e.g. +91 98765 43210"
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 ${
                    errors.contactNumber ? 'border-red-500' : 'border-[#DED7C8] focus:border-[#163E2B]'
                  }`}
                />
                {errors.contactNumber && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.contactNumber}
                  </p>
                )}
              </div>

              <div>
                <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                  Email Address {formData.business === 'expo-maize' ? '*' : <span className="text-neutral-400 font-normal">(optional)</span>}
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="e.g. procurement@domain.com"
                  className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 ${
                    errors.email ? 'border-red-500' : 'border-[#DED7C8] focus:border-[#163E2B]'
                  }`}
                />
                {errors.email && (
                  <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                    <AlertCircle className="w-3 h-3" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            {/* DYNAMIC DIVISION SPECIFIC FIELDS */}

            {/* 1. Dheer Hydro Maize Fields */}
            {formData.business === 'hydro-maize' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                    Delivery PIN Code (India) *
                  </label>
                  <input
                    type="text"
                    maxLength={6}
                    value={formData.deliveryPin}
                    onChange={(e) => setFormData({ ...formData, deliveryPin: e.target.value })}
                    placeholder="e.g. 851204"
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 ${
                      errors.deliveryPin ? 'border-red-500' : 'border-[#DED7C8] focus:border-[#163E2B]'
                    }`}
                  />
                  {errors.deliveryPin && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.deliveryPin}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                    Maize Requirement *
                  </label>
                  <select
                    value={formData.maizeRequirement}
                    onChange={(e) => setFormData({ ...formData, maizeRequirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DED7C8] rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 focus:border-[#163E2B]"
                  >
                    <option value="25 kg pack">25 kg pack (standard bag)</option>
                    <option value="100 kg trial lot">100 kg trial lot (4 bags)</option>
                    <option value="1 tonne or more">1 tonne or more (commercial batch)</option>
                    <option value="Monthly supply contract">Monthly recurring contract</option>
                    <option value="Discuss custom quantity">Discuss custom quantity</option>
                  </select>
                </div>
              </div>
            )}

            {/* 2. Dheer Hydro Fodder Fields */}
            {formData.business === 'hydro-fodder' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                    Village / Delivery Location (Khagaria & Nearby) *
                  </label>
                  <input
                    type="text"
                    value={formData.villageLocation}
                    onChange={(e) => setFormData({ ...formData, villageLocation: e.target.value })}
                    placeholder="e.g. Maheshkhunt, Alauli, Khagaria Town"
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 ${
                      errors.villageLocation ? 'border-red-500' : 'border-[#DED7C8] focus:border-[#163E2B]'
                    }`}
                  />
                  {errors.villageLocation && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.villageLocation}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                    Daily Fresh Fodder Requirement *
                  </label>
                  <select
                    value={formData.dailyFodderRequirement}
                    onChange={(e) => setFormData({ ...formData, dailyFodderRequirement: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DED7C8] rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 focus:border-[#163E2B]"
                  >
                    <option value="Under 25 kg per day">Under 25 kg per day</option>
                    <option value="25–50 kg per day">25–50 kg per day (2–4 animals)</option>
                    <option value="50–100 kg per day">50–100 kg per day (5–8 animals)</option>
                    <option value="Over 100 kg per day">Over 100 kg per day (commercial dairy)</option>
                    <option value="Discuss custom quantity">Discuss custom quantity</option>
                  </select>
                </div>
              </div>
            )}

            {/* 3. Dheer Expo Maize Fields */}
            {formData.business === 'expo-maize' && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
                <div>
                  <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                    Destination Country & Target Port *
                  </label>
                  <input
                    type="text"
                    value={formData.destinationPort}
                    onChange={(e) => setFormData({ ...formData, destinationPort: e.target.value })}
                    placeholder="e.g. Chittagong, Bangladesh or Jebel Ali, UAE"
                    className={`w-full px-3.5 py-2.5 bg-[#FAF8F5] border rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 ${
                      errors.destinationPort ? 'border-red-500' : 'border-[#DED7C8] focus:border-[#163E2B]'
                    }`}
                  />
                  {errors.destinationPort && (
                    <p className="mt-1 text-xs text-red-600 flex items-center gap-1">
                      <AlertCircle className="w-3 h-3" />
                      {errors.destinationPort}
                    </p>
                  )}
                </div>

                <div>
                  <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                    Expected Volume *
                  </label>
                  <select
                    value={formData.expectedVolume}
                    onChange={(e) => setFormData({ ...formData, expectedVolume: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DED7C8] rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 focus:border-[#163E2B]"
                  >
                    <option value="20-40 FCL Container">20-40 FCL Container</option>
                    <option value="100 - 500 Tonnes">100 - 500 Tonnes</option>
                    <option value="500 - 2,000 Tonnes">500 - 2,000 Tonnes</option>
                    <option value="Long-term Institutional Contract">Long-term Institutional Contract</option>
                  </select>
                </div>
              </div>
            )}

            {/* Additional details */}
            <div>
              <label className="block text-xs font-semibold text-[#2F4136] mb-1.5">
                Additional Requirements, Batch Quality Notes or Questions <span className="text-neutral-400 font-normal">(optional)</span>
              </label>
              <textarea
                rows={3}
                value={formData.additionalDetails}
                onChange={(e) => setFormData({ ...formData, additionalDetails: e.target.value })}
                placeholder="Mention specific germination requirements, target delivery dates, or lot references..."
                className="w-full px-3.5 py-2.5 bg-[#FAF8F5] border border-[#DED7C8] rounded-lg text-sm text-[#14261C] focus:bg-white focus:outline-none focus:ring-2 focus:ring-[#163E2B]/20 focus:border-[#163E2B]"
              />
            </div>

            {/* Submit & Prepare Enquiry Button */}
            <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
              <button
                type="submit"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3 text-sm font-semibold text-[#FAF8F5] bg-[#163E2B] hover:bg-[#1E543A] active:bg-[#0D2619] rounded-lg transition-colors shadow-sm cursor-pointer"
              >
                <span>Prepare & Review Enquiry</span>
                <Send className="w-4 h-4" />
              </button>

              <span className="text-xs text-[#6F7F75]">
                Private preview: review and copy your enquiry. Nothing is sent or stored without your action.
              </span>
            </div>

          </form>

          {/* Generated Enquiry Review Modal/Card */}
          {isSubmitted && (
            <div className="mt-10 p-6 sm:p-8 bg-[#FAF8F5] rounded-xl border border-[#DCD5C6] space-y-5 animate-in fade-in duration-300">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-[#E8E2D4]">
                <div>
                  <div className="text-xs font-bold uppercase tracking-wider text-[#163E2B]">
                    Review Your Request
                  </div>
                  <h3 className="text-xl font-bold text-[#14261C] mt-0.5">
                    Your enquiry draft is ready.
                  </h3>
                </div>
                
                {/* 1-Click Action Buttons */}
                <div className="flex items-center gap-2.5">
                  <button
                    type="button"
                    onClick={handleCopySummary}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-[#163E2B] bg-white border border-[#D3CABB] hover:bg-[#F2ECE0] rounded-lg transition-colors cursor-pointer"
                  >
                    {copied ? (
                      <>
                        <Check className="w-3.5 h-3.5 text-emerald-600" />
                        <span>Copied!</span>
                      </>
                    ) : (
                      <>
                        <Copy className="w-3.5 h-3.5" />
                        <span>Copy Summary</span>
                      </>
                    )}
                  </button>

                  <button
                    type="button"
                    onClick={handleSendWhatsApp}
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 text-xs font-semibold text-white bg-[#25D366] hover:bg-[#20BE5B] rounded-lg transition-colors cursor-pointer shadow-xs"
                  >
                    <MessageSquare className="w-3.5 h-3.5" />
                    <span>Send via WhatsApp</span>
                  </button>
                </div>
              </div>

              {/* Formatted Code Block of Enquiry */}
              <div className="p-4 bg-white rounded-lg border border-[#E5E0D4] font-mono text-xs text-[#2B3B30] whitespace-pre-wrap leading-relaxed">
                {generateSummaryText()}
              </div>

              <div className="text-xs text-[#607166] flex items-center justify-between">
                <span>Direct preview: copy the formatted text to send via email, or tap WhatsApp above.</span>
                <button
                  type="button"
                  onClick={() => setIsSubmitted(false)}
                  className="text-xs font-semibold text-[#163E2B] hover:underline cursor-pointer"
                >
                  Edit details
                </button>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
