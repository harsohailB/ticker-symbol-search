import { APIConfiguration } from "./types/config";

const protocol: string = "https";
const baseUrl: string = "symbol-search.tradingview.com";
const proxy: string = "api.allorigins.win/raw";

export const config: APIConfiguration = {
  protocol,
  baseUrl,
  endpoint: protocol + "://" + baseUrl,
  proxyEndpoint: protocol + "://" + proxy,
};
