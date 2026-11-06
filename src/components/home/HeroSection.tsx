'use client';

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Users, 
  Leaf, 
  Recycle,
  Sprout
} from 'lucide-react';
import { OFFICIAL_TAGLINE } from '@/data/products';

export const HeroSection: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-4 pb-10 lg:pt-6 lg:pb-12">
      {/* Background radial gradients for glassmorphism */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-gradient-to-tr from-[#D9EBDD] via-[#A8C5A0]/25 to-transparent rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-10 right-10 w-[450px] h-[450px] bg-gradient-to-bl from-[#E7B957]/20 via-[#F8F6EC] to-transparent rounded-full blur-2xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center">
          
          {/* Left Column: Editorial & Brand Proposition */}
          <div className="lg:col-span-7 space-y-4 sm:space-y-5 text-center lg:text-left">
            
            {/* Small Eyebrow Text */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-white/80 border border-[#A8C5A0]/50 shadow-xs backdrop-blur-md">
              <span className="w-2 h-2 rounded-full bg-[#176B48] animate-pulse" />
              <span className="text-xs font-bold tracking-widest text-[#174C35] uppercase">
                ROOTED IN NATURE. POWERED BY WOMEN.
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#174C35] leading-[1.12]">
              GROW BETTER.<br />
              <span className="text-[#176B48]">LIVE GREENER.</span><br />
              <span className="bg-gradient-to-r from-[#174C35] via-[#176B48] to-[#79543B] bg-clip-text text-transparent">
                EMPOWER TOGETHER.
              </span>
            </h1>

            {/* Supporting Text */}
            <p className="text-sm sm:text-base text-[#174C35]/85 max-w-xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Discover thoughtfully produced organic soil solutions made from nature&apos;s resources and powered by the hands of rural women entrepreneurs.
            </p>

            {/* Prominent Official Product Tagline Badge */}
            <div className="relative inline-block w-full sm:w-auto">
              <div className="bg-gradient-to-r from-[#E7B957]/25 via-white/80 to-[#E7B957]/20 backdrop-blur-md p-3 sm:p-3.5 rounded-xl border border-[#E7B957]/70 shadow-[0_4px_20px_-5px_rgba(231,185,87,0.3)] flex items-center justify-center sm:justify-start gap-3">
                <div className="w-9 h-9 rounded-lg bg-[#E7B957] flex items-center justify-center text-[#174C35] shadow-xs shrink-0">
                  <Sparkles className="w-4 h-4 fill-[#174C35]" />
                </div>
                <div>
                  <span className="text-[10px] font-bold tracking-widest uppercase text-[#79543B] block">
                    Official Product Tagline
                  </span>
                  <span className="font-heading text-base sm:text-lg font-black text-[#174C35] tracking-wide block">
                    &ldquo;{OFFICIAL_TAGLINE}&rdquo;
                  </span>
                </div>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-1">
              <Link
                href="/shop"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-[#176B48] to-[#174C35] hover:to-[#0f3524] text-white px-7 py-3 rounded-full font-bold text-xs shadow-[0_8px_20px_-5px_rgba(23,107,72,0.4)] hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48]"
              >
                <span>EXPLORE OUR PRODUCTS</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
              <Link
                href="/our-story"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/80 hover:bg-white text-[#174C35] border border-[#A8C5A0]/60 px-6 py-3 rounded-full font-bold text-xs shadow-xs hover:shadow-sm transition-transform duration-200 backdrop-blur-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48]"
              >
                <span>DISCOVER OUR STORY</span>
              </Link>
            </div>

            {/* Three Trust Indicators */}
            <div className="pt-4 border-t border-[#A8C5A0]/30 grid grid-cols-1 sm:grid-cols-3 gap-3 text-left">
              <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm p-2.5 rounded-xl border border-white/60">
                <div className="w-7 h-7 rounded-lg bg-[#D9EBDD] flex items-center justify-center text-[#176B48] shrink-0">
                  <Users className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#174C35] leading-tight">
                  Women-led production
                </span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm p-2.5 rounded-xl border border-white/60">
                <div className="w-7 h-7 rounded-lg bg-[#D9EBDD] flex items-center justify-center text-[#176B48] shrink-0">
                  <Leaf className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#174C35] leading-tight">
                  Locally sourced inputs
                </span>
              </div>

              <div className="flex items-center gap-2.5 bg-white/50 backdrop-blur-sm p-2.5 rounded-xl border border-white/60">
                <div className="w-7 h-7 rounded-lg bg-[#D9EBDD] flex items-center justify-center text-[#176B48] shrink-0">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <span className="text-xs font-semibold text-[#174C35] leading-tight">
                  Quality-focused processing
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Visual Composition with Floating Glass Cards */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Outer decorative glowing ring */}
              <div className="absolute inset-0 bg-gradient-to-tr from-[#176B48]/20 via-[#E7B957]/20 to-[#A8C5A0]/30 rounded-3xl blur-xl transform -rotate-3 scale-105 pointer-events-none" />

              {/* Main Visual Frame */}
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white/80 bg-white/40 backdrop-blur-md p-3">
                <div className="relative aspect-4/5 rounded-2xl overflow-hidden">
                  <Image
                    src="/images/story/hero-composition.jpg"
                    alt="Rural Indian women agricultural entrepreneurs working with soil and crops"
                    fill
                    priority
                    className="object-cover transition-transform duration-700 hover:scale-105"
                  />
                  {/* Subtle gradient vignette */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#174C35]/80 via-transparent to-black/10" />

                  {/* Overlaid Branded Packaging Peek at the Bottom */}
                  <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-xl p-3.5 rounded-2xl border border-white/80 shadow-lg flex items-center gap-3">
                    <div className="w-12 h-14 relative bg-[#F8F6EC] rounded-lg overflow-hidden shrink-0 border border-[#A8C5A0]/30 flex items-center justify-center">
                      <Image
                        src="/images/products/vermicompost-pack.svg"
                        alt="Dharti Saheli Vermicompost bag mockup"
                        fill
                        className="object-contain p-1"
                      />
                    </div>
                    <div className="flex-1">
                      <span className="text-[10px] font-bold text-[#176B48] uppercase tracking-wider block">
                        Flagship Product
                      </span>
                      <h4 className="font-heading font-bold text-sm text-[#174C35]">
                        Dharti Saheli Vermicompost
                      </h4>
                      <p className="text-[11px] text-[#79543B]">
                        5kg • 10kg • 25kg Bags
                      </p>
                    </div>
                    <Link
                      href="/shop/vermicompost"
                      className="bg-[#176B48] hover:bg-[#174C35] text-white text-[11px] font-bold px-3 py-1.5 rounded-full transition-colors"
                    >
                      View
                    </Link>
                  </div>
                </div>
              </div>

              {/* Floating Glassmorphism Card 1: Top Left */}
              <div className="absolute -top-5 -left-4 sm:-left-8 bg-white/85 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-white/90 shadow-[0_10px_30px_-5px_rgba(23,76,53,0.18)] flex items-center gap-3 animate-bounce [animation-duration:6s]">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#176B48] to-[#174C35] flex items-center justify-center text-white shadow-sm shrink-0">
                  <Users className="w-5 h-5 text-[#E7B957]" />
                </div>
                <div>
                  <span className="font-heading font-bold text-sm text-[#174C35] block leading-tight">
                    Women-led
                  </span>
                  <span className="text-[11px] font-medium text-[#79543B] block">
                    Rural entrepreneurship
                  </span>
                </div>
              </div>

              {/* Floating Glassmorphism Card 2: Middle Right */}
              <div className="absolute top-1/3 -right-4 sm:-right-8 bg-white/85 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-white/90 shadow-[0_10px_30px_-5px_rgba(23,76,53,0.18)] flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-[#D9EBDD] flex items-center justify-center text-[#176B48] shadow-sm shrink-0">
                  <Recycle className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-bold text-sm text-[#174C35] block leading-tight">
                    Nature to Nurture
                  </span>
                  <span className="text-[11px] font-medium text-[#79543B] block">
                    Circular economy
                  </span>
                </div>
              </div>

              {/* Floating Glassmorphism Card 3: Bottom Left offset */}
              <div className="absolute -bottom-6 -left-2 sm:-left-6 bg-white/90 backdrop-blur-xl p-3 sm:p-4 rounded-2xl border border-white/90 shadow-[0_10px_30px_-5px_rgba(23,76,53,0.18)] flex items-center gap-3 hidden sm:flex">
                <div className="w-10 h-10 rounded-xl bg-[#E7B957] flex items-center justify-center text-[#174C35] shadow-sm shrink-0">
                  <Sprout className="w-5 h-5" />
                </div>
                <div>
                  <span className="font-heading font-bold text-sm text-[#174C35] block leading-tight">
                    Better Soil
                  </span>
                  <span className="text-[11px] font-medium text-[#79543B] block">
                    Thoughtfully produced
                  </span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

