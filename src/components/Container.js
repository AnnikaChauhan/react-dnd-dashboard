import {
  createStyles,
  IconButton,
  makeStyles,
  Tooltip,
} from "@material-ui/core";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import { Heading } from "@novafuturltd/web-core/typography/heading";
import React from "react";

const useStyles = makeStyles(() =>
  createStyles({
    container: {
      border: "1px solid #E9E9E9",
      borderRadius: "6px",
      padding: "16px 24px",
      marginBottom: "16px",
      margin: (props) => (props.margin ? props.margin : ""),
      width: (props) => (props.width ? props.width : ""),
      overflow: "hidden",
      opacity: (props) => props.loading && "0.3",
    },
    footerLink: {
      borderTop: "1px solid #E9E9E9",
    },
    containerWithFooter: {
      margin: (props) => (props.margin ? props.margin : "0 24px"),
      border: "1px solid #E9E9E9",
      borderRadius: "6px",
      width: (props) => (props.width ? props.width : ""),
    },
    innerContainer: {
      padding: "24px 0",
      height: "85%",
    },
    footerContainer: {
      borderTop: "1px solid #E9E9E9",
      padding: "0",
      textAlign: "right",
      height: "15%",
      display: "flex",
      alignItems: "center",
      justifyContent: "flex-end",
    },
    containerWithFooterHeader: {
      padding: "0 24px",
    },
  })
);

export const Container = ({
  width,
  margin,
  id,
  loading,
  children,
  customClass,
}) => {
  const classes = useStyles({ width, margin, loading });

  return (
    <div id={id} className={`${classes.container} ${customClass}`}>
      {children}
    </div>
  );
};

export const ContainerWithFooter = ({
  width,
  margin,
  children,
  handleClick,
  tooltipNarative,
  heading,
  id,
}) => {
  const classes = useStyles({ width, margin });
  return (
    <div className={classes.containerWithFooter} id={id}>
      <div className={classes.innerContainer}>
        <div className={classes.containerWithFooterHeader}>
          <Heading variant="h4" fontWeight="normal">
            {heading}
          </Heading>
        </div>
        {children}
      </div>
      <div className={classes.footerContainer}>
        {tooltipNarative ? (
          <Tooltip title={tooltipNarative}>
            <IconButton onClick={handleClick}>
              <ArrowForwardIosIcon style={{ fill: "#2A6EFB" }} />
            </IconButton>
          </Tooltip>
        ) : (
          <IconButton onClick={handleClick}>
            <ArrowForwardIosIcon style={{ fill: "#2A6EFB" }} />
          </IconButton>
        )}
      </div>
    </div>
  );
};
