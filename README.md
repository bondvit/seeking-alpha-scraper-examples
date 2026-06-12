# Seeking Alpha Scraper — examples

Runnable examples for the **[Seeking Alpha Scraper — Valuation, Dividends, Ratings](https://apify.com/bovi/seeking-alpha-scraper)** on Apify.

Scrape Seeking Alpha for a dense per-ticker valuation snapshot — price, market cap, P/E, P/S, P/B, EPS, dividends, margins, 52-week range, Wall-St rating, analyst targets, and SA Quant ranks. Plus dividend history and company profiles. No API key. Pay per result.

## What you get per record
`analyst_price_target` · `analysts_buy` · `analysts_hold` · `analysts_sell` · `avg_volume_30d` · `beta` · `currency` · `data_type` · `dividend_growth_5y` · `dividend_rate_fwd` · `dividend_yield_fwd` · `dividend_yield_ttm` · `eps_last_quarter` · `eps_ttm` · `equity_type` · `ev_ebitda` · `exchange` · `followers` · `gross_margin` · `industry` · `last_dividend_amount` · `market_cap` · `name` · `net_margin` · `parse_confidence` · `payout_ratio` · `pb_ratio` · `pe_ratio` · `pe_ratio_fwd` · `pe_ratio_nongaap` · `price` · `ps_ratio` · `quant_overall_rank` · `quant_sector_rank` · `quant_subindustry_rank` · `return_1y_pct` · `return_ytd_pct` · `revenue_growth_yoy` · `roe` · `sa_authors_buy` · `sa_authors_count` · `sa_authors_hold` · `sa_authors_sell` · `sa_authors_strong_buy` · `sa_authors_strong_sell` · `scraped_at` · `sector` · `shares_outstanding` · `ticker` · `total_revenue` · `wall_st_rating` · `week52_high` · `week52_low`

## Who uses this
- **Equity-research automation** — pull valuation grades and ratings for a watchlist in one run.
- **Portfolio monitoring** — rating changes and news across your holdings, daily.
- **Quant screening** — structured grades as features for stock-ranking models.

## Quickstart
1. Get your Apify token: <https://console.apify.com/account/integrations>
2. Run a language example below. Both call the actor and print the results.

| Example | File |
|---|---|
| Python (`apify-client`) | [`examples/python/run.py`](examples/python/run.py) |
| JavaScript (`apify-client`) | [`examples/javascript/run.js`](examples/javascript/run.js) |
| Sample output (real records) | [`examples/sample_output.json`](examples/sample_output.json) |

## Example input
```json
{
  "tickers": [
    "AAPL",
    "MSFT"
  ],
  "dataTypes": [
    "overview"
  ],
  "maxItems": 100,
  "proxyConfiguration": {
    "useApifyProxy": true,
    "apifyProxyGroups": [
      "RESIDENTIAL"
    ]
  }
}
```

## Links
- **Actor on Apify Store:** <https://apify.com/bovi/seeking-alpha-scraper>
- **Apify client docs:** [Python](https://docs.apify.com/api/client/python/) · [JavaScript](https://docs.apify.com/api/client/js/)

---
_MIT-licensed examples. The actor runs on the caller's Apify account (you pay platform compute + per-result)._
