import React from "react";
import styled, { ThemeProvider } from "styled-components";
import Draggable from "react-draggable";
import { isMobile } from "react-device-detect";

import { Theme } from "../types/theme";

const defaultTheme: Theme = {
  paper: {
    background: "rgba(128, 128, 128, 0.75)",
    color: "white",
  },
  search: {
    icon: {
      color: "rgba(188, 204, 221, 0.25)",
    },
    input: {
      color: "white",
      placeholderColor: "rgba(188, 204, 221, 0.25)",
    },
  },
  markets: {
    background: "rgba(0, 0, 0, 0.25)",
    color: "white",
  },
  selector: {
    color: "white",
  },
};

const DraggableWrapper = (props: { theme?: Theme; children: JSX.Element }) => {
  const selectedTheme: Theme = props.theme
    ? { ...defaultTheme, ...props.theme }
    : defaultTheme;

  return (
    <ThemeProvider
      theme={props.theme ? { ...defaultTheme, ...props.theme } : defaultTheme}
    >
      <Draggable disabled={isMobile}>
        <Wrapper>{props.children}</Wrapper>
      </Draggable>
    </ThemeProvider>
  );
};

export default DraggableWrapper;

const Wrapper = styled.div`
  position: absolute;
  top: 10%;
  z-index: 100;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 50%;

  @media (max-width: 600px) {
    width: 90%;
  } ;
`;
