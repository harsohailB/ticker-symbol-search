import { createStyles, Grid, makeStyles, Theme } from "@material-ui/core";
import Draggable from "react-draggable";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      position: "absolute",
      zIndex: 100,
    },
  })
);

const Wrapper = (props: { children: any }) => {
  const classes = useStyles();

  return (
    <Draggable>
      <Grid
        container
        justify="center"
        alignItems="center"
        direction="row"
        className={classes.root}
      >
        {props.children}
      </Grid>
    </Draggable>
  );
};

export default Wrapper;
