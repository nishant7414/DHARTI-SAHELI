export interface PackSize {
  size: string;
  price: number;
  popular?: boolean;
  sku: string;
  inStock: boolean;
  discountNote?: string;
}

export interface Product {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  subtitle: string;
  status: 'featured' | 'available' | 'coming_soon';
  category: 'Vermicompost' | 'Organic Compost' | 'Gardening Kits';
  shortDescription: string;
  fullDescription: string;
  features: string[];
  packSizes: PackSize[];
  bulkPricingAvailable: boolean;
  minBulkQuantity?: string;
  specifications: Record<string, string>;
  applicationGuides: {
    target: string;
    rate: string;
    frequency: string;
  }[];
  plannedContents?: string[];
  image: string;
  badge?: string;
  rating: number;
  reviewCount: number;
  sampleBatchCode: string;
}

export interface CartItem {
  productId: string;
  productName: string;
  productSlug: string;
  image: string;
  selectedSize: string;
  sku: string;
  unitPrice: number;
  quantity: number;
}

export interface BatchRecord {
  batchNumber: string;
  productName: string;
  shgUnit: string;
  location: string;
  productionDate: string;
  harvestDate: string;
  sievedDate: string;
  testedDate: string;
  supervisorName: string;
  feedstockSources: string[];
  moisturePercentage: number;
  phValue: number;
  organicCarbonPercentage: number;
  cnRatio: string;
  npkRatio: string;
  complianceStatus: 'FCO Compliant' | 'Pending Lab Test' | 'Testing In Progress';
  labReportNumber: string;
  testedLabName: string;
  notes: string;
}

export interface BulkEnquiryData {
  fullName: string;
  organizationName: string;
  email: string;
  mobileNumber: string;
  customerType: 'Farmer' | 'FPO' | 'Nursery' | 'Landscaping Company' | 'Institution' | 'Distributor' | 'Other';
  productInterestedIn: string;
  requiredQuantity: string;
  preferredPackaging: string;
  deliveryLocation: string;
  intendedUsage: string;
  additionalMessage?: string;
}

