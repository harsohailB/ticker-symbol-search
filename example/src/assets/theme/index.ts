import { createMuiTheme } from "@material-ui/core";

// overrides and typography will eventually also be here
const theme = createMuiTheme({
  palette: {
    // type: "dark",
    primary: {
      main: "#000000",
      light: "#ade498",
      dark: "#35CD99",
      contrastText: "#fff",
    },
    secondary: {
      main: "#ffe0f7",
      light: "#fe91ca",
      dark: "#d3dbff",
      contrastText: "#fff",
    },
    background: {
      default: "#FFFFFF",
    },
    text: {
      primary: "#35CD99",
      secondary: "#fff",
    },
  },
  typography: {
    fontFamily: "Noto Sans, sans-serif",
    button: {
      textTransform: "none",
      fontWeight: "normal",
    },
    h1: {
      fontWeight: "bold",
      fontSize: "5em",
      fontFamily: "Playfair Display, serif",
    },
    h3: {
      fontSize: "2em",
      fontWeight: "lighter",
    },
    h4: {
      fontSize: "1.5em",
      fontWeight: "lighter",
    },
    h5: {
      fontWeight: "bold",
      fontSize: "2em",
      fontFamily: "Playfair Display, serif",
    },
  },
  // Overrides
  overrides: {
    MuiButton: {
      root: {
        borderRadius: 50,
        color: "#fff",
        padding: "0px 25px 0px 25px",
      },
      textPrimary: {
        color: "#35CD99",
      },
    },
    MuiDialog: {
      paper: {
        backgroundColor: "#131313",
        color: "white",
      },
    },
  },
});

export default theme;
