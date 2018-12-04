import React from "react";
import { Container, Row, Col } from "reactstrap";
import { expertise } from "../services/dataService";

export default function Expertise() {
  return (
    <Container fluid>
      {expertise.map((i, index) => {
        return (
          <Row className="py-2" key={index}>
            <Col md={{ size: 6, offset: 1 }}>
              <img src={i.src} alt="" className="img-fluid" />
            </Col>
            <Col md={{ size: 4 }}>{i.text}</Col>
          </Row>
        );
      })}
    </Container>
  );
}
