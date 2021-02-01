import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      border: "1px solid #E9E9E9",
      borderRadius: "6px",
      overflow: "hidden",
    },
  })
);

export default useStyles;
