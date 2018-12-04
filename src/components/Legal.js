import React from "react";
import { Nav } from "reactstrap";

const style = {
  backgroundColor: "lightcoral",
  justifyContent: "center",
  fontSize: "16px",
  color: "aliceblue",
  height: "30px"
};

export default function Legal() {
  const currentDate = new Date().getFullYear();
  return (
    <Nav style={style}>
      <div>
        Copyright © {currentDate} Charmaine Stepaniuk. All rights reserved.
      </div>
    </Nav>
  );
}
