import { useEffect, useMemo, useReducer, useState } from "react";
import _, { DebouncedFunc } from "lodash";

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
  const [timerId, setTimerId] = useState<NodeJS.Timeout | null>();

  // Debounces API call to fetch symbols
  useEffect(() => {
    dispatchStatus(Types.LOADING);

    const params: SymbolQueryParams = {
      text: search,
      hl: 1,
      type: market,
    };

    const newTimerId: NodeJS.Timeout = setTimeout(() => {
      getSymbols(params)
        .then((symbolsResponse: SymbolData[]) => {
          setSymbols(symbolsResponse);
          dispatchStatus(Types.SUCCESS);
        })
        .catch(() => {
          dispatchStatus(Types.ERROR);
        });
    }, 500);

    if (timerId == null) {
      setTimerId(newTimerId);
    } else {
      // Clears queued API call with new one with 500ms timeout
      clearTimeout(timerId);
      setTimerId(newTimerId);
    }
  }, [search, market]);

  return { symbols, ...status };
};
