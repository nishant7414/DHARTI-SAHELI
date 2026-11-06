'use client';

import React from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Store, 
  Trees, 
  ShoppingBag, 
  GraduationCap, 
  ArrowRight,
  Handshake,
  CheckCircle2
} from 'lucide-react';

export const PartnershipsSection: React.FC = () => {
  const ecosystemPartners = [
    {
      category: 'Farmers & FPOs',
      role: 'Biomass Providers & Bulk Offtakers',
      icon: Trees,
      description: 'Exchange dry crop residue and foliage for high-grade vermicompost, reducing stubble burning and restoring field soil organic carbon.',
      collaboration: 'Supply MoUs • Demonstration Plots • Seasonal Bulk Orders',
    },
    {
      category: 'Gaushalas & Dairy Farms',
      role: 'Anchor Dung Feedstock Partners',
      icon: Store,
      description: 'Scheduled collection of fresh bovine manure with verified purity, turning a disposal bottleneck into predictable monthly revenue or barter compost.',
      collaboration: 'Scheduled Route Collection • Fixed Route Fees • Clean Yard Protocols',
    },
    {
      category: 'Commercial Nurseries',
      role: 'Commercial Anchor Buyers',
      icon: Building2,
      description: 'High-volume repeat buyers seeking uniform potting media with verified moisture and zero weed-seed germination for horticulture crops.',
      collaboration: 'Sample Trials • Written Quality Specs • Monthly Scheduled Supply',
    },
    {
      category: 'Vegetable Mandis',
      role: 'Segregated Green Waste Suppliers',
      icon: ShoppingBag,
      description: 'Pre-sorted fruit and vegetable market yard leftovers channeled to aerobic composting units instead of overflowing municipal dumps.',
      collaboration: 'Market Yard Sorting • Morning Collection Runs • Contamination Checks',
    },
    {
      category: 'Landscaping Companies',
      role: 'Bulk Project & Lawn Buyers',
      icon: Trees,
      description: 'Supplying verified organic inputs for corporate tech campuses, residential townships, eco-resorts, and municipal public parks.',
      collaboration: 'Bulk 50kg Sacks • Palletized Dispatch • Soil Preparation Support',
    },
    {
      category: 'Agricultural Institutions & KVKs',
      role: 'Knowledge, Testing & Convergence Partners',
      icon: GraduationCap,
      description: 'Collaborating with Krishi Vigyan Kendras, state universities, and DAY-NRLM block mission teams for technical training and sample testing.',
      collaboration: 'Scientific Testing • Women Capacity Building • Extension Workshops',
    },
  ];

  return (
    <section className="py-20 relative overflow-hidden bg-gradient-to-b from-[#F8F6EC] to-white/70" id="partnerships">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#176B48]/10 text-[#176B48] text-xs font-bold uppercase tracking-wider border border-[#176B48]/20">
            <Handshake className="w-3.5 h-3.5" />
            Circular Supply Chain
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35] tracking-tight">
            BUILDING A STRONGER AGRICULTURAL ECOSYSTEM TOGETHER.
          </h2>
          <p className="text-base sm:text-lg text-[#174C35]/80">
            By connecting local suppliers, women-led production groups and institutional customers, Dharti Saheli aims to create a reliable circular supply chain.
          </p>
        </div>

        {/* 6 Ecosystem Glass Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {ecosystemPartners.map((item) => {
            const Icon = item.icon;
            return (
              <div
                key={item.category}
                className="bg-white/80 backdrop-blur-xl p-6 sm:p-7 rounded-3xl border border-white/90 shadow-[0_10px_30px_-5px_rgba(23,76,53,0.06)] hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-[#D9EBDD] flex items-center justify-center text-[#176B48] group-hover:bg-[#176B48] group-hover:text-white transition-colors shadow-xs">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#79543B] bg-[#F8F6EC] px-2.5 py-1 rounded-full border border-[#A8C5A0]/30">
                      Value Node
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#174C35] mb-1">
                    {item.category}
                  </h3>

                  <span className="text-xs font-bold text-[#176B48] block mb-3">
                    {item.role}
                  </span>

                  <p className="text-xs text-[#174C35]/80 leading-relaxed mb-4">
                    {item.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#A8C5A0]/20 text-[11px] text-[#79543B] font-medium flex items-center gap-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B48] shrink-0" />
                  <span>{item.collaboration}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Partner With Us CTA Card */}
        <div className="bg-gradient-to-r from-[#174C35] to-[#176B48] rounded-3xl p-8 text-white shadow-xl flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="font-heading text-2xl font-bold text-white">
              Interested in Feedstock Aggregation or Institutional Supply?
            </h3>
            <p className="text-xs sm:text-sm text-[#D9EBDD] max-w-2xl">
              We structure custom MoUs for gaushalas, mandis, nurseries, landscape architects, and farmer producer organizations.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/bulk-enquiry?type=partner"
              className="bg-[#E7B957] hover:bg-[#f5cf7c] text-[#174C35] px-7 py-3.5 rounded-full font-bold text-xs shadow-md transition-all duration-200 hover:scale-105"
            >
              PARTNER WITH US
            </Link>
            <Link
              href="/bulk-enquiry"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 rounded-full font-semibold text-xs transition-colors"
            >
              Request Supply Sample
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
};

