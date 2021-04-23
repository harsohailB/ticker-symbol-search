import React from "react";

import { SymbolData } from "../../types/symbol";
import Symbol from "./Symbol";
import styled from "styled-components";

const Selector = (props: {
  symbols: SymbolData[];
  callback: (symbolData: SymbolData) => void;
}) => {
  return (
    <Wrapper>
      <Table>
        {props.symbols.map((symbol: SymbolData) => (
          <Symbol
            key={`${symbol.symbol}-${symbol.description}-${symbol.type}-${symbol.exchange}`}
            symbol={symbol}
            callback={props.callback}
          />
        ))}
      </Table>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-height: 400px;
  overflow: scroll;
  width: 100%;
`;

const Table = styled.table`
  width: 100%;
`;

export default Selector;
