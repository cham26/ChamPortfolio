import React from "react";
import { Row, Col } from "reactstrap";
import { works } from "../services/dataService";
import WorkCard from "./WorkCard";

export default function WorkExperience() {
  return (
    <Row className="justify-content-center">
    {works.map((i, index) => {
      return (
        <Col md={{ size: 4 }} key={index}>
          <WorkCard logo={i.logo} description={i.description} />
        </Col>
      );
    })}
  </Row>
  )
}
