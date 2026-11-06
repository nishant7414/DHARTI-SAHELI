'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip, 
  ResponsiveContainer, 
  AreaChart, 
  Area,
  PieChart,
  Pie,
  Cell
} from 'recharts';
import { 
  Users, 
  Recycle, 
  Building2, 
  ShieldCheck, 
  AlertTriangle, 
  TrendingUp, 
  ArrowRight, 
  Leaf, 
  Sparkles,
  FileCheck2,
  DollarSign
} from 'lucide-react';
import { 
  IMPACT_METRICS, 
  PILOT_TARGETS_DISCLAIMER, 
  BALANCED_SCORECARD_DIMENSIONS 
} from '@/data/impactData';
import { OFFICIAL_TAGLINE } from '@/data/products';

const FEEDSTOCK_COMPOSITION_DATA = [
  { name: 'Gaushala & Dairy Cow Dung', value: 55, color: '#174C35' },
  { name: 'Mandi Vegetable & Fruit Waste', value: 25, color: '#176B48' },
  { name: 'Crop Residues & Dry Foliage', value: 15, color: '#A8C5A0' },
  { name: 'Horticulture & Park Trimmings', value: 5, color: '#E7B957' },
];

export default function OurImpactPage() {
  const [selectedScorecardTab, setSelectedScorecardTab] = useState(0);

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Ambient background glow */}
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Header */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7B957]/20 border border-[#E7B957]/50 text-[#174C35] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E7B957]" />
            Sustainability, Governance & Impact Architecture
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#174C35] tracking-tight leading-[1.15]">
            SMALL LOCAL ACTIONS.<br />A BIGGER SUSTAINABLE FUTURE.
          </h1>

          <p className="text-base sm:text-lg text-[#174C35]/85 max-w-2xl mx-auto leading-relaxed">
            Every bag of Dharti Saheli vermicompost represents verified organic waste diverted from landfills, biological health returned to farmland, and measurable economic agency for rural women.
          </p>

          <div className="pt-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#79543B] bg-white/80 border border-[#E7B957]/60 px-4 py-1.5 rounded-full inline-block backdrop-blur-md shadow-xs">
              Official Tagline: &ldquo;{OFFICIAL_TAGLINE}&rdquo;
            </span>
          </div>
        </div>

        {/* Mandatory Transparency Notice Callout */}
        <div className="bg-[#E7B957]/15 border-2 border-[#E7B957] rounded-3xl p-6 flex items-start gap-4 shadow-sm">
          <AlertTriangle className="w-6 h-6 text-[#79543B] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm space-y-1">
            <strong className="text-[#79543B] font-black uppercase tracking-wider block">
              MANDATORY COMPLIANCE DISCLOSURE:
            </strong>
            <p className="text-[#174C35]/90 leading-relaxed font-medium">
              {PILOT_TARGETS_DISCLAIMER}
            </p>
          </div>
        </div>

        {/* THREE CORE IMPACT DIMENSIONS */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* 1. Women's Economic Empowerment */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/90 shadow-lg space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#D9EBDD] flex items-center justify-center text-[#176B48]">
                <Users className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#174C35]">
                WOMEN&apos;S ECONOMIC EMPOWERMENT
              </h3>
              <ul className="space-y-2 text-xs text-[#174C35]/85">
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Skills development:</strong> Production SOPs, moisture balancing, and batch bookkeeping.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Enterprise participation:</strong> Transition from passive workers to commercial leaders.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Transparent payments:</strong> Regular digital UPI bank transfers with public SHG ledgers.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Co-ownership pathways:</strong> Sharing annual operating surplus dividends across members.</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-[#A8C5A0]/20 text-[11px] font-bold text-[#176B48]">
              Target: ≥ 15 active women by Month 6
            </div>
          </div>

          {/* 2. Environmental Impact */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/90 shadow-lg space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#D9EBDD] flex items-center justify-center text-[#176B48]">
                <Recycle className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#174C35]">
                ENVIRONMENTAL IMPACT
              </h3>
              <ul className="space-y-2 text-xs text-[#174C35]/85">
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Bio-waste collection:</strong> Segregated cow dung, mandi foliage, and crop residues.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Responsible processing:</strong> Controlled pre-decomposition avoiding greenhouse gas spikes.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Contamination rejection:</strong> Zero plastics, glass, or pesticides accepted at the unit gate.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Soil regeneration:</strong> Restoring degraded soil organic carbon (SOC) levels above 14%.</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-[#A8C5A0]/20 text-[11px] font-bold text-[#176B48]">
              Target: 45 Tonnes bio-waste processed in pilot
            </div>
          </div>

          {/* 3. Local Economic Development */}
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/90 shadow-lg space-y-4 flex flex-col justify-between">
            <div className="space-y-3">
              <div className="w-12 h-12 rounded-2xl bg-[#D9EBDD] flex items-center justify-center text-[#176B48]">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#174C35]">
                LOCAL ECONOMIC DEVELOPMENT
              </h3>
              <ul className="space-y-2 text-xs text-[#174C35]/85">
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Supplier networks:</strong> Predictable collection fees for rural gaushalas and dairies.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Farmer relationships:</strong> Affordable, lab-tested organic manure for nearby villages.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Nursery & commercial contracts:</strong> Dependable, scheduled supply of bulk potting media.</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#176B48] font-bold">•</span>
                  <span><strong>Ecosystem convergence:</strong> Synergies with DAY-NRLM, KVKs, and GOBARdhan initiatives.</span>
                </li>
              </ul>
            </div>
            <div className="pt-3 border-t border-[#A8C5A0]/20 text-[11px] font-bold text-[#176B48]">
              Target: 3 institutional trial buyers & 2 repeat buyers
            </div>
          </div>

        </div>

        {/* Feedstock Allocation Pie Chart & Pilot Metrics Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Feedstock Stream Allocation */}
          <div className="lg:col-span-5 bg-white/80 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white/90 shadow-lg space-y-4">
            <h3 className="font-heading text-xl font-bold text-[#174C35]">
              Feedstock Inflow Composition
            </h3>
            <p className="text-xs text-[#79543B]">
              Rigorous segregation breakdown mapped to prevent heavy-metal accumulation and maintain balanced C:N ratios.
            </p>

            <div className="h-56 w-full flex items-center justify-center">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={FEEDSTOCK_COMPOSITION_DATA}
                    innerRadius={50}
                    outerRadius={80}
                    paddingAngle={4}
                    dataKey="value"
                  >
                    {FEEDSTOCK_COMPOSITION_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip
                    contentStyle={{
                      backgroundColor: '#174C35',
                      border: 'none',
                      borderRadius: '8px',
                      color: '#fff',
                      fontSize: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-2 pt-2 border-t border-[#A8C5A0]/20">
              {FEEDSTOCK_COMPOSITION_DATA.map((item) => (
                <div key={item.name} className="flex items-center justify-between text-xs">
                  <div className="flex items-center gap-2">
                    <span className="w-3 h-3 rounded-full" style={{ backgroundColor: item.color }} />
                    <span className="text-[#174C35] font-semibold">{item.name}</span>
                  </div>
                  <span className="font-mono font-bold text-[#79543B]">{item.value}%</span>
                </div>
              ))}
            </div>
          </div>

          {/* Pilot Target Metrics Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {IMPACT_METRICS.slice(0, 4).map((m) => (
              <div
                key={m.id}
                className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white/90 shadow-md space-y-2"
              >
                <span className="text-[10px] font-black uppercase tracking-wider text-[#176B48] bg-[#D9EBDD] px-2.5 py-0.5 rounded-full">
                  {m.targetType}
                </span>
                <div className="font-heading text-3xl font-black text-[#174C35]">
                  {m.value}
                </div>
                <h4 className="font-bold text-sm text-[#174C35]">{m.label}</h4>
                <p className="text-xs text-[#79543B] leading-relaxed">{m.detail}</p>
              </div>
            ))}
          </div>

        </div>

        {/* CSR Balanced Scorecard Deep Dive (PPT Slide 27) */}
        <div className="bg-white/85 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border-2 border-white shadow-xl space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#176B48]">
              Accountability for Every Rupee (PPT Slide 27)
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#174C35]">
              The CSR Balanced Scorecard Architecture
            </h3>
            <p className="text-xs text-[#79543B]">
              CSR Reporting Cadence: Baseline → Monthly Dashboard → Quarterly Review → Annual Outcome Assessment and Financial Utilisation Audit.
            </p>
          </div>

          <div className="flex items-center gap-2 overflow-x-auto border-b border-[#A8C5A0]/30 pb-3">
            {BALANCED_SCORECARD_DIMENSIONS.map((dim, idx) => (
              <button
                key={dim.title}
                onClick={() => setSelectedScorecardTab(idx)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                  selectedScorecardTab === idx
                    ? 'bg-[#174C35] text-white shadow-md'
                    : 'bg-white/60 text-[#174C35] hover:bg-white'
                }`}
              >
                {dim.title}
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {BALANCED_SCORECARD_DIMENSIONS[selectedScorecardTab].indicators.map((ind, i) => (
              <div
                key={i}
                className="bg-[#F8F6EC] p-5 rounded-2xl border border-[#A8C5A0]/30 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-sm text-[#174C35]">{ind.name}</h4>
                  <span className="text-[10px] font-bold uppercase text-[#176B48] bg-[#D9EBDD] px-2 py-0.5 rounded">
                    Audited Metric
                  </span>
                </div>
                <p className="text-xs text-[#79543B] leading-relaxed">
                  {ind.target}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA to Partner */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="font-heading text-2xl font-bold text-[#174C35]">
            Interested in CSR Convergence or Institutional Impact Partnership?
          </h3>
          <p className="text-xs text-[#79543B] max-w-xl mx-auto">
            Fund the foundation. Let the enterprise earn. Connect with our leadership team for detailed pilot budgets and balanced scorecard MoUs.
          </p>
          <div className="pt-2">
            <Link
              href="/bulk-enquiry?type=csr"
              className="inline-flex items-center gap-2 bg-[#174C35] hover:bg-[#176B48] text-white px-8 py-3.5 rounded-full font-bold text-xs shadow-md transition-all"
            >
              <span>Connect for CSR Partnership</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

