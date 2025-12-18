import { QAItem } from "@/components/QASection";

/**
 * FAQ Content with Dynamic Price Tokens
 * 
 * Supported tokens (replaced at render time with live prices):
 * - {{CAPITAL_REQUIREMENT}}       -> "~$2,700" (ask price rounded to $10)
 * - {{CAPITAL_REQUIREMENT_RANGE}} -> "~$2,600-$2,800" (ask +/- 5% band)
 * - {{CAPITAL_REQUIREMENT_PLUS}}  -> "~$2,700+" (ask rounded with plus)
 * - {{LIQUIDITY_THRESHOLD}}       -> "~$2,700+" (same as plus, for liquidity context)
 */

export const homeQA: QAItem[] = [
  {
    question: "What is the Australian Gold Kangaroo coin?",
    answer: "The Australian Gold Kangaroo is a 24-karat gold bullion coin minted by the Perth Mint since 1986. It contains exactly 1 troy ounce of .9999 fine (pure) gold, making it one of the world's purest gold bullion coins. The coin carries a $100 AUD face value and is legal tender in Australia.",
  },
  {
    question: "Why is the Gold Kangaroo .9999 pure?",
    answer: "The Gold Kangaroo was created to compete with other 24-karat bullion coins like the Canadian Maple Leaf. The .9999 purity appeals to investors who want maximum gold content and those whose IRA custodians require pure gold products. Unlike the Gold Eagle (.9167 fine, 22-karat), the Kangaroo contains one full troy ounce of pure gold with no alloys.",
  },
  {
    question: "How much does an Australian Gold Kangaroo cost?",
    answer: "At current gold prices, an Australian Gold Kangaroo costs approximately {{CAPITAL_REQUIREMENT_RANGE}} depending on spot price and dealer premiums. The price consists of the gold spot value plus a premium typically ranging from 2-4% for standard bullion coins.",
  },
  {
    question: "Are Gold Kangaroo coins easy to sell?",
    answer: "Yes, Australian Kangaroo Gold coins are highly liquid. As Perth Mint products with legal tender status, they're recognized and readily purchased by dealers worldwide. Most established dealers will buy Gold Kangaroo coins at competitive prices, typically within 2-3% of spot.",
  },
  {
    question: "Can I hold Gold Kangaroo coins in my IRA?",
    answer: "Yes, Australian Gold Kangaroo coins are IRS-approved for Precious Metals IRAs. Their .9999 fine purity exceeds the IRS minimum of .995 for gold, and their government-minted status meets eligibility requirements. Coins must be held by an approved custodian in an approved depository while in your IRA.",
  },
];

export const pricesQA: QAItem[] = [
  {
    question: "What is the relationship between spot price and Gold Kangaroo prices?",
    answer: "The Gold Kangaroo price equals the gold spot price (per troy ounce) plus a premium typically ranging from 2-4%. The total cost is approximately {{CAPITAL_REQUIREMENT}} including premium. This premium covers Perth Mint production, distribution, and dealer margins.",
  },
  {
    question: "Why do Gold Kangaroo premiums vary between dealers?",
    answer: "Premium variations reflect different dealer business models, inventory positions, and overhead costs. Volume dealers with efficient operations often offer lower premiums. Some dealers may have better relationships with distributors. Shopping multiple dealers helps identify competitive pricing.",
  },
  {
    question: "How does the bid-ask spread affect my Gold Kangaroo investment?",
    answer: "The bid-ask spread on Gold Kangaroo coins is typically 2-4% for standard bullion coins. With a {{CAPITAL_REQUIREMENT}} coin, this represents about $50-$100. Your gold must appreciate by the full spread percentage before you break even on a round-trip transaction.",
  },
  {
    question: "Do Gold Kangaroo coins have different premiums than Gold Eagles?",
    answer: "Gold Kangaroo premiums are typically slightly lower than Gold Eagle premiums, ranging from 2-4% over spot compared to 3-5% for Eagles. Both are government-minted legal tender coins with excellent liquidity, but the Kangaroo's higher purity (.9999 vs .9167) often comes with competitive premiums.",
  },
  {
    question: "When is the best time to buy Gold Kangaroo coins based on pricing?",
    answer: "The best time is during calm market conditions when premiums are at normal levels (2-4% over spot). Avoid buying during crisis-driven demand spikes when premiums can temporarily expand to 6-8% or higher. Patient buying during normal markets secures better pricing.",
  },
];

export const resourcesQA: QAItem[] = [
  {
    question: "What topics do your Gold Kangaroo resources cover?",
    answer: "Our educational library covers all aspects of Gold Kangaroo investing including: understanding premiums, coin comparisons (Kangaroo vs Eagle vs Maple Leaf), storage options, purity advantages, IRA eligibility, market dynamics, bid-ask spreads, authentication, and portfolio allocation strategies.",
  },
  {
    question: "How does the Gold Kangaroo compare to the Gold Eagle?",
    answer: "Both are excellent government bullion coins. The Kangaroo offers .9999 purity (24-karat) while the Eagle is .9167 (22-karat). The Eagle is more durable due to its alloy but the Kangaroo contains pure gold with no base metals. Both are IRA-eligible and highly liquid.",
  },
  {
    question: "Is the Gold Kangaroo better than other gold coins?",
    answer: "Neither is universally better; each serves different investor needs. The Gold Kangaroo is ideal for investors prioritizing maximum purity, competitive premiums, and annual design variety. Other coins like the Maple Leaf match purity while the Eagle offers durability.",
  },
  {
    question: "What should I look for when buying my first Gold Kangaroo?",
    answer: "For first-time Gold Kangaroo buyers: purchase from reputable dealers, verify the dealer's credentials, compare premiums across multiple sources, ensure full documentation, and plan your storage solution before purchasing. Government-minted coins from authorized channels provide the best authenticity assurance.",
  },
];

// Resource-specific Q&A content
export const resourceQA: Record<string, QAItem[]> = {
  "premiums-explained": [
    {
      question: "What is a typical premium for an Australian Gold Kangaroo?",
      answer: "Typical premiums for Australian Kangaroo Gold coins range from 2-4% over spot under normal market conditions. This is slightly lower than Gold Eagles and comparable to Canadian Maple Leafs. During supply constraints, premiums can temporarily rise to 6-8% or more.",
    },
    {
      question: "Why do Gold Kangaroo premiums exist?",
      answer: "Premiums cover Perth Mint minting costs, distributor margins, dealer margins, and reflect the value of the coin's legal tender status and .9999 purity. Government-minted coins command premiums for their guaranteed authenticity and worldwide recognition.",
    },
    {
      question: "Do I recover the premium when I sell my Gold Kangaroo?",
      answer: "You typically don't recover the full premium on resale, but Gold Kangaroo coins from the Perth Mint have competitive bid-ask spreads (2-4%). Their strong global recognition supports good buyback prices. The combination of reasonable purchase premiums and competitive spreads makes Gold Kangaroos economically efficient.",
    },
  ],
  "coin-comparison": [
    {
      question: "What's the main difference between Gold Kangaroo and Gold Eagle?",
      answer: "The primary difference is purity: Gold Kangaroo is .9999 fine (24-karat pure gold) while Gold Eagle is .9167 fine (22-karat, alloyed with copper and silver). Both contain 1 troy ounce of gold, but the Eagle weighs more due to the alloy. The Kangaroo is softer; the Eagle is more durable.",
    },
    {
      question: "Which gold coin has the lowest premium?",
      answer: "Among major gold bullion coins, Australian Kangaroos and Canadian Maple Leafs typically have slightly lower premiums (2-4%) than U.S. coins. Gold Eagle premiums are comparable (3-5%). Premium differences are modest among major government coins.",
    },
    {
      question: "Are all these coins IRA eligible?",
      answer: "Yes, Australian Gold Kangaroo, Gold Eagle, and Canadian Maple Leaf are all IRS-approved for Precious Metals IRAs. They meet the .995 minimum purity requirement (Kangaroo and Maple Leaf exceed it at .9999). All are government-minted legal tender coins.",
    },
  ],
  "storage-options": [
    {
      question: "What type of storage is recommended for Gold Kangaroo coins?",
      answer: "Gold Kangaroo coins are practical for multiple storage options. A quality home safe works well for modest holdings. Bank safe deposit boxes provide institutional security. For larger holdings or IRA coins, professional vault storage with approved depositories is available.",
    },
    {
      question: "Can I store Gold Kangaroo coins at home?",
      answer: "Yes, Gold Kangaroo coins are well-suited for home storage. A quality fireproof safe (ideally bolted down) provides reasonable security for several coins. Consider insurance coverage for high-value holdings. Keep coins in protective holders to prevent scratching.",
    },
    {
      question: "Do IRA Gold Kangaroo coins have special storage requirements?",
      answer: "Yes, IRA gold must be stored at an IRS-approved depository by an approved custodian. You cannot take personal possession of IRA gold while it remains in the account. The custodian handles storage arrangements and maintains records for IRS compliance.",
    },
  ],
  "purity-advantages": [
    {
      question: "Why does .9999 purity matter?",
      answer: "The .9999 purity (24-karat) means the Gold Kangaroo contains no alloy metals. It's essentially pure gold. This appeals to investors who want maximum gold content, those with IRA custodians requiring pure gold, and investors in markets where 24-karat gold is culturally preferred.",
    },
    {
      question: "Is .9999 gold more valuable than .9167 gold?",
      answer: "Spot value is based on gold content, not purity. A 1 oz Gold Kangaroo (.9999) and 1 oz Gold Eagle (.9167) both contain exactly 1 troy ounce of gold and have the same gold value. The Eagle simply weighs more because of its alloy metals. Premiums are similar for both.",
    },
    {
      question: "Does higher purity mean better resale value?",
      answer: "Not necessarily for well-known coins. Both Gold Kangaroo and Gold Eagle are highly liquid with similar resale dynamics. In some international markets, 24-karat gold is preferred, which could benefit Kangaroo coins. In most transactions, both trade equally well.",
    },
  ],
  "liquidity-considerations": [
    {
      question: "How quickly can I sell a Gold Kangaroo coin?",
      answer: "Gold Kangaroo coins can typically be sold within 1-2 business days through established dealers. As Perth Mint products with legal tender status, they're instantly recognized. Same-day transactions are often possible at local coin shops with cash payment.",
    },
    {
      question: "Do Gold Kangaroo coins trade as well as Gold Eagles?",
      answer: "Yes, Gold Kangaroos have excellent liquidity comparable to Gold Eagles. Both are well-established government-minted products with strong dealer demand. The Kangaroo's longer history (1986 vs 1986 for Eagles) and Perth Mint reputation ensure strong market acceptance.",
    },
    {
      question: "What documentation helps with Gold Kangaroo resale?",
      answer: "Maintain purchase receipts showing dealer, date, and price. Original Perth Mint packaging adds value for collectors. Coins in protective holders present better than loose coins. Documentation speeds transactions and supports pricing.",
    },
  ],
  "market-dynamics": [
    {
      question: "What causes gold prices to rise or fall?",
      answer: "Gold prices respond to multiple factors: interest rates (higher rates typically pressure gold), dollar strength (inverse relationship), inflation expectations (gold as hedge), geopolitical uncertainty (safe haven demand), central bank buying/selling, and investment flows. No single factor dominates.",
    },
    {
      question: "How do Federal Reserve decisions affect Gold Kangaroo values?",
      answer: "Fed policy significantly influences gold through interest rates and inflation expectations. Rate hikes increase gold's opportunity cost, typically pressuring prices. Rate cuts or quantitative easing tend to support gold. Gold Kangaroo values move with spot prices regardless of coin type.",
    },
    {
      question: "Do Gold Kangaroo premiums change with market conditions?",
      answer: "Yes, premiums fluctuate with demand. During market crises or uncertainty, demand for physical gold often spikes, pushing premiums to 6-8% or higher. During calm markets, premiums settle to normal 2-4% levels. Patient buyers secure better premiums.",
    },
  ],
  "spreads-explained": [
    {
      question: "What is a good bid-ask spread for Gold Kangaroo coins?",
      answer: "Under normal market conditions, spreads of 2-4% for Gold Kangaroo coins represent competitive pricing. This is comparable to other major government bullion coins. If a dealer quotes significantly wider spreads, shop elsewhere.",
    },
    {
      question: "How do I calculate my break-even point on a Gold Kangaroo?",
      answer: "Add your purchase premium to the expected selling discount. If you pay 3% over spot and expect to receive 2% below spot when selling, you need 5% gold appreciation to break even. On a {{CAPITAL_REQUIREMENT}} Gold Kangaroo, that's roughly $130-$150 in gold price movement.",
    },
    {
      question: "Do spreads vary by coin type?",
      answer: "Spreads are similar among major government bullion coins (Kangaroo, Eagle, Maple Leaf). All benefit from strong recognition and dealer markets. Lesser-known coins or bars may face wider spreads. For Gold Kangaroo purchases, expect competitive spreads.",
    },
  ],
  "authentication-guide": [
    {
      question: "How do I verify a Gold Kangaroo coin is authentic?",
      answer: "Key verification methods: confirm correct weight (1.0001 oz or 31.108g), verify diameter (32.60mm) and thickness (2.65mm), check design details against known specimens, purchase from reputable dealers. For secondary market purchases, consider professional authentication.",
    },
    {
      question: "What security features do Gold Kangaroo coins have?",
      answer: "Gold Kangaroo coins include precise specifications, detailed design elements (the kangaroo and monarch portrait are intricately detailed), and consistent weight/dimensions. The .9999 gold has a distinct color. Perth Mint quality control ensures consistency across all coins.",
    },
    {
      question: "Should I have Gold Kangaroo coins professionally authenticated?",
      answer: "For purchases from reputable primary dealers, authentication is typically unnecessary because dealers stake their reputation on authenticity. For secondary market purchases, estate finds, or coins without clear provenance, professional authentication provides peace of mind.",
    },
  ],
  "ira-eligibility": [
    {
      question: "Why are Gold Kangaroo coins IRA-eligible?",
      answer: "Gold Kangaroos meet all IRS requirements: .9999 purity exceeds the .995 minimum, they're minted by a government mint (Perth Mint), and they're recognized legal tender. These factors make them approved assets for Precious Metals IRAs.",
    },
    {
      question: "Can I take physical possession of my IRA Gold Kangaroos?",
      answer: "Not while in the IRA. IRS rules require IRA precious metals to be held by an approved custodian at an approved depository. Taking possession triggers a distribution with tax consequences. When you take a distribution, you can receive the physical coins.",
    },
    {
      question: "What are the costs of holding Gold Kangaroos in an IRA?",
      answer: "IRA costs include: custodian setup fees ($50-$300), annual custodian fees ($75-$300), storage fees ($100-$300/year), and any transaction fees. These costs should be weighed against the tax advantages of IRA ownership.",
    },
  ],
  "portfolio-allocation": [
    {
      question: "What percentage of a portfolio should be in gold coins?",
      answer: "Conventional wisdom suggests 5-15% of a portfolio in precious metals as a diversifier and inflation hedge. The specific allocation depends on your risk tolerance, investment horizon, and overall financial situation. Gold Kangaroos are appropriate for any gold allocation.",
    },
    {
      question: "Should I buy Gold Kangaroos all at once or over time?",
      answer: "Both approaches have merit. Purchasing multiple coins at once may secure better per-coin pricing. Dollar-cost averaging (buying over time) reduces timing risk but incurs multiple transaction costs. Your approach should align with your investment timeline.",
    },
    {
      question: "How do Gold Kangaroo coins fit with other gold investments?",
      answer: "Gold Kangaroos and gold ETFs serve different purposes. Physical coins provide direct ownership with no counterparty risk. ETFs offer liquidity and easy trading but represent claims on gold held by third parties. Many investors use both for different purposes.",
    },
  ],
  "first-time-buyers-guide": [
    {
      question: "What is the typical process for buying a Gold Kangaroo coin?",
      answer: "The process typically involves: researching and selecting a reputable dealer, comparing prices and premiums, placing an order with a locked price, completing payment, and receiving insured delivery. The process usually spans 3-7 business days depending on payment method.",
    },
    {
      question: "What payment methods are accepted for Gold Kangaroo purchases?",
      answer: "Wire transfer is common for precious metals transactions. Many dealers also accept credit cards (often with a fee), personal checks (with clearing periods), and ACH transfers. Some dealers accept cryptocurrency. Credit cards often work for single-coin purchases.",
    },
    {
      question: "Why do Gold Kangaroo prices vary between dealers?",
      answer: "Price variations reflect different business models, sourcing relationships, overhead costs, and profit margins. Some dealers are authorized distributors with direct Perth Mint access; others buy from distributors. Always compare prices from multiple sources.",
    },
  ],
  "tax-considerations": [
    {
      question: "How is physical gold taxed when sold?",
      answer: "Physical gold is generally classified as a collectible for federal tax purposes. When sold for a gain, capital gains tax applies. The specific rates and rules depend on holding period, income level, and current tax legislation. Consult a tax professional for your situation.",
    },
    {
      question: "Do I pay sales tax when buying a Gold Kangaroo coin?",
      answer: "Sales tax treatment varies significantly by state. Many states exempt precious metals purchases entirely, others tax them at standard rates, and some have exemptions based on transaction size. Understanding your state's rules affects your total cost.",
    },
    {
      question: "What are the tax advantages of holding Gold Kangaroos in an IRA?",
      answer: "IRA ownership provides tax-advantaged treatment: Traditional IRA contributions may be tax-deductible with taxes deferred until distribution; Roth IRA growth and qualified distributions are tax-free. However, IRA ownership involves custodian fees and prevents personal possession.",
    },
  ],
};
