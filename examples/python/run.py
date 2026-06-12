"""
seeking-alpha-scraper — Python example.

    pip install apify-client
    export APIFY_TOKEN=...        # https://console.apify.com/account/integrations
    python run.py

Docs: https://apify.com/bovi/seeking-alpha-scraper
"""
import os
from apify_client import ApifyClient

client = ApifyClient(os.environ["APIFY_TOKEN"])

run_input = {   'tickers': ['AAPL', 'MSFT'],
    'dataTypes': ['overview'],
    'maxItems': 100,
    'proxyConfiguration': {'useApifyProxy': True, 'apifyProxyGroups': ['RESIDENTIAL']}}

run = client.actor("bovi/seeking-alpha-scraper").call(run_input=run_input)

for item in client.dataset(run["defaultDatasetId"]).iterate_items():
    print(item)
