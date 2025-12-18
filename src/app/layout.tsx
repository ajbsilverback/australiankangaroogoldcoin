import type { Metadata } from "next";
import { SITE_CONFIG } from "@/lib/siteConfig";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_CONFIG.canonicalDomain),
  title: {
    default: `${SITE_CONFIG.brandName} | 24-Karat Gold Bullion Coin Guide`,
    template: `%s | ${SITE_CONFIG.brandName}`,
  },
  description:
    "Discover everything about Australian Kangaroo Gold coins, one of the world's most recognized gold bullion coins. 24-karat, .9999 fine gold, Perth Mint legal tender. Expert insights on pricing, premiums, and investing.",
  keywords: [
    "Australian Kangaroo Gold",
    "Kangaroo Gold coin",
    "1 oz gold coin",
    "24 karat gold coin",
    ".9999 fine gold",
    "Perth Mint gold coin",
    "gold bullion coin",
    "buy Kangaroo Gold",
    "gold coin prices",
    "gold coin investment",
    "IRA eligible gold",
    "Australian gold nugget",
  ],
  authors: [{ name: SITE_CONFIG.brandName }],
  creator: SITE_CONFIG.brandName,
  publisher: SITE_CONFIG.brandName,
  openGraph: {
    type: "website",
    locale: "en_US",
    url: SITE_CONFIG.domain,
    siteName: SITE_CONFIG.brandName,
    title: `${SITE_CONFIG.brandName} | 24-Karat Gold Bullion Coin Guide`,
    description:
      "Discover everything about Australian Kangaroo Gold coins, one of the world's most recognized gold bullion coins. 24-karat, .9999 fine gold, Perth Mint legal tender.",
    images: [
      {
        url: `${SITE_CONFIG.domain}/og-image.jpg`,
        width: 1200,
        height: 630,
        alt: "Australian Kangaroo Gold Coin - Investment Education",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_CONFIG.brandName} | 24-Karat Gold Bullion Coin Guide`,
    description:
      "Discover everything about Australian Kangaroo Gold coins, one of the world's most recognized gold bullion coins. 24-karat, .9999 fine gold, Perth Mint legal tender.",
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
  alternates: {
    canonical: SITE_CONFIG.canonicalDomain,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col bg-bullion-darker text-gray-100 antialiased" suppressHydrationWarning>
        <Header />
        <main className="flex-grow pt-[108px]">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
