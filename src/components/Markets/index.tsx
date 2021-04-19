import { Grid } from "@material-ui/core";
import Market from "./Market";

const Markets = (props: { markets: string[]; selectedMarket: string }) => {
  return (
    <Grid container direction="row" alignItems="center">
      {props.markets.map((market: string) => (
        <Market market={market} selected={props.selectedMarket === market} />
      ))}
    </Grid>
  );
};

export default Markets;
