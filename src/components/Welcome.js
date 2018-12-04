import React from "react";
import { Jumbotron } from "reactstrap";
import Background from "../assets/bg-min.png";

const JumbotronStyle = {
  background: `url(${Background}) no-repeat  center center`,
  backgroundSize: "cover",
  height: "500px",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  textShadow: "white 0px 0px 10px",
  fontFamily: "dancing script"
};

export default function Welcome() {
  return (
    <Jumbotron style={JumbotronStyle}>
      <h1 className="display-4">
        <b>CHARMAINE STEPANIUK</b>
      </h1>
      <h2>
        Clinical Support Specialist | Amazon Account Manager | Executive VA
      </h2>
    </Jumbotron>
  );
}
