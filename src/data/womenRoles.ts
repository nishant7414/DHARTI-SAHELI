export interface EnterpriseRole {
  id: string;
  title: string;
  hindiTitle: string;
  scope: string;
  responsibilities: string[];
  keyCompetencies: string[];
  icon: string;
}

export const WOMEN_ENTERPRISE_ROLES: EnterpriseRole[] = [
  {
    id: 'production-leaders',
    title: 'Production Leaders',
    hindiTitle: 'उत्पादन प्रमुख (Utpadan Pramukh)',
    scope: 'Supervise composting beds, moisture regulation, and earthworm health across the unit.',
    responsibilities: [
      'Manage temperature and moisture balance in vermicomposting beds (target 65–70% relative moisture)',
      'Direct the 15–20 day pre-decomposition pile turning schedule before feeding to earthworms',
      'Schedule harvesting cycles and supervise mechanical 4mm rotary sieving',
      'Ensure standard operating procedures (SOPs) for biological curing and bed hygiene'
    ],
    keyCompetencies: [
      'Scientific vermitechnology & earthworm lifecycle management',
      'Moisture estimation by hand-squeeze and electronic moisture probes',
      'Batch production schedules and raw feedstock mixing ratios'
    ],
    icon: 'Sprout'
  },
  {
    id: 'collection-coordinators',
    title: 'Collection Coordinators',
    hindiTitle: 'संग्रहण समन्वयक (Sangrahan Samanvayak)',
    scope: 'Manage local raw material aggregation routes with gaushalas, mandis, and farms.',
    responsibilities: [
      'Coordinate scheduled collection routes with local gaushalas, dairies, and vegetable market yards',
      'Conduct visual gate inspection to reject plastics, glass, household chemicals, or foul waste',
      'Log weighing slip details (date, supplier ID, net weight in kg, vehicle challan)',
      'Maintain reciprocal supply agreements (cash-per-load or exchange for finished compost bags)'
    ],
    keyCompetencies: [
      'Feedstock quality assessment and contamination risk identification',
      'Village-level logistics routing and mini-truck/tractor load aggregation',
      'Supplier relationship management and procurement ledger maintenance'
    ],
    icon: 'Truck'
  },
  {
    id: 'quality-supervisors',
    title: 'Quality Supervisors',
    hindiTitle: 'गुणवत्ता पर्यवेक्षक (Gunvatta Paryavekshak)',
    scope: 'Oversee laboratory sample dispatch, sieving texture, and batch QR code generation.',
    responsibilities: [
      'Draw composite batch samples as per Fertiliser Control Order (FCO) testing protocols',
      'Coordinate with accredited government and university soil testing laboratories',
      'Verify pH, moisture percentage, electrical conductivity, and organic carbon compliance',
      'Authorize batch QR code printing and seal approval cards before bags enter the dispatch store'
    ],
    keyCompetencies: [
      'Basic soil chemistry metrics (pH, moisture, organic carbon, C:N ratio)',
      'Quality compliance documentation and digital batch QR verification',
      'Storage environment monitoring (covered sheds, raised pallets, FIFO inventory)'
    ],
    icon: 'ShieldCheck'
  },
  {
    id: 'sales-leads',
    title: 'Sales & Customer Leads',
    hindiTitle: 'बिक्री एवं ग्राहक संबंध (Bikri evam Sambandh)',
    scope: 'Anchor relationships with nurseries, FPOs, landscapers, and online retail buyers.',
    responsibilities: [
      'Follow up on sample trials with commercial nurseries and horticulture growers within 48 hours',
      'Manage bulk institutional enquiries, prepare written delivery quotations, and track invoices',
      'Coordinate direct digital payment reconciliations via UPI, QR, and bank linkage',
      'Gather structured buyer feedback after every seasonal application cycle to refine grain size and packaging'
    ],
    keyCompetencies: [
      'Commercial B2B negotiation and institutional customer relationship management',
      'Digital payment handling and formal sales order generation',
      'Customer service, product guidance, and application recommendations'
    ],
    icon: 'Users'
  }
];

export const SHG_CASE_STUDIES = [
  {
    title: 'Odisha (Vermigold SHG Federation)',
    highlight: '300+ rural farm women',
    description: 'Trained in scientific vermicomposting techniques to launch their own registered retail organic fertilizer brand, supplying regional horticultural cooperatives and municipal departments.',
    learning: 'Demonstrates how federated women’s groups can transition from small backyard pits to an aggregated commercial brand with standard packaging.'
  },
  {
    title: 'Kerala (Bio-Control & Organic Inputs)',
    highlight: 'Tribal women’s collectives',
    description: 'Partnered with State Agricultural Universities to mass-produce certified bio-fertilizers and bio-pesticides, creating dependable year-round income.',
    learning: 'Highlights the critical importance of institutional lab linkages and rigorous technical training to build buyer credibility.'
  },
  {
    title: 'Uttarakhand (Shagun SHG Enterprise)',
    highlight: 'Biogas slurry to packaged wealth',
    description: 'Transformed community biogas plant slurry and mountain household organic waste into tested, packaged, high-value vermicompost sold through farm retail outlets.',
    learning: 'Proves the commercial viability of converting rural bio-waste streams into high-margin packaged gardening products.'
  }
];

