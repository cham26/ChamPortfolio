import React, { Component } from "react";
import { Jumbotron } from "reactstrap";
import Background from "../assets/bg.png";
const JumbotronStyle = {
  background: `url(${Background}) no-repeat  center center`,
  backgroundSize: "cover",
  height: "500px",
  width: '101%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  textShadow: 'white 0px 0px 10px'

};
export default class Welcome extends Component {
  render() {
    return (
      <Jumbotron style={JumbotronStyle}>
        <h1 className="display-3">
          <b>CHARMAINE STEPANIUK</b>
        </h1>
        <h2>Clinical Support Specialist | Amazon Account Manager | Executive VA</h2>
      </Jumbotron>
    );
  }
}
