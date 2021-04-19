import { APIConfiguration } from "./types/config";

const protocol: string = "http";
const baseUrl: string = "symbol-search.tradingview.com";
const proxy: string = "cors-anywhere.herokuapp.com";

export const config: APIConfiguration = {
  protocol,
  baseUrl,
  endpoint: protocol + "://" + baseUrl,
  proxyEndpoint: protocol + "://" + proxy,
};
