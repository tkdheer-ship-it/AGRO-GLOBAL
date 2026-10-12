export type BusinessType = 'hydro-maize' | 'hydro-fodder' | 'expo-maize';

export interface BatchRecord {
  id: string;
  lotNumber: string;
  variety: string;
  origin: string;
  testDate: string;
  germinationRate: number; // percentage e.g. 94.8
  moistureContent: number; // percentage e.g. 11.6
  purityRate: number; // percentage e.g. 99.4
  brokenGrainRate: number; // percentage e.g. 0.9
  foreignMatter: number; // percentage e.g. 0.1
  moldAflatoxin: string; // "Certified Negative (< 5 ppb)"
  recommendedSoakTime: string; // "8 - 12 hours"
  harvestSeason: string;
  status: 'Available' | 'Reserved' | 'Archive';
}

export interface EnquiryFormData {
  business: BusinessType;
  name: string;
  businessName: string;
  contactNumber: string; // Mobile / WhatsApp
  email: string;
  // B2B Hydro Maize specific:
  deliveryPin: string;
  maizeRequirement: string;
  // Fresh Fodder specific:
  villageLocation: string;
  dailyFodderRequirement: string;
  livestockType: string;
  // Expo Maize specific:
  destinationPort: string;
  expectedVolume: string;
  // Common:
  additionalDetails: string;
}

export interface CalculatorState {
  cows: number;
  buffaloes: number;
  goats: number;
  daysSupply: number;
}
