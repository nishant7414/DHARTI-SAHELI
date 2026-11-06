'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Building2, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  Clock, 
  PhoneCall, 
  FileText, 
  ShieldCheck, 
  Truck, 
  Sparkles,
  HelpCircle,
  Copy,
  Check
} from 'lucide-react';
import { OFFICIAL_TAGLINE } from '@/data/products';

export default function BulkEnquiryPage() {
  const [formData, setFormData] = useState({
    fullName: '',
    organizationName: '',
    email: '',
    mobileNumber: '',
    customerType: 'Nursery',
    productInterestedIn: 'Dharti Saheli Premium Vermicompost',
    requiredQuantity: '500 kg (10 x 50kg Bags)',
    preferredPackaging: '50 kg Commercial Sacks',
    deliveryLocation: '',
    intendedUsage: 'Commercial Plant Nursery & Seedling Trays',
    additionalMessage: '',
  });

  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [submissionResult, setSubmissionResult] = useState<{
    success: boolean;
    enquiryId: string;
    message: string;
    sla: string;
  } | null>(null);

  const [copied, setCopied] = useState(false);

  const customerTypes = [
    'Nursery',
    'Farmer',
    'FPO',
    'Landscaping Company',
    'Institution',
    'Distributor',
    'Other',
  ];

  const productOptions = [
    'Dharti Saheli Premium Vermicompost',
    'Dharti Saheli Enriched Organic Compost',
    'Combined Trial Pack (Vermicompost + Compost)',
    'Phase 2 Home Gardening Kits (Institutional Gifting)',
  ];

  const packagingOptions = [
    '50 kg Commercial Woven Sacks',
    '25 kg Heavy-Duty Retail Bags',
    '10 kg Bags (Pre-packaged)',
    'Bulk Loose Delivery (Mini-Truck / Tractor Trolley)',
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    if (errorMessage) setErrorMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage('');
    setLoading(true);

    try {
      const res = await fetch('/api/enquiry', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (!res.ok || !data.success) {
        setErrorMessage(data.error || 'Failed to submit enquiry. Please check your entries.');
      } else {
        setSubmissionResult(data);
      }
    } catch (err) {
      setErrorMessage('Network connection error. Please try again or message our sales lead directly.');
    } finally {
      setLoading(false);
    }
  };

  const handleCopyId = () => {
    if (submissionResult?.enquiryId) {
      navigator.clipboard.writeText(submissionResult.enquiryId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 left-10 w-[600px] h-[600px] bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-[500px] h-[500px] bg-[#E7B957]/15 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#176B48]/10 text-[#176B48] text-xs font-bold uppercase tracking-wider border border-[#176B48]/20">
            <Building2 className="w-3.5 h-3.5" />
            Institutional & Commercial Sales Desk
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#174C35] tracking-tight">
            LOOKING FOR RELIABLE ORGANIC SOIL SOLUTIONS IN BULK?
          </h1>

          <p className="text-base sm:text-lg text-[#174C35]/80 leading-relaxed">
            Connect with Dharti Saheli for vermicompost and organic compost supply for farms, nurseries, landscaping projects and institutions.
          </p>

          <div className="pt-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#79543B] bg-white/80 border border-[#E7B957]/60 px-4 py-1.5 rounded-full inline-block backdrop-blur-md shadow-xs">
              Official Product Tagline: &ldquo;{OFFICIAL_TAGLINE}&rdquo;
            </span>
          </div>
        </div>

        {/* Main Content: Split Grid Form + Commercial Anchor Safeguards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Commercial SLA & Buyer Benefits */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* 48-Hour Response SLA Card */}
            <div className="bg-[#174C35] text-white p-7 rounded-3xl shadow-xl space-y-4 relative overflow-hidden border border-white/20">
              <div className="w-12 h-12 rounded-2xl bg-[#E7B957] text-[#174C35] flex items-center justify-center font-bold">
                <Clock className="w-6 h-6" />
              </div>

              <div>
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E7B957]">
                  Commercial Commitment
                </span>
                <h3 className="font-heading text-2xl font-bold text-white mt-1">
                  Guaranteed Response Within 48 Hours
                </h3>
              </div>

              <p className="text-xs sm:text-sm text-[#D9EBDD] leading-relaxed">
                Our designated rural sales coordinator reviews your required tonnage, crop parameters, and delivery cluster to prepare a customized quotation with batch test reports.
              </p>

              <div className="pt-2 border-t border-white/15 space-y-2 text-xs text-[#A8C5A0]">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E7B957]" />
                  <span>Direct phone follow-up with unit sales lead</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E7B957]" />
                  <span>Sample trial bag dispatch for evaluation</span>
                </div>
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#E7B957]" />
                  <span>FCO compliance test report provided with quote</span>
                </div>
              </div>
            </div>

            {/* Why Institutional Buyers Choose Us */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-7 border border-white/90 shadow-md space-y-4">
              <h4 className="font-heading text-lg font-bold text-[#174C35]">
                Why Institutional Buyers Choose Dharti Saheli:
              </h4>

              <div className="space-y-3 text-xs text-[#174C35]">
                <div className="flex items-start gap-3 bg-[#F8F6EC] p-3 rounded-2xl border border-[#A8C5A0]/20">
                  <ShieldCheck className="w-5 h-5 text-[#176B48] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#174C35]">Strict Zero-Contamination Gate</strong>
                    <span className="text-[#79543B]">No municipal sludge or chemical contaminants. Only pre-sorted gaushala and agricultural inputs.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#F8F6EC] p-3 rounded-2xl border border-[#A8C5A0]/20">
                  <Truck className="w-5 h-5 text-[#176B48] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#174C35]">Clustered Logistics & Route Optimization</strong>
                    <span className="text-[#79543B]">Consolidated deliveries minimize freight cost per quintal for nurseries and farms.</span>
                  </div>
                </div>

                <div className="flex items-start gap-3 bg-[#F8F6EC] p-3 rounded-2xl border border-[#A8C5A0]/20">
                  <FileText className="w-5 h-5 text-[#176B48] shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-[#174C35]">Batch QR Code Traceability</strong>
                    <span className="text-[#79543B]">Every pallet carries batch numbers linking back to lab moisture, carbon, and SHG production dates.</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-2 border-t border-[#A8C5A0]/20 flex items-center justify-between text-xs">
                <span className="text-[#79543B]">Prefer instant conversation?</span>
                <a
                  href="https://wa.me/919876543210"
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold text-[#176B48] hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>WhatsApp Sales Lead</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Premium Glassmorphism Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/85 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border-2 border-white shadow-2xl relative">
              
              {submissionResult ? (
                /* Success State */
                <div className="py-8 text-center space-y-6 animate-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-[#D9EBDD] flex items-center justify-center text-[#176B48] mx-auto shadow-md">
                    <CheckCircle2 className="w-10 h-10" />
                  </div>

                  <div className="space-y-2">
                    <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#176B48] bg-[#D9EBDD] px-3 py-1 rounded-full">
                      Enquiry Successfully Registered
                    </span>
                    <h3 className="font-heading text-2xl sm:text-3xl font-bold text-[#174C35]">
                      Thank You, {formData.fullName}!
                    </h3>
                    <p className="text-xs sm:text-sm text-[#79543B] max-w-md mx-auto leading-relaxed">
                      {submissionResult.message}
                    </p>
                  </div>

                  {/* Reference ID Box */}
                  <div className="bg-[#F8F6EC] p-4 rounded-2xl border border-[#A8C5A0]/40 max-w-sm mx-auto flex items-center justify-between">
                    <div>
                      <span className="text-[10px] text-[#79543B] uppercase font-bold block text-left">
                        Enquiry Reference Code:
                      </span>
                      <span className="font-mono text-lg font-black text-[#174C35]">
                        {submissionResult.enquiryId}
                      </span>
                    </div>
                    <button
                      type="button"
                      onClick={handleCopyId}
                      className="p-2 rounded-xl bg-white text-[#174C35] hover:bg-[#D9EBDD] transition-colors border border-[#A8C5A0]/30 shadow-xs flex items-center gap-1 text-xs font-bold"
                    >
                      {copied ? <Check className="w-4 h-4 text-[#176B48]" /> : <Copy className="w-4 h-4" />}
                      <span>{copied ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>

                  <div className="bg-[#174C35] text-white p-4 rounded-2xl text-xs max-w-md mx-auto space-y-1">
                    <span className="font-bold text-[#E7B957] block">Guaranteed SLA:</span>
                    <p className="text-[#D9EBDD]">{submissionResult.sla}</p>
                  </div>

                  <div className="pt-4 flex justify-center gap-3">
                    <button
                      onClick={() => setSubmissionResult(null)}
                      className="bg-white text-[#174C35] border border-[#A8C5A0]/50 px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#F8F6EC]"
                    >
                      Submit Another Enquiry
                    </button>
                    <Link
                      href="/shop"
                      className="bg-[#176B48] text-white px-6 py-2.5 rounded-full text-xs font-bold hover:bg-[#174C35]"
                    >
                      Back to Catalogue
                    </Link>
                  </div>
                </div>
              ) : (
                /* Form State */
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#174C35]">
                      Request Commercial Bulk Quotation
                    </h3>
                    <p className="text-xs text-[#79543B] mt-0.5">
                      Please enter your organization&apos;s details and procurement requirements below.
                    </p>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 border border-red-200 text-red-700 p-3.5 rounded-2xl text-xs flex items-center gap-2">
                      <AlertCircle className="w-4 h-4 shrink-0" />
                      <span>{errorMessage}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Full Name */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="fullName"
                        required
                        value={formData.fullName}
                        onChange={handleChange}
                        placeholder="e.g. Ramesh Patel"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      />
                    </div>

                    {/* Organization Name */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Organisation Name *
                      </label>
                      <input
                        type="text"
                        name="organizationName"
                        required
                        value={formData.organizationName}
                        onChange={handleChange}
                        placeholder="e.g. Green Valley Commercial Nursery"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email Address */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="e.g. ramesh@greenvalleynursery.in"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Mobile Number (WhatsApp Preferred) *
                      </label>
                      <input
                        type="tel"
                        name="mobileNumber"
                        required
                        value={formData.mobileNumber}
                        onChange={handleChange}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Customer Type */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Customer Type *
                      </label>
                      <select
                        name="customerType"
                        value={formData.customerType}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3 py-2.5 text-xs text-[#174C35] font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      >
                        {customerTypes.map((type) => (
                          <option key={type} value={type}>
                            {type}
                          </option>
                        ))}
                      </select>
                    </div>

                    {/* Product Interested In */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Product Interested In *
                      </label>
                      <select
                        name="productInterestedIn"
                        value={formData.productInterestedIn}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3 py-2.5 text-xs text-[#174C35] font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      >
                        {productOptions.map((opt) => (
                          <option key={opt} value={opt}>
                            {opt}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Required Quantity */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Required Quantity (kg / Tonnes) *
                      </label>
                      <input
                        type="text"
                        name="requiredQuantity"
                        required
                        value={formData.requiredQuantity}
                        onChange={handleChange}
                        placeholder="e.g. 500 kg or 2 Metric Tonnes"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      />
                    </div>

                    {/* Preferred Packaging */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Preferred Packaging *
                      </label>
                      <select
                        name="preferredPackaging"
                        value={formData.preferredPackaging}
                        onChange={handleChange}
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3 py-2.5 text-xs text-[#174C35] font-semibold focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      >
                        {packagingOptions.map((pkg) => (
                          <option key={pkg} value={pkg}>
                            {pkg}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Delivery Location */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Delivery Destination / Pin Code *
                      </label>
                      <input
                        type="text"
                        name="deliveryLocation"
                        required
                        value={formData.deliveryLocation}
                        onChange={handleChange}
                        placeholder="e.g. Bhopal / Indore (Pin: 462001)"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      />
                    </div>

                    {/* Intended Usage */}
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                        Intended Agricultural / Landscape Usage *
                      </label>
                      <input
                        type="text"
                        name="intendedUsage"
                        required
                        value={formData.intendedUsage}
                        onChange={handleChange}
                        placeholder="e.g. Polyhouse vegetable nursery & potting media"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                      />
                    </div>
                  </div>

                  {/* Additional Message */}
                  <div>
                    <label className="text-xs font-bold text-[#174C35] block mb-1.5">
                      Specific Requirements or Sample Requests
                    </label>
                    <textarea
                      name="additionalMessage"
                      rows={3}
                      value={formData.additionalMessage}
                      onChange={handleChange}
                      placeholder="Mention any custom sieve mesh size preferences, delivery schedules, or request for 5kg trial sample bag..."
                      className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:outline-hidden focus:ring-2 focus:ring-[#176B48]"
                    />
                  </div>

                  {/* Submit Button */}
                  <div className="pt-2">
                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-gradient-to-r from-[#176B48] to-[#174C35] hover:to-[#0f3524] text-white py-4 rounded-2xl font-bold text-sm flex items-center justify-center gap-2 shadow-xl hover:shadow-2xl transition-transform duration-200 disabled:opacity-60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#176B48]"
                    >
                      {loading ? (
                        <span>Processing & Allocating to Sales Lead...</span>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          <span>REQUEST A BULK QUOTE</span>
                        </>
                      )}
                    </button>
                    <p className="text-[11px] text-[#79543B] text-center mt-2.5 font-medium">
                      Guaranteed confidential. Strictly commercial quotations backed by 48-hour response guarantee.
                    </p>
                  </div>
                </form>
              )}

            </div>
          </div>

        </div>

      </div>
    </div>
  );
}

