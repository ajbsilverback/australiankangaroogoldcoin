import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { SITE_CONFIG } from "@/lib/siteConfig";

export const metadata: Metadata = {
  title: "Gold Kangaroo Design & History | Perth Mint's Iconic Australian Coin",
  description:
    "Explore the history and design of the Australian Kangaroo Gold coin: Perth Mint heritage, the evolution from Gold Nugget to Kangaroo, and what the design signals to gold investors.",
  alternates: {
    canonical: `${SITE_CONFIG.canonicalDomain}/design-history`,
  },
  openGraph: {
    title: "Gold Kangaroo Design & History | Perth Mint's Iconic Australian Coin",
    description:
      "The story behind the Australian Kangaroo Gold coin: Perth Mint heritage, design evolution, and what the iconic imagery means for modern gold investors.",
    url: `${SITE_CONFIG.domain}/design-history`,
    type: "website",
  },
  twitter: {
    card: "summary",
    title: "Gold Kangaroo Design & History",
    description:
      "The story behind Australia's premier gold bullion coin: Perth Mint heritage and the iconic kangaroo design.",
  },
};

export default function DesignHistoryPage() {
  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: "Australian Gold Kangaroo Design & History",
    description:
      "The history and design origins of the Australian Kangaroo Gold coin, featuring Perth Mint heritage and the iconic kangaroo design.",
    url: `${SITE_CONFIG.domain}/design-history`,
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.brandName,
      url: SITE_CONFIG.domain,
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webPageSchema) }}
      />

      <div className="py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
              Design <span className="gold-text">&amp; History</span>
            </h1>
            <p className="text-xl text-gray-300 max-w-2xl mx-auto">
              The story behind Australia&apos;s iconic gold bullion coin, from the 1986 Gold Nugget to the modern Kangaroo series.
            </p>
          </div>

          {/* 3-Card Image Showcase */}
          <section className="mb-16">
            <div className="grid md:grid-cols-3 gap-6">
              {/* Card 1: Designer Portrait */}
              <div className="card p-6 flex flex-col">
                <h3 className="text-lg font-display font-semibold text-bullion-gold mb-4 text-center">
                  The Designer
                </h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-bullion-gold/5 to-transparent flex items-center justify-center">
                  <div className="relative w-[85%] h-[85%]">
                    <Image
                      src="/Dr. Stuart Devlin AO CMG.jpg"
                      alt="Dr. Stuart Devlin AO CMG, designer of the original Gold Kangaroo"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 280px, 300px"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm text-center mt-4">
                  <strong className="text-white">Dr. Stuart Devlin AO CMG</strong>
                  <br />
                  Created the original kangaroo motif and Australian decimal coinage
                </p>
              </div>

              {/* Card 2: Obverse Image */}
              <div className="card p-6 flex flex-col">
                <h3 className="text-lg font-display font-semibold text-bullion-gold mb-4 text-center">
                  Obverse
                </h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-bullion-gold/5 to-transparent flex items-center justify-center">
                  <div className="relative w-[85%] h-[85%]">
                    <Image
                      src="/gold-australian-kangaroo-obverse.png"
                      alt="Australian Gold Kangaroo obverse showing monarch portrait"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 280px, 300px"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm text-center mt-4">
                  <strong className="text-white">Monarch Portrait</strong>
                  <br />
                  King Charles III (or Queen Elizabeth II on earlier coins)
                </p>
              </div>

              {/* Card 3: Reverse Image */}
              <div className="card p-6 flex flex-col">
                <h3 className="text-lg font-display font-semibold text-bullion-gold mb-4 text-center">
                  Reverse
                </h3>
                <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-gradient-to-br from-bullion-gold/5 to-transparent flex items-center justify-center">
                  <div className="relative w-[85%] h-[85%]">
                    <Image
                      src="/gold-australian-kangaroo-reverse.png"
                      alt="Australian Gold Kangaroo reverse showing kangaroo design"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 280px, 300px"
                      priority
                    />
                  </div>
                </div>
                <p className="text-gray-400 text-sm text-center mt-4">
                  <strong className="text-white">Kangaroo</strong>
                  <br />
                  Iconic Australian symbol, design changes annually
                </p>
              </div>
            </div>
          </section>

          {/* Perth Mint Section */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-full max-w-xs aspect-[4/3] rounded-xl overflow-hidden bg-gradient-to-br from-bullion-gold/10 to-transparent flex items-center justify-center">
                  <div className="relative w-[95%] h-[95%]">
                    <Image
                      src="/perth-mint-building.jpg"
                      alt="Perth Mint building in Western Australia"
                      fill
                      className="object-cover rounded-lg"
                      sizes="(max-width: 768px) 280px, 320px"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  The Perth Mint: A Legacy of Excellence
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The Perth Mint, established in 1899, is one of the world&apos;s most respected precious metals refiners and coin producers. Originally opened as a branch of Britain&apos;s Royal Mint to refine gold from Western Australia&apos;s rich goldfields, it has evolved into a global leader in bullion production.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Today, the Perth Mint is wholly owned by the Government of Western Australia and operates as one of the largest refineries in the Southern Hemisphere. Its products are recognized worldwide for their quality, purity, and innovative designs.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  The Perth Mint&apos;s commitment to excellence is backed by the Western Australian government guarantee, providing investors with confidence in the authenticity and purity of every coin produced.
                </p>
              </div>
            </div>
          </section>

          {/* Origin Story - Gold Nugget */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Origins: The Australian Gold Nugget (1986-1989)
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              The Australian gold bullion program launched in 1986 as the &ldquo;Australian Gold Nugget&rdquo; series. These early coins featured images of famous Australian gold nuggets on the reverse, celebrating Australia&apos;s rich gold mining heritage.
            </p>
            <ul className="space-y-3 text-gray-300 mb-4">
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold">•</span>
                <span><strong className="text-white">1986</strong>: Launch year featuring the Welcome Stranger, Hand of Faith, and other famous nuggets</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold">•</span>
                <span><strong className="text-white">.9999 purity</strong>: From the start, Perth Mint committed to 24-karat gold</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-bullion-gold">•</span>
                <span><strong className="text-white">Multiple sizes</strong>: Available in 1 oz, 1/2 oz, 1/4 oz, 1/10 oz, and 1/20 oz</span>
              </li>
            </ul>
            <p className="text-gray-300 leading-relaxed">
              The Gold Nugget design, while historically significant, faced recognition challenges in international markets. This led to a pivotal decision that would transform the series.
            </p>
          </section>

          {/* Kangaroo Design Evolution */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              The Kangaroo Design: 1989 to Present
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              In 1989, the Perth Mint made a strategic decision to replace the gold nugget imagery with the iconic Australian kangaroo. This change dramatically improved the coin&apos;s recognition and appeal in global markets.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              The kangaroo is one of Australia&apos;s most recognizable national symbols, instantly identifying the coin&apos;s origin to collectors and investors worldwide. Unlike many bullion coins with static designs, the Kangaroo features a new design each year.
            </p>
            <div className="bg-white/5 rounded-lg p-4 mb-4">
              <p className="text-gray-300 italic">
                &ldquo;The kangaroo design transformed our bullion program from a regional product to a globally recognized investment coin.&rdquo;
              </p>
              <p className="text-gray-500 text-sm mt-2">- Perth Mint Historical Records</p>
            </div>
            <p className="text-gray-300 leading-relaxed">
              This annual design change adds collectible appeal to the coin&apos;s investment value, making certain years more sought after by collectors while maintaining strong demand among bullion investors.
            </p>
          </section>

          {/* Obverse Design */}
          <section className="card p-6 md:p-8 mb-10">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden bg-gradient-to-br from-bullion-gold/10 to-transparent flex items-center justify-center">
                  <div className="relative w-[90%] h-[90%]">
                    <Image
                      src="/gold-australian-kangaroo-obverse.png"
                      alt="Australian Gold Kangaroo obverse showing monarch portrait"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 224px, 288px"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  Obverse: The Monarch&apos;s Portrait
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The obverse (front) of the Australian Kangaroo Gold coin features the portrait of the reigning British/Australian monarch, establishing the coin&apos;s status as official legal tender.
                </p>
                <ul className="space-y-3 text-gray-300 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">1986-2022</strong>: Queen Elizabeth II effigy by various artists over the years</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">2023-present</strong>: King Charles III effigy</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  The monarch&apos;s portrait includes inscriptions of the face value ($100 AUD), the weight (1 oz), and the purity (.9999 gold). This design element confirms the coin&apos;s government backing and legal tender status.
                </p>
              </div>
            </div>
          </section>

          {/* Reverse Design */}
          <section className="card p-6 md:p-8 mb-10 bg-bullion-gold/5 border-bullion-gold/30">
            <div className="grid md:grid-cols-12 gap-8 items-center">
              <div className="md:col-span-5 flex justify-center">
                <div className="relative w-56 h-56 md:w-72 md:h-72 rounded-xl overflow-hidden bg-gradient-to-br from-bullion-gold/10 to-transparent flex items-center justify-center">
                  <div className="relative w-[90%] h-[90%]">
                    <Image
                      src="/gold-australian-kangaroo-reverse.png"
                      alt="Australian Gold Kangaroo reverse showing kangaroo design"
                      fill
                      className="object-contain"
                      sizes="(max-width: 768px) 224px, 288px"
                    />
                  </div>
                </div>
              </div>
              <div className="md:col-span-7">
                <h2 className="text-2xl font-display font-semibold text-white mb-4">
                  Reverse: The Kangaroo Design
                </h2>
                <p className="text-gray-300 leading-relaxed mb-4">
                  The reverse features a kangaroo design that changes annually. Perth Mint artists create new depictions each year, showing kangaroos in various poses and settings that celebrate Australian wildlife.
                </p>
                <p className="text-gray-300 leading-relaxed mb-4">
                  Common design themes include:
                </p>
                <ul className="space-y-3 text-gray-300 mb-4">
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Bounding kangaroos</strong>: Dynamic poses showing the animal in motion</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Kangaroo pairs</strong>: Mother and joey, or multiple kangaroos</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Outback settings</strong>: Australian landscapes and vegetation</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-bullion-gold">•</span>
                    <span><strong className="text-white">Detailed artistry</strong>: High-relief details showcasing Perth Mint craftsmanship</span>
                  </li>
                </ul>
                <p className="text-gray-300 leading-relaxed">
                  Inscriptions on the reverse typically include &ldquo;AUSTRALIAN KANGAROO&rdquo; and the year of mintage, along with the Perth Mint&apos;s &ldquo;P&rdquo; mintmark.
                </p>
              </div>
            </div>
          </section>

          {/* What Design Signals to Investors */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              What the Design Signals to Investors
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              For investors, the design conveys more than visual appeal:
            </p>
            <div className="space-y-4">
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Global Recognition</h3>
                <p className="text-gray-400 text-sm">
                  The kangaroo is instantly recognizable worldwide, facilitating transactions across borders and markets. Dealers everywhere know and accept this coin.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Government Authority</h3>
                <p className="text-gray-400 text-sm">
                  The monarch&apos;s effigy and legal tender status signal authenticity and weight/purity guarantees backed by the Australian government.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Annual Variety</h3>
                <p className="text-gray-400 text-sm">
                  The changing design each year adds collectible appeal, potentially supporting resale values for specific years while maintaining strong bullion demand.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Quality Assurance</h3>
                <p className="text-gray-400 text-sm">
                  Perth Mint&apos;s reputation for excellence means each coin meets exacting standards for weight, purity, and finish.
                </p>
              </div>
              <div className="border-l-2 border-bullion-gold/50 pl-4">
                <h3 className="text-white font-semibold">Strong Liquidity</h3>
                <p className="text-gray-400 text-sm">
                  The Kangaroo&apos;s widespread recognition supports competitive bid-ask spreads and ready markets when selling.
                </p>
              </div>
            </div>
          </section>

          {/* Comparison with Other Coins */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-4">
              Kangaroo vs. Other Gold Coins: Design Philosophy
            </h2>
            <p className="text-gray-300 leading-relaxed mb-4">
              Different mints take different approaches to bullion coin design:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Gold Kangaroo</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>- Annual design changes</li>
                  <li>- Dynamic kangaroo imagery</li>
                  <li>- Celebrates Australian wildlife</li>
                  <li>- Collectible + investment appeal</li>
                  <li>- Perth Mint since 1986</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Maple Leaf</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>- Consistent maple leaf design</li>
                  <li>- Canadian national symbol</li>
                  <li>- Focus on purity and security</li>
                  <li>- Micro-engraved security features</li>
                  <li>- Royal Canadian Mint since 1979</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Gold Eagle</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>- Classic Liberty design</li>
                  <li>- Eagle family on reverse</li>
                  <li>- American patriotic imagery</li>
                  <li>- 22-karat alloy for durability</li>
                  <li>- U.S. Mint since 1986</li>
                </ul>
              </div>
              <div className="bg-white/5 rounded-lg p-5">
                <h3 className="text-bullion-gold font-semibold mb-3">Krugerrand</h3>
                <ul className="space-y-2 text-gray-400 text-sm">
                  <li>- Paul Kruger portrait</li>
                  <li>- Springbok antelope reverse</li>
                  <li>- First modern bullion coin</li>
                  <li>- 22-karat alloy</li>
                  <li>- South African Mint since 1967</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Timeline */}
          <section className="card p-6 md:p-8 mb-10">
            <h2 className="text-2xl font-display font-semibold text-white mb-6">
              Key Dates in Kangaroo Design History
            </h2>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1899</div>
                <p className="text-gray-300">Perth Mint established as branch of Royal Mint</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1986</div>
                <p className="text-gray-300">Australian Gold Nugget series launches</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1989</div>
                <p className="text-gray-300">Kangaroo design replaces gold nugget imagery</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">1990s</div>
                <p className="text-gray-300">Annual design changes become signature feature</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">2008</div>
                <p className="text-gray-300">Series officially renamed &ldquo;Australian Kangaroo&rdquo;</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">2023</div>
                <p className="text-gray-300">King Charles III effigy debuts on obverse</p>
              </div>
              <div className="flex gap-4">
                <div className="text-bullion-gold font-bold w-20 flex-shrink-0">Today</div>
                <p className="text-gray-300">Gold Kangaroo remains one of world&apos;s most traded bullion coins</p>
              </div>
            </div>
          </section>

          {/* Navigation CTAs */}
          <div className="text-center pt-8 border-t border-bullion-gold/10">
            <p className="text-gray-400 mb-6">
              Related pages
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link href="/resources" className="btn-primary">
                Browse Resources
              </Link>
              <Link href="/where-to-buy" className="btn-secondary">
                Where to Buy
              </Link>
              <Link href="/coin-specs" className="btn-secondary">
                Coin Specifications
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
