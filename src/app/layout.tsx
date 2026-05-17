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
  title: "SolarPro – We Energy Solar For The Best Service",
  description:
    "SolarPro delivers top-quality solar panel installation, wind energy solutions, and green energy consultations. Get free quotes and switch to renewable energy today.",
  keywords: "solar energy, solar panels, renewable energy, solar installation, green energy",
  openGraph: {
    title: "SolarPro – We Energy Solar For The Best Service",
    description: "Top-quality solar panel installation and green energy solutions.",
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
