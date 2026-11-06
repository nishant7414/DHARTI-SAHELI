import { Product } from '@/types';

export const OFFICIAL_TAGLINE = "DON'T PANIC, IT'S ORGANIC.";
export const BRAND_PHILOSOPHY = "Healthy Soil. Empowered Women. Sustainable Villages.";

export const PRODUCTS: Product[] = [
  {
    id: 'vermicompost',
    slug: 'vermicompost',
    name: 'Dharti Saheli Premium Vermicompost',
    tagline: OFFICIAL_TAGLINE,
    subtitle: 'Carefully processed vermicompost produced using suitable biodegradable inputs through managed earthworm composting.',
    status: 'featured',
    category: 'Vermicompost',
    badge: 'Featured Product',
    shortDescription: 'Carefully processed vermicompost produced using suitable biodegradable inputs through managed earthworm-based composting.',
    fullDescription: 'Dharti Saheli Vermicompost is a nutrient-dense, biological soil amendment produced by rural women’s Self-Help Groups using Eisenia fetida earthworms. Sourced exclusively from pre-decomposed segregated cow dung and farm crop residues, it transforms tired soil into a thriving microbial ecosystem. Fully sieved through a 4mm rotary screen, it delivers an even, odorless, dark granular texture with active soil organisms that stimulate plant root growth and increase water retention.',
    features: [
      'Soil-enriching organic input enriched with beneficial soil microbes',
      'Suitable for terrace gardening, horticulture, flowering plants, and vegetable farming',
      'Batch-level quality checks adhering to Fertiliser Control Order (FCO) guidelines',
      'Convenient breathable, moisture-resistant packaging with traceable batch QR codes',
      'Only suitable segregated inputs: strictly zero municipal plastics or harmful chemical residues'
    ],
    packSizes: [
      { size: '5 kg', price: 65, popular: false, sku: 'DS-VC-05KG', inStock: true, discountNote: 'Ideal for balcony pots & kitchen gardens' },
      { size: '10 kg', price: 120, popular: true, sku: 'DS-VC-10KG', inStock: true, discountNote: 'Most popular for home gardens & lawns' },
      { size: '25 kg', price: 275, popular: false, sku: 'DS-VC-25KG', inStock: true, discountNote: 'Heavy-duty sack for nurseries & small orchards' }
    ],
    bulkPricingAvailable: true,
    minBulkQuantity: '100 kg (10 x 10kg or 4 x 25kg bags)',
    image: '/images/products/vermicompost-pack.svg',
    sampleBatchCode: 'DS-2026-B04',
    rating: 4.9,
    reviewCount: 38,
    specifications: {
      'Moisture Content': '18.5% (FCO Standard: 15.0% - 25.0%)',
      'Color & Appearance': 'Dark brown to black granular form',
      'Odor': 'Pleasant, earthy forest odor (no foul smell)',
      'Total Organic Carbon': '17.4% (FCO Min. Standard: 14.0%)',
      'Total Nitrogen (as N)': '1.62% (FCO Standard: ≥ 1.0%)',
      'Total Phosphorus (as P2O5)': '0.94% (FCO Standard: ≥ 0.8%)',
      'Total Potassium (as K2O)': '1.28% (FCO Standard: ≥ 0.8%)',
      'C:N Ratio': '13.8:1 (FCO Max. Limit: 20:1)',
      'pH (1:5 extract)': '7.1 (Optimal Neutral Range 6.5 - 7.5)',
      'Conductivity (EC)': '1.8 dS/m (Safe for root zones)',
      'Particle Size': '≥ 98% passes through 4.0 mm IS sieve'
    },
    applicationGuides: [
      { target: 'Potted Plants & Balcony Greens', rate: '50g - 100g per 10-inch pot', frequency: 'Every 20–25 days; gently rake into topsoil and water' },
      { target: 'Vegetable Beds & Kitchen Gardens', rate: '250g - 400g per square meter', frequency: 'Mix during soil bed preparation & at flowering stage' },
      { target: 'Fruit Trees & Ornamental Shrubs', rate: '1.0 kg - 2.5 kg per tree ring', frequency: 'Twice a year (Pre-monsoon and post-monsoon flush)' },
      { target: 'Commercial Nursery Polybags', rate: '1 part vermicompost to 3 parts soil/cocopeat', frequency: 'During potting mix blending' }
    ]
  },
  {
    id: 'organic-compost',
    slug: 'organic-compost',
    name: 'Dharti Saheli Enriched Organic Compost',
    tagline: OFFICIAL_TAGLINE,
    subtitle: 'Organic compost produced from suitable biodegradable materials through a managed composting process.',
    status: 'available',
    category: 'Organic Compost',
    badge: 'Farm & Nursery Choice',
    shortDescription: 'Organic compost produced from suitable biodegradable materials through a managed aerobic composting process.',
    fullDescription: 'Dharti Saheli Organic Compost is matured through disciplined thermophilic aerobic windrows. Combining segregated dairy cow dung, mandi vegetable trimmings, and carbon-rich dry crop residues, this bulk amendment improves soil cation exchange capacity (CEC), restores organic carbon levels, and creates favorable conditions for soil biodiversity. Available in heavy-duty retail bags as well as loose/palletized bulk supply for farms and commercial landscape projects.',
    features: [
      'Suitable for open-field agriculture, fruit orchards, nurseries, and public landscape parks',
      'Retail and bulk supply options available with scalable palletized logistics',
      'Locally sourced inputs from verified gaushalas and agricultural mandis',
      'Quality-focused production with regular temperature monitoring and maturity checks',
      'Batch-tested to ensure complete pathogen elimination and weed-seed destruction'
    ],
    packSizes: [
      { size: '25 kg Retail Sack', price: 210, popular: true, sku: 'DS-OC-25KG', inStock: true, discountNote: 'Heavy-duty woven bag with moisture liner' },
      { size: '50 kg Commercial Sack', price: 380, popular: false, sku: 'DS-OC-50KG', inStock: true, discountNote: 'Ideal for horticulture nurseries & landscape contractors' },
      { size: 'Bulk Supply (1 Metric Tonne)', price: 4200, popular: false, sku: 'DS-OC-BULK', inStock: true, discountNote: 'Shipped via mini-truck / tractor trolley within cluster radius' }
    ],
    bulkPricingAvailable: true,
    minBulkQuantity: '500 kg (10 x 50kg sacks)',
    image: '/images/products/organic-compost-pack.svg',
    sampleBatchCode: 'DS-2026-B08',
    rating: 4.8,
    reviewCount: 24,
    specifications: {
      'Moisture Content': '21.0% (FCO Standard: 15.0% - 25.0%)',
      'Color & Texture': 'Dark brown crumbly compost',
      'Total Organic Carbon': '16.8% (FCO Min. Standard: 12.0%)',
      'Total NPK (N+P2O5+K2O)': '≥ 2.5% combined bio-available nutrients',
      'C:N Ratio': '16.2:1 (FCO Max. Limit: 20:1)',
      'pH (1:5 extract)': '7.3 (Neutral)',
      'Conductivity (EC)': '< 4.0 dS/m',
      'Heavy Metals (Pb, Cd, As)': 'Below detectable limits (adheres strictly to FCO limits)'
    },
    applicationGuides: [
      { target: 'Field Crops & Pulses', rate: '2 – 3 Tonnes per acre', frequency: 'Incorporated during final land preparation before sowing' },
      { target: 'Horticulture & Orchards', rate: '5 – 8 kg per mature tree ring', frequency: 'Twice annually during active vegetative flush' },
      { target: 'Lawn & Turf Laying', rate: '25 kg per 100 sq.ft', frequency: 'Worked into upper 4 inches of subsoil prior to turfing' },
      { target: 'Commercial Nursery Bed Preparation', rate: '20% volume ratio in soil mix', frequency: 'During potting substrate preparation' }
    ]
  },
  {
    id: 'gardening-kits',
    slug: 'gardening-kits',
    name: 'Dharti Saheli Home Gardening Kit',
    tagline: OFFICIAL_TAGLINE,
    subtitle: 'A convenient gardening solution designed to help people begin growing their own plants.',
    status: 'coming_soon',
    category: 'Gardening Kits',
    badge: 'Coming Soon (Phase 2)',
    shortDescription: 'A convenient gardening solution designed to help urban families begin growing their own chemical-free plants.',
    fullDescription: 'Designed as an all-in-one starter box, the Dharti Saheli Gardening Kit provides everything needed to establish a mini edible balcony garden or lush indoor corner. Packaged in biodegradable kraft containers, each kit includes enriched vermicompost, expanding coir blocks, heirloom Indian vegetable and herb seeds, and an easy illustrated handbook in Hindi and English. This product is currently in design and testing as part of our Phase 2 expansion roadmap.',
    features: [
      'Complete seed-to-harvest kit: compost, growing medium, heirloom seeds, and guide',
      'Specially calibrated for small urban spaces: balconies, windowsills, and sunny terraces',
      'Zero synthetic chemicals: 100% natural and child/pet safe',
      'Empowers urban residents to experience the joy of sustainable home agriculture',
      'Direct link to rural women SHG growers via WhatsApp community updates'
    ],
    packSizes: [
      { size: 'Balcony Edibles Starter Kit', price: 499, popular: true, sku: 'DS-GK-STARTER', inStock: false, discountNote: 'Phase 2 Pilot Offering — Join notification list' }
    ],
    bulkPricingAvailable: true,
    minBulkQuantity: '25 kits for institutional gifting / school workshops',
    image: '/images/products/gardening-kit-pack.svg',
    sampleBatchCode: 'DS-2026-GK-PROTO',
    rating: 5.0,
    reviewCount: 12,
    plannedContents: [
      '3 kg Enriched Dharti Saheli Vermicompost (sealed in kraft pouch)',
      '2 kg Compressed Low-EC Cocopeat Brick (expands up to 15 Litres)',
      '5 Packets of Desi Non-Hybrid Seeds (Tomato, Palak, Green Chilli, Coriander, Krishna Tulsi)',
      '2 Biodegradable Compressed Coir Nursery Pots',
      '1 Pair of Eco-Friendly Rubberized Garden Gloves',
      'Illustrated 16-Page Handbook: "Mitti Se Saheli — Your First 30 Days of Balcony Farming"'
    ],
    specifications: {
      'Kit Weight': 'Approx. 5.5 kg',
      'Packaging': '100% Recycled corrugated kraft box with vegetable-ink print',
      'Seed Viability': 'Tested germination rate ≥ 85%',
      'Cocopeat EC': '< 0.5 mS/cm (Washed & buffered)',
      'Compost Base': '100% Dharti Saheli Eisenia fetida vermicompost'
    },
    applicationGuides: [
      { target: 'Balcony Seed Starters', rate: '1 seed pot per vegetable type', frequency: 'Follow handbook calendar' },
      { target: 'Potting Substrate Mix', rate: 'Equal parts compost + cocopeat + garden soil', frequency: 'For transplanting seedlings into larger pots' }
    ]
  }
];
