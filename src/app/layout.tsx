import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

const baseUrl = process.env.NODE_ENV === "development"
  ? "http://localhost:3000"
  : process.env.VERCEL_PROJECT_PRODUCTION_URL
  ? `https://${process.env.VERCEL_PROJECT_PRODUCTION_URL}`
  : process.env.VERCEL_URL
  ? `https://${process.env.VERCEL_URL}`
  : "https://smeree.ma";

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: "SMEREE – Solutions d'Énergie Renouvelable au Maroc",
  description:
    "SMEREE propose des installations de panneaux solaires de qualité supérieure, des solutions éoliennes et des conseils en efficacité énergétique au Maroc. Contactez-nous pour votre devis gratuit.",
  keywords: "SMEREE, énergie solaire, panneaux solaires, énergie renouvelable, éolienne, efficacité énergétique, installation solaire, Maroc, énergie propre",
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "SMEREE – Solutions d'Énergie Renouvelable au Maroc",
    description:
      "SMEREE propose des installations de panneaux solaires de qualité supérieure, des solutions éoliennes et des conseils en efficacité énergétique au Maroc.",
    url: baseUrl,
    siteName: "SMEREE",
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SMEREE – Solutions d'Énergie Renouvelable au Maroc",
    description:
      "SMEREE propose des installations de panneaux solaires de qualité supérieure, des solutions éoliennes et des conseils en efficacité énergétique au Maroc.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={inter.variable}>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>{children}</body>
    </html>
  );
}
