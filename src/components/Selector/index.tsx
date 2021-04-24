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

  ::-webkit-scrollbar {
    width: 5px;
    height: 0px;
  }
  ::-webkit-scrollbar-track {
    background: ${({ theme }) => theme.paper.background};
  }

  ::-webkit-scrollbar-thumb {
    background: rgba(255, 255, 255, 0.5);
    border-radius: 25px;
  }
`;

const Table = styled.table`
  width: 100%;
  border-spacing: 0px;
`;

export default Selector;
