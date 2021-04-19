import { APIConfiguration } from "./types/config";

const protocol: string = "http";
const baseUrl: string = "symbol-search.tradingview.com";

export const config: APIConfiguration = {
  protocol,
  baseUrl,
  endpoint: protocol + "://" + baseUrl,
};
