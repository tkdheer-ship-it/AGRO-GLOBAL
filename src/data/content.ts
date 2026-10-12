import { BatchRecord } from '../types';
import heroPackImg from '../assets/images/maize_hero_pack_1791790101993.jpg';
import fodderMatImg from '../assets/images/fresh_fodder_mat_1791790116022.jpg';
import exportGrainImg from '../assets/images/export_maize_grain_1791790131392.jpg';

export const ASSETS = {
  heroPack: heroPackImg,
  freshFodder: fodderMatImg,
  exportGrain: exportGrainImg,
};

export const BUSINESSES_DATA = [
  {
    id: 'hydro-maize' as const,
    name: 'Dheer Hydro Maize',
    tagline: 'The right grain for your growing routine.',
    audience: 'Exclusively for commercial hydroponic fodder centres',
    description:
      'Cleaned, triple-graded whole yellow maize specifically selected for commercial hydroponic fodder racks. Discuss verifiable batch germination results, moisture records, and reliable recurring supply schedules.',
    highlights: [
      'Multi-screen air aspiration & destoning',
      'Targeted germination testing (7-day hydroponic protocol)',
      'Moisture optimized below 12% to preserve embryo vitality',
      '25 kg woven breathable bags or bulk palletized lots',
    ],
    primaryAction: 'Request B2B Maize Supply',
    image: ASSETS.heroPack,
    imageAlt: '25 kg bag of Dheer Hydro Maize on a farm workbench',
    packOptions: ['25 kg pack', '100 kg trial lot', '1 tonne or more', 'Monthly supply contract', 'Custom requirement'],
    detailsTitle: 'Start with the batch. Build toward regular supply.',
    detailsParagraphs: [
      'A dependable supply discussion starts with clear requirements. Tell us how much maize your centre needs, where it needs to arrive and what quality information you want to review.',
      'We understand that in hydroponic fodder production, uniform seed sizing and high germination percentage determine your daily biomass yield. Each batch is tested under actual tray soaking conditions to ensure minimal unsprouted seed residue.',
    ],
    requirementsList: [
      'Centre name and delivery PIN code',
      'Required quantity and supply frequency',
      'Trial-lot or monthly-contract interest',
      'Batch information you need to review',
    ],
  },
  {
    id: 'hydro-fodder' as const,
    name: 'Dheer Hydro Fodder',
    tagline: 'Grown here. For the farms around us.',
    audience: 'From our own Khagaria growing centre',
    description:
      'Nutrient-rich, succulent green hydroponic fodder grass mats grown fresh daily from graded maize for dairy cows, buffaloes, and goats. Serving farms and gaushalas in and around Khagaria, Bihar.',
    highlights: [
      '100% pesticide-free, hydroponically grown 7-8 day shoots',
      'Edible root mat rich in enzymes, natural starch, and protein',
      'Over 95% water conservation compared to conventional cultivation',
      'Daily morning dispatch for local livestock operations',
    ],
    primaryAction: 'Enquire About Fresh Fodder',
    image: ASSETS.freshFodder,
    imageAlt: 'Dense fresh green hydroponic maize fodder mat with white root system',
    packOptions: ['Under 25 kg per day', '25–50 kg per day', '50–100 kg per day', 'Over 100 kg per day', 'Custom requirement'],
    detailsTitle: 'Fresh fodder. A local supply conversation.',
    detailsParagraphs: [
      'Dheer Hydro Fodder is our own production-and-sales business. We use clean maize to grow fresh green fodder and focus on the daily nutrition needs of livestock owners around Khagaria.',
      'Hydroponic fodder provides highly bioavailable crude protein, vitamins, and minerals that improve digestibility and hydration in dairy livestock, particularly during dry seasons when green pasture is scarce.',
    ],
    requirementsList: [
      'Village or delivery location in Khagaria district',
      'Approximate fodder requirement per day',
      'Livestock type and herd size',
      'Preferred morning collection or delivery schedule',
    ],
  },
  {
    id: 'expo-maize' as const,
    name: 'Dheer Expo Maize',
    tagline: 'From local sourcing to a wider horizon.',
    audience: 'For export trade partners and merchant exporters',
    description:
      'Developing institutional supply partnerships for export-grade Indian yellow maize. Directly sourced from the fertile maize belt of North Bihar with customized grain grading and shipping containerization.',
    highlights: [
      'Strict grading: moisture, purity, broken grain & foreign matter',
      'Aflatoxin and phytosanitary compliance documentation',
      'Flexible packaging: 50 kg PP bags, bulk liner bags, or containerized',
      'Direct sourcing from Khagaria agricultural hub',
    ],
    primaryAction: 'Start an Export Enquiry',
    image: ASSETS.exportGrain,
    imageAlt: 'Golden yellow maize kernels in jute sack inside a clean warehouse',
    packOptions: ['20-40 FCL Container', '100 - 500 Tonnes', '500 - 2,000 Tonnes', 'Long-term Trade Agreement'],
    detailsTitle: 'Agree the requirements. Then plan the supply.',
    detailsParagraphs: [
      'Every trade enquiry begins with the buyer’s requirements. Discuss maize quality, packaging, inspection needs and delivery terms before considering an order.',
      'North Bihar produces some of India’s highest quality non-GMO yellow maize with high starch content. Dheer Expo Maize works directly with regional consolidation to guarantee export specification consistency.',
    ],
    requirementsList: [
      'Company name and contact email',
      'Destination country or target port',
      'Expected volume in metric tonnes',
      'Product specification and packing needs',
      'Shipment window and proposed trade terms (FOB/CIF)',
    ],
  },
];

export const BATCH_RECORDS: BatchRecord[] = [
  {
    id: 'batch-1',
    lotNumber: 'DAG-24-K09',
    variety: 'Kharif Premium Yellow Dent',
    origin: 'Khagaria Hub, North Bihar',
    testDate: '10 Oct 2026',
    germinationRate: 95.2,
    moistureContent: 11.4,
    purityRate: 99.6,
    brokenGrainRate: 0.8,
    foreignMatter: 0.1,
    moldAflatoxin: 'Certified Negative (< 4 ppb)',
    recommendedSoakTime: '8 - 10 hours',
    harvestSeason: 'Kharif 2026',
    status: 'Available',
  },
  {
    id: 'batch-2',
    lotNumber: 'DAG-24-K12',
    variety: 'Hydro-Selected Uniform Bold',
    origin: 'Alauli Cluster, Bihar',
    testDate: '04 Oct 2026',
    germinationRate: 94.6,
    moistureContent: 11.8,
    purityRate: 99.3,
    brokenGrainRate: 1.1,
    foreignMatter: 0.2,
    moldAflatoxin: 'Certified Negative (< 5 ppb)',
    recommendedSoakTime: '10 - 12 hours',
    harvestSeason: 'Kharif 2026',
    status: 'Available',
  },
  {
    id: 'batch-3',
    lotNumber: 'DAG-24-EXP04',
    variety: 'Export Grade #1 Yellow Maize',
    origin: 'Khagaria Terminal Yard',
    testDate: '28 Sep 2026',
    germinationRate: 92.4,
    moistureContent: 12.0,
    purityRate: 99.1,
    brokenGrainRate: 1.4,
    foreignMatter: 0.3,
    moldAflatoxin: 'Meets International Codex Specs',
    recommendedSoakTime: 'Standard storage lot',
    harvestSeason: 'Kharif 2026',
    status: 'Reserved',
  },
];

export const SUPPLY_STEPS = [
  {
    step: '01',
    title: 'Procure',
    subtitle: 'Understand the source',
    description:
      'Direct procurement across Bihar’s rich maize basin, vetting farm-gate grain characteristics and ensuring fresh seasonal harvest.',
  },
  {
    step: '02',
    title: 'Clean & grade',
    subtitle: 'Prepare the grain',
    description:
      'Multi-pass aspirators and precision sieves remove dust, broken kernels, chaff, and under-sized seed to protect hydroponic tray hygiene.',
  },
  {
    step: '03',
    title: 'Check & record',
    subtitle: 'Document the batch',
    description:
      'Every inbound lot undergoes laboratory moisture checks and mandatory 7-day tray germination trials under realistic grower conditions.',
  },
  {
    step: '04',
    title: 'Store & plan',
    subtitle: 'Match the supply need',
    description:
      'Cool, aerated warehousing preserves living seed vigor, ready for dispatch in breathable 25 kg bags or bulk distribution.',
  },
];

export const QUALITY_PILLARS = [
  {
    number: '01',
    title: 'Traceability',
    lead: 'Lot reference, source & date',
    detail: 'Every bag bears an identifiable batch code linking back to arrival date, grading pass, and storage location.',
  },
  {
    number: '02',
    title: 'Germination',
    lead: 'Results, test date & conditions',
    detail: 'Hydroponic centres need live germination percentages, not theoretical lab scores. We test with real water soak protocols.',
  },
  {
    number: '03',
    title: 'Grain quality',
    lead: 'Moisture, purity & broken grain',
    detail: 'Broken kernels promote tray fungus and bacterial slime. We grade grain to minimize cracked seed below strict thresholds.',
  },
  {
    number: '04',
    title: 'Handling',
    lead: 'Storage & dispatch details',
    detail: 'Stored in aerated conditions without destructive thermal drying, ensuring the embryo stays vigorous and ready to sprout.',
  },
];

export const FAQS = [
  {
    question: 'Which Dheer business should I contact?',
    answer:
      'Commercial hydroponic fodder centres can enquire with Dheer Hydro Maize for cleaned, graded seed. Local farmers and dairy operators buying fresh green fodder can choose Dheer Hydro Fodder. Merchant exporters and international buyers can contact Dheer Expo Maize.',
  },
  {
    question: 'Does Dheer Hydro Maize supply ordinary livestock feed?',
    answer:
      'Dheer Hydro Maize focuses strictly on cleaned, graded whole maize specifically prepared for commercial hydroponic fodder centres. If you want fresh green fodder mats for your livestock, choose the Dheer Hydro Fodder enquiry instead.',
  },
  {
    question: 'Can a centre discuss a trial before regular supply?',
    answer:
      'Yes. Hydroponic centres can enquire about a 100 kg trial lot before discussing a recurring monthly contract. Pack options, trial quantity, price, availability, and freight will be confirmed directly in your quotation.',
  },
  {
    question: 'Where is fresh fodder supply available?',
    answer:
      'Our local fresh-fodder production and daily dispatch is centered in Khagaria, Bihar and nearby catchment areas. Share your village or delivery location and daily requirement so availability and delivery logistics can be arranged.',
  },
  {
    question: 'Are prices and quality results available online?',
    answer:
      'Current batch availability, test reports, and volume pricing are provided upon enquiry. The final quotation depends on product grade, volume, packaging specifications, and delivery destination.',
  },
  {
    question: 'Can overseas buyers send export requirements?',
    answer:
      'Yes. Share your company name, destination port, expected volume (in metric tonnes), and required physical/chemical specifications. Supply capability, inspection parameters, and shipment terms will be reviewed with you upfront.',
  },
];
