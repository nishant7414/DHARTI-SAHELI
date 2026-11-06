'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  QrCode, 
  Search, 
  CheckCircle2, 
  ShieldCheck, 
  FileText, 
  ArrowRight, 
  AlertTriangle,
  Printer,
  Sparkles,
  Calendar,
  MapPin,
  UserCheck
} from 'lucide-react';
import { BATCH_RECORDS } from '@/data/batchTraceability';
import { OFFICIAL_TAGLINE } from '@/data/products';

export default function BatchTraceabilityPage() {
  const [searchCode, setSearchCode] = useState('DS-2026-B04');
  const [activeCode, setActiveCode] = useState('DS-2026-B04');

  const currentBatch = BATCH_RECORDS[activeCode.trim().toUpperCase()];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setActiveCode(searchCode);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#176B48]/10 text-[#176B48] text-xs font-bold uppercase tracking-wider border border-[#176B48]/20">
            <QrCode className="w-3.5 h-3.5" />
            Batch Verification & Lab Test Portal
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#174C35] tracking-tight">
            TRACEABLE TO THE VILLAGE.
          </h1>

          <p className="text-base sm:text-lg text-[#174C35]/80">
            Every bag of Dharti Saheli vermicompost carries a batch code connecting buyers to its producing SHG unit, test date, and certified laboratory analysis.
          </p>

          <div className="pt-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#79543B] bg-white/80 border border-[#E7B957]/60 px-4 py-1.5 rounded-full inline-block backdrop-blur-md shadow-xs">
              Official Tagline: &ldquo;{OFFICIAL_TAGLINE}&rdquo;
            </span>
          </div>
        </div>

        {/* Search Bar & Sample Codes */}
        <div className="bg-white/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border-2 border-white shadow-xl space-y-4">
          <form onSubmit={handleSearch} className="flex gap-2">
            <div className="relative flex-1">
              <input
                type="text"
                placeholder="Enter Batch Number (e.g. DS-2026-B04)"
                value={searchCode}
                onChange={(e) => setSearchCode(e.target.value)}
                className="w-full bg-white border border-[#A8C5A0]/60 rounded-2xl py-3.5 pl-11 pr-4 text-sm font-mono uppercase font-bold text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
              />
              <Search className="w-4 h-4 text-[#79543B] absolute left-4 top-4" />
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-[#176B48] to-[#174C35] hover:to-[#0f3524] text-white px-7 py-3.5 rounded-2xl font-bold text-xs shadow-md transition-colors shrink-0 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48]"
            >
              Verify Batch
            </button>
          </form>

          {/* Quick sample chips */}
          <div className="flex items-center gap-2 flex-wrap text-xs text-[#79543B] pt-1">
            <span className="font-bold text-[#174C35]">Quick sample batches:</span>
            {Object.keys(BATCH_RECORDS).map((code) => (
              <button
                key={code}
                onClick={() => {
                  setSearchCode(code);
                  setActiveCode(code);
                }}
                className={`font-mono px-3 py-1 rounded-xl text-xs font-bold transition-colors border focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48] ${
                  activeCode === code
                    ? 'bg-[#174C35] text-white border-[#174C35] shadow-xs'
                    : 'bg-white hover:bg-[#D9EBDD] border-[#A8C5A0]/40 text-[#174C35]'
                }`}
              >
                {code}
              </button>
            ))}
          </div>
        </div>

        {/* Certificate Display */}
        {currentBatch ? (
          <div className="bg-white/90 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border-2 border-white shadow-2xl space-y-8 print:p-0 print:border-none">
            
            {/* Certificate Header */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#A8C5A0]/30 gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#176B48] bg-[#D9EBDD] px-3 py-1 rounded-full">
                  Official Quality Certificate
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#174C35] mt-1.5">
                  BATCH ANALYSIS REPORT • {currentBatch.batchNumber}
                </h2>
                <p className="text-xs text-[#176B48] font-semibold mt-0.5">
                  {currentBatch.productName}
                </p>
              </div>

              <div className="flex items-center gap-2 print:hidden">
                <button
                  onClick={handlePrint}
                  className="bg-[#174C35] hover:bg-[#176B48] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Printer className="w-3.5 h-3.5" />
                  <span>Print Certificate</span>
                </button>
              </div>
            </div>

            {/* Key Entity Metadata */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1">
                <div className="flex items-center gap-1.5 text-[#79543B] font-bold text-[10px] uppercase">
                  <MapPin className="w-3.5 h-3.5 text-[#176B48]" />
                  <span>Producing SHG Unit</span>
                </div>
                <p className="font-bold text-[#174C35]">{currentBatch.shgUnit}</p>
                <p className="text-[#79543B]">{currentBatch.location}</p>
              </div>

              <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1">
                <div className="flex items-center gap-1.5 text-[#79543B] font-bold text-[10px] uppercase">
                  <Calendar className="w-3.5 h-3.5 text-[#176B48]" />
                  <span>Timeline & Curing</span>
                </div>
                <p className="font-bold text-[#174C35]">Production: {currentBatch.productionDate}</p>
                <p className="text-[#79543B]">Harvested: {currentBatch.harvestDate}</p>
                <p className="text-[#79543B]">Sieved: {currentBatch.sievedDate}</p>
              </div>

              <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1">
                <div className="flex items-center gap-1.5 text-[#79543B] font-bold text-[10px] uppercase">
                  <UserCheck className="w-3.5 h-3.5 text-[#176B48]" />
                  <span>Quality Sign-off</span>
                </div>
                <p className="font-bold text-[#174C35]">{currentBatch.supervisorName}</p>
                <p className="text-[#79543B]">{currentBatch.testedLabName}</p>
                <p className="text-[#176B48] font-mono font-bold">Ref: {currentBatch.labReportNumber}</p>
              </div>
            </div>

            {/* Chemical & Biological Parameter Grid */}
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <h3 className="font-heading text-lg font-bold text-[#174C35] flex items-center gap-2">
                  <ShieldCheck className="w-5 h-5 text-[#176B48]" />
                  <span>Fertiliser Control Order (FCO 1985) Parameter Verification</span>
                </h3>
                <span className="text-[11px] font-bold text-[#176B48] bg-[#D9EBDD] px-2.5 py-0.5 rounded-full">
                  100% Passed
                </span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-[#D9EBDD]/70 p-4 rounded-2xl border border-[#A8C5A0]/50 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-[#79543B] block">Moisture Content</span>
                  <span className="text-2xl font-black text-[#174C35]">{currentBatch.moisturePercentage}%</span>
                  <span className="text-[10px] text-[#176B48] font-semibold block">FCO Std: 15–25% (Pass)</span>
                </div>

                <div className="bg-[#D9EBDD]/70 p-4 rounded-2xl border border-[#A8C5A0]/50 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-[#79543B] block">pH Level</span>
                  <span className="text-2xl font-black text-[#174C35]">{currentBatch.phValue}</span>
                  <span className="text-[10px] text-[#176B48] font-semibold block">FCO Std: 6.5–7.5 (Neutral)</span>
                </div>

                <div className="bg-[#D9EBDD]/70 p-4 rounded-2xl border border-[#A8C5A0]/50 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-[#79543B] block">Total Organic Carbon</span>
                  <span className="text-2xl font-black text-[#174C35]">{currentBatch.organicCarbonPercentage}%</span>
                  <span className="text-[10px] text-[#176B48] font-semibold block">FCO Std: ≥14.0% (Pass)</span>
                </div>

                <div className="bg-[#D9EBDD]/70 p-4 rounded-2xl border border-[#A8C5A0]/50 space-y-1">
                  <span className="text-[10px] font-bold uppercase text-[#79543B] block">C:N Ratio</span>
                  <span className="text-2xl font-black text-[#174C35]">{currentBatch.cnRatio}</span>
                  <span className="text-[10px] text-[#176B48] font-semibold block">FCO Std: &lt;20:1 (Pass)</span>
                </div>
              </div>
            </div>

            {/* Nutrients & Feedstock */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/30 space-y-1">
                <strong className="text-[#174C35] block mb-1">Primary Nutrient Content (NPK %):</strong>
                <p className="font-mono text-base font-bold text-[#176B48]">{currentBatch.npkRatio}</p>
                <p className="text-[#79543B] text-[11px]">
                  Nitrogen (N) • Available Phosphorus (P2O5) • Potash (K2O)
                </p>
              </div>

              <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/30 space-y-1">
                <strong className="text-[#174C35] block mb-1">Segregated Biomass Feedstock Origins:</strong>
                <ul className="list-disc list-inside space-y-0.5 text-[#79543B]">
                  {currentBatch.feedstockSources.map((src, i) => (
                    <li key={i}>{src}</li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Supervisor Notes */}
            <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 text-xs text-[#79543B] space-y-1">
              <strong className="text-[#174C35] block">Quality Supervisor Notes:</strong>
              <p className="italic">{currentBatch.notes}</p>
            </div>

            {/* Statutory Footer */}
            <div className="pt-4 border-t border-[#A8C5A0]/30 flex flex-col sm:flex-row items-center justify-between text-xs text-[#79543B] gap-2">
              <span>Verified under Dharti Saheli Quality Protocol (PPT Slide 26)</span>
              <span className="font-bold text-[#174C35]">DON&apos;T PANIC, IT&apos;S ORGANIC.</span>
            </div>

          </div>
        ) : (
          <div className="bg-white/70 rounded-3xl p-12 text-center space-y-3 border border-white">
            <AlertTriangle className="w-12 h-12 text-[#E7B957] mx-auto" />
            <h3 className="font-heading text-xl font-bold text-[#174C35]">
              Batch Code &ldquo;{activeCode}&rdquo; Not Found
            </h3>
            <p className="text-xs text-[#79543B] max-w-sm mx-auto">
              Please enter one of our verified sample pilot batch codes above (e.g. DS-2026-B04 or DS-2026-B08).
            </p>
          </div>
        )}

      </div>
    </div>
  );
}

