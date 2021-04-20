# ticker-symbol-search

## Installation

`npm install symbol-search`

or

`yarn add symbol-search`

## Quick Start

```javascript
import { TickerSymbolSearch } from ticker-symbol-search

export default () => {
    return <TickerSymbolSearch
                callback = {(data) => console.log(data)}
            />;
}
```

### Data Fetched

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
