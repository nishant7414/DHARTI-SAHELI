'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  Search, 
  ShoppingBag, 
  ArrowRight, 
  Check, 
  Sparkles, 
  Filter, 
  SlidersHorizontal,
  Eye,
  Building2,
  FileText,
  ShieldCheck,
  CheckCircle2,
  X
} from 'lucide-react';
import { PRODUCTS, OFFICIAL_TAGLINE } from '@/data/products';
import { Product } from '@/types';
import { useCart } from '@/context/CartContext';

export default function ShopPage() {
  const { addItem } = useCart();
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [sortBy, setSortBy] = useState<'featured' | 'price-low' | 'price-high'>('featured');
  const [selectedPackMap, setSelectedPackMap] = useState<Record<string, string>>({
    vermicompost: '10 kg',
    'organic-compost': '25 kg Retail Sack',
    'gardening-kits': 'Balcony Edibles Starter Kit',
  });

  // Quick View Modal
  const [quickViewProduct, setQuickViewProduct] = useState<Product | null>(null);

  const categories = ['All', 'Vermicompost', 'Organic Compost', 'Gardening Kits'];

  const filteredProducts = useMemo(() => {
    return PRODUCTS.filter((p) => {
      const matchesCategory = selectedCategory === 'All' || p.category === selectedCategory;
      const q = searchQuery.toLowerCase();
      const matchesSearch =
        p.name.toLowerCase().includes(q) ||
        p.shortDescription.toLowerCase().includes(q) ||
        p.features.some((f) => f.toLowerCase().includes(q));
      return matchesCategory && matchesSearch;
    }).sort((a, b) => {
      if (sortBy === 'price-low') {
        return (a.packSizes[0]?.price || 0) - (b.packSizes[0]?.price || 0);
      }
      if (sortBy === 'price-high') {
        return (b.packSizes[0]?.price || 0) - (a.packSizes[0]?.price || 0);
      }
      return 0;
    });
  }, [selectedCategory, searchQuery, sortBy]);

  const handlePackChange = (productId: string, size: string) => {
    setSelectedPackMap((prev) => ({ ...prev, [productId]: size }));
  };

  const handleAddToCart = (product: Product) => {
    const selectedSize = selectedPackMap[product.id] || product.packSizes[0].size;
    const pack = product.packSizes.find((p) => p.size === selectedSize) || product.packSizes[0];
    addItem({
      productId: product.id,
      productName: product.name,
      productSlug: product.slug,
      image: product.image,
      selectedSize: pack.size,
      sku: pack.sku,
      unitPrice: pack.price,
      quantity: 1,
    });
  };

  return (
    <div className="py-12 sm:py-16 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-1/3 w-96 h-96 bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7B957]/20 border border-[#E7B957]/50 text-[#174C35] text-xs font-bold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5 text-[#E7B957]" />
            Official D2C & Institutional Catalogue
          </div>
          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#174C35] tracking-tight">
            FIND THE RIGHT GOODNESS FOR YOUR SOIL.
          </h1>
          <p className="text-base sm:text-lg text-[#174C35]/80">
            Explore our collection of nature-inspired soil solutions.
          </p>

          <div className="pt-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#79543B] bg-white/80 border border-[#E7B957]/60 px-4 py-1.5 rounded-full inline-block backdrop-blur-md shadow-xs">
              &ldquo;{OFFICIAL_TAGLINE}&rdquo;
            </span>
          </div>
        </div>

        {/* Filter and Search Bar */}
        <div className="bg-white/80 backdrop-blur-xl p-4 sm:p-5 rounded-3xl border border-white/90 shadow-md mb-10 flex flex-col md:flex-row items-center justify-between gap-4">
          
          {/* Category Tabs */}
          <div className="flex items-center gap-1.5 overflow-x-auto w-full md:w-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-xs font-bold transition-all whitespace-nowrap ${
                  selectedCategory === cat
                    ? 'bg-[#174C35] text-white shadow-sm'
                    : 'bg-white/60 text-[#174C35] hover:bg-white border border-[#A8C5A0]/30'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search & Sort Controls */}
          <div className="flex items-center gap-3 w-full md:w-auto">
            <div className="relative flex-1 md:w-64">
              <input
                type="text"
                placeholder="Search products..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full bg-white border border-[#A8C5A0]/50 rounded-full py-2 pl-9 pr-4 text-xs text-[#174C35] placeholder-[#79543B]/60 focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
              />
              <Search className="w-3.5 h-3.5 text-[#79543B] absolute left-3 top-2.5" />
            </div>

            <div className="relative shrink-0">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value as any)}
                className="bg-white border border-[#A8C5A0]/50 rounded-full py-2 px-3 text-xs text-[#174C35] font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
              >
                <option value="featured">Sort: Featured</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {filteredProducts.map((product) => {
            const selectedSize = selectedPackMap[product.id] || product.packSizes[0].size;
            const currentPack = product.packSizes.find((p) => p.size === selectedSize) || product.packSizes[0];
            const isComingSoon = product.status === 'coming_soon';

            return (
              <div
                key={product.id}
                className="bg-white/80 backdrop-blur-xl rounded-3xl border border-white/90 p-6 shadow-[0_10px_30px_-5px_rgba(23,76,53,0.08)] hover:shadow-2xl hover:-translate-y-1.5 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  {/* Category & Badge */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B48] bg-[#D9EBDD] px-2.5 py-1 rounded-full">
                      {product.category}
                    </span>
                    {product.badge && (
                      <span className="text-[10px] font-bold tracking-wider text-[#79543B] bg-[#E7B957]/20 border border-[#E7B957]/40 px-2.5 py-1 rounded-full">
                        {product.badge}
                      </span>
                    )}
                  </div>

                  {/* Packaging Visual */}
                  <div className="relative aspect-square max-w-[220px] mx-auto rounded-2xl bg-[#F8F6EC] border border-[#A8C5A0]/30 p-4 mb-5 flex items-center justify-center group-hover:scale-105 transition-transform duration-300 shadow-inner">
                    <Image
                      src={product.image}
                      alt={product.name}
                      fill
                      className="object-contain p-2"
                    />
                  </div>

                  {/* Tagline sticker */}
                  <div className="text-center mb-2">
                    <span className="text-[9px] font-extrabold uppercase tracking-widest text-[#79543B] bg-[#E7B957]/15 px-2 py-0.5 rounded-full inline-block">
                      &ldquo;{OFFICIAL_TAGLINE}&rdquo;
                    </span>
                  </div>

                  <h3 className="font-heading text-lg font-bold text-[#174C35] text-center mb-1.5">
                    {product.name}
                  </h3>

                  <p className="text-xs text-[#174C35]/80 text-center leading-relaxed mb-4 line-clamp-2">
                    {product.shortDescription}
                  </p>

                  {/* Pack Size Selector */}
                  <div className="mb-4">
                    <label className="text-[10px] font-bold uppercase tracking-wider text-[#79543B] block mb-1.5">
                      Select Pack Size:
                    </label>
                    <div className="grid grid-cols-2 sm:grid-cols-3 gap-1.5">
                      {product.packSizes.map((pack) => (
                        <button
                          key={pack.size}
                          type="button"
                          onClick={() => handlePackChange(product.id, pack.size)}
                          className={`py-1.5 px-1 rounded-xl text-xs font-bold border transition-all text-center ${
                            selectedSize === pack.size
                              ? 'bg-[#174C35] text-white border-[#174C35] shadow-xs'
                              : 'bg-white/80 text-[#174C35] border-[#A8C5A0]/40 hover:bg-white'
                          }`}
                        >
                          <div className="text-[10px] line-clamp-1">{pack.size}</div>
                          <div className="text-[9px] font-medium opacity-90">₹{pack.price}</div>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Price & Action Row */}
                <div className="pt-4 border-t border-[#A8C5A0]/20 space-y-2.5">
                  <div className="flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#79543B] uppercase font-semibold">Price</span>
                      <div className="font-heading text-2xl font-bold text-[#176B48]">
                        ₹{currentPack.price}
                        <span className="text-xs font-sans text-[#79543B] font-normal ml-1">
                          / {currentPack.size.split(' ')[0]}
                        </span>
                      </div>
                    </div>

                    <button
                      onClick={() => setQuickViewProduct(product)}
                      className="text-xs font-bold text-[#174C35] hover:text-[#176B48] flex items-center gap-1 bg-[#F8F6EC] px-2.5 py-1.5 rounded-lg border border-[#A8C5A0]/30 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Quick View</span>
                    </button>
                  </div>

                  <div className="grid grid-cols-2 gap-2 pt-1">
                    <Link
                      href={`/shop/${product.slug}`}
                      className="w-full bg-white text-[#174C35] hover:bg-[#F8F6EC] border border-[#A8C5A0]/50 py-2.5 rounded-xl font-bold text-xs text-center transition-colors shadow-xs"
                    >
                      VIEW DETAILS
                    </Link>

                    {isComingSoon ? (
                      <Link
                        href={`/shop/${product.slug}`}
                        className="w-full bg-[#E7B957] hover:bg-[#d8a845] text-[#174C35] py-2.5 rounded-xl font-bold text-xs text-center transition-colors shadow-sm"
                      >
                        JOIN WAITLIST
                      </Link>
                    ) : (
                      <button
                        onClick={() => handleAddToCart(product)}
                        className="w-full bg-gradient-to-r from-[#176B48] to-[#174C35] text-white py-2.5 rounded-xl font-bold text-xs flex items-center justify-center gap-1.5 shadow-md hover:shadow-lg transition-all"
                      >
                        <ShoppingBag className="w-3.5 h-3.5" />
                        <span>ADD TO CART</span>
                      </button>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Commercial & Bulk Supply Banner */}
        <div className="bg-gradient-to-r from-[#174C35] via-[#176B48] to-[#0f3524] rounded-3xl p-8 sm:p-10 text-white shadow-2xl flex flex-col lg:flex-row items-center justify-between gap-8 border border-white/20">
          <div className="space-y-3 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#E7B957]/20 border border-[#E7B957]/40 text-[#E7B957] text-xs font-bold uppercase tracking-wider">
              <Building2 className="w-3.5 h-3.5" />
              Institutional B2B Procurement
            </div>
            <h3 className="font-heading text-2xl sm:text-3xl font-bold text-white">
              Ordering More Than 100 kg or Metric Tonnes?
            </h3>
            <p className="text-xs sm:text-sm text-[#D9EBDD] max-w-2xl leading-relaxed">
              We provide formal laboratory test certificates, palletized 50kg sacks, and clustered mini-truck delivery for commercial nurseries, FPOs, orchards, and landscaping contractors.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <Link
              href="/bulk-enquiry"
              className="bg-[#E7B957] hover:bg-[#f5cf7c] text-[#174C35] px-7 py-3.5 rounded-full font-bold text-xs shadow-md transition-all duration-200 hover:scale-105"
            >
              REQUEST A BULK QUOTE
            </Link>
            <Link
              href="/batch-traceability"
              className="bg-white/10 hover:bg-white/20 text-white border border-white/30 px-6 py-3.5 rounded-full font-semibold text-xs transition-colors"
            >
              Inspect Quality Reports
            </Link>
          </div>
        </div>

      </div>

      {/* Quick View Modal */}
      {quickViewProduct && (
        <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-16 flex items-center justify-center">
          <div 
            className="fixed inset-0 bg-[#174C35]/60 backdrop-blur-md"
            onClick={() => setQuickViewProduct(null)}
          />
          <div className="relative w-full max-w-2xl bg-[#F8F6EC] border border-white rounded-3xl p-6 sm:p-8 shadow-2xl animate-in zoom-in-95">
            <button
              onClick={() => setQuickViewProduct(null)}
              className="absolute top-5 right-5 w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#174C35] hover:bg-[#174C35] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="relative aspect-square rounded-2xl bg-white border border-[#A8C5A0]/30 p-4 flex items-center justify-center">
                <Image
                  src={quickViewProduct.image}
                  alt={quickViewProduct.name}
                  fill
                  className="object-contain p-2"
                />
              </div>

              <div className="space-y-3">
                <span className="text-[10px] font-bold uppercase tracking-wider text-[#176B48] bg-[#D9EBDD] px-2.5 py-0.5 rounded-full">
                  {quickViewProduct.category}
                </span>
                <h3 className="font-heading text-xl font-bold text-[#174C35]">
                  {quickViewProduct.name}
                </h3>
                <p className="text-xs text-[#79543B] leading-relaxed">
                  {quickViewProduct.shortDescription}
                </p>

                <div className="pt-2 border-t border-[#A8C5A0]/20 space-y-1 text-xs text-[#174C35]">
                  <strong className="text-[10px] uppercase font-bold text-[#79543B] block">Highlights:</strong>
                  {quickViewProduct.features.slice(0, 3).map((f, i) => (
                    <div key={i} className="flex items-center gap-1.5">
                      <Check className="w-3.5 h-3.5 text-[#176B48] shrink-0" />
                      <span className="line-clamp-1">{f}</span>
                    </div>
                  ))}
                </div>

                <div className="pt-4 flex items-center gap-3">
                  <Link
                    href={`/shop/${quickViewProduct.slug}`}
                    onClick={() => setQuickViewProduct(null)}
                    className="flex-1 bg-[#174C35] hover:bg-[#176B48] text-white py-2.5 rounded-xl font-bold text-xs text-center transition-colors shadow-md"
                  >
                    Full Product Details
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

