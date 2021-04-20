export const installCode: string = "npm install ticker-symbol-search --save";

export const usageCode: string = `import { TickerSymbolSearch } from ticker-symbol-search

export default () => {
    return <TickerSymbolSearch 
                       callback = { (data) => console.log(data) } 
                />;
}`;
