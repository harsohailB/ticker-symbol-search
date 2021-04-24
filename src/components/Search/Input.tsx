import React from "react";
import { InputBase } from "@material-ui/core";
import styled from "styled-components";

const Input = (props: {
  search: string;
  setSearch: (newSearch: string) => void;
}) => {
  return (
    <StyledInputBase
      placeholder="Search Symbol"
      value={props.search}
      onChange={(evt) => props.setSearch(evt.target.value)}
      autoFocus
    />
  );
};

const StyledInputBase = styled(InputBase)`
  width: 75%;
  margin-left: 10px;
  color: ${({ theme }) => theme.search.input.color};

  &:placeholder {
    color: ${({ theme }) => theme.search.input.placeholderColor};
  }
`;

export default Input;
