import {
  createStyles,
  Grid,
  makeStyles,
  Table,
  TableBody,
  TableContainer,
  Theme,
} from "@material-ui/core";

import { SymbolData } from "../../types/symbol";
import Symbol from "./Symbol";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      maxHeight: "400px",
      overflow: "scroll",
    },
  })
);

const Selector = (props: { symbols: SymbolData[] }) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root}>
      <Table>
        <TableBody>
          {props.symbols.map((symbol: SymbolData) => (
            <Symbol symbol={symbol} />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Selector;
