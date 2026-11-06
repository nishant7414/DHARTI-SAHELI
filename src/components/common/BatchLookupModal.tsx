'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { QrCode, X, CheckCircle2, ShieldCheck, FileText, ArrowRight, AlertTriangle } from 'lucide-react';
import { BATCH_RECORDS } from '@/data/batchTraceability';

interface BatchLookupModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultBatchCode?: string;
}

export const BatchLookupModal: React.FC<BatchLookupModalProps> = ({
  isOpen,
  onClose,
  defaultBatchCode = 'DS-2026-B04'
}) => {
  const [batchCode, setBatchCode] = useState(defaultBatchCode);
  const [queriedCode, setQueriedCode] = useState(defaultBatchCode);

  if (!isOpen) return null;

  const currentRecord = BATCH_RECORDS[queriedCode.trim().toUpperCase()];

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    setQueriedCode(batchCode);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-16 flex items-start justify-center">
      <div 
        className="fixed inset-0 bg-[#174C35]/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-3xl bg-[#F8F6EC] border border-white/80 rounded-3xl shadow-2xl overflow-hidden p-6 sm:p-8 animate-in zoom-in-95 duration-200">
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-[#A8C5A0]/30">
          <div className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-[#176B48] flex items-center justify-center text-[#E7B957]">
              <QrCode className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-heading text-lg sm:text-xl font-bold text-[#174C35]">
                Batch Traceability & Quality Verification
              </h3>
              <p className="text-xs text-[#79543B]">
                Enter the batch code printed on your Dharti Saheli bag or QR seal
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#174C35] hover:bg-[#174C35] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        {/* Input Bar */}
        <form onSubmit={handleSearch} className="mt-5 flex gap-2">
          <div className="relative flex-1">
            <input
              type="text"
              placeholder="e.g. DS-2026-B04 or DS-2026-B08"
              value={batchCode}
              onChange={(e) => setBatchCode(e.target.value)}
              className="w-full bg-white border border-[#A8C5A0]/60 rounded-xl py-3 pl-4 pr-10 text-sm font-mono uppercase text-[#174C35] font-bold focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
            />
          </div>
          <button
            type="submit"
            className="bg-[#174C35] hover:bg-[#176B48] text-white px-5 py-3 rounded-xl text-xs font-bold transition-all shadow-md"
          >
            Verify Batch
          </button>
        </form>

        {/* Sample Codes */}
        <div className="mt-2.5 flex items-center gap-2 flex-wrap text-[11px] text-[#79543B]">
          <span className="font-semibold text-[#174C35]">Sample pilot batch codes:</span>
          {Object.keys(BATCH_RECORDS).map((code) => (
            <button
              key={code}
              type="button"
              onClick={() => {
                setBatchCode(code);
                setQueriedCode(code);
              }}
              className={`font-mono px-2 py-0.5 rounded border transition-colors ${
                queriedCode === code
                  ? 'bg-[#174C35] text-white border-[#174C35]'
                  : 'bg-white hover:bg-[#D9EBDD] border-[#A8C5A0]/50'
              }`}
            >
              {code}
            </button>
          ))}
        </div>

        {/* Record Details Display */}
        {currentRecord ? (
          <div className="mt-6 bg-white/80 backdrop-blur-md rounded-2xl p-5 border border-white shadow-sm space-y-5">
            {/* Top Status Banner */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 pb-4 border-b border-[#A8C5A0]/20">
              <div>
                <span className="text-[10px] uppercase font-bold tracking-wider text-[#79543B]">
                  Batch Number
                </span>
                <h4 className="font-mono text-xl font-black text-[#174C35]">
                  {currentRecord.batchNumber}
                </h4>
                <p className="text-xs font-semibold text-[#176B48] mt-0.5">
                  {currentRecord.productName}
                </p>
              </div>

              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#176B48]/10 border border-[#176B48]/30 text-[#176B48] text-xs font-bold">
                <CheckCircle2 className="w-4 h-4" />
                <span>{currentRecord.complianceStatus}</span>
              </div>
            </div>

            {/* Grid of Key Info */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-xs">
              <div className="bg-[#F8F6EC] p-3 rounded-xl border border-[#A8C5A0]/20">
                <span className="text-[10px] text-[#79543B] font-semibold uppercase block">Producing SHG Unit</span>
                <p className="font-bold text-[#174C35] mt-0.5">{currentRecord.shgUnit}</p>
                <p className="text-[11px] text-[#79543B] mt-1">{currentRecord.location}</p>
              </div>

              <div className="bg-[#F8F6EC] p-3 rounded-xl border border-[#A8C5A0]/20">
                <span className="text-[10px] text-[#79543B] font-semibold uppercase block">Quality Supervisor</span>
                <p className="font-bold text-[#174C35] mt-0.5">{currentRecord.supervisorName}</p>
                <p className="text-[11px] text-[#79543B] mt-1">Tested Date: {currentRecord.testedDate}</p>
              </div>

              <div className="bg-[#F8F6EC] p-3 rounded-xl border border-[#A8C5A0]/20">
                <span className="text-[10px] text-[#79543B] font-semibold uppercase block">Testing Laboratory</span>
                <p className="font-bold text-[#174C35] mt-0.5">{currentRecord.testedLabName}</p>
                <p className="text-[11px] text-[#79543B] font-mono mt-1">Ref: {currentRecord.labReportNumber}</p>
              </div>
            </div>

            {/* Chemical & Quality Parameters */}
            <div>
              <h5 className="text-xs font-bold uppercase tracking-wider text-[#174C35] mb-2.5 flex items-center gap-1.5">
                <ShieldCheck className="w-4 h-4 text-[#176B48]" />
                <span>Laboratory Parameters & FCO Benchmark Checks</span>
              </h5>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 text-center">
                <div className="bg-[#D9EBDD]/60 p-2.5 rounded-xl border border-[#A8C5A0]/40">
                  <span className="text-[10px] font-semibold text-[#79543B] block">Moisture Content</span>
                  <span className="text-base font-bold text-[#174C35]">{currentRecord.moisturePercentage}%</span>
                  <span className="text-[9px] text-[#176B48] block mt-0.5 font-medium">Std: 15–25% (Pass)</span>
                </div>

                <div className="bg-[#D9EBDD]/60 p-2.5 rounded-xl border border-[#A8C5A0]/40">
                  <span className="text-[10px] font-semibold text-[#79543B] block">pH Level</span>
                  <span className="text-base font-bold text-[#174C35]">{currentRecord.phValue}</span>
                  <span className="text-[9px] text-[#176B48] block mt-0.5 font-medium">Std: 6.5–7.5 (Neutral)</span>
                </div>

                <div className="bg-[#D9EBDD]/60 p-2.5 rounded-xl border border-[#A8C5A0]/40">
                  <span className="text-[10px] font-semibold text-[#79543B] block">Organic Carbon</span>
                  <span className="text-base font-bold text-[#174C35]">{currentRecord.organicCarbonPercentage}%</span>
                  <span className="text-[9px] text-[#176B48] block mt-0.5 font-medium">Std: ≥14% (Pass)</span>
                </div>

                <div className="bg-[#D9EBDD]/60 p-2.5 rounded-xl border border-[#A8C5A0]/40">
                  <span className="text-[10px] font-semibold text-[#79543B] block">C:N Ratio</span>
                  <span className="text-base font-bold text-[#174C35]">{currentRecord.cnRatio}</span>
                  <span className="text-[9px] text-[#176B48] block mt-0.5 font-medium">Std: &lt;20:1 (Pass)</span>
                </div>
              </div>
            </div>

            {/* Feedstock Origins */}
            <div className="bg-[#F8F6EC] p-3.5 rounded-xl border border-[#A8C5A0]/20 text-xs">
              <span className="font-bold text-[#174C35] block mb-1">Feedstock Segregation & Provenance:</span>
              <ul className="list-disc list-inside space-y-0.5 text-[#79543B]">
                {currentRecord.feedstockSources.map((src, i) => (
                  <li key={i}>{src}</li>
                ))}
              </ul>
            </div>

            {/* Notes & Disclaimer */}
            <p className="text-[11px] text-[#79543B] italic leading-relaxed">
              Note: {currentRecord.notes}
            </p>
          </div>
        ) : (
          <div className="mt-8 text-center py-10 bg-white/70 rounded-2xl border border-white space-y-3">
            <AlertTriangle className="w-10 h-10 text-[#E7B957] mx-auto" />
            <h4 className="font-heading font-bold text-base text-[#174C35]">
              Batch Code &ldquo;{queriedCode}&rdquo; Not Found
            </h4>
            <p className="text-xs text-[#79543B] max-w-sm mx-auto">
              Please double check the batch code on your packaging. Try clicking one of the sample batch codes above (e.g. DS-2026-B04).
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="mt-6 pt-4 border-t border-[#A8C5A0]/30 flex items-center justify-between text-xs text-[#79543B]">
          <span className="font-medium text-[#174C35]">
            Dharti Saheli Planned Batch QR System (PPT Slide 26)
          </span>
          <Link
            href="/batch-traceability"
            onClick={onClose}
            className="text-[#176B48] font-bold hover:underline inline-flex items-center gap-1"
          >
            <span>Full Traceability Portal</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

