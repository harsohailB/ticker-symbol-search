import { useEffect, useState } from "react";
import { getSymbols } from "../actions/symbols";
import { MarketTypes } from "../types/markets";
import { SymbolQueryParams } from "../types/params";
import { SymbolData } from "../types/symbol";

const useSearchSymbols = (search: string, market: MarketTypes) => {
  const [symbols, setSymbols] = useState<SymbolData[] | null>(null);

  const params: SymbolQueryParams = {
    text: search,
    hl: 1,
    type: market,
  };

  useEffect(() => {
    getSymbols(params).then((symbolsResponse: SymbolData) => {
      console.log(symbolsResponse);
    });
  }, [search, market]);

  return [symbols];
};

export default useSearchSymbols;
