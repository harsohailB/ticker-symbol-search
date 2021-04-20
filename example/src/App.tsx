import React, { useState } from "react";
import Navbar from "./components/Navbar";
import theme from "./assets/theme";
import {
  Button,
  createStyles,
  Grid,
  makeStyles,
  Theme,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { CodeBlock, dracula } from "react-code-blocks";
import { TickerSymbolSearch } from "ticker-symbol-search";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: "50px 0px 20px 0px",
    },
    codeTitle: {
      margin: "30px 0px 5px 0px",
    },
  })
);

function App() {
  const classes = useStyles();

  const [demoActivated, setDemoActivated] = useState<boolean>(false);

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar />

        <Grid
          container
          direction="column"
          justify="space-around"
          alignItems="center"
        >
          <Typography variant="h1">ticker-symbol-search</Typography>

          <Typography variant="h3" text-align="center">
            seamlessly integrate a search engine to find live ticker symbols
            into your web app
          </Typography>

          <Button
            variant="contained"
            size="large"
            color="primary"
            onClick={() => setDemoActivated(!demoActivated)}
            className={classes.button}
          >
            {demoActivated ? "Close Demo" : "Try Demo"}
          </Button>

          <Typography
            variant="h4"
            text-align="center"
            className={classes.codeTitle}
          >
            install using npm or yarn
          </Typography>

          <CodeBlock
            text="npm install ticker-symbol-search --save"
            showLineNumbers={false}
            theme={dracula}
          />

          <Typography
            variant="h4"
            text-align="center"
            className={classes.codeTitle}
          >
            simply import and pass in a callback
          </Typography>

          <CodeBlock
            text={`import { TickerSymbolSearch } from ticker-symbol-search

export default () => {
    return <TickerSymbolSearch 
                       callback = { (data) => console.log(data) } 
                />;
}`}
            language="javascript"
            theme={dracula}
            {...{ showLineNumbers: true, wrapLines: true }}
            customStyle={{
              borderRadius: "5px",
              boxShadow: "1px 2px 3px rgba(0,0,0,0.35)",
              fontSize: "1rem",
              margin: "0px 0.75rem",
            }}
          />

          {demoActivated && <TickerSymbolSearch />}
        </Grid>
      </ThemeProvider>
    </div>
  );
}

export default App;
