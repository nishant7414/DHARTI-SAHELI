'use client';

import React, { useState } from 'react';
import { 
  Truck, 
  Filter, 
  Sprout, 
  TestTube2, 
  PackageCheck, 
  Send,
  AlertCircle,
  CheckCircle2,
  Clock
} from 'lucide-react';

export const WasteToWealthSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      number: '01',
      title: 'COLLECT',
      summary: 'Collect suitable segregated biodegradable materials.',
      duration: 'Day 0',
      icon: Truck,
      details: 'Partner with local gaushalas, dairy farms, and vegetable mandi yards. Village collection coordinators aggregate, weigh, and log incoming organic biomass.',
    },
    {
      number: '02',
      title: 'SORT & PREPARE',
      summary: 'Remove contaminants and prepare materials.',
      duration: '≈ 15–20 Days',
      icon: Filter,
      details: 'Strict gate screening rejects plastics, glass, and chemicals. Dung and green residues undergo thermophilic pre-decomposition so fresh waste is never fed directly to earthworms.',
    },
    {
      number: '03',
      title: 'COMPOST',
      summary: 'Managed composting or vermicomposting.',
      duration: '≈ 45–60 Days',
      icon: Sprout,
      details: 'Eisenia fetida earthworms in shaded brick/silpaulin beds convert biomass into biologically rich castings. Regular moisture monitoring keeps beds in the optimal 65–70% range.',
    },
    {
      number: '04',
      title: 'TEST & SIEVE',
      summary: 'Check maturity, moisture and product quality.',
      duration: '≈ 5–7 Days',
      icon: TestTube2,
      details: 'Harvested material is dried to target moisture (15–25%) and screened through a 4mm rotary sieve. Samples undergo composite laboratory testing for pH, carbon, and NPK.',
    },
    {
      number: '05',
      title: 'PACKAGE',
      summary: 'Weigh, label and batch-track.',
      duration: 'Ongoing',
      icon: PackageCheck,
      details: 'Compost is weighed into 5kg, 10kg, 25kg retail bags or 50kg commercial sacks. Every bag receives a unique traceable batch QR code and FCO declaration.',
    },
    {
      number: '06',
      title: 'DELIVER',
      summary: 'Supply customers and collect feedback.',
      duration: 'Route Clustered',
      icon: Send,
      details: 'Clustered route logistics supply nurseries, farms, landscaping contractors, and retail gardeners. Structured 48-hour follow-up records customer satisfaction.',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-white/70 via-[#D9EBDD]/20 to-[#F8F6EC]" id="process">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-xs font-bold uppercase tracking-widest text-[#176B48] bg-white/80 border border-[#A8C5A0]/50 px-3.5 py-1 rounded-full inline-block backdrop-blur-md shadow-xs">
            Disciplined 6-Stage Process
          </span>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35] tracking-tight">
            FROM LOCAL RESOURCES TO VALUABLE SOIL SOLUTIONS.
          </h2>
          <p className="text-base sm:text-lg text-[#174C35]/80">
            A 75–90 day scientific lifecycle that transforms neglected rural biomass into premium soil wealth.
          </p>
        </div>

        {/* Desktop Connected Horizontal Timeline */}
        <div className="hidden lg:block relative mb-12">
          {/* Animated Connecting Line */}
          <div className="absolute top-1/2 left-8 right-8 -translate-y-6 h-1 bg-gradient-to-r from-[#174C35] via-[#176B48] to-[#E7B957] rounded-full z-0 opacity-40" />

          <div className="grid grid-cols-6 gap-3 relative z-10">
            {steps.map((step, idx) => {
              const Icon = step.icon;
              const isActive = activeStep === idx;
              return (
                <div
                  key={step.number}
                  onClick={() => setActiveStep(idx)}
                  className={`cursor-pointer group text-center transition-all duration-300 p-3 rounded-2xl ${
                    isActive
                      ? 'bg-white/95 backdrop-blur-xl shadow-xl -translate-y-2 border-2 border-[#176B48]'
                      : 'bg-white/60 backdrop-blur-md hover:bg-white/90 border border-white/80 shadow-xs'
                  }`}
                >
                  {/* Circular Numbered Indicator */}
                  <div className="relative mx-auto mb-3">
                    <div
                      className={`w-14 h-14 rounded-2xl mx-auto flex items-center justify-center transition-all duration-300 ${
                        isActive
                          ? 'bg-gradient-to-br from-[#174C35] to-[#176B48] text-[#E7B957] shadow-lg scale-110'
                          : 'bg-[#D9EBDD] text-[#174C35] group-hover:bg-[#176B48] group-hover:text-white'
                      }`}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="absolute -top-1.5 -right-1.5 w-6 h-6 bg-[#E7B957] text-[#174C35] text-[10px] font-black rounded-full flex items-center justify-center shadow-xs">
                      {step.number}
                    </span>
                  </div>

                  <span className="text-[10px] font-mono text-[#79543B] block font-bold mb-0.5">
                    {step.duration}
                  </span>

                  <h3 className="font-heading font-bold text-sm text-[#174C35] mb-1">
                    {step.title}
                  </h3>

                  <p className="text-[11px] text-[#79543B] line-clamp-3 leading-tight">
                    {step.summary}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Selected Step Deep Dive Card (Desktop) */}
        <div className="hidden lg:block mb-12">
          <div className="bg-white/85 backdrop-blur-xl rounded-3xl p-6 border-2 border-white/90 shadow-lg flex items-center justify-between gap-8">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-2xl bg-[#174C35] flex items-center justify-center text-[#E7B957] shrink-0 shadow-md">
                {React.createElement(steps[activeStep].icon, { className: 'w-8 h-8' })}
              </div>
              <div>
                <div className="flex items-center gap-3">
                  <span className="font-mono text-xs font-bold text-[#E7B957] bg-[#174C35] px-2.5 py-0.5 rounded-full">
                    Stage {steps[activeStep].number}
                  </span>
                  <span className="text-xs font-semibold text-[#79543B] flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" /> Timeline: {steps[activeStep].duration}
                  </span>
                </div>
                <h4 className="font-heading text-xl font-bold text-[#174C35] mt-1">
                  {steps[activeStep].title} — {steps[activeStep].summary}
                </h4>
                <p className="text-xs sm:text-sm text-[#174C35]/80 mt-1 max-w-3xl leading-relaxed">
                  {steps[activeStep].details}
                </p>
              </div>
            </div>

            <div className="shrink-0 flex items-center gap-2">
              <span className="text-xs font-bold text-[#176B48] bg-[#D9EBDD] px-3.5 py-1.5 rounded-xl border border-[#A8C5A0]/40">
                Quality Gate Verified
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Vertical Connected Timeline */}
        <div className="lg:hidden space-y-4 mb-10">
          {steps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="bg-white/85 backdrop-blur-xl p-5 rounded-2xl border border-white shadow-sm flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-[#174C35] flex items-center justify-center text-[#E7B957] shrink-0 shadow-sm">
                  <Icon className="w-6 h-6" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-mono text-xs font-bold text-[#176B48]">
                      STAGE {step.number} • {step.duration}
                    </span>
                  </div>
                  <h3 className="font-heading font-bold text-base text-[#174C35]">
                    {step.title}
                  </h3>
                  <p className="text-xs font-semibold text-[#174C35]/90 mt-0.5">
                    {step.summary}
                  </p>
                  <p className="text-xs text-[#79543B] mt-1 leading-relaxed">
                    {step.details}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Mandatory Quality & Contamination Note Callout */}
        <div className="bg-gradient-to-r from-[#F8F6EC] via-white to-[#F8F6EC] rounded-2xl p-5 sm:p-6 border-2 border-[#E7B957]/60 shadow-sm flex items-start sm:items-center gap-4">
          <div className="w-10 h-10 rounded-xl bg-[#E7B957]/30 flex items-center justify-center text-[#79543B] shrink-0">
            <AlertCircle className="w-6 h-6 text-[#79543B]" />
          </div>
          <div className="text-xs sm:text-sm text-[#174C35]">
            <strong className="font-bold text-[#79543B] block uppercase tracking-wide text-xs">
              Quality & Feedstock Protocol Notice:
            </strong>
            <p className="mt-0.5 leading-relaxed text-[#174C35]/90">
              &ldquo;Only suitable segregated inputs are used. Contaminated materials are rejected, and fresh waste is not fed directly to earthworms.&rdquo;
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

