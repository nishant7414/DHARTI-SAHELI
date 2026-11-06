'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  X, 
  Trash2, 
  Plus, 
  Minus, 
  ShoppingBag, 
  ArrowRight, 
  Sparkles, 
  Truck, 
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { useCart } from '@/context/CartContext';

export const CartDrawer: React.FC = () => {
  const { 
    items, 
    removeItem, 
    updateQuantity, 
    subtotal, 
    deliveryFee, 
    discount, 
    total, 
    isCartOpen, 
    setIsCartOpen,
    appliedPromo,
    applyPromoCode
  } = useCart();

  const [promoInput, setPromoInput] = useState('');
  const [promoError, setPromoError] = useState('');

  if (!isCartOpen) return null;

  const handleApplyPromo = (e: React.FormEvent) => {
    e.preventDefault();
    setPromoError('');
    const res = applyPromoCode(promoInput);
    if (!res.success) {
      setPromoError(res.message);
    } else {
      setPromoInput('');
    }
  };

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-[#174C35]/40 backdrop-blur-sm transition-opacity"
        onClick={() => setIsCartOpen(false)}
      />

      <div className="fixed inset-y-0 right-0 max-w-full flex pl-10">
        <div className="w-screen max-w-md bg-[#F8F6EC]/95 backdrop-blur-2xl border-l border-white/80 shadow-2xl flex flex-col justify-between animate-in slide-in-from-right duration-300">
          
          {/* Header */}
          <div className="p-6 border-b border-[#A8C5A0]/30 flex items-center justify-between bg-white/40">
            <div className="flex items-center gap-2">
              <ShoppingBag className="w-5 h-5 text-[#174C35]" />
              <h2 className="font-heading text-xl font-bold text-[#174C35]">
                Your Shopping Bag
              </h2>
              <span className="text-xs bg-[#A8C5A0]/30 text-[#174C35] font-semibold px-2 py-0.5 rounded-full">
                {items.length} {items.length === 1 ? 'item' : 'items'}
              </span>
            </div>
            <button
              onClick={() => setIsCartOpen(false)}
              className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-[#174C35] hover:bg-[#174C35] hover:text-white transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* Cart Items List */}
          <div className="flex-1 overflow-y-auto p-6 space-y-4">
            {items.length === 0 ? (
              <div className="text-center py-16 space-y-4">
                <div className="w-16 h-16 rounded-full bg-[#D9EBDD] flex items-center justify-center text-[#176B48] mx-auto">
                  <ShoppingBag className="w-8 h-8" />
                </div>
                <h3 className="font-heading text-lg font-bold text-[#174C35]">
                  Your bag is empty
                </h3>
                <p className="text-xs text-[#79543B] max-w-xs mx-auto">
                  Bring living nutrition to your soil with our women-produced vermicompost and organic compost.
                </p>
                <div className="pt-2">
                  <Link
                    href="/shop"
                    onClick={() => setIsCartOpen(false)}
                    className="inline-flex items-center gap-2 bg-[#176B48] text-white px-5 py-2.5 rounded-full text-xs font-semibold hover:bg-[#174C35] transition-all shadow-md"
                  >
                    <span>Explore Products</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            ) : (
              <>
                {/* Free Delivery Bar */}
                <div className="bg-white/70 p-3 rounded-xl border border-white text-xs">
                  {subtotal >= 499 ? (
                    <div className="flex items-center gap-2 text-[#176B48] font-bold">
                      <Truck className="w-4 h-4" />
                      <span>Congratulations! You unlocked FREE cluster delivery!</span>
                    </div>
                  ) : (
                    <div className="space-y-1">
                      <div className="flex items-center justify-between text-[#174C35]">
                        <span className="flex items-center gap-1.5 font-medium">
                          <Truck className="w-3.5 h-3.5 text-[#176B48]" /> Add ₹{499 - subtotal} more for FREE delivery
                        </span>
                        <span className="font-bold">{Math.round((subtotal / 499) * 100)}%</span>
                      </div>
                      <div className="w-full bg-[#D9EBDD] h-1.5 rounded-full overflow-hidden">
                        <div 
                          className="bg-[#176B48] h-full rounded-full transition-all duration-300"
                          style={{ width: `${Math.min(100, (subtotal / 499) * 100)}%` }}
                        />
                      </div>
                    </div>
                  )}
                </div>

                {/* Items */}
                {items.map((item) => (
                  <div
                    key={item.sku}
                    className="bg-white/80 backdrop-blur-md p-4 rounded-2xl border border-white/80 shadow-sm flex gap-4 transition-all hover:shadow-md"
                  >
                    <div className="w-16 h-20 relative rounded-xl bg-[#F8F6EC] border border-[#A8C5A0]/20 flex items-center justify-center p-1 overflow-hidden shrink-0">
                      <Image
                        src={item.image}
                        alt={item.productName}
                        fill
                        className="object-contain p-1"
                      />
                    </div>

                    <div className="flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-start justify-between gap-1">
                          <h4 className="font-heading font-bold text-sm text-[#174C35] line-clamp-1">
                            {item.productName}
                          </h4>
                          <button
                            onClick={() => removeItem(item.sku)}
                            className="text-[#79543B]/60 hover:text-red-600 transition-colors"
                            title="Remove item"
                          >
                            <Trash2 className="w-3.5 h-3.5" />
                          </button>
                        </div>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-xs bg-[#D9EBDD] text-[#174C35] font-semibold px-2 py-0.5 rounded-md">
                            {item.selectedSize}
                          </span>
                          <span className="text-[10px] text-[#79543B] font-mono">
                            {item.sku}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border border-[#A8C5A0]/40 rounded-lg bg-white overflow-hidden shadow-xs">
                          <button
                            onClick={() => updateQuantity(item.sku, -1)}
                            className="w-7 h-7 flex items-center justify-center text-[#174C35] hover:bg-[#F8F6EC]"
                          >
                            <Minus className="w-3 h-3" />
                          </button>
                          <span className="w-8 text-center text-xs font-bold text-[#174C35]">
                            {item.quantity}
                          </span>
                          <button
                            onClick={() => updateQuantity(item.sku, 1)}
                            className="w-7 h-7 flex items-center justify-center text-[#174C35] hover:bg-[#F8F6EC]"
                          >
                            <Plus className="w-3 h-3" />
                          </button>
                        </div>

                        <span className="font-bold text-sm text-[#174C35]">
                          ₹{item.unitPrice * item.quantity}
                        </span>
                      </div>
                    </div>
                  </div>
                ))}

                {/* Promo Code Input */}
                <form onSubmit={handleApplyPromo} className="pt-2">
                  <div className="flex gap-2">
                    <input
                      type="text"
                      placeholder="Promo code (e.g. ORGANIC10)"
                      value={promoInput}
                      onChange={(e) => setPromoInput(e.target.value)}
                      className="flex-1 bg-white/80 border border-[#A8C5A0]/40 rounded-xl px-3 py-2 text-xs text-[#174C35] focus:outline-hidden focus:ring-1 focus:ring-[#176B48]"
                    />
                    <button
                      type="submit"
                      className="bg-[#174C35] hover:bg-[#176B48] text-white text-xs font-bold px-4 py-2 rounded-xl transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                  {appliedPromo && (
                    <p className="text-[11px] text-[#176B48] font-semibold flex items-center gap-1 mt-1.5">
                      <CheckCircle2 className="w-3 h-3" />
                      Promo &ldquo;{appliedPromo}&rdquo; active!
                    </p>
                  )}
                  {promoError && (
                    <p className="text-[11px] text-red-600 mt-1">{promoError}</p>
                  )}
                </form>
              </>
            )}
          </div>

          {/* Footer Summary & Checkout */}
          {items.length > 0 && (
            <div className="p-6 border-t border-[#A8C5A0]/30 bg-white/70 space-y-3">
              <div className="space-y-1.5 text-xs text-[#174C35]/90">
                <div className="flex justify-between">
                  <span>Subtotal</span>
                  <span className="font-semibold text-sm">₹{subtotal}</span>
                </div>
                {discount > 0 && (
                  <div className="flex justify-between text-[#176B48] font-semibold">
                    <span>Discount ({appliedPromo})</span>
                    <span>- ₹{discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span className="flex items-center gap-1">
                    Estimated Delivery
                    <span className="text-[10px] text-[#79543B]">(Free over ₹499)</span>
                  </span>
                  <span>{deliveryFee === 0 ? <strong className="text-[#176B48]">FREE</strong> : `₹${deliveryFee}`}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#A8C5A0]/20 text-base font-bold text-[#174C35]">
                  <span>Total Due</span>
                  <span className="font-heading text-lg text-[#176B48]">₹{total}</span>
                </div>
              </div>

              {/* Tagline reminder badge */}
              <div className="py-1 px-2.5 rounded-lg bg-[#E7B957]/15 border border-[#E7B957]/30 text-center">
                <span className="text-[10px] font-black text-[#79543B] uppercase tracking-wider">
                  <Sparkles className="w-2.5 h-2.5 inline mr-1 text-[#E7B957]" />
                  &ldquo;Don&apos;t panic, it&apos;s organic.&rdquo;
                </span>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2 pt-1">
                <Link
                  href="/checkout"
                  onClick={() => setIsCartOpen(false)}
                  className="w-full bg-gradient-to-r from-[#176B48] to-[#174C35] text-white py-3.5 rounded-xl font-bold text-sm flex items-center justify-center gap-2 shadow-lg hover:shadow-xl transition-all duration-200 hover:-translate-y-0.5"
                >
                  <span>Proceed to Demo Checkout</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center justify-between text-xs pt-1">
                  <Link
                    href="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="text-[#174C35] hover:underline font-semibold"
                  >
                    View detailed bag & breakdown
                  </Link>
                  <span className="text-[10px] text-[#79543B] flex items-center gap-1">
                    <ShieldCheck className="w-3 h-3 text-[#176B48]" /> Safe & Traceable
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

