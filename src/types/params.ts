import { MarketTypes } from "./markets";

export interface SymbolQueryParams {
  text: string;
  hl: 0 | 1;
  type: MarketTypes;
}
