export interface Symbol {
  symbol: string;
  description: string;
  type: string;
  exchange: string;
  provider_id: string;
}

export interface Contract {
  symbol: string;
  description: string;
}

export interface StockSymbol extends Symbol {
  typespecs: string[];
  country: string;
}

export interface FuturesSymbol extends Symbol {
  country: string;
  contracts: Contract[];
}

export interface ForexSymbol extends Symbol {
  prefix: string;
}

export interface CFDSymbol extends Symbol {
  country: string;
}

export interface CryptoSymbol extends Symbol {}

export interface IndexSymbol extends Symbol {
  country: string;
}

export interface EconomicSymbol extends Symbol {
  params: string[];
}

export type SymbolData =
  | StockSymbol
  | FuturesSymbol
  | ForexSymbol
  | CFDSymbol
  | CryptoSymbol
  | IndexSymbol
  | EconomicSymbol;
