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
  fontFamily: "Impact"
};

export default function Welcome() {
  return (
    <Jumbotron style={JumbotronStyle}>
      <h1 className="display-4">
        <b>CHARMAINE STEPANIUK</b>
      </h1>
      <h2>
        Virtual Assistant | Clinical Support Specialist | Amazon Account Manager
      </h2>
    </Jumbotron>
  );
}
