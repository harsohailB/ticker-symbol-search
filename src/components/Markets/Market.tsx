import {
  createStyles,
  Grid,
  makeStyles,
  Theme,
  Typography,
} from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      background: "rgba(0, 0, 0, 0.25)",
      margin: "0px 12px 0px 0px",
      borderRadius: "20px",
      cursor: "pointer",
      width: "max-content",
    },
    text: {
      margin: 0,
      color: "white",
      padding: "6px 8px 6px 8px",
    },
    selectedText: {
      margin: 0,
      color: "white",
      padding: "6px 8px 6px 8px",
      fontWeight: "bold",
    },
  })
);

const Market = (props: { market: string; selected: boolean }) => {
  const classes = useStyles();

  return (
    <Grid item className={classes.root}>
      <Typography
        className={props.selected ? classes.selectedText : classes.text}
        variant="caption"
      >
        {props.market}
      </Typography>
    </Grid>
  );
};

export default Market;
