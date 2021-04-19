import {
  createStyles,
  Grid,
  makeStyles,
  TableCell,
  TableRow,
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
    row: {
      cursor: "pointer",
    },
    cell: {
      borderBottom: "1px solid rgba(255, 255, 255, 0.25)",
      padding: "5px 0px 5px 0px",
    },
    text: {
      color: "white",
      fontWeight: 100,
    },
    description: {
      width: "50%",
      alignText: "left",
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
    <TableRow hover className={classes.row}>
      <TableCell
        padding="none"
        className={`${classes.cell} ${classes.text}`}
        dangerouslySetInnerHTML={{ __html: props.symbol.symbol }}
      />
      <TableCell
        padding="none"
        className={`${classes.cell} ${classes.text}`}
        dangerouslySetInnerHTML={{ __html: props.symbol.description }}
      />
      <TableCell padding="none" align="right" className={classes.cell}>
        <span className={classes.type}>{props.symbol.type}</span>
        <span className={classes.text}>{props.symbol.exchange}</span>
      </TableCell>
    </TableRow>
  );
};

export default Symbol;
