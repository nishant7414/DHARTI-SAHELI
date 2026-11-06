'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Quote, Sparkles, AlertCircle } from 'lucide-react';

interface Testimonial {
  id: number;
  segment: string;
  quote: string;
  expectedOutcome: string;
  authorTitle: string;
  location: string;
  status: 'DEVELOPMENT PLACEHOLDER' | 'PILOT TRIAL SPECIFICATION';
}

const TESTIMONIALS: Testimonial[] = [
  {
    id: 1,
    segment: 'Commercial Horticulture Nursery',
    quote: 'Uniform moisture content and fine 4mm screening make this vermicompost easy to blend into seedling plugs without clogging nursery sprayers.',
    expectedOutcome: 'Evaluating root density and seedling establishment on tomato and marigold plugs over 45 days.',
    authorTitle: 'Lead Propagator (Pilot Trial Partner)',
    location: 'District Nursery Cluster, MP',
    status: 'DEVELOPMENT PLACEHOLDER',
  },
  {
    id: 2,
    segment: 'Farmer Producer Company (FPO)',
    quote: 'Our farmers need consistent organic carbon sources that arrive with a verifiable lab test report rather than unlabelled open truckloads.',
    expectedOutcome: 'Field demonstration trials on 5-acre soybean and wheat plots to compare soil porosity and yield.',
    authorTitle: 'FPO Director (Sample Trial Evaluation)',
    location: 'Betul Agro Cluster, MP',
    status: 'DEVELOPMENT PLACEHOLDER',
  },
  {
    id: 3,
    segment: 'Urban Landscape & Garden Contractor',
    quote: 'Finding odorless, high-quality organic compost packaged in convenient 25kg sacks with batch QR traceability simplifies our corporate park maintenance.',
    expectedOutcome: 'Trial installation on lawn turf and perennial ornamental borders.',
    authorTitle: 'Landscape Maintenance Manager (Sample Request)',
    location: 'Central India Region',
    status: 'DEVELOPMENT PLACEHOLDER',
  },
];

export const TestimonialsSection: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS.length - 1 : prev - 1));
  };

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS.length - 1 ? 0 : prev + 1));
  };

  const active = TESTIMONIALS[currentIndex];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white/70 to-[#F8F6EC]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#176B48] bg-[#D9EBDD] px-3.5 py-1 rounded-full inline-block">
            Buyer Trust & Pilot Trials
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35] tracking-tight">
            GROWING TRUST, ONE RELATIONSHIP AT A TIME.
          </h2>
          <p className="text-base sm:text-lg text-[#174C35]/80">
            Structured feedback from sample trials and demonstration plots guiding our commercial launch.
          </p>
        </div>

        {/* Development Disclosure Banner (Strictly adhering to prompt guidelines) */}
        <div className="max-w-2xl mx-auto mb-8 bg-[#E7B957]/15 border border-[#E7B957]/60 rounded-xl p-3 flex items-center justify-center gap-2 text-center text-xs text-[#79543B]">
          <AlertCircle className="w-4 h-4 text-[#79543B] shrink-0" />
          <span>
            <strong>Development Notice:</strong> Testimonials below represent structured pilot trial expectations and commercial feedback templates. Verified customer reviews will replace placeholders following pilot audit.
          </span>
        </div>

        {/* Carousel Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Main Glass Card */}
          <div className="bg-white/85 backdrop-blur-2xl rounded-3xl p-8 sm:p-12 border-2 border-white shadow-[0_20px_50px_rgba(23,76,53,0.08)] relative overflow-hidden transition-all duration-300">
            
            <div className="flex items-center justify-between mb-6">
              <span className="text-[10px] font-black uppercase tracking-wider bg-[#176B48] text-white px-3 py-1 rounded-full">
                {active.status}
              </span>
              <span className="text-xs font-bold text-[#79543B] font-mono">
                {active.segment}
              </span>
            </div>

            <Quote className="w-12 h-12 text-[#A8C5A0]/40 mb-4" />

            <blockquote className="font-heading text-xl sm:text-2xl lg:text-3xl font-bold text-[#174C35] leading-snug mb-6">
              &ldquo;{active.quote}&rdquo;
            </blockquote>

            <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 mb-6 text-xs text-[#79543B]">
              <strong className="text-[#174C35] block mb-1">Target Pilot Validation Metric:</strong>
              <p>{active.expectedOutcome}</p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-4 border-t border-[#A8C5A0]/20">
              <div>
                <h4 className="font-bold text-sm text-[#174C35]">
                  {active.authorTitle}
                </h4>
                <p className="text-xs text-[#79543B]">{active.location}</p>
              </div>

              {/* Indicator Dots */}
              <div className="flex items-center gap-2">
                {TESTIMONIALS.map((t, idx) => (
                  <button
                    key={t.id}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-2.5 rounded-full transition-all ${
                      currentIndex === idx ? 'w-8 bg-[#176B48]' : 'w-2.5 bg-[#A8C5A0]/50'
                    }`}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-between mt-6 px-2">
            <button
              onClick={prevSlide}
              aria-label="Previous testimonial"
              className="w-11 h-11 rounded-full bg-white shadow-md hover:bg-[#174C35] hover:text-white text-[#174C35] border border-[#A8C5A0]/30 flex items-center justify-center transition-all hover:scale-105"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <span className="text-xs font-bold text-[#79543B] font-mono">
              0{currentIndex + 1} / 0{TESTIMONIALS.length}
            </span>
            <button
              onClick={nextSlide}
              aria-label="Next testimonial"
              className="w-11 h-11 rounded-full bg-white shadow-md hover:bg-[#174C35] hover:text-white text-[#174C35] border border-[#A8C5A0]/30 flex items-center justify-center transition-all hover:scale-105"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};

