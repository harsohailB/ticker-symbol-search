<p align="center">
  <a href="https://github.com/harsohailB/ticker-symbol-search">
    <img src="example/src/assets/images/logo.svg" alt="Logo" width="50%" height="auto">
  </a>

  <h2 align="center">Ticker Symbol Search</h2>

  <p align="center">
    Seamlessly integrate a search engine to find live ticker symbols into your web app
    <br />
    <br />
    <a href="https://github.com/harsohailB/ticker-symbol-search">View Demo</a>
    ·
    <a href="https://github.com/harsohailB/ticker-symbol-search/issues">Report Bug</a>
    ·
    <a href="https://github.com/harsohailB/ticker-symbol-search/issues">Request Feature</a>
  </p>
</p>

## Installation

`npm install ticker-symbol-search`

or

`yarn add ticker-symbol-search`

## Quick Start

### Search Component

```JSX
import { TickerSymbolSearch } from ticker-symbol-search

export default () => {
    const customTheme = {
      paper: {
        background: "rgba(128, 128, 128, 0.75)",
        color: "white",
      },
      search: {
        icon: {
          color: "rgba(188, 204, 221, 0.25)",
        },
        input: {
          color: "white",
          placeholderColor: "rgba(188, 204, 221, 0.25)",
        },
      },
      markets: {
        background: "rgba(0, 0, 0, 0.25)",
        color: "white",
      },
      selector: {
        color: "white",
      },
    }

    return <TickerSymbolSearch
              callback = {(data) => console.log(data)}
              theme={customTheme} // optional
            />;
}
```

### Hook

```javascript
import { useSearchSymbols } from ticker-symbol-search

export default () => {
    const { symbols,
            isSuccess,
            isLoading,
            isError } = useSearchSymbols(search, market);
}
```

where,

`search` ticker symbol query

`market` "ALL" | "Futures" | "Forex" | "CFD" | "Crypto" | "Index" | "Economic"

### Symbol Data Fetched

Through callback or hook

```json
{
  "symbol": "<em>AAPL</em>",
  "description": "APPLE INC",
  "type": "stock",
  "exchange": "NASDAQ",
  "provider_id": "ice",
  "typespecs": ["common"],
  "country": "US"
}
```

## Development

To develop this package you need to install its dependencies and the dependencies of the example to test your changes

- Run `npm install` in `root` and `/example`

To concurrently develop and watch for your changes do the following:

- `yarn build:watch` in `root` to build your package
- `yarn start`in `/example`to run the React app to test

## Support

Please use the issues section to let us know about any bugs or issues. We will try our best to find a fix/solution for you!
