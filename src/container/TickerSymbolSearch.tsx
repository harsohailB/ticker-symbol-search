import React from "react";
import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";
import { useState } from "react";

import DraggableWrapper from "./DraggableWrapper";
import Search from "../components/Search";
import Markets from "../components/Markets";
import { MarketTypes } from "../types/markets";
import useSearchSymbols from "../hooks/useSearchSymbols";
import Selector from "../components/Selector";
import SkeletonLoading from "../components/Loading/SkeletonLoading";

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: "50%",
      background: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(50px)",
      borderRadius: "10px",
    },
    body: {
      margin: "0px 20px 0px 20px",
      paddingBottom: "20px",
    },
    text: {
      color: "rgba(255, 255, 255, 0.5)",
    },
  })
);

interface Query {
  search: string;
  market: MarketTypes;
}

export const TickerSymbolSearch = () => {
  const classes = useStyles();

  const [query, setQuery] = useState<Query>({
    search: "",
    market: MarketTypes.ALL,
  });
  const { symbols, isSuccess, isLoading, isError } = useSearchSymbols(
    query.search,
    query.market
  );

  const updateSearchInput = (newSearch: string) => {
    setQuery((prevQuery: Query) => ({
      ...prevQuery,
      search: newSearch,
    }));
  };

  const updateMarket = (newMarket: MarketTypes) => {
    setQuery((prevQuery: Query) => ({
      ...prevQuery,
      market: newMarket,
    }));
  };

  return (
    <DraggableWrapper>
      <Grid container className={classes.root} direction="column">
        <Grid item>
          <Search search={query.search} setSearch={updateSearchInput} />
        </Grid>

        {query.search.length !== 0 && (
          <div>
            <Markets
              markets={Object.values(MarketTypes)}
              selectedMarket={query.market}
              updateMarket={updateMarket}
            />
            <Grid item className={classes.body}>
              {isLoading && <SkeletonLoading />}
              {isSuccess && <Selector symbols={symbols} />}
              {symbols.length === 0 && (
                <Typography variant="caption" className={classes.text}>
                  No symbols found...
                </Typography>
              )}
              {isError && (
                <Typography variant="caption" className={classes.text}>
                  There was an error fetching symbols...
                </Typography>
              )}
            </Grid>
          </div>
        )}
      </Grid>
    </DraggableWrapper>
  );
};
