import React from "react";
import { MarketTypes } from "../../types/markets";
import styled from "styled-components";

interface TextProps {
  selected: boolean;
}

const Market = (props: {
  market: string;
  selected: boolean;
  updateMarket: (newMarket: MarketTypes) => void;
}) => {
  return (
    <Wrapper onClick={() => props.updateMarket(props.market as MarketTypes)}>
      <Text selected={props.selected}>{props.market}</Text>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background: ${({ theme }) => theme.markets.background};
  margin: 5px 12px 5px 0px;
  border-radius: 20px;
  cursor: pointer;
  width: max-content;

  @media (max-width: 768px): {
    font-size: 10px;
  }, 
`;

const Text = styled.p`
  margin: 0;
  color: ${({ theme }) => theme.markets.color};
  padding: 6px 8px 6px 8px;
  font-weight: ${(props: TextProps) => (props.selected ? "bold" : "normal")};
`;

export default Market;
