import React from "react";
import { createStyles, Grid, makeStyles } from "@material-ui/core";
import { MarketTypes } from "../../types/markets";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: "rgba(0, 0, 0, 0.25)",
      margin: "5px 12px 5px 0px",
      borderRadius: "20px",
      cursor: "pointer",
      width: "max-content",
      "@media only screen and (max-width: 768px)": {
        fontSize: "10px",
      },
    },
    text: {
      margin: 0,
      color: "white",
      padding: "6px 8px 6px 8px",
    },
    selectedText: {
      margin: 0,
      color: "white",
      padding: "6px 8px 6px 8px",
      fontWeight: "bold",
    },
  })
);

const Market = (props: {
  market: string;
  selected: boolean;
  updateMarket: (newMarket: MarketTypes) => void;
}) => {
  const classes = useStyles();

  return (
    <Grid
      item
      className={classes.root}
      onClick={() => props.updateMarket(props.market as MarketTypes)}
    >
      <p className={props.selected ? classes.selectedText : classes.text}>
        {props.market}
      </p>
    </Grid>
  );
};

export default Market;
