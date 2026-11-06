'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  CheckCircle2, 
  AlertCircle, 
  HelpCircle, 
  ShieldCheck, 
  Sparkles,
  ChevronDown
} from 'lucide-react';
import { OFFICIAL_TAGLINE } from '@/data/products';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: 'General Enquiry',
    message: '',
  });

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: 'General Enquiry',
        message: '',
      });
    }, 1000);
  };

  const faqs = [
    {
      q: 'Where are Dharti Saheli vermicompost production units located?',
      a: 'Our pilot production cluster is established in Gram Jamunya and surrounding rural blocks in the Chhindwara / Betul agricultural belt of Madhya Pradesh. Production is owned and operated by women Self-Help Groups linked with DAY-NRLM.',
    },
    {
      q: 'Can institutions, schools, or CSR partners visit the production cluster?',
      a: 'Yes! We actively welcome demonstration visits from commercial nurseries, farmer groups, educational institutions, and CSR evaluation teams. Please use this contact form or message our sales lead to schedule a unit visit.',
    },
    {
      q: 'What is your contamination policy for raw feedstock?',
      a: 'We adhere to a strict 100% rejection policy at the gate. Any loads containing unsegregated plastics, glass, veterinary medicine residues, or synthetic pesticides are turned away. Fresh dung is pre-decomposed for 15–20 days before introduction to earthworms.',
    },
    {
      q: 'How do you guarantee quality consistency across different SHG units?',
      a: 'Every SHG adheres to standardized operating procedures (SOPs) for bed turning, moisture control, and 4mm screening. Before dispatch, composite samples from each batch are analyzed for pH, moisture, and organic carbon at accredited testing laboratories.',
    },
    {
      q: 'How soon can commercial orders be delivered?',
      a: 'For retail bags within our active cluster radius, standard courier/transporter delivery takes 2–4 business days. For bulk institutional orders (500 kg to 5 Metric Tonnes), mini-truck delivery routes are scheduled within 48 to 72 hours of purchase order confirmation.',
    },
  ];

  return (
    <div className="py-12 sm:py-20 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-10 right-10 w-[500px] h-[500px] bg-[#D9EBDD]/40 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#E7B957]/20 border border-[#E7B957]/50 text-[#174C35] text-xs font-bold uppercase tracking-wider">
            <Mail className="w-3.5 h-3.5 text-[#E7B957]" />
            Get In Touch
          </div>

          <h1 className="font-heading text-4xl sm:text-5xl font-bold text-[#174C35] tracking-tight">
            CONNECT WITH DHARTI SAHELI
          </h1>

          <p className="text-base sm:text-lg text-[#174C35]/80">
            Have questions about our soil solutions, wholesale supply, or women-led enterprise model? We&apos;d love to hear from you.
          </p>

          <div className="pt-2">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#79543B] bg-white/80 border border-[#E7B957]/60 px-4 py-1.5 rounded-full inline-block backdrop-blur-md shadow-xs">
              Official Tagline: &ldquo;{OFFICIAL_TAGLINE}&rdquo;
            </span>
          </div>
        </div>

        {/* Contact Information & Form Split */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Contact Details & Cluster Info */}
          <div className="lg:col-span-5 space-y-6">
            
            <div className="bg-[#174C35] text-white rounded-3xl p-8 shadow-xl space-y-6 border border-white/20 relative overflow-hidden">
              <div className="space-y-2">
                <span className="text-xs font-mono font-bold uppercase tracking-wider text-[#E7B957]">
                  Direct Contact Desk
                </span>
                <h3 className="font-heading text-2xl font-bold text-white">
                  We are here to assist you
                </h3>
                <p className="text-xs text-[#D9EBDD]">
                  Reach our enterprise management, technical team, or rural sales leads.
                </p>
              </div>

              <div className="space-y-4 text-xs text-[#D9EBDD]">
                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#E7B957] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white">Email Us</strong>
                    <span>contact@dhartisaheli.in</span>
                    <span className="block text-[11px] text-[#A8C5A0]">enquiries@dhartisaheli.in (Institutional)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#E7B957] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white">Call / WhatsApp</strong>
                    <span>+91 98765 43210 (Rural Sales Desk)</span>
                    <span className="block text-[11px] text-[#A8C5A0]">Mon–Sat: 9:00 AM – 6:00 PM IST</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-8 h-8 rounded-xl bg-white/10 flex items-center justify-center text-[#E7B957] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="block text-white">Pilot Cluster Unit</strong>
                    <span>Gram Jamunya, Betul / Chhindwara Cluster</span>
                    <span className="block text-[11px] text-[#A8C5A0]">Madhya Pradesh, 480001, India</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-white/15 text-xs text-[#A8C5A0] flex items-center justify-between">
                <span>Response Guarantee:</span>
                <strong className="text-[#E7B957]">Within 48 Hours</strong>
              </div>
            </div>

            {/* Bulk supply link banner */}
            <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-6 border border-white/90 shadow-md space-y-2">
              <h4 className="font-heading font-bold text-base text-[#174C35]">
                Need Bulk Supply for Nurseries or Farms?
              </h4>
              <p className="text-xs text-[#79543B] leading-relaxed">
                If you require bulk sacks (25kg/50kg) or truckloads, please use our dedicated commercial form with custom specification selection.
              </p>
              <div className="pt-2">
                <Link
                  href="/bulk-enquiry"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#176B48] hover:underline"
                >
                  <span>Open Institutional Bulk Enquiry Form →</span>
                </Link>
              </div>
            </div>

          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-white/85 backdrop-blur-2xl rounded-3xl p-8 sm:p-10 border-2 border-white shadow-xl">
              
              {submitted ? (
                <div className="py-12 text-center space-y-4 animate-in zoom-in-95">
                  <div className="w-16 h-16 rounded-full bg-[#D9EBDD] flex items-center justify-center text-[#176B48] mx-auto shadow-md">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="font-heading text-2xl font-bold text-[#174C35]">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-xs sm:text-sm text-[#79543B] max-w-sm mx-auto">
                    Thank you for reaching out. Our coordinator will reply to your email or mobile within 48 hours.
                  </p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="bg-[#176B48] text-white text-xs font-bold px-6 py-2.5 rounded-full mt-2"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-[#174C35]">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-[#79543B] mt-0.5">
                      Fill out the form below and we will get back to you shortly.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1">Your Name *</label>
                      <input
                        type="text"
                        required
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Priya Sharma"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1">Email Address *</label>
                      <input
                        type="email"
                        required
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="e.g. priya@example.com"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1">Phone Number</label>
                      <input
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        placeholder="e.g. +91 98765 43210"
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                      />
                    </div>

                    <div>
                      <label className="text-xs font-bold text-[#174C35] block mb-1">Subject</label>
                      <select
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3 py-2.5 text-xs text-[#174C35] font-semibold focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                      >
                        <option value="General Enquiry">General Enquiry</option>
                        <option value="Bulk Purchase">Bulk Purchase Enquiry</option>
                        <option value="Feedstock Supplier Partnership">Feedstock Supplier Partnership</option>
                        <option value="CSR Collaboration">CSR Collaboration</option>
                        <option value="Cluster Unit Visit">Cluster Unit Visit</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="text-xs font-bold text-[#174C35] block mb-1">Message *</label>
                    <textarea
                      required
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="How can we help your soil or discuss collaboration?"
                      className="w-full bg-white border border-[#A8C5A0]/50 rounded-xl px-3.5 py-2.5 text-xs text-[#174C35] focus:ring-2 focus:ring-[#176B48] focus:outline-hidden"
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full bg-gradient-to-r from-[#176B48] to-[#174C35] hover:to-[#0f3524] text-white py-3.5 rounded-xl font-bold text-xs flex items-center justify-center gap-2 shadow-lg transition-all disabled:opacity-60"
                  >
                    {loading ? (
                      <span>Sending message...</span>
                    ) : (
                      <>
                        <Send className="w-4 h-4" />
                        <span>SEND MESSAGE</span>
                      </>
                    )}
                  </button>
                </form>
              )}

            </div>
          </div>

        </div>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 sm:p-12 border border-white/90 shadow-xl space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#176B48]">
              Got Questions?
            </span>
            <h2 className="font-heading text-3xl font-bold text-[#174C35]">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="max-w-3xl mx-auto space-y-3">
            {faqs.map((faq, index) => {
              const isExpanded = expandedFaq === index;
              return (
                <div
                  key={index}
                  className="bg-[#F8F6EC] rounded-2xl border border-[#A8C5A0]/30 overflow-hidden transition-all"
                >
                  <button
                    onClick={() => setExpandedFaq(isExpanded ? null : index)}
                    className="w-full text-left p-4 sm:p-5 flex items-center justify-between gap-4 font-bold text-sm text-[#174C35] hover:text-[#176B48]"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-[#79543B] transition-transform duration-200 shrink-0 ${
                        isExpanded ? 'rotate-180 text-[#176B48]' : ''
                      }`}
                    />
                  </button>
                  {isExpanded && (
                    <div className="p-4 sm:p-5 pt-0 text-xs text-[#79543B] leading-relaxed border-t border-[#A8C5A0]/20 bg-white/40">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* COMPLIANCE DISCLOSURES & LEGAL POLICIES SECTION (Anchors for Footer) */}
        <div className="space-y-8 pt-8 border-t border-[#A8C5A0]/30 text-xs text-[#79543B]">
          
          {/* Privacy Policy Anchor */}
          <div id="privacy" className="bg-white/70 rounded-2xl p-6 border border-white space-y-2">
            <h3 className="font-heading text-base font-bold text-[#174C35]">
              Privacy Policy
            </h3>
            <p className="leading-relaxed">
              Dharti Saheli respects your personal and institutional privacy. Customer details submitted through our catalogue, enquiry forms, and batch traceability systems are used strictly for order fulfillment, delivery routing, and commercial quotation. We do not sell, rent, or distribute customer contact data to third parties.
            </p>
          </div>

          {/* Terms & Conditions Anchor */}
          <div id="terms" className="bg-white/70 rounded-2xl p-6 border border-white space-y-2">
            <h3 className="font-heading text-base font-bold text-[#174C35]">
              Terms of Supply & Quality Assurance
            </h3>
            <p className="leading-relaxed">
              All vermicompost and organic compost batches are produced in adherence to Fertiliser Control Order (FCO) 1985 guidelines. Retail pack weights are calibrated at dispatch (5 kg, 10 kg, 25 kg) with a permissible moisture range of 15% to 25%. Bulk supply agreements specify minimum order volumes and delivery schedules in writing.
            </p>
          </div>

          {/* Compliance Disclaimer Anchor */}
          <div id="disclaimer" className="bg-[#E7B957]/15 rounded-2xl p-6 border border-[#E7B957]/40 space-y-2">
            <h3 className="font-heading text-base font-bold text-[#79543B]">
              Pilot Targets & Regulatory Transparency Notice
            </h3>
            <p className="leading-relaxed text-[#174C35]">
              Dharti Saheli adheres to ethical business transparency. Projections and impact figures displayed on this website reflect illustrative pilot targets designed for a 90-day pilot cluster as detailed in our business presentation. Individual member case studies will be updated following operational social audits.
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

