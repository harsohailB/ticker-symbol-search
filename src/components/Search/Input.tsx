import React from "react";
import styled from "styled-components";

const Input = (props: {
  search: string;
  setSearch: (newSearch: string) => void;
}) => {
  return (
    <StyledInput
      placeholder="Search Symbol"
      value={props.search}
      onChange={(evt) => props.setSearch(evt.target.value)}
      autoFocus
      type="text"
    />
  );
};

const StyledInput = styled.input`
  background: none;
  border: none;
  outline: none;
  font-size: 18px;
  width: 75%;
  margin-left: 10px;
  color: ${({ theme }) => theme.search.input.color};

  &:placeholder {
    color: ${({ theme }) => theme.search.input.placeholderColor};
  }
`;

export default Input;
