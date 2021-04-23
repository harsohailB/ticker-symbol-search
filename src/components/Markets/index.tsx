import React from "react";
import styled from "styled-components";
import { MarketTypes } from "../../types/markets";
import Market from "./Market";

const Markets = (props: {
  markets: string[];
  selectedMarket: string;
  updateMarket: (newMarket: MarketTypes) => void;
}) => {
  return (
    <Wrapper>
      {props.markets.map((market: string) => (
        <Market
          key={market}
          market={market}
          selected={props.selectedMarket === market}
          updateMarket={props.updateMarket}
        />
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
  border-top: 1px solid rgba(255, 255, 255, 0.25); 
  padding: 10px 20px 10px 20px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;

  @media (max-width: 875px) {
    font-size: 12px;
    padding: 5px 20px 5px 20px;
    justify-content: center;
  }, 
`;

export default Markets;
