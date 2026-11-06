'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  ShoppingBag, 
  Search, 
  Menu, 
  X, 
  Sprout, 
  QrCode, 
  ArrowRight,
  Sparkles,
  PhoneCall
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { OFFICIAL_TAGLINE } from '@/data/products';

interface NavbarProps {
  onOpenSearch?: () => void;
  onOpenBatchLookup?: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenSearch, onOpenBatchLookup }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();
  const { itemCount, setIsCartOpen } = useCart();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Shop', href: '/shop' },
    { label: 'Our Story', href: '/our-story' },
    { label: 'Our Women', href: '/our-women' },
    { label: 'Our Impact', href: '/our-impact' },
    { label: 'Contact', href: '/contact' },
  ];

  return (
    <>
      {/* Top Utility Announcement Ribbon */}
      <div className="bg-[#174C35] text-[#D9EBDD] text-xs py-1.5 px-4 font-medium transition-colors border-b border-[#176B48]/40">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="inline-flex items-center gap-1 bg-[#E7B957] text-[#174C35] font-bold px-2 py-0.5 rounded-full text-[10px] tracking-wider uppercase">
              <Sparkles className="w-2.5 h-2.5 fill-[#174C35]" /> Official
            </span>
            <span className="hidden sm:inline font-semibold text-[#E7B957] tracking-wide">
              &ldquo;{OFFICIAL_TAGLINE}&rdquo;
            </span>
            <span className="text-[#A8C5A0] hidden md:inline">• Lab-Tested Vermicompost by Rural Women&apos;s SHGs</span>
          </div>
          <div className="flex items-center gap-4 text-[11px]">
            <Link 
              href="/batch-traceability" 
              className="hover:text-white flex items-center gap-1 transition-colors text-[#A8C5A0] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#E7B957] rounded"
            >
              <QrCode className="w-3 h-3 text-[#E7B957]" />
              <span className="hidden sm:inline">Trace Batch QR</span>
            </Link>
            <span className="text-white/20">|</span>
            <Link 
              href="/bulk-enquiry" 
              className="text-[#E7B957] hover:underline font-semibold flex items-center gap-1 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-white rounded"
            >
              <PhoneCall className="w-3 h-3" />
              <span>Institutional B2B Supply</span>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Floating Glassmorphism Navbar */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 w-full ${
          isScrolled
            ? 'bg-[#F8F6EC]/90 backdrop-blur-xl shadow-[0_10px_30px_-10px_rgba(23,76,53,0.12)] border-b border-[#A8C5A0]/30 py-3'
            : 'bg-[#F8F6EC]/70 backdrop-blur-md border-b border-white/50 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#174C35] to-[#176B48] flex items-center justify-center text-[#E7B957] shadow-md group-hover:scale-105 transition-transform duration-200 border border-[#E7B957]/30">
              <Sprout className="w-5 h-5" />
            </div>
            <div>
              <span className="font-heading text-xl sm:text-2xl font-bold tracking-tight text-[#174C35] block leading-none">
                DHARTI SAHELI
              </span>
              <span className="text-[10px] font-semibold text-[#79543B] tracking-widest uppercase block mt-0.5">
                Soil Wealth • Women Led
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1 bg-white/60 backdrop-blur-md p-1.5 rounded-full border border-white/80 shadow-[0_4px_20px_-4px_rgba(23,76,53,0.06)]">
            {navLinks.map((link) => {
              const isActive = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-1.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48] focus-visible:ring-offset-2 ${
                    isActive
                      ? 'bg-[#174C35] text-white shadow-sm font-semibold'
                      : 'text-[#174C35]/80 hover:text-[#174C35] hover:bg-white/80'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger */}
            <button
              onClick={onOpenSearch}
              aria-label="Search catalogue"
              className="w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-[#174C35] hover:text-[#176B48] border border-[#A8C5A0]/30 shadow-sm transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48] focus-visible:ring-offset-2"
            >
              <Search className="w-4 h-4" />
            </button>

            {/* Batch QR lookup quick button */}
            <button
              onClick={onOpenBatchLookup}
              aria-label="Look up batch QR code"
              title="Verify Batch QR Code"
              className="hidden sm:flex w-9 h-9 rounded-full bg-white/70 hover:bg-white items-center justify-center text-[#174C35] hover:text-[#176B48] border border-[#A8C5A0]/30 shadow-sm transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48] focus-visible:ring-offset-2"
            >
              <QrCode className="w-4 h-4 text-[#79543B]" />
            </button>

            {/* Shopping Bag Button */}
            <button
              onClick={() => setIsCartOpen(true)}
              aria-label="Shopping bag"
              className="relative w-9 h-9 rounded-full bg-white/70 hover:bg-white flex items-center justify-center text-[#174C35] hover:text-[#176B48] border border-[#A8C5A0]/30 shadow-sm transition-transform duration-150 hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48] focus-visible:ring-offset-2"
            >
              <ShoppingBag className="w-4 h-4" />
              {itemCount > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-5 h-5 bg-[#E7B957] text-[#174C35] text-[11px] font-black rounded-full flex items-center justify-center shadow-md animate-pulse">
                  {itemCount}
                </span>
              )}
            </button>

            {/* Get a Quote Button */}
            <Link
              href="/bulk-enquiry"
              className="hidden sm:inline-flex items-center gap-1.5 bg-gradient-to-r from-[#176B48] to-[#174C35] text-white hover:to-[#0f3524] text-xs font-semibold px-4 py-2.5 rounded-full shadow-[0_4px_14px_rgba(23,107,72,0.3)] hover:shadow-lg transition-transform duration-200 hover:-translate-y-0.5 border border-white/20 whitespace-nowrap focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48] focus-visible:ring-offset-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>

            {/* Mobile Menu Hamburger */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle mobile menu"
              className="lg:hidden w-9 h-9 rounded-full bg-white/70 flex items-center justify-center text-[#174C35] border border-[#A8C5A0]/30 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48] focus-visible:ring-offset-2"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Slide-in Glass Navigation Drawer */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          {/* Backdrop */}
          <div 
            className="fixed inset-0 bg-[#174C35]/50 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />

          {/* Drawer */}
          <div className="fixed inset-y-0 right-0 w-full max-w-xs bg-[#F8F6EC]/95 backdrop-blur-2xl p-6 shadow-2xl flex flex-col justify-between border-l border-white/60 animate-in slide-in-from-right duration-300">
            <div>
              <div className="flex items-center justify-between pb-6 border-b border-[#A8C5A0]/30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-lg bg-[#174C35] flex items-center justify-center text-[#E7B957]">
                    <Sprout className="w-4 h-4" />
                  </div>
                  <span className="font-heading font-bold text-lg text-[#174C35]">DHARTI SAHELI</span>
                </div>
                <button
                  onClick={() => setMobileMenuOpen(false)}
                  className="w-8 h-8 rounded-full bg-white/80 flex items-center justify-center text-[#174C35]"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              {/* Tagline Badge in Drawer */}
              <div className="mt-4 p-3 rounded-xl bg-gradient-to-r from-[#E7B957]/20 to-white/60 border border-[#E7B957]/50 text-center">
                <span className="text-[11px] font-black tracking-wider text-[#174C35] uppercase block">
                  &ldquo;{OFFICIAL_TAGLINE}&rdquo;
                </span>
                <span className="text-[9px] text-[#79543B] font-medium block mt-0.5">
                  Healthy Soil • Empowered Women
                </span>
              </div>

              {/* Links */}
              <nav className="mt-6 flex flex-col gap-2">
                {navLinks.map((link) => {
                  const isActive = pathname === link.href;
                  return (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setMobileMenuOpen(false)}
                      className={`px-4 py-3 rounded-xl text-base font-medium transition-all ${
                        isActive
                          ? 'bg-[#174C35] text-white font-semibold shadow-md'
                          : 'text-[#174C35] hover:bg-white/80'
                      }`}
                    >
                      {link.label}
                    </Link>
                  );
                })}
                <Link
                  href="/batch-traceability"
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-4 py-3 rounded-xl text-base font-medium text-[#174C35] hover:bg-white/80 flex items-center gap-2"
                >
                  <QrCode className="w-4 h-4 text-[#79543B]" />
                  <span>Batch QR Traceability</span>
                </Link>
              </nav>
            </div>

            <div className="pt-6 border-t border-[#A8C5A0]/30 space-y-3">
              <Link
                href="/bulk-enquiry"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 bg-[#176B48] text-white py-3 rounded-xl font-semibold text-sm shadow-md"
              >
                <span>Request Bulk Quote</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  setIsCartOpen(true);
                }}
                className="w-full flex items-center justify-center gap-2 bg-white text-[#174C35] py-3 rounded-xl font-semibold text-sm border border-[#A8C5A0]/50"
              >
                <ShoppingBag className="w-4 h-4" />
                <span>View Bag ({itemCount})</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

