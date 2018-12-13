import React, { Component } from "react";
import {
  Nav,
  NavItem,
  NavLink,
  Navbar,
  NavbarToggler,
  Collapse
} from "reactstrap";

const style = {
  position: "fixed",
  width: "100%",
  backgroundColor: "lightcoral",
  justifyContent: "center",
  zIndex: "9999",
  fontSize: "20px",
  fontWeight: "700",
  color: "aliceblue",
  cursor: "pointer",
  padding: 0
};

const navs = [
  {
    id: "#bio-section",
    name: "About"
  },
  {
    id: "#expertise-section",
    name: "Expertise"
  },
  {
    id: "#work-section",
    name: "Work"
  },
  {
    id: "#findme-section",
    name: "Find Me"
  }
];

const colorWhite = {
  color: "white"
};

export default class Navigation extends Component {
  constructor(props) {
    super(props);
    this.onScrollDown = this.onScrollDown.bind(this);
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggleNavbar() {
    this.setState(() => ({ isOpen: !this.state.isOpen }));
  }

  onScrollDown(id) {
    const tesNode = document.querySelector(id);
    tesNode.scrollIntoView();
  }

  render() {
    return (
      <Navbar
        light
        expand="md"
        style={style}
        className="d-md-flex d-block flex-row mx-md-auto mx-0"
      >
        <NavbarToggler onClick={this.toggleNavbar} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="m-auto" navbar>
            {navs.map(i => {
              return (
                <NavItem key={i.id}>
                  <NavLink onClick={() => this.onScrollDown(i.id)}>
                    <span style={colorWhite}>{i.name}</span>
                  </NavLink>
                </NavItem>
              );
            })}
          </Nav>
        </Collapse>
      </Navbar>
    );
  }
}
