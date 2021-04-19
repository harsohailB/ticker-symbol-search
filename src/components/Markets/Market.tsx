import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { MarketTypes } from "../../types/markets";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "rgba(0, 0, 0, 0.25)",
      margin: "0px 12px 0px 0px",
      borderRadius: "20px",
      cursor: "pointer",
      width: "max-content",
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
      <Typography
        className={props.selected ? classes.selectedText : classes.text}
        variant="caption"
      >
        {props.market}
      </Typography>
    </Grid>
  );
};

export default Market;
