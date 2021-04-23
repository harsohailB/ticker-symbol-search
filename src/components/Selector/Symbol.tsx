import React from "react";
import { SymbolData } from "../../types/symbol";
import styled from "styled-components";

const Symbol = (props: {
  symbol: SymbolData;
  callback: (symbolData: SymbolData) => void;
}) => {
  return (
    <TableRow onClick={() => props.callback(props.symbol)}>
      <TableDataCell
        align="left"
        dangerouslySetInnerHTML={{ __html: props.symbol.symbol }}
      />
      <TableDataCell
        align="left"
        switch
        dangerouslySetInnerHTML={{ __html: props.symbol.description }}
      />
      <TableDataCell align="right" webOnly>
        <Type>{props.symbol.type}</Type>
        <span>{props.symbol.exchange}</span>
      </TableDataCell>
    </TableRow>
  );
};

interface TableDataCellProps {
  webOnly?: boolean;
  align?: string;
  switch?: boolean;
}

const TableRow = styled.tr`
  cursor: pointer;
  width: 100%;
`;

const TableDataCell = styled.td`
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding: 5px 0px 5px 0px;
  text-align: ${(props: TableDataCellProps) => props.align};
  color: ${({ theme }) => theme.selector.color};
  font-weight: 300;

  & > em {
    font-style: normal;
    font-weight: 900;
  }

  ${(props: TableDataCellProps) =>
    props.webOnly &&
    `
      @media (max-width: 1000px) {
        display: none;
      };
  `}

  ${(props: TableDataCellProps) =>
    props.switch &&
    `
      padding-left: 20px;
      @media (max-width: 1000px) {
        text-align: right;
        max-width: 100px;
        white-space: nowrap;
        text-overflow: hidden;
      };
  `}
`;

const Type = styled.span`
  margin-right: 5px;
  color: rgba(255, 255, 255, 0.5);
`;

export default Symbol;
