'use client';

import React from 'react';
import { 
  Sparkles, 
  Leaf, 
  ShieldCheck, 
  Users, 
  QrCode,
  ArrowRight
} from 'lucide-react';
import Link from 'next/link';

export const WhyDhartiSection: React.FC = () => {
  const reasons = [
    {
      icon: Leaf,
      number: '01',
      title: 'THOUGHTFUL SOURCING',
      description: 'Suitable biodegradable inputs sourced through local supplier networks.',
      detail: 'We partner with verified gaushalas, dairy farms, and local vegetable mandis. Every batch rejects plastics, synthetic chemicals, and municipal sludge at the gate.',
      accent: 'from-[#176B48] to-[#174C35]',
    },
    {
      icon: ShieldCheck,
      number: '02',
      title: 'QUALITY-FOCUSED PRODUCTION',
      description: 'Managed processing, sieving, quality monitoring and batch records.',
      detail: 'Disciplined 15–20 day pre-decomposition prevents root burn, followed by controlled earthworm beds and 4mm mechanical rotary sieving to maintain ideal moisture (15–25%).',
      accent: 'from-[#174C35] to-[#0f3524]',
    },
    {
      icon: Users,
      number: '03',
      title: 'WOMEN-LED ENTERPRISE',
      description: 'A business model that puts rural women at the centre of value creation.',
      detail: 'Not mere manual laborers—rural women operate as unit leaders, quality supervisors, and commercial sales managers with transparent profit-sharing and co-ownership pathways.',
      accent: 'from-[#79543B] to-[#543927]',
    },
    {
      icon: QrCode,
      number: '04',
      title: 'TRANSPARENT TRACEABILITY',
      description: 'A planned batch QR system will help customers access production and quality information.',
      detail: 'Each bag features a batch QR code connecting buyers to its specific producing SHG unit, test date, organic carbon percentage, and certified laboratory analysis.',
      accent: 'from-[#E7B957] to-[#b38528]',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#F8F6EC] to-white/70">
      {/* Background ambient lighting */}
      <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-[#A8C5A0]/20 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#176B48] bg-[#D9EBDD] px-3.5 py-1 rounded-full inline-block">
            Our Core Differentiation
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35] tracking-tight">
            GOOD FOR YOUR SOIL.<br className="hidden sm:inline" /> MEANINGFUL FOR YOUR COMMUNITY.
          </h2>
          <p className="text-base sm:text-lg text-[#174C35]/80">
            A scientifically managed, socially accountable model built to bring predictability to natural soil inputs.
          </p>
        </div>

        {/* 4 Premium Glass Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {reasons.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.number}
                className="relative rounded-3xl bg-white/80 backdrop-blur-xl p-7 border border-white/90 shadow-[0_10px_30px_-5px_rgba(23,76,53,0.08)] hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 flex flex-col justify-between group overflow-hidden"
              >
                {/* Top Subtle Number & Icon */}
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-[#174C35] to-[#176B48] flex items-center justify-center text-[#E7B957] shadow-md group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono text-2xl font-black text-[#A8C5A0]/60 group-hover:text-[#176B48] transition-colors">
                      {item.number}
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#174C35] mb-2 leading-snug">
                    {item.title}
                  </h3>

                  <p className="text-xs font-semibold text-[#176B48] mb-3 leading-relaxed">
                    &ldquo;{item.description}&rdquo;
                  </p>

                  <p className="text-xs text-[#79543B] leading-relaxed">
                    {item.detail}
                  </p>
                </div>

                {/* Bottom decorative bar */}
                <div className="mt-6 pt-4 border-t border-[#A8C5A0]/20 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-[#174C35] uppercase tracking-wider">
                    Verified Standard
                  </span>
                  <div className="w-2 h-2 rounded-full bg-[#176B48]" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Interactive QR Traceability Banner */}
        <div className="mt-14 bg-gradient-to-r from-[#174C35] to-[#176B48] rounded-3xl p-6 sm:p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6 border border-white/20">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="w-14 h-14 rounded-2xl bg-[#E7B957] flex items-center justify-center text-[#174C35] shrink-0 shadow-md">
              <QrCode className="w-7 h-7" />
            </div>
            <div>
              <h4 className="font-heading text-xl font-bold text-white">
                Experience Batch QR Traceability
              </h4>
              <p className="text-xs text-[#D9EBDD] mt-1 max-w-xl">
                Try scanning or entering pilot batch code <strong className="text-white bg-white/20 px-2 py-0.5 rounded font-mono font-bold tracking-wider">DS-2026-B04</strong> to view its moisture test, laboratory pH report, and producing SHG cluster.
              </p>
            </div>
          </div>

          <Link
            href="/batch-traceability"
            className="bg-[#E7B957] hover:bg-[#f5cf7c] text-[#174C35] px-6 py-3 rounded-full font-bold text-xs shadow-md transition-colors shrink-0 flex items-center gap-2 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-offset-2 focus-visible:ring-offset-[#174C35]"
          >
            <span>Open Traceability Tool</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

      </div>
    </section>
  );
};

