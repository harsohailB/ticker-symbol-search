import { createStyles, makeStyles, Theme, InputBase } from "@material-ui/core";
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "75%",
      marginLeft: "10px",
      color: "white",

      "&::placeholder": {
        color: "rgba(188, 204, 221, 0.25)",
      },
    },
  })
);

const Input = (props: {
  search: string;
  setSearch: (newSearch: string) => void;
}) => {
  const classes = useStyles();

  return (
    <InputBase
      className={classes.root}
      placeholder="Search Symbol"
      value={props.search}
      onChange={(evt) => props.setSearch(evt.target.value)}
      autoFocus
    />
  );
};

export default Input;
