export interface SymbolData {
  symbol: string;
  description: string;
  type: string;
  exchange: string;
  provider_id: string;
  typespecs?: string[];
  country?: string;
  prefix?: string;
}
