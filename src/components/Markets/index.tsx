import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { MarketTypes } from "../../types/markets";
import Market from "./Market";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      borderTop: "1px solid rgba(255, 255, 255, 0.25)",
      padding: "20px",
    },
  })
);

const Markets = (props: {
  markets: string[];
  selectedMarket: string;
  updateMarket: (newMarket: MarketTypes) => void;
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      direction="row"
      alignItems="center"
      className={classes.root}
    >
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
