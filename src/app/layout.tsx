import type { Metadata } from "next";
import { Playfair_Display, Manrope } from "next/font/google";
import "./globals.css";
import { ClientLayout } from "@/components/common/ClientLayout";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dharti Saheli | Women-Led Sustainable Agriculture & Organic Soil Solutions",
  description:
    "Dharti Saheli transforms local biodegradable waste into laboratory-tested vermicompost and organic compost, empowering rural women through Self-Help Groups (SHGs). Don't panic, it's organic.",
  keywords: [
    "Dharti Saheli",
    "Vermicompost India",
    "Organic compost",
    "Organic manure",
    "Sustainable gardening",
    "Women-led agricultural enterprise",
    "Bulk vermicompost supplier",
    "Organic compost for nurseries",
    "Circular economy agriculture",
    "SHG women enterprise",
  ],
  authors: [{ name: "Dharti Saheli Enterprise" }],
  openGraph: {
    title: "Dharti Saheli | Healthy Soil. Empowered Women. Sustainable Villages.",
    description:
      "Turning biodegradable waste into soil wealth and rural women into green entrepreneurs. Don't panic, it's organic.",
    url: "https://dhartisaheli.in",
    siteName: "Dharti Saheli",
    locale: "en_IN",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'Dharti Saheli',
    url: 'https://dhartisaheli.in',
    slogan: "DON'T PANIC, IT'S ORGANIC.",
    description:
      'A women-led circular economy enterprise converting biodegradable waste into laboratory-tested vermicompost and organic compost through Self-Help Groups.',
    knowsAbout: [
      'Vermicompost India',
      'Organic Composting',
      'Circular Economy Agriculture',
      'Rural Women Self-Help Groups'
    ],
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Chhindwara Cluster',
      addressRegion: 'Madhya Pradesh',
      addressCountry: 'IN'
    }
  };

  return (
    <html lang="en" className={`${playfair.variable} ${manrope.variable} scroll-smooth`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-[#F8F6EC] text-[#174C35] font-sans antialiased">
        <ClientLayout>{children}</ClientLayout>
      </body>
    </html>
  );
}
