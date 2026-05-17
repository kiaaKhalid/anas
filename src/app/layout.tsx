import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SMEREE – Solutions d'Énergie Renouvelable",
  description:
    "SMEREE propose des installations de panneaux solaires de qualité supérieure, des solutions éoliennes et des conseils en efficacité énergétique au Maroc.",
  keywords: "SMEREE, énergie solaire, panneaux solaires, énergie renouvelable, maroc",
  openGraph: {
    title: "SMEREE – Solutions d'Énergie Renouvelable",
    description: "Installation de panneaux solaires de qualité supérieure et solutions d'énergie renouvelable au Maroc.",
    type: "website",
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
