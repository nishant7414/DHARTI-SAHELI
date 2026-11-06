export interface ImpactMetric {
  id: string;
  label: string;
  value: string;
  sublabel: string;
  category: 'women' | 'environment' | 'business' | 'governance';
  targetType: 'ILLUSTRATIVE PILOT TARGET';
  detail: string;
}

export const PILOT_TARGETS_DISCLAIMER =
  "ILLUSTRATIVE PILOT TARGETS — NOT ACHIEVED RESULTS. Metrics represent operational targets designed for a 90-day pilot cluster as outlined in the Dharti Saheli business model.";

export const IMPACT_METRICS: ImpactMetric[] = [
  {
    id: 'women-trained',
    label: 'Women Targeted for Training',
    value: '20',
    sublabel: 'Target cohort across 2–3 pilot SHG clusters',
    category: 'women',
    targetType: 'ILLUSTRATIVE PILOT TARGET',
    detail: 'Hands-on training curriculum covering aerobic composting, Eisenia fetida vermicomposting, sieving, batch record-keeping, moisture testing, and digital payment collection.'
  },
  {
    id: 'women-active',
    label: 'Target Active Earning Women',
    value: '≥ 15',
    sublabel: 'Target active in production & sales by Month 6',
    category: 'women',
    targetType: 'ILLUSTRATIVE PILOT TARGET',
    detail: 'Transitioning trained SHG members into structured roles as production leads, collection coordinators, quality supervisors, and sales representatives with transparent remuneration.'
  },
  {
    id: 'waste-diverted',
    label: 'Organic Waste Processing Capacity',
    value: '45 Tonnes',
    sublabel: 'Illustrative feedstock diverted from open dumping',
    category: 'environment',
    targetType: 'ILLUSTRATIVE PILOT TARGET',
    detail: 'Segregated cow dung from gaushalas, vegetable waste from local mandi sub-yards, and farm leaf litter collected through village-level aggregation routes.'
  },
  {
    id: 'compost-produced',
    label: 'Target High-Grade Soil Output',
    value: '18 – 22 T',
    sublabel: 'FCO-standard vermicompost & matured compost',
    category: 'environment',
    targetType: 'ILLUSTRATIVE PILOT TARGET',
    detail: 'Processed through 75–90 day production cycles with strict zero-contamination criteria, maintaining optimal moisture and balanced C:N ratios.'
  },
  {
    id: 'trial-buyers',
    label: 'Institutional Trial Buyers',
    value: '3',
    sublabel: 'Commercial nurseries & horticulture farms',
    category: 'business',
    targetType: 'ILLUSTRATIVE PILOT TARGET',
    detail: 'Secured pilot trial supply agreements to evaluate soil biological activity, root development, and seedling survival against commercial benchmarks.'
  },
  {
    id: 'repeat-buyers',
    label: 'Repeat Institutional Buyers',
    value: '2',
    sublabel: 'Target recurring institutional buyers by end of pilot',
    category: 'business',
    targetType: 'ILLUSTRATIVE PILOT TARGET',
    detail: 'Validation of product quality and commercial willingness-to-pay through recurring orders, establishing a viable commercial anchor before scaling.'
  }
];

export const BALANCED_SCORECARD_DIMENSIONS = [
  {
    title: 'Financial Sustainability',
    shortTitle: 'Financial',
    color: '#174C35',
    indicators: [
      { name: 'Unit Economics (10kg Bag)', target: '₹120 selling price vs ₹58 variable cost (52% contribution margin)' },
      { name: 'Monthly Break-even Volume', target: '≈ 565 bags/month to cover ₹35,000 fixed operating costs' },
      { name: 'Operating Surplus at 1,000 Bags', target: '₹27,000 monthly surplus before depreciation and taxes' },
      { name: 'Catalytic CSR Capital Recovery', target: 'Recurring costs fully sustained by earned product sales over 11 months' }
    ]
  },
  {
    title: 'Customer & Market Growth',
    shortTitle: 'Market Growth',
    color: '#176B48',
    indicators: [
      { name: 'Institutional Anchor Strategy', target: 'Commercial nurseries, FPOs, landscaping firms, and public parks' },
      { name: 'Order Fulfilment Rate', target: '≥ 95% on-time clustered route delivery' },
      { name: 'Sample-to-Order Conversion', target: 'Structured sample trials converted to seasonal supply agreements' },
      { name: 'Enquiry Response Protocol', target: 'Customer enquiries answered within 48 hours by dedicated sales lead' }
    ]
  },
  {
    title: 'Internal Process & Environment',
    shortTitle: 'Operations',
    color: '#79543B',
    indicators: [
      { name: 'Contamination Policy', target: '100% rejection of unsegregated plastics, glass, or chemical inputs at gate' },
      { name: 'Pre-decomposition Protocol', target: '15–20 days pre-treatment before feeding biomass to earthworms' },
      { name: 'Batch Testing Pass Rate', target: '100% test reports verified against FCO standards before dispatch' },
      { name: 'Finished Inventory Reserve', target: '2–4 weeks (500–1,000 bags) held under covered, ventilated FIFO storage' }
    ]
  },
  {
    title: 'Learning, Women & Governance',
    shortTitle: 'Governance',
    color: '#E7B957',
    indicators: [
      { name: 'Decision-Making Ownership', target: 'Women represent 100% of production leads and SHG governance committee' },
      { name: 'Transparent Payments', target: 'Direct bank/UPI transfer with digital ledger and accessible grievance route' },
      { name: 'Worker Safety & PPE', target: 'Standard provision of protective gloves, masks, boots, and ergonomic sieves' },
      { name: 'Quarterly Social Audit', target: 'Independent SHG review and transparent utilisation certificates' }
    ]
  }
];

