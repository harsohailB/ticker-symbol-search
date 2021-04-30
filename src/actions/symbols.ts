import { SymbolQueryParams } from "../types/params";
import { config } from "../config";
import { Routes } from "../types/config";
import axios from "axios";
import { MarketTypes } from "../types/markets";

export const getSymbols = async (queryParams: SymbolQueryParams) => {
  const targetParams: string = `?type=${
    queryParams.type === MarketTypes.ALL ? "" : queryParams.type.toLowerCase()
  }&text=${queryParams.text}&hl=${
    queryParams.hl
  }&exchange=&lang=en&domain=production`;

  const symbolsEndpoint: string = `${config.endpoint}/${Routes.SYMBOL_SEARCH}`;

  const response = await axios.get(config.proxyEndpoint, {
    params: { url: symbolsEndpoint + targetParams },
  });

  if (response.status !== 200) {
    throw "getSymbols failed " + response.status;
  }

  return response.data;
};
