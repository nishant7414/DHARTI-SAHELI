'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { 
  ShieldCheck, 
  AlertTriangle, 
  CheckCircle2, 
  Truck, 
  CreditCard, 
  QrCode, 
  Sparkles, 
  ArrowRight, 
  Printer, 
  FileText,
  Clock
} from 'lucide-react';
import { useCart } from '@/context/CartContext';
import { OFFICIAL_TAGLINE } from '@/data/products';

export default function CheckoutPage() {
  const { items, subtotal, deliveryFee, discount, total, appliedPromo, clearCart } = useCart();

  const [customerInfo, setCustomerInfo] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    landmark: '',
    pinCode: '',
    district: '',
    state: 'Madhya Pradesh',
    paymentMethod: 'UPI',
    deliveryInstructions: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [orderConfirmed, setOrderConfirmed] = useState<any>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setCustomerInfo((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const orderId = `DS-ORD-${Date.now().toString().slice(-6)}`;
      const orderDetails = {
        orderId,
        date: '06 November 2026',
        items: [...items],
        subtotal,
        deliveryFee,
        discount,
        total,
        customerInfo,
        batchAllocated: 'DS-2026-B04',
        shgCluster: 'Annapurna Mahila Swayam Sahayata Samooh, Cluster Unit 1',
      };

      setOrderConfirmed(orderDetails);
      clearCart();
      setIsSubmitting(false);
    }, 1200);
  };

  const handlePrint = () => {
    if (typeof window !== 'undefined') {
      window.print();
    }
  };

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-[600px] h-[600px] bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-10">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto space-y-3">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7B957]/20 border border-[#E7B957]/50 text-[#174C35] text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-3.5 h-3.5" />
            Direct SHG Delivery Desk
          </div>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-[#174C35] tracking-tight">
            CHECKOUT & ORDER DISPATCH
          </h1>

          <p className="text-xs sm:text-sm text-[#174C35]/80">
            &ldquo;{OFFICIAL_TAGLINE}&rdquo; • Clustered dispatch from our women-managed rural facility.
          </p>
        </div>

        {/* Mandatory Demo Mode Warning Banner */}
        <div className="bg-[#E7B957]/20 border-2 border-[#E7B957] rounded-3xl p-5 sm:p-6 flex items-start gap-4 shadow-sm">
          <AlertTriangle className="w-6 h-6 text-[#79543B] shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm space-y-1">
            <strong className="text-[#79543B] font-black uppercase tracking-wider block">
              DEMO CHECKOUT & ENQUIRY WORKFLOW DISCLOSURE:
            </strong>
            <p className="text-[#174C35]/90 leading-relaxed font-medium">
              Payment gateway is operating in pilot demo mode. No financial charges will be deducted from your bank. Submitting this form simulates order generation and registers a trial dispatch request with our sales lead.
            </p>
          </div>
        </div>

        {/* Order Confirmed Invoice Modal / View */}
        {orderConfirmed ? (
          <div className="bg-white rounded-3xl p-6 sm:p-10 border-2 border-[#176B48] shadow-2xl space-y-8 animate-in zoom-in-95 print:p-0 print:border-none">
            {/* Header / Invoice Branding */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 border-b border-[#A8C5A0]/30 gap-4">
              <div>
                <span className="text-[10px] font-black uppercase tracking-widest text-[#176B48] bg-[#D9EBDD] px-2.5 py-0.5 rounded-full">
                  Order Successfully Registered (Demo Mode)
                </span>
                <h2 className="font-heading text-2xl sm:text-3xl font-bold text-[#174C35] mt-1">
                  DHARTI SAHELI DISPATCH CHALLAN
                </h2>
                <p className="text-xs text-[#79543B]">
                  Invoice Ref: <strong className="font-mono text-[#174C35]">{orderConfirmed.orderId}</strong> • Date: {orderConfirmed.date}
                </p>
              </div>

              <div className="text-left sm:text-right print:hidden flex items-center gap-2">
                <button
                  onClick={handlePrint}
                  className="bg-[#174C35] hover:bg-[#176B48] text-white px-4 py-2 rounded-xl text-xs font-bold flex items-center gap-1.5 shadow-sm"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Invoice / Challan</span>
                </button>
              </div>
            </div>

            {/* Customer & SHG Unit Details */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-xs">
              <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1">
                <strong className="text-[10px] text-[#79543B] uppercase block">Delivery Destination:</strong>
                <p className="font-bold text-[#174C35]">{orderConfirmed.customerInfo.fullName}</p>
                <p className="text-[#79543B]">{orderConfirmed.customerInfo.address}</p>
                <p className="text-[#79543B]">
                  {orderConfirmed.customerInfo.district}, {orderConfirmed.customerInfo.state} - {orderConfirmed.customerInfo.pinCode}
                </p>
                <p className="text-[#79543B]">Phone: {orderConfirmed.customerInfo.phone}</p>
              </div>

              <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/20 space-y-1">
                <strong className="text-[10px] text-[#79543B] uppercase block">Assigned SHG Production Unit:</strong>
                <p className="font-bold text-[#174C35]">{orderConfirmed.shgCluster}</p>
                <p className="text-[#79543B]">Gram Jamunya, Chhindwara Cluster, MP</p>
                <p className="text-[#176B48] font-mono font-bold">
                  Allocated Batch: {orderConfirmed.batchAllocated} (FCO Compliant)
                </p>
                <p className="text-[#79543B]">Payment Method: {orderConfirmed.customerInfo.paymentMethod} (Simulated)</p>
              </div>
            </div>

            {/* Line Items Table */}
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left border-collapse">
                <thead>
                  <tr className="bg-[#F8F6EC] border-b border-[#A8C5A0]/30 text-[#79543B]">
                    <th className="p-3 font-bold uppercase">Product Description</th>
                    <th className="p-3 font-bold uppercase">Pack Size</th>
                    <th className="p-3 font-bold uppercase text-center">Qty</th>
                    <th className="p-3 font-bold uppercase text-right">Rate</th>
                    <th className="p-3 font-bold uppercase text-right">Amount</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#A8C5A0]/20">
                  {orderConfirmed.items.map((it: any) => (
                    <tr key={it.sku}>
                      <td className="p-3 font-bold text-[#174C35]">{it.productName}</td>
                      <td className="p-3 text-[#79543B]">{it.selectedSize}</td>
                      <td className="p-3 text-center font-bold text-[#174C35]">{it.quantity}</td>
                      <td className="p-3 text-right text-[#79543B]">₹{it.unitPrice}</td>
                      <td className="p-3 text-right font-bold text-[#176B48]">₹{it.unitPrice * it.quantity}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Invoice Total Calculation */}
            <div className="flex justify-end pt-2">
              <div className="w-full max-w-xs space-y-1.5 text-xs text-[#174C35]">
                <div className="flex justify-between">
                  <span>Subtotal:</span>
                  <span className="font-bold">₹{orderConfirmed.subtotal}</span>
                </div>
                {orderConfirmed.discount > 0 && (
                  <div className="flex justify-between text-[#176B48] font-bold">
                    <span>Discount:</span>
                    <span>- ₹{orderConfirmed.discount}</span>
                  </div>
                )}
                <div className="flex justify-between">
                  <span>Delivery:</span>
                  <span>{orderConfirmed.deliveryFee === 0 ? 'FREE' : `₹${orderConfirmed.deliveryFee}`}</span>
                </div>
                <div className="flex justify-between pt-2 border-t border-[#A8C5A0]/30 text-base font-bold text-[#174C35]">
                  <span>Total Payable:</span>
                  <span className="font-heading text-xl text-[#176B48]">₹{orderConfirmed.total}</span>
                </div>
              </div>
            </div>

            {/* Footer Notice */}
            <div className="p-4 bg-[#F8F6EC] rounded-2xl border border-[#A8C5A0]/30 text-[11px] text-[#79543B] text-center space-y-1">
              <p>
                <strong>Statutory Declaration:</strong> Tested in adherence with Fertiliser Control Order 1985 guidelines. Sourced 100% from segregated rural biomass by rural women SHG collectives.
              </p>
              <p className="font-bold text-[#174C35]">
                DHARTI SAHELI • &ldquo;{OFFICIAL_TAGLINE}&rdquo;
              </p>
            </div>

            <div className="flex justify-center gap-3 pt-4 print:hidden">
              <Link
                href="/shop"
                className="bg-[#176B48] text-white px-8 py-3 rounded-full text-xs font-bold hover:bg-[#174C35]"
              >
                Back to Shop Catalogue
              </Link>
            </div>
          </div>
        ) : (
          /* Checkout Form */
          items.length === 0 ? (
            <div className="text-center py-12 bg-white/70 rounded-3xl border p-8 space-y-4">
              <p className="text-sm text-[#79543B]">No items in your shopping bag to checkout.</p>
              <Link
                href="/shop"
                className="inline-block bg-[#176B48] text-white text-xs font-bold px-6 py-2.5 rounded-full"
              >
                Go to Shop
              </Link>
            </div>
          ) : (
            <form onSubmit={handlePlaceOrder} className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              
              {/* Left: Customer Info & Address Form */}
              <div className="lg:col-span-7 bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white shadow-xl space-y-6">
                <div>
                  <h3 className="font-heading text-xl font-bold text-[#174C35]">
                    1. Shipping & Customer Details
                  </h3>
                  <p className="text-xs text-[#79543B]">
                    Where should our rural delivery partner bring your organic soil bag?
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#174C35] block mb-1">Full Name *</label>
                    <input
                      type="text"
                      name="fullName"
                      required
                      value={customerInfo.fullName}
                      onChange={handleChange}
                      placeholder="e.g. Ananya Sharma"
                      className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#174C35] block mb-1">Mobile Phone (for delivery SMS) *</label>
                    <input
                      type="tel"
                      name="phone"
                      required
                      value={customerInfo.phone}
                      onChange={handleChange}
                      placeholder="e.g. +91 98765 43210"
                      className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                    />
                  </div>
                </div>

                <div>
                  <label className="text-xs font-bold text-[#174C35] block mb-1">Email Address *</label>
                  <input
                    type="email"
                    name="email"
                    required
                    value={customerInfo.email}
                    onChange={handleChange}
                    placeholder="e.g. ananya@gmail.com"
                    className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                  />
                </div>

                <div>
                  <label className="text-xs font-bold text-[#174C35] block mb-1">Street Address / House No. *</label>
                  <input
                    type="text"
                    name="address"
                    required
                    value={customerInfo.address}
                    onChange={handleChange}
                    placeholder="e.g. Flat 302, Green Meadows Apartment, MG Road"
                    className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="text-xs font-bold text-[#174C35] block mb-1">Pin Code *</label>
                    <input
                      type="text"
                      name="pinCode"
                      required
                      value={customerInfo.pinCode}
                      onChange={handleChange}
                      placeholder="e.g. 480001"
                      className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#174C35] block mb-1">City / District *</label>
                    <input
                      type="text"
                      name="district"
                      required
                      value={customerInfo.district}
                      onChange={handleChange}
                      placeholder="e.g. Chhindwara / Nagpur"
                      className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                    />
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#174C35] block mb-1">State *</label>
                    <input
                      type="text"
                      name="state"
                      required
                      value={customerInfo.state}
                      onChange={handleChange}
                      placeholder="e.g. Madhya Pradesh"
                      className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                    />
                  </div>
                </div>

                {/* Payment Selection */}
                <div className="pt-4 border-t border-[#A8C5A0]/30 space-y-3">
                  <h4 className="font-heading text-lg font-bold text-[#174C35]">
                    2. Select Payment Preference (Demo Mode)
                  </h4>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                    {[
                      { id: 'UPI', label: 'UPI / QR Scan', desc: 'GPay, PhonePe, Paytm' },
                      { id: 'COD', label: 'Cash on Delivery', desc: 'Pay on cluster receipt' },
                      { id: 'BankTransfer', label: 'Direct Bank Transfer', desc: 'SHG Bank Linkage' },
                    ].map((m) => (
                      <label
                        key={m.id}
                        className={`p-3.5 rounded-2xl border cursor-pointer transition-all flex flex-col justify-between ${
                          customerInfo.paymentMethod === m.id
                            ? 'bg-[#174C35] text-white border-[#174C35] shadow-md'
                            : 'bg-white/80 text-[#174C35] border-[#A8C5A0]/40'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-bold text-xs">{m.label}</span>
                          <input
                            type="radio"
                            name="paymentMethod"
                            value={m.id}
                            checked={customerInfo.paymentMethod === m.id}
                            onChange={handleChange}
                            className="text-[#176B48]"
                          />
                        </div>
                        <span className="text-[10px] opacity-80">{m.desc}</span>
                      </label>
                    ))}
                  </div>
                </div>

              </div>

              {/* Right: Order Summary Preview & Button */}
              <div className="lg:col-span-5 bg-white/85 backdrop-blur-xl rounded-3xl p-6 sm:p-8 border border-white shadow-xl space-y-5">
                <h3 className="font-heading text-xl font-bold text-[#174C35]">
                  Order Summary
                </h3>

                <div className="space-y-3 max-h-60 overflow-y-auto pr-1">
                  {items.map((item) => (
                    <div key={item.sku} className="flex items-center justify-between text-xs py-1.5 border-b border-[#A8C5A0]/20">
                      <div>
                        <span className="font-bold text-[#174C35] block">{item.productName}</span>
                        <span className="text-[11px] text-[#79543B]">
                          {item.selectedSize} × {item.quantity}
                        </span>
                      </div>
                      <span className="font-bold text-[#176B48]">
                        ₹{item.unitPrice * item.quantity}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="space-y-2 text-xs text-[#174C35] pt-2">
                  <div className="flex justify-between">
                    <span>Subtotal</span>
                    <span className="font-bold">₹{subtotal}</span>
                  </div>
                  {discount > 0 && (
                    <div className="flex justify-between text-[#176B48] font-bold">
                      <span>Discount ({appliedPromo})</span>
                      <span>- ₹{discount}</span>
                    </div>
                  )}
                  <div className="flex justify-between">
                    <span>Delivery</span>
                    <span>{deliveryFee === 0 ? <strong className="text-[#176B48]">FREE</strong> : `₹${deliveryFee}`}</span>
                  </div>
                  <div className="flex justify-between pt-2 border-t border-[#A8C5A0]/30 text-base font-bold text-[#174C35]">
                    <span>Total Amount</span>
                    <span className="font-heading text-xl text-[#176B48]">₹{total}</span>
                  </div>
                </div>

                <div className="pt-2">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-gradient-to-r from-[#176B48] to-[#174C35] hover:to-[#0f3524] text-white py-4 rounded-2xl font-bold text-sm shadow-xl hover:shadow-2xl transition-all disabled:opacity-60"
                  >
                    {isSubmitting ? (
                      <span>Generating Dispatch Challan...</span>
                    ) : (
                      <span>CONFIRM DEMO ORDER & VIEW CHALLAN</span>
                    )}
                  </button>
                  <p className="text-[11px] text-[#79543B] text-center mt-2">
                    Verified secure linkage to rural SHG production ledger.
                  </p>
                </div>
              </div>

            </form>
          )
        )}

      </div>
    </div>
  );
}

