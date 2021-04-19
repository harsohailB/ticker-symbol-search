import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import { useContext, useState } from "react";

import Wrapper from "./Wrapper";
import Search from "../components/Search";
import Markets from "../components/Markets";
import { MarketTypes } from "../types/markets";
import useSearchSymbols from "../hooks/useSearchSymbols";
import Selector from "../components/Selector";

// Remove this after testing
import { mockSymbols } from "../assets/mockSymbols";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "50%",
      background: "rgba(255, 255, 255, 0.2)",
      backdropFilter: "blur(50px)",
      borderRadius: "10px",
    },
    body: {
      margin: "0px 20px 0px 20px",
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
  const [symbols] = useSearchSymbols(query.search, query.market);

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
    <Wrapper>
      <Grid container className={classes.root} direction="column">
        <Grid item>
          <Search search={query.search} setSearch={updateSearchInput} />
        </Grid>

        {query.search.length !== 0 && (
          <Grid item className={classes.body}>
            <Markets
              markets={Object.values(MarketTypes)}
              selectedMarket={query.market}
              updateMarket={updateMarket}
            />

            <Selector symbols={mockSymbols} />
          </Grid>
        )}
      </Grid>
    </Wrapper>
  );
};
