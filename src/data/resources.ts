export interface Resource {
  slug: string;
  title: string;
  description: string;
  excerpt: string;
  category: string;
  monexLink: string;
}

export const resources: Resource[] = [
  {
    slug: "premiums-explained",
    title: "Understanding Gold Kangaroo Coin Premiums: A Complete Guide",
    description:
      "Learn what premiums are, why Gold Kangaroo coins have premiums over spot, and how to evaluate costs when purchasing Australian Kangaroo Gold coins.",
    excerpt:
      "Discover why Australian Kangaroo Gold coins carry premiums over spot and how to maximize your gold buying power.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "coin-comparison",
    title: "Gold Kangaroo vs Gold Eagle vs Maple Leaf: Comparing Gold Coins",
    description:
      "A detailed comparison of major gold bullion coins to help you choose the right coin for your investment goals.",
    excerpt:
      "Compare Australian Kangaroo Gold, Gold Eagle, and Canadian Maple Leaf coins across purity, premiums, and liquidity.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "storage-options",
    title: "Storing Your Gold Kangaroo Coins: Options and Best Practices",
    description:
      "Compare storage solutions for Australian Kangaroo Gold coins from home safes to bank safe deposit boxes and professional vaults.",
    excerpt:
      "A comprehensive guide to securing your gold coin investment with appropriate storage solutions.",
    category: "Security",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/",
  },
  {
    slug: "purity-advantages",
    title: "The .9999 Purity Advantage: Why 24-Karat Gold Matters",
    description:
      "Understanding the significance of the Gold Kangaroo's .9999 fine purity and how it compares to other gold bullion coins.",
    excerpt:
      "Learn why the Australian Kangaroo Gold coin's 24-karat purity makes it a premier bullion choice.",
    category: "Products",
    monexLink: "https://www.monex.com/gold-australian-kangaroo-nugget/",
  },
  {
    slug: "liquidity-considerations",
    title: "Liquidity Considerations for Gold Kangaroo Coins",
    description:
      "Understanding the liquidity of Australian Kangaroo Gold coins and how to plan for buying and selling.",
    excerpt:
      "Explore the liquidity dynamics of Gold Kangaroo coins and strategies for efficient transactions.",
    category: "Investment",
    monexLink: "https://www.monex.com/gold-australian-kangaroo-nugget/",
  },
  {
    slug: "market-dynamics",
    title: "Gold Market Dynamics: What Moves Gold Coin Prices",
    description:
      "Understanding the economic factors, geopolitical events, and market forces that influence gold prices.",
    excerpt:
      "Explore the key drivers behind gold price movements and what they mean for Gold Kangaroo investors.",
    category: "Market",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "spreads-explained",
    title: "Understanding Bid-Ask Spreads on Gold Kangaroo Coins",
    description:
      "Learn how dealer spreads work and strategies to minimize costs when buying and selling Gold Kangaroo coins.",
    excerpt:
      "Master the concept of bid-ask spreads and learn how to get the best prices on your Gold Kangaroo trades.",
    category: "Pricing",
    monexLink: "https://www.monex.com/gold-prices/",
  },
  {
    slug: "authentication-guide",
    title: "Authenticating Gold Kangaroo Coins: Security Features & Verification",
    description:
      "Best practices for verifying authenticity and understanding security features on Australian Kangaroo Gold coins.",
    excerpt:
      "Protect your investment with proper authentication knowledge and verification techniques.",
    category: "Security",
    monexLink: "https://www.monex.com/gold-australian-kangaroo-nugget/",
  },
  {
    slug: "ira-eligibility",
    title: "Gold Kangaroo IRA Eligibility: Adding Coins to Your Retirement Account",
    description:
      "Understanding how Australian Kangaroo Gold coins qualify for Precious Metals IRAs and the requirements for IRA ownership.",
    excerpt:
      "Learn how Gold Kangaroo coins meet IRS requirements for tax-advantaged retirement accounts.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "portfolio-allocation",
    title: "Allocating to Gold Kangaroo Coins in Your Portfolio",
    description:
      "Strategic considerations for incorporating Australian Kangaroo Gold coins into a diversified investment portfolio.",
    excerpt:
      "Discover how Gold Kangaroo coins fit into portfolio diversification strategies for serious investors.",
    category: "Investment",
    monexLink: "https://www.monex.com/investing-in-gold/",
  },
  {
    slug: "first-time-buyers-guide",
    title: "Buying Gold Kangaroo Coins: What First-Time Buyers Should Know",
    description:
      "A comprehensive guide for first-time buyers covering the practical process of purchasing Australian Kangaroo Gold coins.",
    excerpt:
      "Learn what to expect when purchasing your first Gold Kangaroo coin, from choosing a dealer to taking delivery.",
    category: "Buying Guide",
    monexLink: "https://www.monex.com/gold-australian-kangaroo-nugget/",
  },
  {
    slug: "tax-considerations",
    title: "Tax Considerations When Buying and Selling Gold Kangaroo Coins",
    description:
      "A high-level overview of tax considerations related to physical gold coin ownership, including capital gains and IRA ownership.",
    excerpt:
      "Understand the tax landscape for physical gold investments before making your purchase decision.",
    category: "Tax & Legal",
    monexLink: "https://www.monex.com/knowledge-base/gold-investing/",
  },
];

export function getResourceBySlug(slug: string): Resource | undefined {
  return resources.find((r) => r.slug === slug);
}

export function getResourceCategories(): string[] {
  return [...new Set(resources.map((r) => r.category))];
}
