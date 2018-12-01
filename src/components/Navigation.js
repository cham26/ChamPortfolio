import React, { Component } from "react";
import { Jumbotron, Nav, NavItem, NavLink } from "reactstrap";
import ReactDOM from 'react-dom';

const style = {
        position: 'fixed',
        backgroundColor: 'lightcoral',
        width: '100%',
        justifyContent: 'center',
        zIndex: '9999',
        fontSize: '20px',
        fontWeight: '700',
        color: 'aliceblue',
        cursor: 'pointer'
}

export default class Navigation extends Component {
    constructor(props) {
        super(props);
        this.onScrollDown = (id) => {
            const tesNode = document.querySelector(id)
           tesNode.scrollIntoView();
        }
        this.navs = [
            {
                id: '#bio-section',
                name: 'About'
            },
            {
                id: '#expertise-section',
                name: 'Expertise'
            },
            {
                id: '#work-section',
                name: 'Work'
            },
            {
                id: '#findme-section',
                name: 'Find Me'
            },
            
        ] 
      }
  render() {
    return (
        <Nav style={style}>
          {this.navs.map((i, index) => {
            return  <NavItem>
            <NavLink onClick={() => this.onScrollDown(i.id)}>{i.name}</NavLink>
          </NavItem>
          })}

        </Nav>
    );
  }
}
