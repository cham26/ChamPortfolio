import React, { Component } from "react";
import {  Nav } from "reactstrap";

const style = {
        backgroundColor: 'lightcoral',
        width: '100%',
        justifyContent: 'center',
        fontSize: '16px',
        color: 'aliceblue',
        height: '30px'
}

export default class Legal extends Component {
    constructor(props) {
        super(props);
        this.onScrollDown = (id) => {
            const tesNode = document.querySelector(id)
           tesNode.scrollIntoView();
        }
        this.currentDate = new Date().getFullYear()
      }
  render() {
    return (
        <Nav style={style}>
          <div>
            Copyright © {this.currentDate} Charmaine Stepaniuk. All rights reserved.
          </div>
        </Nav>
    );
  }
}
