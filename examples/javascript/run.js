/**
 * seeking-alpha-scraper — JavaScript example.
 *
 *   npm install apify-client
 *   export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
 *   node run.js
 *
 * Docs: https://apify.com/bovi/seeking-alpha-scraper
 */
import { ApifyClient } from 'apify-client';

const client = new ApifyClient({ token: process.env.APIFY_TOKEN });

const input = {
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
};

const run = await client.actor('bovi/seeking-alpha-scraper').call(input);
const { items } = await client.dataset(run.defaultDatasetId).listItems();
for (const item of items) console.log(item);
