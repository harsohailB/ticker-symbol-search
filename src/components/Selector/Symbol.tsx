import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { SymbolData } from "../../types/symbol";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      margin: "2px 0px 2px 0px",
      padding: "2px",
      cursor: "pointer",
      borderRadius: "4px",

      "&:hover": {
        background: "rgba(255, 255, 255, 0.4)",
      },
    },
    text: {
      color: "white",
      fontWeight: 100,
    },
    pair: {
      display: "flex",
      alignItems: "center",
    },
    type: {
      marginRight: "5px",
      color: "rgba(255, 255, 255, 0.25)",
    },
  })
);

const Symbol = (props: { symbol: SymbolData }) => {
  const classes = useStyles();

  return (
    <Grid
      container
      item
      direction="row"
      justify="space-between"
      alignItems="center"
      className={classes.root}
    >
      <Typography
        variant="body1"
        className={classes.text}
        dangerouslySetInnerHTML={{ __html: props.symbol.symbol }}
      />
      <Typography
        variant="body1"
        className={classes.text}
        dangerouslySetInnerHTML={{ __html: props.symbol.description }}
      />

      <div className={classes.pair}>
        <Typography variant="caption" className={classes.type}>
          {props.symbol.type}
        </Typography>
        <Typography variant="body1" className={classes.text}>
          {props.symbol.exchange}
        </Typography>
      </div>
    </Grid>
  );
};

export default Symbol;
