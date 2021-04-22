import {
  AppBar,
  Button,
  createStyles,
  Grid,
  IconButton,
  makeStyles,
  Theme,
  Toolbar,
} from "@material-ui/core";
import GitHubIcon from "@material-ui/icons/GitHub";
import React from "react";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "1vh",
      marginBottom: "3vh",
      backgroundColor: theme.palette.background.default,
    },
    button: {
      backgroundColor: theme.palette.primary.main,
      fontSize: "18px",
    },
  })
);

const Navbar = () => {
  const classes = useStyles();

  return (
    <AppBar position="static" elevation={0} className={classes.root}>
      <Toolbar>
        <Grid justify="flex-end" container>
          <IconButton href="https://github.com/harsohailB/ticker-symbol-search">
            <GitHubIcon />
          </IconButton>
        </Grid>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
