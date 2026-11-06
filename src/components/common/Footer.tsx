import React from 'react';
import Link from 'next/link';
import { 
  Sprout, 
  Mail, 
  Phone, 
  MapPin, 
  ArrowUpRight, 
  Sparkles,
  QrCode
} from 'lucide-react';
import { OFFICIAL_TAGLINE, BRAND_PHILOSOPHY } from '@/data/products';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#174C35] text-white pt-16 pb-10 border-t border-[#176B48] relative overflow-hidden">
      {/* Background radial gradient accent */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-radial from-[#176B48]/30 to-transparent pointer-events-none -mr-40 -mt-40 blur-3xl" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-radial from-[#A8C5A0]/10 to-transparent pointer-events-none -ml-40 -mb-40 blur-3xl" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Top Highlight Banner */}
        <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/15 mb-14 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7B957]/20 border border-[#E7B957]/40 text-[#E7B957] text-xs font-bold tracking-wider uppercase">
              <Sparkles className="w-3.5 h-3.5" />
              Official Product Tagline
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white tracking-wide">
              &ldquo;{OFFICIAL_TAGLINE}&rdquo;
            </h3>
            <p className="text-[#A8C5A0] text-sm font-medium">
              {BRAND_PHILOSOPHY}
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Link
              href="/shop"
              className="bg-[#E7B957] hover:bg-[#f5cf7c] text-[#174C35] px-6 py-3 rounded-full font-bold text-sm shadow-md transition-all duration-200 hover:scale-105"
            >
              Shop Organic Solutions
            </Link>
            <Link
              href="/bulk-enquiry"
              className="bg-white/15 hover:bg-white/25 text-white border border-white/30 px-6 py-3 rounded-full font-semibold text-sm transition-all duration-200"
            >
              Commercial Supply
            </Link>
          </div>
        </div>

        {/* 4 Navigation Columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 pb-12 border-b border-white/15">
          {/* Brand Info Column */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#E7B957] flex items-center justify-center text-[#174C35] shadow-md">
                <Sprout className="w-6 h-6" />
              </div>
              <span className="font-heading text-2xl font-bold tracking-tight text-white">
                DHARTI SAHELI
              </span>
            </div>
            <p className="text-[#D9EBDD]/80 text-sm leading-relaxed max-w-sm">
              Women-led circular enterprise producing certified vermicompost and sustainable soil inputs through rural Self-Help Groups.
            </p>
            <div className="pt-2 flex items-center gap-3">
              <Link
                href="/batch-traceability"
                className="inline-flex items-center gap-2 text-xs bg-white/10 hover:bg-white/20 px-3.5 py-2 rounded-lg text-[#E7B957] border border-[#E7B957]/30 transition-colors font-medium"
              >
                <QrCode className="w-3.5 h-3.5" />
                <span>Verify Bag Batch QR Code</span>
              </Link>
            </div>
          </div>

          {/* EXPLORE Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E7B957]">
              EXPLORE
            </h4>
            <ul className="space-y-2 text-sm text-[#D9EBDD]/80">
              <li>
                <Link href="/" className="hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link href="/shop" className="hover:text-white transition-colors">Shop Catalogue</Link>
              </li>
              <li>
                <Link href="/our-story" className="hover:text-white transition-colors">Our Story & Model</Link>
              </li>
              <li>
                <Link href="/our-women" className="hover:text-white transition-colors">Our Women & SHGs</Link>
              </li>
              <li>
                <Link href="/our-impact" className="hover:text-white transition-colors">Our Impact & Targets</Link>
              </li>
            </ul>
          </div>

          {/* PRODUCTS Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E7B957]">
              PRODUCTS
            </h4>
            <ul className="space-y-2 text-sm text-[#D9EBDD]/80">
              <li>
                <Link href="/shop/vermicompost" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Vermicompost</span>
                  <span className="text-[10px] bg-[#176B48] px-1.5 py-0.5 rounded text-white">Featured</span>
                </Link>
              </li>
              <li>
                <Link href="/shop/organic-compost" className="hover:text-white transition-colors">
                  Organic Compost
                </Link>
              </li>
              <li>
                <Link href="/shop/gardening-kits" className="hover:text-white transition-colors flex items-center justify-between">
                  <span>Gardening Kits</span>
                  <span className="text-[10px] bg-[#E7B957]/20 text-[#E7B957] px-1.5 py-0.5 rounded">Soon</span>
                </Link>
              </li>
              <li>
                <Link href="/bulk-enquiry" className="hover:text-white transition-colors">
                  Bulk Sacks (50kg)
                </Link>
              </li>
              <li>
                <Link href="/batch-traceability" className="hover:text-white transition-colors">
                  Batch Quality Reports
                </Link>
              </li>
            </ul>
          </div>

          {/* BUSINESS & CONNECT */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-[#E7B957]">
              BUSINESS & CONTACT
            </h4>
            <ul className="space-y-2 text-sm text-[#D9EBDD]/80">
              <li>
                <Link href="/bulk-enquiry" className="hover:text-white transition-colors flex items-center gap-1 font-semibold text-white">
                  <span>Bulk Enquiry</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </Link>
              </li>
              <li>
                <Link href="/bulk-enquiry?type=partner" className="hover:text-white transition-colors">
                  Become a Partner
                </Link>
              </li>
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
              <li className="pt-2 text-xs text-[#A8C5A0] flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#E7B957]" />
                <span>contact@dhartisaheli.in</span>
              </li>
              <li className="text-xs text-[#A8C5A0] flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#E7B957]" />
                <span>+91 98765 43210 (Sales Lead)</span>
              </li>
              <li className="text-xs text-[#A8C5A0] flex items-start gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#E7B957] shrink-0 mt-0.5" />
                <span>Rural Cluster Unit, MP, India</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Social & Legal Row */}
        <div className="pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-[#D9EBDD]/70">
          <div className="flex flex-wrap items-center gap-6">
            <span>© 2026 Dharti Saheli Enterprise. All rights reserved.</span>
            <span className="hidden sm:inline">•</span>
            <Link href="/contact#privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/contact#terms" className="hover:text-white transition-colors">Terms of Service</Link>
            <Link href="/contact#disclaimer" className="hover:text-white transition-colors">Compliance Disclosures</Link>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-[#A8C5A0]">Connect:</span>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#E7B957] transition-colors"
            >
              Instagram
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#E7B957] transition-colors"
            >
              Facebook
            </a>
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noreferrer" 
              className="hover:text-[#E7B957] transition-colors"
            >
              LinkedIn
            </a>
            <a 
              href="https://wa.me/919876543210" 
              target="_blank" 
              rel="noreferrer" 
              className="text-[#E7B957] font-semibold hover:underline"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
