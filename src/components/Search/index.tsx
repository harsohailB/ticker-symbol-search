import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import Input from "./Input";
import styled from "styled-components";

const Search = (props: {
  search: string;
  setSearch: (newSearch: string) => void;
}) => {
  return (
    <Wrapper>
      <Icon>
        <SearchIcon />
      </Icon>
      <Input search={props.search} setSearch={props.setSearch} />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  padding: 10px;
  background-color: transparent;
  margin: 0;
  display: flex;
  align-items: center;
`;

const Icon = styled.div`
  color: ${({ theme }) => theme.search.icon.color};
`;

export default Search;
