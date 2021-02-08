import { createStyles, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      border: "1px solid #E9E9E9",
      borderRadius: "6px",
      overflow: "hidden",
    },
    content: {
      padding: "10px",
    },
    header: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      borderBottom: "2px solid #e9e9e9",
      marginBottom: "2px",
    },
  })
);

export default useStyles;
