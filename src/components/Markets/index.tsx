import { Grid } from "@material-ui/core";
import { MarketTypes } from "../../types/markets";
import Market from "./Market";

const Markets = (props: {
  markets: string[];
  selectedMarket: string;
  updateMarket: (newMarket: MarketTypes) => void;
}) => {
  return (
    <Grid container direction="row" alignItems="center">
      {props.markets.map((market: string) => (
        <Market
          market={market}
          selected={props.selectedMarket === market}
          updateMarket={props.updateMarket}
        />
      ))}
    </Grid>
  );
};

export default Markets;
