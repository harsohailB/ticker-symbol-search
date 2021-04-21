import { useEffect, useReducer, useState } from "react";

import { getSymbols } from "../actions/symbols";
import { MarketTypes } from "../types/markets";
import { SymbolQueryParams } from "../types/params";
import { SymbolData } from "../types/symbol";
import { RequestStatus } from "../types/request";

enum Types {
  LOADING = "loading",
  SUCCESS = "success",
  ERROR = "error",
}

const initialState: RequestStatus = {
  isLoading: false,
  isError: false,
  isSuccess: false,
};

const reducer = (state: RequestStatus, action: Types) => {
  switch (action) {
    case Types.LOADING:
      return {
        isLoading: true,
        isError: false,
        isSuccess: false,
      };
    case Types.SUCCESS:
      return { isLoading: false, isError: false, isSuccess: true };
    case Types.ERROR:
      return { isLoading: false, isError: true, isSuccess: false };
    default:
      return state;
  }
};

export const useSearchSymbols = (search: string, market: MarketTypes) => {
  const [symbols, setSymbols] = useState<SymbolData[]>([]);
  const [status, dispatchStatus] = useReducer(reducer, initialState);

  const params: SymbolQueryParams = {
    text: search,
    hl: 1,
    type: market,
  };

  useEffect(() => {
    dispatchStatus(Types.LOADING);
    getSymbols(params)
      .then((symbolsResponse: SymbolData[]) => {
        setSymbols(symbolsResponse);
        dispatchStatus(Types.SUCCESS);
      })
      .catch((error) => {
        dispatchStatus(Types.ERROR);
      });
  }, [search, market]);

  return { symbols, ...status };
};
