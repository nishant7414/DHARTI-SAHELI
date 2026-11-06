/* Hallmark · shape: custom · genre: editorial · theme: brand
 * paper: oklch(97.2% 0.015 95) · accent: oklch(78% 0.14 85) · display: Playfair Display · body: Manrope · hero: split · nav: floating · footer: mast · signature: batch QR code traceability
 * axes: light/roman-serif/chromatic-yellow · posture: split · contrast: pass · fold: pass · copy: verbatim · redesign: full · v2.0.0 */
/* Hallmark · pre-emit critique: P5 H5 E5 S5 R5 V5 · weakest: H5, editorial split hero with live batch QR lookup */
/* Hallmark · waive 29 · master prompt specification · Glassmorphic frosted cards with nature gradients required by user specification */

import React from 'react';
import { HeroSection } from '@/components/home/HeroSection';
import { IntroSection } from '@/components/home/IntroSection';
import { ProductsSection } from '@/components/home/ProductsSection';
import { WhyDhartiSection } from '@/components/home/WhyDhartiSection';
import { WasteToWealthSection } from '@/components/home/WasteToWealthSection';
import { OurWomenSection } from '@/components/home/OurWomenSection';
import { ImpactDashboardSection } from '@/components/home/ImpactDashboardSection';
import { PartnershipsSection } from '@/components/home/PartnershipsSection';
import { TestimonialsSection } from '@/components/home/TestimonialsSection';
import { FinalCTASection } from '@/components/home/FinalCTASection';

export default function HomePage() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* SECTION 1: HERO */}
      <HeroSection />

      {/* SECTION 2: INTRODUCING DHARTI SAHELI */}
      <IntroSection />

      {/* SECTION 3: OUR PRODUCTS */}
      <ProductsSection />

      {/* SECTION 4: WHY DHARTI SAHELI? */}
      <WhyDhartiSection />

      {/* SECTION 5: FROM WASTE TO WEALTH */}
      <WasteToWealthSection />

      {/* SECTION 6: OUR WOMEN */}
      <OurWomenSection />

      {/* SECTION 7: IMPACT DASHBOARD */}
      <ImpactDashboardSection />

      {/* SECTION 8: PARTNERSHIPS */}
      <PartnershipsSection />

      {/* SECTION 9: TESTIMONIALS */}
      <TestimonialsSection />

      {/* SECTION 10: FINAL CTA */}
      <FinalCTASection />
    </div>
  );
}
