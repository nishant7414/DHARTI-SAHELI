'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { 
  Users, 
  Sprout, 
  Truck, 
  ShieldCheck, 
  PhoneCall, 
  ArrowRight,
  Sparkles,
  Award
} from 'lucide-react';
import { WOMEN_ENTERPRISE_ROLES } from '@/data/womenRoles';

export const OurWomenSection: React.FC = () => {
  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#F8F6EC] via-white/60 to-[#F8F6EC]">
      {/* Background soft circular blur */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#176B48] bg-[#D9EBDD] px-3.5 py-1 rounded-full inline-block">
            Women-Led Enterprise Structure
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35] tracking-tight">
            BEHIND EVERY PRODUCT IS A STORY OF STRENGTH.
          </h2>
          <p className="text-base sm:text-lg text-[#174C35]/80">
            Dharti Saheli is built around rural women who are not just participants in production, but entrepreneurs, decision-makers and leaders.
          </p>
        </div>

        {/* Image Collage & Leadership Statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center mb-16">
          
          {/* Asymmetrical Image Collage */}
          <div className="lg:col-span-7 grid grid-cols-2 gap-4">
            <div className="space-y-4">
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="/images/story/hero-composition.jpg"
                  alt="Rural women collective managing organic vermicompost harvesting"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#174C35]/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-[#174C35] px-2.5 py-1 rounded-lg border border-white/20 shadow-md">
                  Production & Curing
                </span>
              </div>
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/story/soil-hands.jpg"
                  alt="Hands holding rich vermicompost soil"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#174C35]/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-[#174C35] px-2.5 py-1 rounded-lg border border-white/20 shadow-md">
                  Quality Screening
                </span>
              </div>
            </div>

            <div className="space-y-4 pt-8">
              <div className="relative aspect-square rounded-3xl overflow-hidden shadow-lg border-2 border-white">
                <Image
                  src="/images/story/women-meeting.jpg"
                  alt="Rural SHG women committee meeting and discussing business bookkeeping"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#174C35]/60 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-[#174C35] px-2.5 py-1 rounded-lg border border-white/20 shadow-md">
                  SHG Governance & Books
                </span>
              </div>
              <div className="relative aspect-4/5 rounded-3xl overflow-hidden shadow-xl border-2 border-white">
                <Image
                  src="/images/story/organic-farm.jpg"
                  alt="Lush green organic farm nourished with Dharti Saheli vermicompost"
                  fill
                  className="object-cover hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#174C35]/70 via-transparent to-transparent" />
                <span className="absolute bottom-3 left-3 text-[11px] font-bold text-white bg-[#174C35] px-2.5 py-1 rounded-lg border border-white/20 shadow-md">
                  Healthy Crop Harvest
                </span>
              </div>
            </div>
          </div>

          {/* Main Statement Glass Panel */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-8 border-2 border-white shadow-xl space-y-5 relative">
              <div className="w-12 h-12 rounded-2xl bg-[#E7B957]/30 flex items-center justify-center text-[#79543B]">
                <Award className="w-6 h-6 text-[#174C35]" />
              </div>

              <div className="space-y-3">
                <span className="text-[11px] font-extrabold uppercase tracking-widest text-[#176B48]">
                  Core Design Principle
                </span>
                <blockquote className="font-heading text-xl sm:text-2xl font-bold text-[#174C35] leading-snug">
                  &ldquo;Empowerment is not just about creating employment. It is about giving women ownership, leadership and a meaningful share in the value they create.&rdquo;
                </blockquote>
              </div>

              <p className="text-xs sm:text-sm text-[#174C35]/80 leading-relaxed">
                Rather than treating women as low-paid labor in a top-down company, Dharti Saheli structures village Self-Help Groups into co-owners of their production clusters. From gate inspection to commercial buyer negotiations, women lead every link in the value chain.
              </p>

              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <Link
                  href="/our-women"
                  className="inline-flex items-center justify-center gap-2 bg-[#174C35] hover:bg-[#176B48] text-white px-6 py-3.5 rounded-full font-bold text-xs shadow-md transition-all hover:scale-105"
                >
                  <span>MEET OUR WOMEN</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
                <Link
                  href="/our-story"
                  className="inline-flex items-center justify-center gap-2 bg-[#F8F6EC] hover:bg-white text-[#174C35] px-5 py-3.5 rounded-full font-bold text-xs border border-[#A8C5A0]/40 transition-colors"
                >
                  <span>View SHG Model</span>
                </Link>
              </div>

              {/* Disclaimer Rule from Prompt */}
              <p className="text-[10px] text-[#79543B] italic pt-2 border-t border-[#A8C5A0]/20">
                Representative photography used during pilot cluster deployment. Actual member stories will be published quarterly upon verification.
              </p>
            </div>
          </div>

        </div>

        {/* Four Role Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WOMEN_ENTERPRISE_ROLES.map((role) => {
            const iconMap: Record<string, React.ElementType> = {
              Sprout,
              Truck,
              ShieldCheck,
              Users: PhoneCall
            };
            const Icon = iconMap[role.icon] || Users;

            return (
              <div
                key={role.id}
                className="bg-white/80 backdrop-blur-xl p-6 rounded-3xl border border-white/90 shadow-[0_10px_25px_-5px_rgba(23,76,53,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#D9EBDD] flex items-center justify-center text-[#176B48] mb-4 shadow-xs">
                    <Icon className="w-6 h-6" />
                  </div>

                  <span className="text-[10px] font-bold uppercase tracking-wider text-[#79543B] block">
                    {role.hindiTitle}
                  </span>

                  <h3 className="font-heading text-lg font-bold text-[#174C35] mb-2">
                    {role.title}
                  </h3>

                  <p className="text-xs text-[#174C35]/80 mb-4 leading-relaxed">
                    {role.scope}
                  </p>

                  <div className="space-y-1.5 text-[11px] text-[#79543B] border-t border-[#A8C5A0]/20 pt-3">
                    <strong className="text-[#174C35] block text-[10px] uppercase font-bold">Key Responsibilities:</strong>
                    <ul className="space-y-1">
                      {role.responsibilities.slice(0, 2).map((resp, i) => (
                        <li key={i} className="flex items-start gap-1.5 leading-snug">
                          <span className="text-[#176B48] font-bold shrink-0">•</span>
                          <span>{resp}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-[#A8C5A0]/20 flex items-center justify-between text-[10px] font-bold text-[#176B48]">
                  <span>SHG LEADERSHIP ROLE</span>
                  <Sparkles className="w-3.5 h-3.5 text-[#E7B957]" />
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

