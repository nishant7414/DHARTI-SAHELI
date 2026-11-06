'use client';

import React from 'react';
import Image from 'next/image';
import { Sprout, Users, Recycle, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export const IntroSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#F8F6EC] via-white/50 to-[#F8F6EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#176B48] bg-[#D9EBDD] px-3.5 py-1 rounded-full inline-block">
            Brand Philosophy & Purpose
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35] tracking-tight">
            A LITTLE MORE THAN JUST COMPOST.
          </h2>
          <p className="text-base sm:text-lg text-[#174C35]/80 leading-relaxed">
            At Dharti Saheli, we believe healthier soil and stronger communities grow together. We transform suitable biodegradable waste into valuable soil products while creating opportunities for rural women to become independent entrepreneurs.
          </p>
        </div>

        {/* Premium Split Screen Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          {/* Left: Large Photo */}
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border-2 border-white bg-white/40 p-3">
              <div className="relative aspect-4/3 sm:aspect-16/11 rounded-2xl overflow-hidden">
                <Image
                  src="/images/story/women-production.jpg"
                  alt="Rural Indian women participating in vermicomposting production and soil testing"
                  fill
                  className="object-cover transition-transform duration-700 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#174C35]/70 via-transparent to-transparent" />
                
                {/* Floating caption on the image */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white text-xs">
                  <div className="flex items-center justify-between text-[#174C35]">
                    <span className="font-bold">Pilot Production Cluster</span>
                    <span className="text-[11px] font-semibold text-[#176B48]">Self-Help Group Unit</span>
                  </div>
                  <p className="text-[#79543B] text-[11px] mt-0.5">
                    Women trained in scientific composting, quality monitoring, sieving, and batch records.
                  </p>
                </div>
              </div>
            </div>

            {/* Decorative organic leaf backdrop */}
            <div className="absolute -bottom-8 -right-8 w-48 h-48 bg-[#D9EBDD] rounded-full blur-2xl -z-10 pointer-events-none" />
          </div>

          {/* Right: Three Glassmorphism Cards */}
          <div className="lg:col-span-6 space-y-5">
            
            {/* Card 1: Healthy Soil */}
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(23,76,53,0.06)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#D9EBDD] flex items-center justify-center text-[#176B48] group-hover:bg-[#176B48] group-hover:text-white transition-colors shrink-0 shadow-xs">
                  <Sprout className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#79543B]">
                    01 • Core Foundation
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#174C35]">
                    HEALTHY SOIL
                  </h3>
                  <p className="text-sm text-[#174C35]/80 leading-relaxed">
                    Supporting healthier soil through carefully processed organic inputs. Our earthworm-based compost replenishes vital microflora, moisture-holding capacity, and natural aeration.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 2: Women's Entrepreneurship */}
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(23,76,53,0.06)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#E7B957]/20 flex items-center justify-center text-[#79543B] group-hover:bg-[#E7B957] group-hover:text-[#174C35] transition-colors shrink-0 shadow-xs">
                  <Users className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#79543B]">
                    02 • Social Impact
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#174C35]">
                    WOMEN&apos;S ENTREPRENEURSHIP
                  </h3>
                  <p className="text-sm text-[#174C35]/80 leading-relaxed">
                    Building opportunities for rural women to produce, manage and earn. SHG members become co-owners, quality supervisors, and sales leaders with transparent profit-sharing.
                  </p>
                </div>
              </div>
            </div>

            {/* Card 3: Circular Economy */}
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-white/80 shadow-[0_8px_30px_rgb(23,76,53,0.06)] hover:shadow-lg transition-all duration-300 hover:-translate-y-1 group">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-2xl bg-[#A8C5A0]/30 flex items-center justify-center text-[#174C35] group-hover:bg-[#174C35] group-hover:text-[#E7B957] transition-colors shrink-0 shadow-xs">
                  <Recycle className="w-6 h-6" />
                </div>
                <div className="space-y-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#79543B]">
                    03 • Environmental Cycle
                  </span>
                  <h3 className="font-heading text-xl font-bold text-[#174C35]">
                    CIRCULAR ECONOMY
                  </h3>
                  <p className="text-sm text-[#174C35]/80 leading-relaxed">
                    Transforming suitable local biodegradable resources into valuable products. We convert segregated cow dung, mandi waste, and dry leaves into high-grade organic wealth.
                  </p>
                </div>
              </div>
            </div>

            {/* Link to Story */}
            <div className="pt-2">
              <Link
                href="/our-story"
                className="inline-flex items-center gap-2 text-sm font-bold text-[#176B48] hover:text-[#174C35] transition-colors group"
              >
                <span>Read our complete business model & journey</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

