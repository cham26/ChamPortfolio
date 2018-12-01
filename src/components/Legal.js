import React, { Component } from "react";
import { Jumbotron, Nav, NavItem, NavLink } from "reactstrap";
import ReactDOM from 'react-dom';

const style = {
        backgroundColor: 'lightcoral',
        width: '100%',
        justifyContent: 'center',
        fontSize: '16px',
        color: 'aliceblue',
        height: '40px'
}

export default class Legal extends Component {
    constructor(props) {
        super(props);
        this.onScrollDown = (id) => {
            const tesNode = document.querySelector(id)
           tesNode.scrollIntoView();
        }
        this.navs = [
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
