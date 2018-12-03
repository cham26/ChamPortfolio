import React, { Component } from "react";
import { Row, Col } from "reactstrap";
import { getWorks } from "../services/dataService";
import WorkCard from "./WorkCard";

export default class WorkExperience extends Component {
  constructor(props) {
    super();
    this.works = getWorks();
  }
  render() {
    return (
      <div>
        <Row className="justify-content-center">
          {this.works.map((i, index) => {
            return (
              <Col md={{ size: 4 }} key={index}>
                <WorkCard logo={i.logo} description={i.description} />
              </Col>
            );
          })}
        </Row>
      </div>
    );
  }
}
