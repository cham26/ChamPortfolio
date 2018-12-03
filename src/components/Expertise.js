import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import { getExpertises } from '../services/dataService'

export default class Expertise extends Component {
  constructor(props) {
    super(props);
    this.expertise = getExpertises()
  }
  render() {
    return (
      <Container fluid>
        {this.expertise.map((i, index) => {
          return (
            <Row className="py-2"  key={index}>
              <Col md={{ size: 6, offset: 1 }} >
                <img src={i.src} alt="" className="img-fluid"/>
              </Col>
              <Col md={{ size: 4 }}>{i.text}</Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}
