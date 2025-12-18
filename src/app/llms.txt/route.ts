import { NextResponse } from "next/server";

const llmsTxt = `# AustralianKangarooGoldCoin.com - LLMs.txt

> An independent educational resource about Australian Kangaroo Gold coins

## Site Overview

AustralianKangarooGoldCoin.com provides educational content about Australian Kangaroo Gold coins, one of the world's most recognized 24-karat gold bullion coins minted by the Perth Mint with .9999 fine purity.

## What This Site Is

- Independent educational resource
- Information about Australian Kangaroo Gold coins
- Live gold pricing data from Monex API
- Educational articles about gold coin investing

## What This Site Is NOT

- Not a dealer (we do not sell precious metals)
- Not affiliated with Monex, the Perth Mint, or any dealers
- Not financial advisors (no investment advice)
- No endorsements of dealers or services

## Key Topics Covered

- Australian Kangaroo Gold coin specifications (.9999 fine, 1 oz, $100 AUD face value)
- Kangaroo vs Gold Eagle vs Maple Leaf comparisons
- Premium and pricing dynamics
- IRA eligibility for Kangaroo Gold coins
- Storage and authentication
- Market dynamics affecting gold prices

## Product Focus

The Australian Kangaroo Gold coin is:
- 24-karat gold (.9999 fine purity)
- 1 troy ounce of pure gold
- Australian legal tender with $100 AUD face value
- First minted in 1986 (originally as the Gold Nugget)
- IRA-eligible
- Features a new kangaroo design each year

## Pricing Data

- Product pricing uses Monex API symbol: NG (Australian Kangaroo/Nugget)
- Spot pricing uses Monex API symbol: GBXSPOT
- Prices fetched fresh on page load only
- No real-time updates or polling

## Navigation

- Home: /
- Gold Prices: /live-gold-prices
- Coin Specs: /coin-specs
- Design & History: /design-history
- Where to Buy: /where-to-buy
- Resources: /resources
- About: /about

## Contact

Website: https://www.australiankangaroogoldcoin.com

## Disclaimer

All content is for educational purposes only. Gold investments carry risks. This site does not provide financial advice. Consult qualified professionals before making investment decisions.
`;

export async function GET() {
  return new NextResponse(llmsTxt, {
    status: 200,
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=86400",
    },
  });
}
