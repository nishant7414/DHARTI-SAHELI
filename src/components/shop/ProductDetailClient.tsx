'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingBag, 
  Check, 
  Sparkles, 
  ShieldCheck, 
  QrCode, 
  ArrowRight, 
  Plus, 
  Minus, 
  FileText, 
  HelpCircle, 
  Leaf, 
  Layers, 
  CheckCircle2,
  Building2
} from 'lucide-react';
import { Product } from '@/types';
import { OFFICIAL_TAGLINE } from '@/data/products';
import { BATCH_RECORDS } from '@/data/batchTraceability';
import { useCart } from '@/context/CartContext';

interface ProductDetailClientProps {
  product: Product;
}

export const ProductDetailClient: React.FC<ProductDetailClientProps> = ({ product }) => {
  const { addItem } = useCart();
  const [selectedPackSize, setSelectedPackSize] = useState(product.packSizes[0].size);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'overview' | 'usage' | 'specs' | 'traceability' | 'faqs'>('overview');
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const galleryImages = [
    product.image,
    '/images/story/vermicompost-texture.jpg',
    '/images/story/soil-hands.jpg',
    '/images/story/nursery-greenhouse.jpg',
  ];

  const currentPack = product.packSizes.find((p) => p.size === selectedPackSize) || product.packSizes[0];
  const batchData = BATCH_RECORDS[product.sampleBatchCode] || BATCH_RECORDS['DS-2026-B04'];
  const isComingSoon = product.status === 'coming_soon';

  const handleAddToCart = () => {
    addItem({
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      image: product.image,
      selectedSize: currentPack.size,
      sku: currentPack.sku,
      unitPrice: currentPack.price,
      quantity,
    });
  };

  return (
    <div className="py-10 sm:py-16 relative overflow-hidden">
      {/* Background radial gradient */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Breadcrumb Navigation */}
        <nav className="flex items-center gap-2 text-xs text-[#79543B] mb-8">
          <Link href="/" className="hover:text-[#174C35]">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-[#174C35]">Shop</Link>
          <span>/</span>
          <span className="text-[#174C35] font-semibold">{product.name}</span>
        </nav>

        {/* Main Product Showcase: Split Screen */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Image Gallery with Thumbnails & Zoom Interaction */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Large Main Image Display */}
            <div className="relative aspect-square rounded-3xl bg-white/80 backdrop-blur-xl border-2 border-white shadow-xl overflow-hidden p-6 flex items-center justify-center group">
              <Image
                src={galleryImages[activeImageIndex]}
                alt={product.name}
                fill
                priority
                className="object-contain p-4 transition-transform duration-500 group-hover:scale-110"
              />
              
              {/* Product Badge */}
              {product.badge && (
                <div className="absolute top-4 left-4 bg-[#176B48] text-white text-[10px] font-bold uppercase tracking-wider px-3 py-1.5 rounded-full shadow-md">
                  {product.badge}
                </div>
              )}

              {/* Tagline Watermark */}
              <div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1.5 rounded-xl border border-white text-[10px] font-black text-[#174C35] shadow-sm">
                <Sparkles className="w-3 h-3 inline mr-1 text-[#E7B957]" />
                &ldquo;{OFFICIAL_TAGLINE}&rdquo;
              </div>
            </div>

            {/* Thumbnail Selection */}
            <div className="grid grid-cols-4 gap-3">
              {galleryImages.map((img, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveImageIndex(idx)}
                  className={`relative aspect-square rounded-2xl bg-white border-2 overflow-hidden transition-all p-1 ${
                    activeImageIndex === idx
                      ? 'border-[#176B48] shadow-md scale-95'
                      : 'border-white/80 hover:border-[#A8C5A0]/60 opacity-70 hover:opacity-100'
                  }`}
                >
                  <Image
                    src={img}
                    alt={`Thumbnail ${idx + 1}`}
                    fill
                    className="object-cover rounded-xl"
                  />
                </button>
              ))}
            </div>

            {/* Batch Traceability Quick Callout */}
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white flex items-center justify-between text-xs">
              <div className="flex items-center gap-2.5">
                <QrCode className="w-5 h-5 text-[#176B48]" />
                <div>
                  <span className="font-bold text-[#174C35] block">Batch Quality Verification</span>
                  <span className="text-[11px] text-[#79543B] font-mono">Sample Batch: {product.sampleBatchCode}</span>
                </div>
              </div>
              <button
                onClick={() => setActiveTab('traceability')}
                className="text-xs font-bold text-[#176B48] hover:underline"
              >
                Inspect Report →
              </button>
            </div>

          </div>

          {/* Right Column: Information, Pricing, Quantity & Buy Actions */}
          <div className="lg:col-span-6 space-y-6">
            
            {/* Category & Tagline Badge */}
            <div className="flex flex-wrap items-center gap-2">
              <span className="text-[11px] font-bold uppercase tracking-wider text-[#176B48] bg-[#D9EBDD] px-3 py-1 rounded-full">
                {product.category}
              </span>
              <span className="text-[11px] font-bold text-[#79543B] bg-[#E7B957]/20 border border-[#E7B957]/40 px-3 py-1 rounded-full flex items-center gap-1">
                <Sparkles className="w-3 h-3 text-[#E7B957]" />
                &ldquo;{OFFICIAL_TAGLINE}&rdquo;
              </span>
            </div>

            {/* Product Title & Subtitle */}
            <div className="space-y-1">
              <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#174C35]">
                {product.name}
              </h1>
              <p className="text-sm font-semibold text-[#176B48]">
                {product.subtitle}
              </p>
            </div>

            {/* Price Display */}
            <div className="bg-white/70 backdrop-blur-md p-4 rounded-2xl border border-white/80 inline-block w-full">
              <div className="flex items-baseline gap-2">
                <span className="text-xs text-[#79543B] uppercase font-semibold">Configured Price:</span>
                <span className="font-heading text-3xl sm:text-4xl font-bold text-[#176B48]">
                  ₹{currentPack.price}
                </span>
                <span className="text-xs text-[#79543B]">
                  per {currentPack.size} (Inclusive of local batch testing)
                </span>
              </div>
              {currentPack.discountNote && (
                <p className="text-[11px] font-semibold text-[#174C35] mt-1 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#176B48]" />
                  {currentPack.discountNote}
                </p>
              )}
            </div>

            {/* Short Description */}
            <p className="text-sm text-[#174C35]/85 leading-relaxed">
              {product.fullDescription}
            </p>

            {/* Key Benefits Bullet List */}
            <div className="space-y-2 pt-2">
              <span className="text-xs font-bold uppercase tracking-wider text-[#79543B] block">
                Product Benefits & Safeguards:
              </span>
              <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-[#174C35]">
                {product.features.map((feature, i) => (
                  <li key={i} className="flex items-start gap-2 bg-white/50 p-2 rounded-xl border border-white">
                    <Check className="w-4 h-4 text-[#176B48] shrink-0 mt-0.5" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pack Size Selection */}
            <div className="space-y-2 pt-2">
              <div className="flex items-center justify-between">
                <label className="text-xs font-bold uppercase tracking-wider text-[#79543B]">
                  Select Packaging Size:
                </label>
                <span className="text-[11px] text-[#79543B] font-mono">
                  SKU: {currentPack.sku}
                </span>
              </div>
              <div className="grid grid-cols-3 gap-2.5">
                {product.packSizes.map((pack) => (
                  <button
                    key={pack.size}
                    type="button"
                    onClick={() => setSelectedPackSize(pack.size)}
                    className={`p-3 rounded-2xl text-left border transition-all ${
                      selectedPackSize === pack.size
                        ? 'bg-[#174C35] text-white border-[#174C35] shadow-md'
                        : 'bg-white/80 text-[#174C35] border-[#A8C5A0]/40 hover:bg-white'
                    }`}
                  >
                    <div className="font-bold text-xs">{pack.size}</div>
                    <div className="text-[11px] font-semibold opacity-90 mt-0.5">₹{pack.price}</div>
                    {pack.popular && (
                      <span className="inline-block mt-1 text-[9px] font-black uppercase px-1.5 py-0.2 bg-[#E7B957] text-[#174C35] rounded">
                        Popular
                      </span>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity Selector & Action Buttons */}
            {!isComingSoon ? (
              <div className="space-y-4 pt-2">
                <div className="flex items-center gap-4">
                  <div className="flex items-center border border-[#A8C5A0]/50 rounded-2xl bg-white p-1 shadow-xs">
                    <button
                      onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                      className="w-9 h-9 flex items-center justify-center text-[#174C35] hover:bg-[#F8F6EC] rounded-xl transition-colors"
                    >
                      <Minus className="w-4 h-4" />
                    </button>
                    <span className="w-10 text-center font-bold text-sm text-[#174C35]">
                      {quantity}
                    </span>
                    <button
                      onClick={() => setQuantity((q) => q + 1)}
                      className="w-9 h-9 flex items-center justify-center text-[#174C35] hover:bg-[#F8F6EC] rounded-xl transition-colors"
                    >
                      <Plus className="w-4 h-4" />
                    </button>
                  </div>

                  <button
                    onClick={handleAddToCart}
                    className="flex-1 bg-gradient-to-r from-[#176B48] to-[#174C35] text-white py-3.5 px-6 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <ShoppingBag className="w-4 h-4" />
                    <span>ADD TO CART • ₹{currentPack.price * quantity}</span>
                  </button>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <Link
                    href="/checkout"
                    onClick={handleAddToCart}
                    className="w-full bg-[#174C35] hover:bg-[#0f3524] text-white py-3 rounded-xl font-bold text-xs text-center transition-all shadow-md"
                  >
                    BUY NOW
                  </Link>
                  <Link
                    href={`/bulk-enquiry?product=${product.slug}`}
                    className="w-full bg-white hover:bg-[#F8F6EC] text-[#174C35] border border-[#A8C5A0]/60 py-3 rounded-xl font-bold text-xs text-center transition-all flex items-center justify-center gap-1.5"
                  >
                    <Building2 className="w-3.5 h-3.5 text-[#176B48]" />
                    <span>REQUEST BULK QUOTE</span>
                  </Link>
                </div>
              </div>
            ) : (
              <div className="bg-[#E7B957]/15 border-2 border-[#E7B957] rounded-2xl p-5 space-y-3">
                <div className="flex items-center gap-2 text-[#79543B] font-bold text-sm">
                  <Sparkles className="w-4 h-4 text-[#E7B957]" />
                  <span>Phase 2 Offering in Development</span>
                </div>
                <p className="text-xs text-[#174C35]/90 leading-relaxed">
                  Gardening kits are currently undergoing prototyping with urban kitchen gardeners. Enter your contact details in our enquiry form to reserve early access.
                </p>
                <Link
                  href="/contact#waitlist"
                  className="inline-block bg-[#174C35] text-white text-xs font-bold px-5 py-2.5 rounded-xl shadow-md"
                >
                  Join Waitlist
                </Link>
              </div>
            )}

            {/* Commercial B2B note */}
            <div className="p-3.5 rounded-2xl bg-white/50 border border-white text-xs text-[#79543B] flex items-center justify-between">
              <span>Need over 100 kg for farms, nurseries, or landscape parks?</span>
              <Link href="/bulk-enquiry" className="font-bold text-[#176B48] hover:underline">
                Get Wholesale Tier →
              </Link>
            </div>

          </div>

        </div>

        {/* 5 Product Detail Tabs */}
        <div className="bg-white/80 backdrop-blur-2xl rounded-3xl p-6 sm:p-10 border-2 border-white shadow-xl mb-16">
          
          {/* Tab Navigation Header */}
          <div className="flex items-center gap-2 overflow-x-auto border-b border-[#A8C5A0]/30 pb-4 mb-8">
            {[
              { id: 'overview', label: '1. Overview', icon: Layers },
              { id: 'usage', label: '2. Usage Instructions', icon: Leaf },
              { id: 'specs', label: '3. Product Information', icon: FileText },
              { id: 'traceability', label: '4. Quality & Traceability', icon: QrCode },
              { id: 'faqs', label: '5. FAQs', icon: HelpCircle },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all whitespace-nowrap ${
                    activeTab === tab.id
                      ? 'bg-[#174C35] text-white shadow-md'
                      : 'bg-white/60 text-[#174C35] hover:bg-white border border-[#A8C5A0]/20'
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </div>

          {/* TAB 1: OVERVIEW */}
          {activeTab === 'overview' && (
            <div className="space-y-6 text-sm text-[#174C35] animate-in fade-in duration-200">
              <div className="space-y-2">
                <h3 className="font-heading text-xl font-bold text-[#174C35]">
                  Biological Restoration for Tired Soil
                </h3>
                <p className="text-[#174C35]/80 leading-relaxed max-w-4xl">
                  {product.fullDescription}
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4">
                <div className="bg-[#F8F6EC] p-5 rounded-2xl border border-[#A8C5A0]/30 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#D9EBDD] flex items-center justify-center text-[#176B48]">
                    <Leaf className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm">Pre-Decomposed Feeds</h4>
                  <p className="text-xs text-[#79543B] leading-relaxed">
                    Zero raw or foul waste is ever applied directly to earthworms. 15–20 days of thermophilic cooling ensures safety.
                  </p>
                </div>

                <div className="bg-[#F8F6EC] p-5 rounded-2xl border border-[#A8C5A0]/30 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#E7B957]/30 flex items-center justify-center text-[#79543B]">
                    <ShieldCheck className="w-4 h-4 text-[#174C35]" />
                  </div>
                  <h4 className="font-bold text-sm">4mm Rotary Sieved</h4>
                  <p className="text-xs text-[#79543B] leading-relaxed">
                    Granular, odorless, and aerated texture that dissolves effortlessly into seedling trays and root zones.
                  </p>
                </div>

                <div className="bg-[#F8F6EC] p-5 rounded-2xl border border-[#A8C5A0]/30 space-y-2">
                  <div className="w-8 h-8 rounded-lg bg-[#A8C5A0]/30 flex items-center justify-center text-[#174C35]">
                    <CheckCircle2 className="w-4 h-4" />
                  </div>
                  <h4 className="font-bold text-sm">SHG Co-Ownership</h4>
                  <p className="text-xs text-[#79543B] leading-relaxed">
                    Every rupee spent directly sustains green livelihoods and economic agency for rural women producers.
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* TAB 2: USAGE INSTRUCTIONS */}
          {activeTab === 'usage' && (
            <div className="space-y-6 text-sm text-[#174C35] animate-in fade-in duration-200">
              <div className="space-y-2">
                <h3 className="font-heading text-xl font-bold text-[#174C35]">
                  Recommended Application Rates & Timing
                </h3>
                <p className="text-xs text-[#79543B] leading-relaxed">
                  General guidelines based on standard agronomic soil preparation practices. Does not replace crop-specific soil testing.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {product.applicationGuides.map((guide, idx) => (
                  <div
                    key={idx}
                    className="bg-[#F8F6EC] p-5 rounded-2xl border border-[#A8C5A0]/30 space-y-2"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="font-bold text-sm text-[#174C35]">{guide.target}</h4>
                      <span className="text-[10px] font-bold uppercase text-[#176B48] bg-[#D9EBDD] px-2 py-0.5 rounded">
                        Application Guide
                      </span>
                    </div>
                    <div className="text-xs space-y-1">
                      <p>
                        <strong className="text-[#79543B]">Recommended Rate:</strong> {guide.rate}
                      </p>
                      <p>
                        <strong className="text-[#79543B]">Frequency:</strong> {guide.frequency}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="bg-[#D9EBDD]/50 p-4 rounded-xl border border-[#A8C5A0]/40 text-xs text-[#174C35]">
                <strong className="font-bold block mb-1">Application Best Practice:</strong>
                Always mix the vermicompost gently into the top 2–3 inches of subsoil and water thoroughly after application to activate dormant beneficial soil bacteria.
              </div>
            </div>
          )}

          {/* TAB 3: PRODUCT INFORMATION / SPECS */}
          {activeTab === 'specs' && (
            <div className="space-y-6 text-sm text-[#174C35] animate-in fade-in duration-200">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#174C35]">
                    Technical Specifications & FCO Benchmarks
                  </h3>
                  <p className="text-xs text-[#79543B]">
                    Governed by the Fertiliser (Inorganic, Organic or Mixed) Control Order (FCO) 1985 Schedule IV.
                  </p>
                </div>
                <span className="text-xs font-bold text-[#176B48] bg-[#D9EBDD] px-3 py-1 rounded-full border border-[#A8C5A0]/40">
                  Verified Lab Parameters
                </span>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left text-xs border-collapse">
                  <thead>
                    <tr className="bg-[#F8F6EC] border-b border-[#A8C5A0]/30 text-[#79543B]">
                      <th className="p-3 font-bold uppercase tracking-wider">Parameter</th>
                      <th className="p-3 font-bold uppercase tracking-wider">Dharti Saheli Standard</th>
                      <th className="p-3 font-bold uppercase tracking-wider">Testing Standard / Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#A8C5A0]/20">
                    {Object.entries(product.specifications).map(([key, value]) => (
                      <tr key={key} className="hover:bg-white/60">
                        <td className="p-3 font-semibold text-[#174C35]">{key}</td>
                        <td className="p-3 text-[#176B48] font-bold">{value}</td>
                        <td className="p-3 text-[#79543B]">Adheres to FCO 1985 Guidelines</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}

          {/* TAB 4: QUALITY & TRACEABILITY */}
          {activeTab === 'traceability' && (
            <div className="space-y-6 text-sm text-[#174C35] animate-in fade-in duration-200">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#174C35]">
                    Batch Traceability Record • {batchData.batchNumber}
                  </h3>
                  <p className="text-xs text-[#79543B]">
                    Every bag carries a batch QR linking directly to its producing SHG unit and laboratory analysis.
                  </p>
                </div>
                <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#176B48] text-white text-xs font-bold">
                  <CheckCircle2 className="w-3.5 h-3.5" />
                  <span>{batchData.complianceStatus}</span>
                </div>
              </div>

              {/* Dynamic Batch Information Panel */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-xs">
                <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/30">
                  <span className="text-[10px] text-[#79543B] font-semibold uppercase block">Batch Number</span>
                  <span className="font-mono text-base font-bold text-[#174C35] block mt-0.5">{batchData.batchNumber}</span>
                  <span className="text-[11px] text-[#79543B] block mt-1">Ref: {batchData.labReportNumber}</span>
                </div>

                <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/30">
                  <span className="text-[10px] text-[#79543B] font-semibold uppercase block">Production Date</span>
                  <span className="text-sm font-bold text-[#174C35] block mt-0.5">{batchData.productionDate}</span>
                  <span className="text-[11px] text-[#79543B] block mt-1">Harvested: {batchData.harvestDate}</span>
                </div>

                <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/30">
                  <span className="text-[10px] text-[#79543B] font-semibold uppercase block">Producer Group</span>
                  <span className="text-sm font-bold text-[#174C35] block mt-0.5">{batchData.shgUnit}</span>
                  <span className="text-[11px] text-[#79543B] block mt-1">{batchData.location}</span>
                </div>

                <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/30">
                  <span className="text-[10px] text-[#79543B] font-semibold uppercase block">Quality Supervisor</span>
                  <span className="text-sm font-bold text-[#174C35] block mt-0.5">{batchData.supervisorName}</span>
                  <span className="text-[11px] text-[#176B48] font-bold block mt-1">Lab Tested: {batchData.testedDate}</span>
                </div>
              </div>

              {/* Verified Chemical Metrics */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-[#D9EBDD] p-3 rounded-2xl border border-[#A8C5A0]/50">
                  <span className="text-[10px] font-semibold text-[#79543B] block">Tested Moisture</span>
                  <span className="text-lg font-bold text-[#174C35]">{batchData.moisturePercentage}%</span>
                </div>
                <div className="bg-[#D9EBDD] p-3 rounded-2xl border border-[#A8C5A0]/50">
                  <span className="text-[10px] font-semibold text-[#79543B] block">pH Level</span>
                  <span className="text-lg font-bold text-[#174C35]">{batchData.phValue}</span>
                </div>
                <div className="bg-[#D9EBDD] p-3 rounded-2xl border border-[#A8C5A0]/50">
                  <span className="text-[10px] font-semibold text-[#79543B] block">Total Organic Carbon</span>
                  <span className="text-lg font-bold text-[#174C35]">{batchData.organicCarbonPercentage}%</span>
                </div>
                <div className="bg-[#D9EBDD] p-3 rounded-2xl border border-[#A8C5A0]/50">
                  <span className="text-[10px] font-semibold text-[#79543B] block">C:N Ratio</span>
                  <span className="text-lg font-bold text-[#174C35]">{batchData.cnRatio}</span>
                </div>
              </div>

              {/* Verified Origins */}
              <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/30 text-xs">
                <strong className="text-[#174C35] block mb-1">Approved Feedstock Streams for This Batch:</strong>
                <ul className="list-disc list-inside space-y-1 text-[#79543B]">
                  {batchData.feedstockSources.map((src, i) => (
                    <li key={i}>{src}</li>
                  ))}
                </ul>
              </div>

              <div className="flex items-center justify-between pt-2">
                <p className="text-[11px] text-[#79543B] italic">
                  Note: Testing completed at {batchData.testedLabName}. Full certificate copies provided to institutional buyers.
                </p>
                <Link
                  href="/batch-traceability"
                  className="text-xs font-bold text-[#176B48] hover:underline"
                >
                  Search another batch QR →
                </Link>
              </div>
            </div>
          )}

          {/* TAB 5: FAQS */}
          {activeTab === 'faqs' && (
            <div className="space-y-4 text-xs sm:text-sm text-[#174C35] animate-in fade-in duration-200">
              <div className="space-y-2">
                <h3 className="font-heading text-xl font-bold text-[#174C35]">
                  Frequently Asked Questions
                </h3>
              </div>

              <div className="space-y-3">
                <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1">
                  <h4 className="font-bold text-[#174C35]">
                    How is Dharti Saheli vermicompost different from open garden compost?
                  </h4>
                  <p className="text-xs text-[#79543B] leading-relaxed">
                    Dharti Saheli vermicompost undergoes controlled earthworm digestion (Eisenia fetida) after a 15–20 day pre-decomposition stage. This produces a finer granular texture packed with microbial enzymes and plant growth regulators, screened to 4mm with strictly verified moisture levels.
                  </p>
                </div>

                <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1">
                  <h4 className="font-bold text-[#174C35]">
                    Can I use this for indoor and apartment balcony plants?
                  </h4>
                  <p className="text-xs text-[#79543B] leading-relaxed">
                    Yes! Our product is thoroughly matured, cured, and screened, resulting in an earthy forest scent with absolutely no foul odor or pest attractants. It is safe for indoor planters, succulents, and terrace herbs.
                  </p>
                </div>

                <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1">
                  <h4 className="font-bold text-[#174C35]">
                    How does the Batch QR code work?
                  </h4>
                  <p className="text-xs text-[#79543B] leading-relaxed">
                    Each bag is printed with a batch code. Scanning the QR code with your smartphone camera leads to our traceability tool where you can review which SHG unit prepared the batch, the test date, moisture levels, and official lab report references.
                  </p>
                </div>

                <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1">
                  <h4 className="font-bold text-[#174C35]">
                    Do you offer wholesale and bulk dispatch for commercial nurseries?
                  </h4>
                  <p className="text-xs text-[#79543B] leading-relaxed">
                    Yes, we specialize in institutional supply in 25kg, 50kg, and loose metric tonne quantities with clustered road transport. Please visit our Bulk Enquiry page to request a formal quotation.
                  </p>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </div>
  );
};

