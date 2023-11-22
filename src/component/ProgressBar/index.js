import React from "react";
import ProgressBar from "./ProgressBarElements";
import { makeStyles, createStyles } from "@material-ui/core";
import { Fade, Flip, Zoom } from "react-reveal";

const styles = makeStyles((theme) =>
  createStyles({
    container: {
      display: "flex",
      alignItems: "center",
      backgroundColor: "#010606",
    },
    subContainer: {
      width: "70%",
      margin: "auto",
      paddingBottom: "80px",
      "& h1": {
        color: "#fff",
        textAlign: "center",
        paddingTop: "20px",
      },
      "& h2": {
        color: "#f9f9f9",
        fontSize: "18px",
        paddingTop: "30px",
        paddingBottom: "10px",
        textAlign: "left",
        alignItems: "left",
        justifyContent: "left",
        "& h4": {
          color: "#01bf71",
          textAlign: "right",
          alignItems: "right",
          justifyContent: "right",
          marginTop: "-20px",
        },
        "& span": {
          color: "#8d8d8d",
          fontSize: "15px",
          textAlign: "left",
          alignItems: "left",
          justifyContent: "left",
        },
      },
    },
  })
);

const Progress = () => {
  const classes = styles();
  return (
    <div className={classes.container}>
      <div className={classes.subContainer}>
        <h1>
          <Flip bottom cascade>
            Skills Progress
          </Flip>
        </h1>
        <h2>
          <Flip left delay='100' cascade>
            JavaScript Programming
          </Flip>
          <h4>
            <Fade left cascade delay='100'>
              96%
            </Fade>
          </h4>
        </h2>
        <Zoom delay='100' cascade>
          <ProgressBar completed='96%' />
        </Zoom>
        <h2>
          <Flip left delay='100' cascade>
            React JS <span>for Frontend Development</span>
          </Flip>
          <h4>
            <Fade left cascade delay='100'>
              88%
            </Fade>
          </h4>
        </h2>
        <Zoom delay='100' cascade>
          <ProgressBar completed='88%' />
        </Zoom>
        <h2>
          <Flip left delay='100' cascade>
            HTML&CSS
          </Flip>
          <h4>
            <Fade left cascade delay='100'>
              79%
            </Fade>
          </h4>
        </h2>
        <Zoom delay='100' cascade>
          <ProgressBar completed='79%' />
        </Zoom>
        <h2>
          <Flip left delay='100' cascade>
            Node JS,Mongo & Express <span>in Backend Development</span>
          </Flip>
          <h4>
            <Fade left cascade delay='100'>
              88%
            </Fade>
          </h4>
        </h2>
        <Zoom delay='100' cascade>
          <ProgressBar completed='88%' />
        </Zoom>
        <h2>
          <Flip left delay='100' cascade>
            Version Control/Git
          </Flip>
          <h4>
            <Fade left cascade delay='100'>
              79%
            </Fade>
          </h4>
        </h2>
        <Zoom delay='100' cascade>
          <ProgressBar completed='79%' />
        </Zoom>
        <h2>
          <Flip left delay='100' cascade>
            Cloud Computing
          </Flip>
          <h4>
            <Fade left cascade delay='100'>
              68%
            </Fade>
          </h4>
        </h2>
        <Zoom delay='100' cascade>
          <ProgressBar completed='68%' />
        </Zoom>
      </div>
    </div>
  );
};

export default Progress;
