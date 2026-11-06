import { BatchRecord } from '@/types';

export const BATCH_RECORDS: Record<string, BatchRecord> = {
  'DS-2026-B04': {
    batchNumber: 'DS-2026-B04',
    productName: 'Dharti Saheli Premium Vermicompost (10 kg & 5 kg)',
    shgUnit: 'Annapurna Mahila Swayam Sahayata Samooh, Cluster Unit 1',
    location: 'Gram Jamunya, Chhindwara District, Madhya Pradesh',
    productionDate: '10 February 2026',
    harvestDate: '18 April 2026',
    sievedDate: '22 April 2026',
    testedDate: '26 April 2026',
    supervisorName: 'Rekha Bai (Quality & Traceability Lead)',
    feedstockSources: [
      'Shree Krishna Gaushala (Segregated cow dung, 60%)',
      'Local Mandi Yard (Pre-sorted fruit & vegetable residue, 25%)',
      'Farmer Producer Group Cluster (Dry soy/wheat straw trimmings, 15%)'
    ],
    moisturePercentage: 18.5,
    phValue: 7.1,
    organicCarbonPercentage: 17.4,
    cnRatio: '13.8:1',
    npkRatio: '1.62 : 0.94 : 1.28 %',
    complianceStatus: 'FCO Compliant',
    labReportNumber: 'STL-FCO-2026-0489',
    testedLabName: 'District Soil & Agricultural Testing Laboratory, MP',
    notes: 'Zero heavy-metal contamination detected. 98.4% passing through 4mm screen. Verified pre-decomposition of 18 days prior to earthworm introduction.'
  },
  'DS-2026-B08': {
    batchNumber: 'DS-2026-B08',
    productName: 'Dharti Saheli Enriched Organic Compost (25 kg & 50 kg)',
    shgUnit: 'Pragati Mahila Utpadak Dal, Cluster Unit 2',
    location: 'Gram Khedi, Betul District, Madhya Pradesh',
    productionDate: '24 January 2026',
    harvestDate: '02 May 2026',
    sievedDate: '06 May 2026',
    testedDate: '11 May 2026',
    supervisorName: 'Sunita Devi (Unit Quality Supervisor)',
    feedstockSources: [
      'Adarsh Dairy Cooperative (Fresh slurry & dung, 50%)',
      'Sub-Yard Sabzi Mandi (Segregated green market waste, 30%)',
      'Local Farm Agro-waste (Dried biomass, 20%)'
    ],
    moisturePercentage: 21.0,
    phValue: 7.3,
    organicCarbonPercentage: 16.8,
    cnRatio: '16.2:1',
    npkRatio: '1.25 : 0.78 : 0.95 %',
    complianceStatus: 'FCO Compliant',
    labReportNumber: 'STL-FCO-2026-0542',
    testedLabName: 'State Soil Analytical Centre, Central Zone',
    notes: 'Windrow reached thermophilic temperature of 58°C sustained over 14 days, ensuring pathogen destruction and zero viable weed seeds.'
  },
  'DS-2026-B01': {
    batchNumber: 'DS-2026-B01',
    productName: 'Dharti Saheli Premium Vermicompost (Inaugural Trial Batch)',
    shgUnit: 'Saraswati Mahila Vikas Samooh, Unit 1',
    location: 'Gram Jamunya, Chhindwara District, MP',
    productionDate: '05 December 2025',
    harvestDate: '15 February 2026',
    sievedDate: '20 February 2026',
    testedDate: '25 February 2026',
    supervisorName: 'Kamla Bai & Meena Didi (Production Supervisors)',
    feedstockSources: [
      'Gaushala raw dung (70%)',
      'Farm green foliage & banana peel residues (30%)'
    ],
    moisturePercentage: 19.8,
    phValue: 6.9,
    organicCarbonPercentage: 16.9,
    cnRatio: '14.1:1',
    npkRatio: '1.55 : 0.88 : 1.15 %',
    complianceStatus: 'FCO Compliant',
    labReportNumber: 'STL-FCO-2026-0112',
    testedLabName: 'KVK Soil Testing Facility, Chhindwara',
    notes: 'Initial pilot demonstration batch supplied to 3 partner commercial nurseries for field trial evaluation.'
  }
};

