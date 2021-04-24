import React from "react";
import { useState } from "react";
import styled from "styled-components";

import DraggableWrapper from "./DraggableWrapper";
import Search from "../components/Search";
import Markets from "../components/Markets";
import { MarketTypes } from "../types/markets";
import { useSearchSymbols } from "../hooks/useSearchSymbols";
import Selector from "../components/Selector";
import SkeletonLoading from "../components/Loading/SkeletonLoading";
import { SymbolData } from "../types/symbol";
import { Theme } from "../types/theme";

interface Query {
  search: string;
  market: MarketTypes;
}

export const TickerSymbolSearch = (props: {
  callback: (symbolData: SymbolData) => void;
  theme?: Theme;
}) => {
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
    <DraggableWrapper theme={props.theme}>
      <Wrapper>
        <Search search={query.search} setSearch={updateSearchInput} />

        {query.search.length !== 0 && (
          <div>
            <Markets
              markets={Object.values(MarketTypes)}
              selectedMarket={query.market}
              updateMarket={updateMarket}
            />

            <Body>
              {isLoading && <SkeletonLoading />}
              {isSuccess && (
                <Selector symbols={symbols} callback={props.callback} />
              )}
              {isSuccess && symbols.length === 0 && (
                <Text>No symbols found...</Text>
              )}
              {isError && <Text>There was an error fetching symbols...</Text>}
            </Body>
          </div>
        )}
      </Wrapper>
    </DraggableWrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ theme }) => theme.paper.background};
  backdrop-filter: blur(20px);
  border-radius: 10px;
  width: 100%;
`;

const Body = styled.div`
  margin: 0px 20px 0px 20px;
  padding-bottom: 20px;
`;

const Text = styled.p`
  color: ${({ theme }) => theme.paper.color};
`;
