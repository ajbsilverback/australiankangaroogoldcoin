import type { Metadata } from "next";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Australian Gold Kangaroo Coin Specifications | Technical Details & Investor Facts",
  description:
    "Complete technical specifications for the 1 oz Australian Kangaroo Gold coin: .9999 fine purity, weight, dimensions, legal tender status, IRA eligibility, and premium factors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/coin-specs`,
  },
  openGraph: {
    title: "Australian Gold Kangaroo Coin Specifications | Technical Details",
    description:
      "Complete technical specifications for the 1 oz Australian Kangaroo Gold coin: .9999 purity, 1 troy oz weight, Perth Mint legal tender status, and IRA eligibility.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Australian Gold Kangaroo Coin Specifications",
    description:
      "Complete technical specifications for the 1 oz Australian Kangaroo Gold coin: .9999 purity, 1 troy oz weight, and IRA eligibility.",
  },
};

const specsData = [
  { label: "Purity", value: ".9999 fine gold (24-karat)", highlight: true },
  { label: "Gold Content", value: "1.0000 troy ounce (31.1035 grams)" },
  { label: "Gross Weight", value: "1.0001 troy ounce (31.1080 grams)" },
  { label: "Diameter", value: "32.60 mm (1.283 inches)" },
  { label: "Thickness", value: "2.65 mm (0.104 inches)" },
  { label: "Face Value", value: "$100 AUD (legal tender)" },
  { label: "Mint", value: "Perth Mint" },
  { label: "First Minted", value: "1986 (as Gold Nugget)" },
  { label: "Edge", value: "Reeded" },
  { label: "IRA Eligible", value: "Yes", highlight: true },
];

const faqData = [
  {
    question: "What is the purity of the Australian Gold Kangaroo?",
    answer:
      "The Australian Gold Kangaroo is .9999 fine gold, meaning it contains 99.99% pure gold (24-karat). This makes it one of the purest gold bullion coins available worldwide, matching the purity of the Canadian Maple Leaf.",
  },
  {
    question: "How much gold is in a 1 oz Gold Kangaroo?",
    answer:
      "Each 1 oz Australian Kangaroo Gold coin contains exactly 1.0000 troy ounce (31.1035 grams) of pure gold. Because of the .9999 purity, virtually all of the coin's weight is gold content.",
  },
  {
    question: "Is the Gold Kangaroo legal tender?",
    answer:
      "Yes, the Australian Kangaroo Gold coin carries a $100 AUD face value and is official Australian legal tender, backed by the Australian government. However, its gold content is worth significantly more than the face value.",
  },
  {
    question: "Can I hold Gold Kangaroo coins in an IRA?",
    answer:
      "Yes, Australian Kangaroo Gold coins meet IRS requirements for inclusion in a Precious Metals IRA (also called a Gold IRA). The .9999 purity exceeds the IRS minimum fineness requirement of .995 for gold. You'll need a qualified custodian and approved depository to hold IRA-owned coins.",
  },
  {
    question: "Why does the Gold Kangaroo have a premium over spot price?",
    answer:
      "Premiums reflect minting costs, dealer margins, and supply/demand dynamics. The Gold Kangaroo's premium accounts for Perth Mint production costs, distribution, the coin's legal tender status, and its recognition as a trusted government-minted product. Premiums vary based on market conditions.",
  },
  {
    question: "How does the Gold Kangaroo compare to the Gold Eagle in purity?",
    answer:
      "The Gold Kangaroo is .9999 fine (24-karat pure gold), while the Gold Eagle is .9167 fine (22-karat). Both coins contain 1 troy ounce of gold, but the Eagle is alloyed with copper and silver for durability, making it slightly heavier overall. Investors choose based on preference for purity versus durability.",
  },
  {
    question: "What affects Gold Kangaroo premiums?",
    answer:
      "Key premium drivers include: Perth Mint production capacity, dealer inventory levels, overall demand for physical gold, the coin's recognition and liquidity, and broader precious metals market conditions. During high demand periods, premiums typically increase.",
  },
];

export default function CoinSpecsPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Australian Gold Kangaroo Coin Specifications",
    description:
      "Complete technical specifications and investor facts for the 1 oz Australian Kangaroo Gold coin.",
    url: `${SITE_CONFIG.domain}/coin-specs`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqData.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      <div className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              <span className="gold-text">Gold Kangaroo</span> Specifications
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              Technical details and investor-facing facts for the 1 oz Australian Kangaroo Gold coin, one of the world&apos;s most recognized gold bullion coins.
            </p>
          </div>

          {/* Specifications Table */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6">
              Technical Specifications
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full">
                <tbody className="divide-y divide-bullion-gold/10">
                  {specsData.map((spec, index) => (
                    <tr key={index} className={spec.highlight ? "bg-bullion-gold/5" : ""}>
                      <td className="py-4 pr-4 text-gray-400 font-medium w-1/3">
                        {spec.label}
                      </td>
                      <td className={`py-4 ${spec.highlight ? "text-bullion-gold font-semibold" : "text-white"}`}>
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* Purity Advantage */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              The .9999 Purity Advantage
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              At .9999 fineness (24-karat), the Gold Kangaroo matches the highest purity standard for gold bullion coins worldwide.
            </p>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Maximum gold content</strong>: Virtually 100% of the coin&apos;s weight is pure gold</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">IRS compliance</strong>: Exceeds the .995 minimum fineness for Precious Metals IRAs</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Global recognition</strong>: Comparable purity to the Canadian Maple Leaf and other international 24-karat coins</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold mt-1">•</span>
                <span><strong className="text-white">Simple valuation</strong>: Gold content equals coin weight, making spot price calculations straightforward</span>
              </li>
            </ul>
            <p className="text-gray-400 text-sm mt-4">
              Learn more about the Gold Kangaroo at{" "}
              <a
                href="https://www.monex.com/gold-australian-kangaroo-nugget/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex Knowledge Base
              </a>
            </p>
          </section>

          {/* Legal Tender Status */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Legal Tender Status
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Australian Kangaroo Gold coin carries a <strong className="text-white">$100 AUD face value</strong> and is official Australian legal tender. This government backing provides:
            </p>
            <div className="grid md:grid-cols-2 gap-4">
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Authenticity Assurance</h3>
                <p className="text-gray-400 text-sm">
                  Produced by the Perth Mint with strict quality controls and anti-counterfeiting measures.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Government Guarantee</h3>
                <p className="text-gray-400 text-sm">
                  Weight and purity backed by the Australian government.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">Market Recognition</h3>
                <p className="text-gray-400 text-sm">
                  Widely recognized and accepted by dealers worldwide, supporting liquidity.
                </p>
              </div>
              <div className="bg-white/5 rounded-lg p-4">
                <h3 className="text-bullion-gold font-semibold mb-2">IRA Eligibility</h3>
                <p className="text-gray-400 text-sm">
                  Legal tender status is one requirement for Precious Metals IRA inclusion.
                </p>
              </div>
            </div>
          </section>

          {/* IRA Considerations */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              IRA Eligibility Considerations
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Australian Kangaroo Gold coins qualify for inclusion in a Precious Metals IRA (Self-Directed IRA). Key considerations:
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Meets IRS purity requirement (.9999 exceeds .995 minimum)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Produced by an approved national mint (Perth Mint)</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Must be held by an IRS-approved custodian and depository</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-emerald-400">✓</span>
                <span>Cannot be stored at home for IRA purposes</span>
              </li>
            </ul>
            <div className="bg-bullion-gold/5 border border-bullion-gold/20 rounded-lg p-4">
              <p className="text-gray-400 text-sm">
                <strong className="text-bullion-gold">Note:</strong> This is general information, not tax or investment advice. Consult a qualified tax professional or IRA custodian for guidance specific to your situation.
              </p>
            </div>
          </section>

          {/* Premium Drivers */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Understanding Premium Drivers
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Gold Kangaroo coins trade at a premium above the spot price of gold. Factors that influence premiums include:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Minting Costs</h3>
                <p className="text-gray-400 text-sm">
                  Perth Mint production, quality control, and distribution expenses.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Dealer Margins</h3>
                <p className="text-gray-400 text-sm">
                  Wholesale and retail markups that fund dealer operations.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Supply & Demand</h3>
                <p className="text-gray-400 text-sm">
                  Perth Mint production capacity versus investor demand for physical gold.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Market Conditions</h3>
                <p className="text-gray-400 text-sm">
                  Economic uncertainty, inflation concerns, and safe-haven demand can increase premiums.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Product Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The Kangaroo&apos;s government backing and global recognition support competitive spreads.
                </p>
              </div>
            </div>
            <p className="text-gray-400 text-sm mt-4">
              View current Gold Kangaroo pricing at{" "}
              <a
                href="https://www.monex.com/gold-australian-kangaroo-nugget-price-charts/"
                target="_blank"
                rel="nofollow noopener noreferrer"
                className="text-bullion-gold hover:underline"
              >
                Monex Price Charts
              </a>
            </p>
          </section>

          {/* FAQ Section */}
          <section className="mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6 text-center">
              Frequently Asked Questions
            </h2>
            <div className="space-y-4">
              {faqData.map((item, index) => (
                <div key={index} className="card p-6">
                  <h3 className="text-lg font-semibold text-white mb-3">
                    {item.question}
                  </h3>
                  <p className="text-gray-300 leading-relaxed">
                    {item.answer}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-bullion-gold/10">
            <p className="text-gray-400 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/live-gold-prices" className="btn-primary">
                View Gold Prices
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
