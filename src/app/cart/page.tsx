'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShoppingBag, 
  Trash2, 
  Plus, 
  Minus, 
  ArrowRight, 
  Sparkles, 
  ShieldCheck, 
  Truck, 
  CheckCircle2, 
  Building2,
  FileText
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { OFFICIAL_TAGLINE } from '@/data/products';

export default function CartPage() {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    clearCart,
    subtotal, 
    deliveryFee, 
    discount, 
    total, 
    appliedPromo,
    applyPromoCode
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoMessage, setPromoMessage] = useState<{ type: 'error' | 'success'; text: string } | null>(null);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    if (!promoInput) return;
    const res = applyPromoCode(promoInput);
    if (res.success) {
      setPromoMessage({ type: 'success', text: res.message });
      setPromoInput('');
    } else {
      setPromoMessage({ type: 'error', text: res.message });
    }
  };

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-[500px] h-[500px] bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7B957]/20 border border-[#E7B957]/50 text-[#174C35] text-xs font-bold uppercase tracking-wider">
            <ShoppingBag className="w-3.5 h-3.5" />
            Shopping Bag & Order Summary
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#174C35] tracking-tight">
            YOUR ORGANIC SOIL BAG
          </h1>

          <p className="text-sm text-[#174C35]/80">
            &ldquo;{OFFICIAL_TAGLINE}&rdquo; • Thoughtfully packed by rural women SHG collectives.
          </p>
        </div>

        {items.length === 0 ? (
          <div className="max-w-md mx-auto text-center py-16 bg-white/80 backdrop-blur-xl rounded-3xl p-8 border border-white/90 shadow-xl space-y-5">
            <div className="w-20 h-20 rounded-full bg-[#D9EBDD] flex items-center justify-center text-[#176B48] mx-auto shadow-md">
              <ShoppingBag className="w-10 h-10" />
            </div>
            <h2 className="font-heading text-2xl font-bold text-[#174C35]">
              Your bag is empty
            </h2>
            <p className="text-xs sm:text-sm text-[#79543B] leading-relaxed">
              Explore our vermicompost packs (5kg, 10kg, 25kg) or matured organic compost to enrich your garden soil.
            </p>
            <div className="pt-2">
              <Link
                href="/shop"
                className="inline-flex items-center gap-2 bg-[#176B48] hover:bg-[#174C35] text-white px-7 py-3 rounded-full text-xs font-bold shadow-md transition-all hover:scale-105"
              >
                <span>Browse Products</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left: Items List */}
            <div className="lg:col-span-7 space-y-4">
              
              {/* Free delivery indicator */}
              <div className="bg-white/80 backdrop-blur-xl p-4 rounded-2xl border border-white shadow-sm flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-[#174C35]">
                  <Truck className="w-4 h-4 text-[#176B48]" />
                  <span>
                    {subtotal >= 499 ? (
                      <strong className="text-[#176B48]">Congratulations! You unlocked FREE cluster delivery!</strong>
                    ) : (
                      <>Add ₹{499 - subtotal} more for <strong>FREE Delivery</strong> (Orders ₹499+)</>
                    )}
                  </span>
                </div>
                <span className="text-[11px] font-bold text-[#79543B]">
                  Subtotal: ₹{subtotal}
                </span>
              </div>

              {/* Items Card List */}
              <div className="space-y-3">
                {items.map((item) => (
                  <div
                    key={item.sku}
                    className="bg-white/85 backdrop-blur-xl p-5 rounded-3xl border border-white/90 shadow-md flex items-center gap-5 transition-all hover:shadow-lg"
                  >
                    <div className="w-20 h-24 relative rounded-2xl bg-[#F8F6EC] border border-[#A8C5A0]/20 flex items-center justify-center p-2 shrink-0">
                      <Image
                        src={item.image}
                        alt={item.productName}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="flex-1 space-y-1">
                      <div className="flex items-start justify-between">
                        <Link
                          href={`/shop/${item.productSlug}`}
                          className="font-heading font-bold text-base text-[#174C35] hover:text-[#176B48] transition-colors"
                        >
                          {item.productName}
                        </Link>
                        <button
                          onClick={() => removeItem(item.sku)}
                          className="text-[#79543B]/60 hover:text-red-600 transition-colors p-1"
                          title="Remove item"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>

                      <div className="flex items-center gap-2">
                        <span className="text-xs font-bold text-[#176B48] bg-[#D9EBDD] px-2.5 py-0.5 rounded-full">
                          {item.selectedSize}
                        </span>
                        <span className="text-[11px] font-mono text-[#79543B]">
                          SKU: {item.sku}
                        </span>
                      </div>

                      <div className="flex items-center justify-between pt-3">
                        {/* Quantity Counter */}
                        <div className="flex items-center border border-[#A8C5A0]/40 rounded-xl bg-white overflow-hidden shadow-xs">
                          <button
                            onClick={() => updateQuantity(item.sku, -1)}
                            className="w-8 h-8 flex items-center justify-center text-[#174C35] hover:bg-[#F8F6EC] transition-colors"
                          >
                            <Minus className="w-3.5 h-3.5" />
                          </button>
                          <span className="w-9 text-center text-xs font-bold text-[#174C35]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.sku, 1)}
                            className="w-8 h-8 flex items-center justify-center text-[#174C35] hover:bg-[#F8F6EC] transition-colors"
                          >
                            <Plus className="w-3.5 h-3.5" />
                          </button>
                        </div>

                        {/* Price */}
                        <div className="text-right">
                          <span className="text-[10px] text-[#79543B] block">₹{item.unitPrice} each</span>
                          <span className="font-heading text-lg font-bold text-[#176B48]">
                            ₹{item.unitPrice * item.quantity}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Continue Shopping & Clear Actions */}
              <div className="flex items-center justify-between pt-2 text-xs">
                <Link
                  href="/shop"
                  className="font-bold text-[#176B48] hover:underline flex items-center gap-1"
                >
                  ← Continue Shopping
                </Link>
                <button
                  onClick={clearCart}
                  className="text-[#79543B] hover:text-red-600 transition-colors"
                >
                  Clear Bag
                </button>
              </div>

              {/* Bulk order notice */}
              <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/30 text-xs text-[#79543B] flex items-center justify-between">
                <span>Looking for farm or nursery truckloads (&gt;100 kg)?</span>
                <Link href="/bulk-enquiry" className="font-bold text-[#176B48] hover:underline flex items-center gap-1">
                  <Building2 className="w-3.5 h-3.5" />
                  <span>Request Bulk Quote</span>
                </Link>
              </div>

            </div>

            {/* Right: Order Summary & Checkout Card */}
            <div className="lg:col-span-5 space-y-6">
              
              <div className="bg-white/85 backdrop-blur-2xl rounded-3xl p-6 sm:p-8 border-2 border-white shadow-xl space-y-5">
                <h3 className="font-heading text-xl font-bold text-[#174C35]">
                  Order Summary
                </h3>

                {/* Promo Code Form */}
                <form onSubmit={handleApply} className="space-y-2">
                  <label className="text-xs font-bold text-[#79543B] block">
                    Promo Code (Try &ldquo;ORGANIC10&rdquo; or &ldquo;DHARTI2026&rdquo;)
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Enter promo code"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 bg-white border border-[#A8C5A0]/50 rounded-xl px-3 py-2 text-xs text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                    />
                    <button
                      type="submit"
                      className="bg-[#174C35] hover:bg-[#176B48] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {promoMessage && (
                    <p className={`text-[11px] ${promoMessage.type === 'success' ? 'text-[#176B48] font-bold' : 'text-red-600'}`}>
                      {promoMessage.text}
                    </p>
                  )}
                  {appliedPromo && (
                    <p className="text-[11px] text-[#176B48] font-semibold flex items-center gap-1">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      Promo &ldquo;{appliedPromo}&rdquo; active
                    </p>
                  )}
                </form>

                {/* Pricing Line Items */}
                <div className="space-y-2.5 pt-3 border-t border-[#A8C5A0]/20 text-xs text-[#174C35]">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold text-sm">₹{subtotal}</span>
                  </div>

                  {discount > 0 && (
                    <div className="flex justify-between text-[#176B48] font-bold">
                      <span>Discount ({appliedPromo})</span>
                      <span>- ₹{discount}</span>
                    </div>
                  )}

                  <div className="flex justify-between">
                    <span className="flex items-center gap-1">
                      Estimated Road Transport
                      <span className="text-[10px] text-[#79543B]">(Free above ₹499)</span>
                    </span>
                    <span>
                      {deliveryFee === 0 ? (
                        <strong className="text-[#176B48]">FREE</strong>
                      ) : (
                        `₹${deliveryFee}`
                      )}
                    </span>
                  </div>

                  <div className="flex justify-between pt-3 border-t border-[#A8C5A0]/30 text-base font-bold text-[#174C35]">
                    <span>Total Amount</span>
                    <span className="font-heading text-2xl text-[#176B48]">
                      ₹{total}
                    </span>
                  </div>
                </div>

                {/* Tagline sticker */}
                <div className="p-2.5 rounded-xl bg-[#E7B957]/15 border border-[#E7B957]/30 text-center">
                  <span className="text-[10px] font-black uppercase tracking-wider text-[#79543B]">
                    <Sparkles className="w-2.5 h-2.5 inline mr-1 text-[#E7B957]" />
                    &ldquo;Don&apos;t panic, it&apos;s organic.&rdquo;
                  </span>
                </div>

                {/* Checkout CTA Button */}
                <div className="space-y-2 pt-2">
                  <Link
                    href="/checkout"
                    className="w-full bg-gradient-to-r from-[#176B48] to-[#174C35] hover:to-[#0f3524] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-all duration-200 hover:-translate-y-0.5"
                  >
                    <span>PROCEED TO DEMO CHECKOUT</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-[#79543B] pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#176B48]" />
                    <span>FCO Lab-Tested • Direct SHG Support</span>
                  </div>
                </div>

              </div>

            </div>

          </div>
        )}

      </div>
    </div>
  );
}
