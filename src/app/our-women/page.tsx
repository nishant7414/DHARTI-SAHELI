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
  Award, 
  BookOpen, 
  GraduationCap, 
  HeartHandshake,
  CheckCircle2
} from 'lucide-react';
import { WOMEN_ENTERPRISE_ROLES, SHG_CASE_STUDIES } from '@/data/womenRoles';
import { OFFICIAL_TAGLINE } from '@/data/products';

export default function OurWomenPage() {
  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Page Hero */}
        <div className="text-center max-w-4xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#E7B957]/20 border border-[#E7B957]/50 text-[#174C35] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E7B957]" />
            Women-Led Enterprise Structure
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl lg:text-6xl font-bold text-[#174C35] tracking-tight leading-[1.15]">
            BEHIND EVERY PRODUCT IS A STORY OF STRENGTH.
          </h1>

          <p className="text-base sm:text-lg text-[#174C35]/85 max-w-2xl mx-auto leading-relaxed">
            Dharti Saheli is built around rural women who are not just participants in production, but entrepreneurs, decision-makers and leaders.
          </p>

          <div className="pt-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#79543B] bg-white/80 border border-[#E7B957]/60 px-4 py-1.5 rounded-full inline-block backdrop-blur-md shadow-xs">
              Official Tagline: &ldquo;{OFFICIAL_TAGLINE}&rdquo;
            </span>
          </div>
        </div>

        {/* Core Philosophy Banner */}
        <div className="bg-gradient-to-r from-[#174C35] to-[#176B48] text-white rounded-3xl p-8 sm:p-12 shadow-2xl relative overflow-hidden border border-white/20">
          <div className="max-w-3xl mx-auto text-center space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#E7B957] font-bold">
              Our Core Design Principle
            </span>
            <blockquote className="font-heading text-2xl sm:text-3xl font-bold text-white leading-snug">
              &ldquo;Empowerment is not just about creating employment. It is about giving women ownership, leadership and a meaningful share in the value they create.&rdquo;
            </blockquote>
            <p className="text-xs sm:text-sm text-[#D9EBDD] pt-2 max-w-2xl mx-auto leading-relaxed">
              We design every cluster unit so rural women control the operating budget, supervise scientific moisture meters, issue signed dispatch challans, and share in annual net surplus dividends.
            </p>
          </div>
        </div>

        {/* Operating Structure & 4 Key Roles */}
        <div className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#176B48]">
              Operating Structure (PPT Slide 9)
            </span>
            <h2 className="font-heading text-3xl sm:text-4xl font-bold text-[#174C35]">
              Four Pillars of Enterprise Leadership
            </h2>
            <p className="text-xs text-[#79543B]">
              Every production cluster operates with four specialized roles filled by Self-Help Group members.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {WOMEN_ENTERPRISE_ROLES.map((role) => {
              const iconMap: Record<string, React.ElementType> = {
                Sprout,
                Truck,
                ShieldCheck,
                Users: PhoneCall,
              };
              const Icon = iconMap[role.icon] || Users;

              return (
                <div
                  key={role.id}
                  className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/90 shadow-lg space-y-6 flex flex-col justify-between hover:shadow-xl transition-all duration-300"
                >
                  <div className="space-y-4">
                    <div className="flex items-center justify-between">
                      <div className="w-14 h-14 rounded-2xl bg-[#D9EBDD] flex items-center justify-center text-[#176B48] shadow-sm">
                        <Icon className="w-7 h-7" />
                      </div>
                      <span className="text-xs font-bold font-mono text-[#79543B] bg-[#F8F6EC] px-3 py-1 rounded-full border border-[#A8C5A0]/30">
                        {role.hindiTitle}
                      </span>
                    </div>

                    <div>
                      <h3 className="font-heading text-2xl font-bold text-[#174C35]">
                        {role.title}
                      </h3>
                      <p className="text-xs font-semibold text-[#176B48] mt-1">
                        {role.scope}
                      </p>
                    </div>

                    <div className="space-y-2 pt-2">
                      <strong className="text-[11px] uppercase font-bold text-[#79543B] block">
                        Core Operational Responsibilities:
                      </strong>
                      <ul className="space-y-2 text-xs text-[#174C35]">
                        {role.responsibilities.map((r, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <CheckCircle2 className="w-4 h-4 text-[#176B48] shrink-0 mt-0.5" />
                            <span>{r}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1.5 text-xs">
                      <strong className="text-[10px] font-bold uppercase text-[#79543B] block">
                        Technical Training & Capability:
                      </strong>
                      <div className="flex flex-wrap gap-1.5">
                        {role.keyCompetencies.map((comp, idx) => (
                          <span
                            key={idx}
                            className="bg-white px-2.5 py-1 rounded-lg border border-[#A8C5A0]/30 text-[11px] text-[#174C35] font-medium"
                          >
                            {comp}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  <div className="pt-4 border-t border-[#A8C5A0]/20 flex items-center justify-between text-xs text-[#79543B]">
                    <span>SHG Federation Certified</span>
                    <span className="font-bold text-[#176B48]">Full Co-Ownership</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 90-Day Pilot Onboarding Roadmap (PPT Slide 10) */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/90 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#176B48]">
              Implementation Roadmap (PPT Slide 10)
            </span>
            <h3 className="font-heading text-3xl font-bold text-[#174C35]">
              The 90-Day Onboarding & Scale Gate
            </h3>
            <p className="text-xs text-[#79543B]">
              Scale only when three conditions are proven: reliable feedstock • compliant product quality • paying customers.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-[#F8F6EC] p-6 rounded-2xl border border-[#A8C5A0]/30 space-y-2">
              <span className="font-mono text-xs font-black text-[#176B48]">DAYS 1–15</span>
              <h4 className="font-heading font-bold text-base text-[#174C35]">VALIDATE</h4>
              <p className="text-xs text-[#79543B] leading-relaxed">
                Map 2–3 SHGs, raw material sources (gaushalas/mandis), transport routes, and establish benchmark willingness-to-pay with nearby nurseries.
              </p>
            </div>

            <div className="bg-[#F8F6EC] p-6 rounded-2xl border border-[#A8C5A0]/30 space-y-2">
              <span className="font-mono text-xs font-black text-[#176B48]">DAYS 16–30</span>
              <h4 className="font-heading font-bold text-base text-[#174C35]">SET UP</h4>
              <p className="text-xs text-[#79543B] leading-relaxed">
                Train 15–20 women in scientific composting and safety PPE. Establish covered shed, beds, rotary sieve, and sign raw material supply MoUs.
              </p>
            </div>

            <div className="bg-[#F8F6EC] p-6 rounded-2xl border border-[#A8C5A0]/30 space-y-2">
              <span className="font-mono text-xs font-black text-[#176B48]">DAYS 31–60</span>
              <h4 className="font-heading font-bold text-base text-[#174C35]">PRODUCE</h4>
              <p className="text-xs text-[#79543B] leading-relaxed">
                Run initial pilot batches, monitor temperature/moisture, dispatch composite samples to testing lab, and record actual variable cost per 10kg bag.
              </p>
            </div>

            <div className="bg-[#F8F6EC] p-6 rounded-2xl border border-[#A8C5A0]/30 space-y-2">
              <span className="font-mono text-xs font-black text-[#176B48]">DAYS 61–90</span>
              <h4 className="font-heading font-bold text-base text-[#174C35]">SELL & LEARN</h4>
              <p className="text-xs text-[#79543B] leading-relaxed">
                Execute sample trials with 3 institutional buyers, win repeat purchase orders, distribute transparent earnings to women, and review viability.
              </p>
            </div>
          </div>
        </div>

        {/* Real Case Studies & Inspirations (PPT Slide 3) */}
        <div className="space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#176B48]">
              Inspirations & Precedents (PPT Slide 3)
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#174C35]">
              Proven Indian Case Studies in Women-Led Bio-Enterprises
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {SHG_CASE_STUDIES.map((study, idx) => (
              <div
                key={idx}
                className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/90 shadow-md space-y-3 flex flex-col justify-between"
              >
                <div className="space-y-2">
                  <span className="text-[10px] font-bold text-[#79543B] uppercase tracking-wider bg-[#E7B957]/20 px-2.5 py-0.5 rounded-full inline-block">
                    {study.highlight}
                  </span>
                  <h3 className="font-heading text-lg font-bold text-[#174C35]">
                    {study.title}
                  </h3>
                  <p className="text-xs text-[#174C35]/80 leading-relaxed">
                    {study.description}
                  </p>
                </div>
                <div className="pt-3 border-t border-[#A8C5A0]/20 text-[11px] text-[#176B48] font-semibold">
                  Key Takeaway: {study.learning}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Compliance Notice (Strictly complying with prompt rules) */}
        <div className="bg-[#F8F6EC] border border-[#A8C5A0]/40 rounded-2xl p-4 text-center text-xs text-[#79543B] max-w-3xl mx-auto">
          <strong>Transparency Notice:</strong> Representative imagery and structured roles reflect the operational framework documented in the Dharti Saheli business presentation. As pilot units progress, individual member profiles will be featured following verified consent and social audit.
        </div>

      </div>
    </div>
  );
}

