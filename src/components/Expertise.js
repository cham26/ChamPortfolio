import React from "react";
import { Container, Row, Col } from "reactstrap";
import { expertise } from "../services/dataService";
import BaseImage from "./Base/BaseImage";
import { css } from "emotion";

const style = css`
  .descriptionStyle {
    font-family: monospace;
    text-align: justify;
    font-size: 16px;
  }
`;

export default function Expertise() {
  return (
    <Container fluid className={style}>
      {expertise.map(i => {
        return (
          <Row className="py-2" key={i.id}>
            <Col md={{ size: 6, offset: 1 }}>
              <BaseImage imageSrc={i.src} cssClasses={["img-fluid"]} />
            </Col>
            <Col md={{ size: 4 }}>
              <b>{i.text}</b>
              <hr />
              <p className="descriptionStyle">{i.description}</p>
            </Col>
          </Row>
        );
      })}
    </Container>
  );
}
