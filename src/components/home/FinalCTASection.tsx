'use client';

import React from 'react';
import Link from 'next/link';
import { ArrowRight, Sparkles, Sprout, ShoppingBag, Handshake, FileSpreadsheet } from 'lucide-react';
import { OFFICIAL_TAGLINE } from '@/data/products';

export const FinalCTASection: React.FC = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-gradient-to-br from-[#174C35] via-[#176B48] to-[#0f3524] text-white">
      {/* Decorative Organic Elements & Glowing Radial Gradients */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-radial from-[#E7B957]/20 to-transparent blur-3xl pointer-events-none -mr-40 -mt-40" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-radial from-[#A8C5A0]/20 to-transparent blur-3xl pointer-events-none -ml-40 -mb-40" />

      {/* Floating subtle organic leaf shapes in SVG */}
      <svg className="absolute top-10 left-10 w-24 h-24 text-white/5 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 C70 30 100 50 100 100 C50 100 30 70 0 50 C0 0 30 0 50 0 Z" />
      </svg>
      <svg className="absolute bottom-10 right-10 w-32 h-32 text-[#E7B957]/5 pointer-events-none" viewBox="0 0 100 100" fill="currentColor">
        <path d="M50 0 C70 30 100 50 100 100 C50 100 30 70 0 50 C0 0 30 0 50 0 Z" />
      </svg>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-8">
        
        {/* Prominent Official Product Tagline Badge */}
        <div className="inline-flex items-center gap-2.5 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#E7B957]/30 to-[#E7B957]/15 border-2 border-[#E7B957] shadow-[0_4px_25px_rgba(231,185,87,0.3)] backdrop-blur-md">
          <Sparkles className="w-4 h-4 text-[#E7B957] fill-[#E7B957]" />
          <span className="font-heading text-lg sm:text-xl font-black text-[#E7B957] tracking-wider uppercase">
            &ldquo;{OFFICIAL_TAGLINE}&rdquo;
          </span>
          <Sparkles className="w-4 h-4 text-[#E7B957] fill-[#E7B957]" />
        </div>

        {/* Main Heading */}
        <h2 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white leading-tight">
          LET&apos;S GROW SOMETHING<br />
          <span className="bg-gradient-to-r from-[#D9EBDD] via-white to-[#E7B957] bg-clip-text text-transparent">
            GOOD TOGETHER.
          </span>
        </h2>

        {/* Description */}
        <p className="text-base sm:text-lg text-[#D9EBDD]/90 max-w-xl mx-auto leading-relaxed font-normal">
          Connect with our rural women entrepreneurs to restore soil health across farms, nurseries, and urban landscapes.
        </p>

        {/* 3 Prominent Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
          <Link
            href="/shop"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#E7B957] hover:bg-[#f5cf7c] text-[#174C35] px-8 py-4 rounded-full font-extrabold text-sm shadow-xl transition-all duration-200 hover:scale-105"
          >
            <ShoppingBag className="w-4 h-4" />
            <span>SHOP PRODUCTS</span>
          </Link>

          <Link
            href="/bulk-enquiry?type=partner"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-white/15 hover:bg-white/25 text-white border border-white/30 px-8 py-4 rounded-full font-bold text-sm shadow-lg backdrop-blur-md transition-all duration-200 hover:scale-105"
          >
            <Handshake className="w-4 h-4" />
            <span>BECOME A PARTNER</span>
          </Link>

          <Link
            href="/bulk-enquiry"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 bg-[#174C35] hover:bg-[#0f3524] text-white border border-[#A8C5A0]/40 px-8 py-4 rounded-full font-bold text-sm shadow-lg transition-all duration-200 hover:scale-105"
          >
            <FileSpreadsheet className="w-4 h-4 text-[#E7B957]" />
            <span>REQUEST BULK QUOTE</span>
          </Link>
        </div>

        {/* Small Philosophy Footer */}
        <div className="pt-8 border-t border-white/15 flex items-center justify-center gap-3 text-xs text-[#A8C5A0] font-medium">
          <Sprout className="w-4 h-4 text-[#E7B957]" />
          <span>Healthy Soil • Empowered Women • Sustainable Villages</span>
        </div>

      </div>
    </section>
  );
};

