'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Sprout, 
  Users, 
  Recycle, 
  ShieldCheck, 
  ArrowRight, 
  CheckCircle2, 
  Sparkles, 
  TrendingUp,
  Target,
  HeartHandshake
} from 'lucide-react';
import { OFFICIAL_TAGLINE, BRAND_PHILOSOPHY } from '@/data/products';

export default function OurStoryPage() {
  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-10 right-1/4 w-[600px] h-[600px] bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 left-10 w-[500px] h-[500px] bg-[#E7B957]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24">
        
        {/* Editorial Story Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#A8C5A0]/60 shadow-xs backdrop-blur-md">
            <Sparkles className="w-4 h-4 text-[#E7B957]" />
            <span className="text-xs font-bold uppercase tracking-widest text-[#174C35]">
              The Story of Dharti Saheli
            </span>
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#174C35] tracking-tight leading-[1.15]">
            A BETTER FUTURE BEGINS WITH THE SOIL BENEATH OUR FEET.
          </h1>

          <p className="text-lg sm:text-xl text-[#174C35]/85 font-medium max-w-2xl mx-auto leading-relaxed">
            {BRAND_PHILOSOPHY}
          </p>

          <div className="pt-2">
            <span className="text-xs font-black uppercase tracking-widest text-[#79543B] bg-[#E7B957]/20 border border-[#E7B957]/50 px-4 py-1.5 rounded-full inline-block">
              Official Product Tagline: &ldquo;{OFFICIAL_TAGLINE}&rdquo;
            </span>
          </div>
        </div>

        {/* Full-width editorial hero image with glass overlay */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white/40">
          <div className="relative aspect-16/9 sm:aspect-21/9 w-full">
            <Image
              src="/images/story/hero-composition.jpg"
              alt="Rural Indian women entrepreneurs working in agricultural fields and composting units"
              fill
              priority
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#174C35]/80 via-transparent to-black/20" />
            
            <div className="absolute bottom-6 left-6 right-6 sm:bottom-10 sm:left-10 sm:right-10 text-white max-w-2xl bg-black/40 backdrop-blur-md p-6 rounded-2xl border border-white/20">
              <span className="text-xs font-mono uppercase tracking-widest text-[#E7B957] font-bold">
                From Soil to Village Prosperity
              </span>
              <h2 className="font-heading text-xl sm:text-2xl font-bold text-white mt-1">
                Connecting Village Feedstocks, Women&apos;s Collective Energy, and Market Demand
              </h2>
            </div>
          </div>
        </div>

        {/* THE THREE CHAPTERS */}
        <div className="space-y-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#176B48]">
              The Three Chapters
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#174C35]">
              How Dharti Saheli Was Conceived
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            
            {/* Chapter 1: The Challenge */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/90 shadow-lg space-y-4 flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300">
              <div>
                <span className="font-mono text-xs font-extrabold text-[#79543B] bg-[#79543B]/10 px-3 py-1 rounded-full uppercase">
                  Chapter 01
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#174C35] mt-4 mb-3">
                  THE CHALLENGE
                </h3>
                <p className="text-sm text-[#174C35]/85 leading-relaxed">
                  Rural women are the backbone of Indian agriculture and household economies, yet they often lack stable, remunerative enterprise opportunities that offer dignity and true financial control.
                </p>
                <p className="text-xs text-[#79543B] mt-3 leading-relaxed">
                  Simultaneously, unmanaged bovine dung and agricultural market waste lead to unhygienic village environments, while intensive farming severely depletes topsoil organic carbon.
                </p>
              </div>
              <div className="pt-4 border-t border-[#A8C5A0]/20 text-xs font-bold text-[#79543B]">
                Two connected challenges. One clear opportunity.
              </div>
            </div>

            {/* Chapter 2: The Idea */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border-2 border-[#176B48]/30 shadow-xl space-y-4 flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300">
              <div>
                <span className="font-mono text-xs font-extrabold text-[#176B48] bg-[#D9EBDD] px-3 py-1 rounded-full uppercase">
                  Chapter 02
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#174C35] mt-4 mb-3">
                  THE IDEA
                </h3>
                <p className="text-sm text-[#174C35]/85 leading-relaxed">
                  Dharti Saheli connects these two challenges into a circular solution: convert segregated biodegradable waste into laboratory-tested organic manure and vermicompost through rural Self-Help Groups (SHGs).
                </p>
                <p className="text-xs text-[#174C35]/80 mt-3 leading-relaxed">
                  Not a charitable donation scheme, but a market-linked social enterprise where women act as producers, quality supervisors, and co-owners with commercial anchor offtake.
                </p>
              </div>
              <div className="pt-4 border-t border-[#A8C5A0]/20 text-xs font-bold text-[#176B48]">
                Feedstock + Women-led processing + Real paying buyers.
              </div>
            </div>

            {/* Chapter 3: The Vision */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/90 shadow-lg space-y-4 flex flex-col justify-between hover:-translate-y-1.5 transition-transform duration-300">
              <div>
                <span className="font-mono text-xs font-extrabold text-[#E7B957] bg-[#E7B957]/20 px-3 py-1 rounded-full uppercase">
                  Chapter 03
                </span>
                <h3 className="font-heading text-2xl font-bold text-[#174C35] mt-4 mb-3">
                  THE VISION
                </h3>
                <p className="text-sm text-[#174C35]/85 leading-relaxed">
                  Build a federated, scalable women-led enterprise that transforms rural clusters into green economic hubs, delivering dependable, batch-tested soil inputs to farmers, nurseries, and urban landscapers.
                </p>
                <p className="text-xs text-[#79543B] mt-3 leading-relaxed">
                  By demonstrating unit viability in an initial 90-day pilot, the model creates a credible path from catalytic support to fully self-sustaining recurring sales.
                </p>
              </div>
              <div className="pt-4 border-t border-[#A8C5A0]/20 text-xs font-bold text-[#174C35]">
                Sustainable villages anchored in ecological regeneration.
              </div>
            </div>

          </div>
        </div>

        {/* MISSION, VISION & CORE VALUES */}
        <div className="bg-gradient-to-br from-[#174C35] to-[#113827] text-white rounded-3xl p-8 sm:p-14 shadow-2xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#E7B957]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#E7B957] text-[#174C35] flex items-center justify-center">
                    <Target className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Our Mission</h3>
                </div>
                <p className="text-sm text-[#D9EBDD]/90 leading-relaxed">
                  To turn village-level biodegradable waste into biological soil wealth, while empowering rural women through Self-Help Groups with technical skills, leadership ownership, and stable enterprise income.
                </p>
              </div>

              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#A8C5A0] text-[#174C35] flex items-center justify-center">
                    <TrendingUp className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-white">Our Vision</h3>
                </div>
                <p className="text-sm text-[#D9EBDD]/90 leading-relaxed">
                  To establish Dharti Saheli as India’s most trusted, transparent, and village-traceable organic soil brand—federating women-led producer collectives across agricultural regions.
                </p>
              </div>

            </div>

            {/* Core Values */}
            <div className="pt-8 border-t border-white/15 space-y-4">
              <h4 className="text-xs font-bold uppercase tracking-widest text-[#E7B957] text-center">
                Our Non-Negotiable Core Values
              </h4>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-1">
                  <h5 className="font-bold text-base text-white">Scientific Integrity</h5>
                  <p className="text-xs text-[#A8C5A0]">
                    Only lab-tested batches meeting FCO standards. No unsupported or sensational organic claims.
                  </p>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-1">
                  <h5 className="font-bold text-base text-white">Equitable Co-Ownership</h5>
                  <p className="text-xs text-[#A8C5A0]">
                    Women participate in unit management, surplus allocation, and governance decisions.
                  </p>
                </div>
                <div className="bg-white/10 p-5 rounded-2xl border border-white/10 space-y-1">
                  <h5 className="font-bold text-base text-white">Transparent Traceability</h5>
                  <p className="text-xs text-[#A8C5A0]">
                    Every bag carries a batch QR code showing origin SHG, harvest date, and nutrient analysis.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* BUSINESS MODEL & COMMERCIAL VIABILITY (PPT Slides 8, 23 & 24) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#176B48]">
              Commercial Viability
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#174C35]">
              How the Enterprise Earns & Sustains
            </h2>
            <p className="text-xs text-[#79543B]">
              Unit economics derived directly from the Dharti Saheli commercial blueprint (Slide 23 & 24).
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white/90 shadow-md space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B48] bg-[#D9EBDD] px-2.5 py-0.5 rounded-full">
                Revenue Stream 01
              </span>
              <h3 className="font-heading text-lg font-bold text-[#174C35]">Product Sales</h3>
              <p className="text-xs text-[#79543B] leading-relaxed">
                Sale of packaged vermicompost (5kg, 10kg, 25kg) and bulk organic compost to commercial nurseries, FPOs, landscaping contractors, and retail gardeners.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white/90 shadow-md space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B48] bg-[#D9EBDD] px-2.5 py-0.5 rounded-full">
                Revenue Stream 02
              </span>
              <h3 className="font-heading text-lg font-bold text-[#174C35]">Service Contracts</h3>
              <p className="text-xs text-[#79543B] leading-relaxed">
                Where viable, charging institutions, campuses, and municipal wards for scheduled organic waste collection, segregation, and processing services.
              </p>
            </div>

            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white/90 shadow-md space-y-3">
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B48] bg-[#D9EBDD] px-2.5 py-0.5 rounded-full">
                Revenue Stream 03
              </span>
              <h3 className="font-heading text-lg font-bold text-[#174C35]">Gardening Services</h3>
              <p className="text-xs text-[#79543B] leading-relaxed">
                At later expansion stages, offering urban soil preparation, balcony plantation setups, and institutional garden maintenance services.
              </p>
            </div>

          </div>

          {/* Unit Economics Callout Box */}
          <div className="bg-[#F8F6EC] border-2 border-[#176B48]/30 rounded-3xl p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
            <div className="space-y-1 text-center md:text-left">
              <span className="text-xs font-mono font-bold text-[#176B48] uppercase tracking-wider">
                Illustrative Unit Economics (10 kg Vermicompost Bag)
              </span>
              <h4 className="font-heading text-2xl font-bold text-[#174C35]">
                ₹120 Selling Price vs ₹58 Variable Cost = ₹62 Contribution (52% Margin)
              </h4>
              <p className="text-xs text-[#79543B] max-w-xl">
                Variable cost breakdown: Raw material ₹12 • SHG labor ₹20 • Packaging ₹10 • Testing allocation ₹4 • Clustered delivery ₹12. Break-even volume ≈ 565 bags/month.
              </p>
            </div>

            <Link
              href="/bulk-enquiry"
              className="bg-[#174C35] hover:bg-[#176B48] text-white text-xs font-bold px-6 py-3.5 rounded-full shadow-md transition-all shrink-0"
            >
              Request Commercial Terms
            </Link>
          </div>
        </div>

        {/* CTA to Explore Products & Women */}
        <div className="text-center space-y-4 pt-4">
          <h3 className="font-heading text-2xl font-bold text-[#174C35]">
            Ready to Support Sustainable Agriculture?
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/shop"
              className="bg-[#176B48] hover:bg-[#174C35] text-white px-8 py-3.5 rounded-full font-bold text-xs shadow-md transition-all"
            >
              Shop Our Soil Solutions
            </Link>
            <Link
              href="/our-women"
              className="bg-white hover:bg-[#F8F6EC] text-[#174C35] border border-[#A8C5A0]/60 px-7 py-3.5 rounded-full font-bold text-xs transition-colors shadow-xs"
            >
              Meet Our Women Leaders
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}

