import React from "react";
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

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      maxHeight: "400px",
      overflow: "scroll",
    },
  })
);

const Selector = (props: {
  symbols: SymbolData[];
  callback: (symbolData: SymbolData) => void;
}) => {
  const classes = useStyles();

  return (
    <TableContainer className={classes.root}>
      <Table>
        <TableBody>
          {props.symbols.map((symbol: SymbolData) => (
            <Symbol
              key={symbol.symbol}
              symbol={symbol}
              callback={props.callback}
            />
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Selector;
