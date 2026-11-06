'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingBag, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Bell, 
  Eye, 
  CheckCircle2, 
  FileText 
} from 'lucide-react';
import { PRODUCTS, OFFICIAL_TAGLINE } from '@/data/products';
import { useCart } from '@/context/CartContext';

export const ProductsSection: React.FC = () => {
  const { addItem } = useCart();
  
  // Track selected pack size for vermicompost (default 10kg) and compost (default 25kg)
  const [selectedPackVermicompost, setSelectedPackVermicompost] = useState('10 kg');
  const [selectedPackCompost, setSelectedPackCompost] = useState('25 kg Retail Sack');
  
  // Notify Me Modal state for Gardening Kit
  const [notifyEmail, setNotifyEmail] = useState('');
  const [notifySuccess, setNotifySuccess] = useState(false);
  const [notifyModalOpen, setNotifyModalOpen] = useState(false);

  const handleNotifySubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (notifyEmail) {
      setNotifySuccess(true);
      setTimeout(() => {
        setNotifyModalOpen(false);
        setNotifySuccess(false);
        setNotifyEmail('');
      }, 2500);
    }
  };

  const vermicompost = PRODUCTS[0];
  const compost = PRODUCTS[1];
  const gardeningKit = PRODUCTS[2];

  const currentVermicompostPack = vermicompost.packSizes.find(
    (p) => p.size === selectedPackVermicompost
  ) || vermicompost.packSizes[1];

  const currentCompostPack = compost.packSizes.find(
    (p) => p.size === selectedPackCompost
  ) || compost.packSizes[0];

  const handleAddVermicompost = () => {
    addItem({
      productId: vermicompost.id,
      productName: vermicompost.name,
      productSlug: vermicompost.slug,
      image: vermicompost.image,
      selectedSize: currentVermicompostPack.size,
      sku: currentVermicompostPack.sku,
      unitPrice: currentVermicompostPack.price,
      quantity: 1,
    });
  };

  return (
    <section className="py-20 relative overflow-hidden" id="products">
      {/* Background soft ambient gradient */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-[#D9EBDD]/50 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-0 w-96 h-96 bg-[#E7B957]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7B957]/20 border border-[#E7B957]/50 text-[#174C35] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E7B957]" />
            Pure Soil Wealth
          </div>
          <h2 className="font-heading text-3xl sm:text-4xl lg:text-5xl font-bold text-[#174C35] tracking-tight">
            NATURE&apos;S GOODNESS, PACKED FOR YOUR GARDEN.
          </h2>
          <p className="text-base sm:text-lg text-[#174C35]/80">
            Discover our range of thoughtfully produced soil solutions.
          </p>
        </div>

        {/* 3 Product Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* PRODUCT 1: VERMICOMPOST */}
          <div className="relative rounded-3xl bg-white/75 backdrop-blur-xl border-2 border-[#176B48]/30 shadow-[0_15px_35px_-10px_rgba(23,76,53,0.12)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between group overflow-hidden">
            {/* Top gradient highlight strip */}
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#174C35] via-[#176B48] to-[#E7B957]" />

            <div>
              {/* Status & Category Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-white bg-[#176B48] px-3 py-1 rounded-full shadow-xs">
                  Featured Product
                </span>
                <span className="text-[11px] font-semibold text-[#79543B]">
                  Batch Traceable
                </span>
              </div>

              {/* Product Packaging Mockup */}
              <div className="relative aspect-square max-w-[240px] mx-auto rounded-2xl bg-[#F8F6EC]/80 border border-[#A8C5A0]/30 p-4 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                <Image
                  src={vermicompost.image}
                  alt={vermicompost.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Tagline sticker */}
              <div className="mb-2 text-center">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#79543B] bg-[#E7B957]/20 border border-[#E7B957]/40 px-2.5 py-0.5 rounded-full inline-block">
                  &ldquo;{OFFICIAL_TAGLINE}&rdquo;
                </span>
              </div>

              {/* Product Title & Description */}
              <h3 className="font-heading text-xl font-bold text-[#174C35] text-center mb-2">
                VERMICOMPOST
              </h3>
              <p className="text-xs text-[#174C35]/80 text-center leading-relaxed mb-5">
                Carefully processed vermicompost produced using suitable biodegradable inputs through managed earthworm-based composting.
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6 text-xs text-[#174C35]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#176B48] shrink-0" />
                  <span>Soil-enriching organic input</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#176B48] shrink-0" />
                  <span>Suitable for gardening and horticulture</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#176B48] shrink-0" />
                  <span>Batch-level quality checks</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#176B48] shrink-0" />
                  <span>Convenient packaging</span>
                </li>
              </ul>

              {/* Pack Size Selector */}
              <div className="mb-6">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#79543B] block mb-2">
                  Available Pack Sizes:
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {vermicompost.packSizes.map((pack) => (
                    <button
                      key={pack.size}
                      type="button"
                      onClick={() => setSelectedPackVermicompost(pack.size)}
                      className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all text-center ${
                        selectedPackVermicompost === pack.size
                          ? 'bg-[#174C35] text-white border-[#174C35] shadow-xs'
                          : 'bg-white/80 text-[#174C35] border-[#A8C5A0]/50 hover:bg-white'
                      }`}
                    >
                      <div className="text-[11px]">{pack.size}</div>
                      <div className="text-[10px] font-medium opacity-90">₹{pack.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action Buttons */}
            <div className="pt-4 border-t border-[#A8C5A0]/20 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#79543B] uppercase font-semibold">Price</span>
                  <div className="font-heading text-2xl font-bold text-[#176B48]">
                    ₹{currentVermicompostPack.price}
                    <span className="text-xs font-sans text-[#79543B] font-normal ml-1">
                      / {currentVermicompostPack.size}
                    </span>
                  </div>
                </div>
                <Link
                  href="/shop/vermicompost"
                  className="text-xs font-bold text-[#176B48] hover:text-[#174C35] flex items-center gap-1 group/link"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW PRODUCT</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href="/shop/vermicompost"
                  className="w-full bg-white text-[#174C35] hover:bg-[#F8F6EC] border border-[#A8C5A0]/60 py-2.5 rounded-xl font-bold text-xs text-center transition-colors shadow-xs"
                >
                  DETAILS
                </Link>
                <button
                  onClick={handleAddVermicompost}
                  className="w-full bg-gradient-to-r from-[#176B48] to-[#174C35] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all"
                >
                  <ShoppingBag className="w-3.5 h-3.5" />
                  <span>ADD TO CART</span>
                </button>
              </div>
            </div>
          </div>

          {/* PRODUCT 2: ORGANIC COMPOST */}
          <div className="relative rounded-3xl bg-white/75 backdrop-blur-xl border border-white/90 shadow-[0_15px_35px_-10px_rgba(23,76,53,0.08)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 p-6 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#79543B]/60" />

            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#79543B] bg-[#79543B]/10 px-3 py-1 rounded-full border border-[#79543B]/20">
                  Bulk & Farm Ready
                </span>
                <span className="text-[11px] font-semibold text-[#176B48]">
                  Aerobic Matured
                </span>
              </div>

              {/* Product Packaging Mockup */}
              <div className="relative aspect-square max-w-[240px] mx-auto rounded-2xl bg-[#F8F6EC]/80 border border-[#A8C5A0]/30 p-4 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                <Image
                  src={compost.image}
                  alt={compost.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Tagline sticker */}
              <div className="mb-2 text-center">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#79543B] bg-[#E7B957]/20 border border-[#E7B957]/40 px-2.5 py-0.5 rounded-full inline-block">
                  &ldquo;{OFFICIAL_TAGLINE}&rdquo;
                </span>
              </div>

              {/* Product Title & Description */}
              <h3 className="font-heading text-xl font-bold text-[#174C35] text-center mb-2">
                ORGANIC COMPOST
              </h3>
              <p className="text-xs text-[#174C35]/80 text-center leading-relaxed mb-5">
                Organic compost produced from suitable biodegradable materials through a managed composting process.
              </p>

              {/* Features List */}
              <ul className="space-y-2 mb-6 text-xs text-[#174C35]">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#176B48] shrink-0" />
                  <span>Suitable for farms and gardens</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#176B48] shrink-0" />
                  <span>Retail and bulk supply options</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#176B48] shrink-0" />
                  <span>Locally sourced inputs</span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-[#176B48] shrink-0" />
                  <span>Quality-focused production</span>
                </li>
              </ul>

              {/* Pack Size Selector */}
              <div className="mb-6">
                <label className="text-[11px] font-bold uppercase tracking-wider text-[#79543B] block mb-2">
                  Available Options:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {compost.packSizes.slice(0, 2).map((pack) => (
                    <button
                      key={pack.size}
                      type="button"
                      onClick={() => setSelectedPackCompost(pack.size)}
                      className={`py-2 px-1 rounded-xl text-xs font-bold border transition-all text-center ${
                        selectedPackCompost === pack.size
                          ? 'bg-[#174C35] text-white border-[#174C35] shadow-xs'
                          : 'bg-white/80 text-[#174C35] border-[#A8C5A0]/50 hover:bg-white'
                      }`}
                    >
                      <div className="text-[11px] line-clamp-1">{pack.size}</div>
                      <div className="text-[10px] font-medium opacity-90">₹{pack.price}</div>
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Price & Action Buttons */}
            <div className="pt-4 border-t border-[#A8C5A0]/20 space-y-2.5">
              <div className="flex items-center justify-between">
                <div>
                  <span className="text-[10px] text-[#79543B] uppercase font-semibold">Starting From</span>
                  <div className="font-heading text-2xl font-bold text-[#176B48]">
                    ₹{currentCompostPack.price}
                    <span className="text-xs font-sans text-[#79543B] font-normal ml-1">
                      / {currentCompostPack.size.split(' ')[0]}
                    </span>
                  </div>
                </div>
                <Link
                  href="/shop/organic-compost"
                  className="text-xs font-bold text-[#176B48] hover:text-[#174C35] flex items-center gap-1"
                >
                  <Eye className="w-3.5 h-3.5" />
                  <span>VIEW PRODUCT</span>
                </Link>
              </div>

              <div className="grid grid-cols-2 gap-2 pt-1">
                <Link
                  href="/shop/organic-compost"
                  className="w-full bg-white text-[#174C35] hover:bg-[#F8F6EC] border border-[#A8C5A0]/60 py-2.5 rounded-xl font-bold text-xs text-center transition-colors shadow-xs"
                >
                  VIEW PRODUCT
                </Link>
                <Link
                  href="/bulk-enquiry?product=organic-compost"
                  className="w-full bg-[#79543B] hover:bg-[#543927] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md transition-all text-center"
                >
                  <span>REQUEST BULK QUOTE</span>
                </Link>
              </div>
            </div>
          </div>

          {/* PRODUCT 3: GARDENING KITS (COMING SOON) */}
          <div className="relative rounded-3xl bg-white/75 backdrop-blur-xl border border-dashed border-[#E7B957]/80 shadow-[0_15px_35px_-10px_rgba(23,76,53,0.06)] hover:shadow-xl transition-all duration-300 p-6 flex flex-col justify-between group overflow-hidden">
            <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#E7B957]" />

            <div>
              {/* Badge */}
              <div className="flex items-center justify-between mb-4">
                <span className="text-[11px] font-black uppercase tracking-wider text-[#79543B] bg-[#E7B957]/30 px-3 py-1 rounded-full border border-[#E7B957]/60">
                  COMING SOON
                </span>
                <span className="text-[11px] font-semibold text-[#79543B]">
                  Phase 2 Offering
                </span>
              </div>

              {/* Product Packaging Mockup */}
              <div className="relative aspect-square max-w-[240px] mx-auto rounded-2xl bg-[#F8F6EC]/80 border border-[#A8C5A0]/30 p-4 mb-6 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner opacity-95">
                <Image
                  src={gardeningKit.image}
                  alt={gardeningKit.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              {/* Tagline sticker */}
              <div className="mb-2 text-center">
                <span className="text-[10px] font-extrabold uppercase tracking-widest text-[#79543B] bg-[#E7B957]/20 border border-[#E7B957]/40 px-2.5 py-0.5 rounded-full inline-block">
                  &ldquo;{OFFICIAL_TAGLINE}&rdquo;
                </span>
              </div>

              {/* Product Title & Description */}
              <h3 className="font-heading text-xl font-bold text-[#174C35] text-center mb-2">
                GARDENING KITS
              </h3>
              <p className="text-xs text-[#174C35]/80 text-center leading-relaxed mb-5">
                A convenient gardening solution designed to help people begin growing their own plants.
              </p>

              {/* Planned Contents Box */}
              <div className="bg-[#F8F6EC]/90 rounded-2xl p-4 border border-[#A8C5A0]/30 mb-6">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#79543B] block mb-2">
                  Planned Contents:
                </span>
                <ul className="space-y-1.5 text-xs text-[#174C35]">
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7B957]" />
                    <span>3kg Enriched Compost</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7B957]" />
                    <span>2kg Compressed Cocopeat Block</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7B957]" />
                    <span>5 Heirloom Non-Hybrid Vegetable Seeds</span>
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#E7B957]" />
                    <span>Simple illustrated usage guide</span>
                  </li>
                </ul>
              </div>

              {/* Transparency Notice */}
              <p className="text-[10px] text-[#79543B] italic text-center mb-4 leading-normal">
                Important: Gardening kits are a planned future offering, not a currently available product.
              </p>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 border-t border-[#A8C5A0]/20 space-y-2">
              <button
                onClick={() => setNotifyModalOpen(true)}
                className="w-full bg-[#E7B957] hover:bg-[#d8a845] text-[#174C35] py-3 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-md transition-all"
              >
                <Bell className="w-3.5 h-3.5" />
                <span>NOTIFY ME WHEN AVAILABLE</span>
              </button>
            </div>
          </div>

        </div>

        {/* Bottom Banner */}
        <div className="mt-12 text-center">
          <Link
            href="/shop"
            className="inline-flex items-center gap-2 text-sm font-bold text-[#176B48] hover:text-[#174C35] group"
          >
            <span>View all pack sizes, specifications, and laboratory test reports</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

      </div>

      {/* Notify Me Modal */}
      {notifyModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-[#174C35]/60 backdrop-blur-sm"
            onClick={() => setNotifyModalOpen(false)}
          />
          <div className="relative w-full max-w-md bg-[#F8F6EC] border border-white rounded-3xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95">
            <h3 className="font-heading text-xl font-bold text-[#174C35] mb-2">
              Get Notified for Gardening Kits
            </h3>
            <p className="text-xs text-[#79543B] mb-5 leading-relaxed">
              Be the first to receive our starter kit with enriched vermicompost, expanding cocopeat, and Indian heirloom seeds once Phase 2 launches.
            </p>

            {notifySuccess ? (
              <div className="bg-[#D9EBDD] p-4 rounded-2xl text-center space-y-2 text-[#174C35]">
                <CheckCircle2 className="w-8 h-8 text-[#176B48] mx-auto" />
                <h4 className="font-bold text-sm">You&apos;re on the list!</h4>
                <p className="text-xs text-[#79543B]">
                  We&apos;ll email you when the first batch of Gardening Kits is ready.
                </p>
              </div>
            ) : (
              <form onSubmit={handleNotifySubmit} className="space-y-4">
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  value={notifyEmail}
                  onChange={(e) => setNotifyEmail(e.target.value)}
                  className="w-full bg-white border border-[#A8C5A0]/60 rounded-xl px-4 py-3 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                />
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => setNotifyModalOpen(false)}
                    className="flex-1 bg-white text-[#174C35] py-2.5 rounded-xl text-xs font-bold border border-[#A8C5A0]/40"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="flex-1 bg-[#176B48] hover:bg-[#174C35] text-white py-2.5 rounded-xl text-xs font-bold transition-colors shadow-md"
                  >
                    Join Waitlist
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};

