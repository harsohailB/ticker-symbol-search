import { SymbolQueryParams } from "../types/params";
import { config } from "../config";
import { Routes } from "../types/config";
import axios from "axios";
import { MarketTypes } from "../types/markets";

export const getSymbols = async (queryParams: SymbolQueryParams) => {
  const endpointURL: string = `${config.proxyEndpoint}?url=${config.endpoint}/${Routes.SYMBOL_SEARCH}/`;

  const response = await axios.get(endpointURL, {
    params: {
      text: queryParams.text,
      hl: queryParams.hl,
      exchange: "",
      type:
        queryParams.type === MarketTypes.ALL
          ? ""
          : queryParams.type.toLowerCase(),
      lang: "en",
      domain: "production",
    },
  });

  if (response.status !== 200) {
    throw "getSymbols failed " + response.status;
  }

  return response.data;
};
