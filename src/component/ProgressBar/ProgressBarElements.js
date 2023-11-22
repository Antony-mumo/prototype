import React from "react";
import { makeStyles, createStyles } from "@material-ui/core";
import { Zoom } from "react-reveal";

const styles = makeStyles((theme) =>
  createStyles({
    progressBarContainer: {
      width: "100%",
      height: "4px",
      background: "#919191",
      borderRadius: "20px",
      display: "flex",
      alignItems: "center",
      webkitAppearance: "none",
    },
    progressBar: {
      position: "relative",
      width: "0px",
      height: "8px",
      background: "#FFBF00",
      borderRadius: "20px",
      display: "block",
      webkitAppearance: "none",
      opacity: "1",
    },
  })
);

export default function ProgressBar({ completed }) {
  const classes = styles();

  return (
    <div className={classes.progressBarContainer}>
      <Zoom right cascade delay='100'>
        <span
          className={classes.progressBar}
          style={{ width: completed }}
        ></span>
      </Zoom>
    </div>
  );
}
