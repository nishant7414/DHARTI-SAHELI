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
  Area 
} from 'recharts';
import { 
  Users, 
  Recycle, 
  Sprout, 
  TrendingUp, 
  AlertTriangle, 
  ShieldCheck, 
  ArrowRight,
  Info
} from 'lucide-react';
import { 
  IMPACT_METRICS, 
  PILOT_TARGETS_DISCLAIMER, 
  BALANCED_SCORECARD_DIMENSIONS 
} from '@/data/impactData';

const MONTHLY_PROJECTION_DATA = [
  { month: 'Month 1', wasteDiverted: 5, compostYield: 2.0, activeWomen: 6 },
  { month: 'Month 2', wasteDiverted: 12, compostYield: 4.8, activeWomen: 10 },
  { month: 'Month 3', wasteDiverted: 22, compostYield: 9.0, activeWomen: 14 },
  { month: 'Month 4', wasteDiverted: 32, compostYield: 13.5, activeWomen: 15 },
  { month: 'Month 5', wasteDiverted: 40, compostYield: 16.5, activeWomen: 16 },
  { month: 'Month 6', wasteDiverted: 45, compostYield: 19.2, activeWomen: 16 },
];

export const ImpactDashboardSection: React.FC = () => {
  const [selectedDimension, setSelectedDimension] = useState(0);

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#174C35] via-[#113827] to-[#174C35] text-white">
      {/* Background glow effects */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-radial from-[#176B48]/40 to-transparent blur-3xl pointer-events-none -z-0" />
      <div className="absolute bottom-10 left-10 w-[500px] h-[500px] bg-radial from-[#A8C5A0]/10 to-transparent blur-3xl pointer-events-none -z-0" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#E7B957] bg-white/10 px-3.5 py-1 rounded-full inline-block border border-white/15">
            CSR & Performance Dashboard
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight">
            SMALL LOCAL ACTIONS.<br />A BIGGER SUSTAINABLE FUTURE.
          </h2>
          <p className="text-base sm:text-lg text-[#D9EBDD]/80">
            Accountability for every rupee, every kilogram of organic biomass, and every rural woman entrepreneur.
          </p>
        </div>

        {/* Mandatory Transparency Banner */}
        <div className="mb-10 bg-[#E7B957]/15 border-2 border-[#E7B957] rounded-2xl p-4 sm:p-5 flex items-start gap-3 backdrop-blur-md">
          <AlertTriangle className="w-5 h-5 text-[#E7B957] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm">
            <strong className="text-[#E7B957] font-black uppercase tracking-wider block">
              MANDATORY COMPLIANCE DISCLOSURE:
            </strong>
            <p className="text-white/90 mt-0.5 leading-relaxed font-medium">
              {PILOT_TARGETS_DISCLAIMER}
            </p>
          </div>
        </div>

        {/* Key Metrics Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mb-14">
          {IMPACT_METRICS.map((metric) => (
            <div
              key={metric.id}
              className="bg-white/10 backdrop-blur-xl p-6 rounded-3xl border border-white/15 shadow-xl hover:bg-white/15 transition-all duration-300 group"
            >
              <div className="flex items-center justify-between mb-4">
                <span className="text-[10px] font-black tracking-widest uppercase bg-[#E7B957] text-[#174C35] px-2.5 py-0.5 rounded-full">
                  {metric.targetType}
                </span>
                <span className="text-[11px] text-[#A8C5A0] font-mono">
                  {metric.category.toUpperCase()}
                </span>
              </div>

              <div className="font-heading text-4xl sm:text-5xl font-black text-white mb-1 group-hover:text-[#E7B957] transition-colors">
                {metric.value}
              </div>

              <h4 className="font-bold text-sm sm:text-base text-[#D9EBDD] mb-1">
                {metric.label}
              </h4>

              <p className="text-xs text-[#A8C5A0] font-medium mb-3">
                {metric.sublabel}
              </p>

              <p className="text-[11px] text-[#D9EBDD]/70 leading-relaxed pt-3 border-t border-white/10">
                {metric.detail}
              </p>
            </div>
          ))}
        </div>

        {/* Interactive Pilot Trajectory Charts & Balanced Scorecard Tabs */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch mb-12">
          
          {/* Left Chart: Waste Processing & Yield Projections */}
          <div className="lg:col-span-7 bg-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-heading text-xl font-bold text-white flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-[#E7B957]" />
                  <span>90-Day Pilot Trajectory (Illustrative Target)</span>
                </h3>
                <span className="text-xs text-[#A8C5A0] font-mono">Unit: Metric Tonnes</span>
              </div>
              <p className="text-xs text-[#D9EBDD]/80 mb-6">
                Monthly feedstock diversion curve and resulting high-grade vermicompost yield across pilot months.
              </p>

              <div className="h-64 sm:h-72 w-full">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={MONTHLY_PROJECTION_DATA}>
                    <defs>
                      <linearGradient id="wasteGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#E7B957" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#E7B957" stopOpacity={0.0}/>
                      </linearGradient>
                      <linearGradient id="compostGrad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="#A8C5A0" stopOpacity={0.8}/>
                        <stop offset="95%" stopColor="#A8C5A0" stopOpacity={0.0}/>
                      </linearGradient>
                    </defs>
                    <XAxis dataKey="month" stroke="#A8C5A0" fontSize={11} tickLine={false} />
                    <YAxis stroke="#A8C5A0" fontSize={11} tickLine={false} />
                    <Tooltip
                      contentStyle={{
                        backgroundColor: '#174C35',
                        border: '1px solid rgba(255,255,255,0.2)',
                        borderRadius: '12px',
                        fontSize: '12px',
                        color: '#fff',
                      }}
                    />
                    <Area 
                      type="monotone" 
                      dataKey="wasteDiverted" 
                      name="Waste Diverted (Tonnes)" 
                      stroke="#E7B957" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#wasteGrad)" 
                    />
                    <Area 
                      type="monotone" 
                      dataKey="compostYield" 
                      name="Compost Yield (Tonnes)" 
                      stroke="#A8C5A0" 
                      strokeWidth={2}
                      fillOpacity={1} 
                      fill="url(#compostGrad)" 
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="pt-4 border-t border-white/10 flex items-center justify-between text-[11px] text-[#A8C5A0]">
              <span>Yellow: Waste Diverted (Tonnes)</span>
              <span>Sage: Enriched Soil Output (Tonnes)</span>
            </div>
          </div>

          {/* Right: Balanced Scorecard Framework (PPT Slide 27) */}
          <div className="lg:col-span-5 bg-white/10 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border border-white/15 shadow-2xl flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <ShieldCheck className="w-5 h-5 text-[#E7B957]" />
                <h3 className="font-heading text-xl font-bold text-white">
                  Balanced Scorecard
                </h3>
              </div>
              <p className="text-xs text-[#D9EBDD]/80 mb-5">
                Four accountability dimensions derived from the Slide 27 Monitoring & Evaluation architecture.
              </p>

              {/* Dimension Selection Buttons */}
              <div className="grid grid-cols-2 gap-2 mb-5">
                {BALANCED_SCORECARD_DIMENSIONS.map((dim, idx) => (
                  <button
                    key={dim.title}
                    onClick={() => setSelectedDimension(idx)}
                    className={`p-2 sm:p-2.5 rounded-xl text-left text-xs font-bold transition-colors border whitespace-nowrap overflow-hidden text-ellipsis focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7B957] ${
                      selectedDimension === idx
                        ? 'bg-[#E7B957] text-[#174C35] border-[#E7B957] shadow-md'
                        : 'bg-white/5 hover:bg-white/10 text-white/90 border-white/10'
                    }`}
                  >
                    <span className="sm:hidden">{dim.shortTitle || dim.title}</span>
                    <span className="hidden sm:inline">{dim.title}</span>
                  </button>
                ))}
              </div>

              {/* Indicators list */}
              <div className="space-y-3">
                {BALANCED_SCORECARD_DIMENSIONS[selectedDimension].indicators.map((ind, i) => (
                  <div key={i} className="bg-white/5 p-3 rounded-xl border border-white/10">
                    <span className="text-[11px] font-bold text-[#E7B957] block">
                      {ind.name}
                    </span>
                    <p className="text-xs text-[#D9EBDD]/90 mt-0.5 leading-relaxed">
                      {ind.target}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 mt-6 border-t border-white/10 text-right">
              <Link
                href="/our-impact"
                className="text-xs font-bold text-[#E7B957] hover:underline inline-flex items-center gap-1.5"
              >
                <span>View Full Sustainability & CSR Report</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

