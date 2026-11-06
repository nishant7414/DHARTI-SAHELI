'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search, X, ArrowRight, Sparkles } from 'lucide-react';
import { PRODUCTS } from '@/data/products';

interface SearchModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const SearchModal: React.FC<SearchModalProps> = ({ isOpen, onClose }) => {
  const [query, setQuery] = useState('');

  if (!isOpen) return null;

  const filteredProducts = PRODUCTS.filter((p) => {
    const q = query.toLowerCase();
    return (
      p.name.toLowerCase().includes(q) ||
      p.category.toLowerCase().includes(q) ||
      p.shortDescription.toLowerCase().includes(q) ||
      p.features.some((f) => f.toLowerCase().includes(q))
    );
  });

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto p-4 sm:p-6 md:p-20 flex items-start justify-center">
      <div 
        className="fixed inset-0 bg-[#174C35]/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      <div className="relative w-full max-w-2xl bg-[#F8F6EC] border border-white/80 rounded-3xl shadow-2xl overflow-hidden p-6 animate-in zoom-in-95 duration-200">
        <div className="flex items-center justify-between pb-4 border-b border-[#A8C5A0]/30">
          <div className="flex items-center gap-2">
            <Search className="w-5 h-5 text-[#176B48]" />
            <h3 className="font-heading text-lg font-bold text-[#174C35]">
              Search Dharti Saheli
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#174C35] hover:bg-[#174C35] hover:text-white transition-colors"
          >
            <X className="w-4 h-4" />
          </button>
        </div>

        <div className="mt-4 relative">
          <input
            type="text"
            placeholder="Search vermicompost, bulk organic compost, soil specs, pack sizes..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full bg-white border border-[#A8C5A0]/50 rounded-2xl py-3 pl-11 pr-4 text-sm text-[#174C35] placeholder-[#79543B]/60 focus:outline-hidden focus:ring-2 focus:ring-[#176B48] shadow-inner"
          />
          <Search className="w-4 h-4 text-[#79543B] absolute left-4 top-3.5" />
        </div>

        {/* Quick Suggestions */}
        <div className="mt-3 flex items-center gap-2 flex-wrap text-xs text-[#79543B]">
          <span className="font-semibold text-[#174C35]">Quick tags:</span>
          {['Vermicompost', '10 kg Bag', 'FCO Standards', 'Organic Compost', 'Bulk Supply', 'Gardening Kits'].map((tag) => (
            <button
              key={tag}
              onClick={() => setQuery(tag)}
              className="bg-white/80 hover:bg-white px-2.5 py-1 rounded-full border border-[#A8C5A0]/40 transition-colors"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Results */}
        <div className="mt-6 space-y-3 max-h-80 overflow-y-auto pr-1">
          {filteredProducts.length === 0 ? (
            <div className="text-center py-8 text-sm text-[#79543B]">
              No products found matching &ldquo;{query}&rdquo;. Try searching for &ldquo;Vermicompost&rdquo; or &ldquo;Compost&rdquo;.
            </div>
          ) : (
            filteredProducts.map((p) => (
              <Link
                key={p.id}
                href={`/shop/${p.slug}`}
                onClick={onClose}
                className="flex items-center gap-4 p-3 rounded-2xl bg-white/70 hover:bg-white border border-white transition-all shadow-xs hover:shadow-md group"
              >
                <div className="w-14 h-14 relative bg-[#F8F6EC] rounded-xl overflow-hidden shrink-0 border border-[#A8C5A0]/20 flex items-center justify-center">
                  <Image src={p.image} alt={p.name} fill className="object-contain p-1" />
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2">
                    <span className="text-[10px] font-bold text-[#176B48] bg-[#D9EBDD] px-2 py-0.5 rounded-full uppercase">
                      {p.category}
                    </span>
                    {p.badge && (
                      <span className="text-[10px] font-bold text-[#79543B] bg-[#E7B957]/20 px-2 py-0.5 rounded-full">
                        {p.badge}
                      </span>
                    )}
                  </div>
                  <h4 className="font-heading font-bold text-sm text-[#174C35] group-hover:text-[#176B48] transition-colors mt-0.5">
                    {p.name}
                  </h4>
                  <p className="text-xs text-[#79543B] line-clamp-1">{p.subtitle}</p>
                </div>
                <ArrowRight className="w-4 h-4 text-[#176B48] opacity-0 group-hover:opacity-100 transition-opacity" />
              </Link>
            ))
          )}
        </div>

        <div className="mt-6 pt-4 border-t border-[#A8C5A0]/30 flex items-center justify-between text-xs text-[#79543B]">
          <span className="flex items-center gap-1 font-semibold text-[#174C35]">
            <Sparkles className="w-3.5 h-3.5 text-[#E7B957]" />
            Official Tagline: &ldquo;Don&apos;t panic, it&apos;s organic.&rdquo;
          </span>
          <Link
            href="/shop"
            onClick={onClose}
            className="text-[#176B48] font-bold hover:underline"
          >
            Browse all products →
          </Link>
        </div>
      </div>
    </div>
  );
};

