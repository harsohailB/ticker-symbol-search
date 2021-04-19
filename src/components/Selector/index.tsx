import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";

import { SymbolData } from "../../types/symbol";
import Symbol from "./Symbol";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      marginTop: "10px",
      maxHeight: "400px",
      overflow: "scroll",
    },
  })
);

const Selector = (props: { symbols: SymbolData[] }) => {
  const classes = useStyles();

  return (
    <Grid container className={classes.root}>
      {props.symbols.map((symbol: SymbolData) => (
        <Symbol symbol={symbol} />
      ))}
    </Grid>
  );
};

export default Selector;
