import React from "react";
import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { MarketTypes } from "../../types/markets";
import Market from "./Market";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      borderTop: "1px solid rgba(255, 255, 255, 0.25)",
      padding: "20px",
      "@media only screen and (max-width: 875px)": {
        padding: "5px 20px 5px 20px",
        justifyContent: "center",
      },
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
          key={market}
          market={market}
          selected={props.selectedMarket === market}
          updateMarket={props.updateMarket}
        />
      ))}
    </Grid>
  );
};

export default Markets;
