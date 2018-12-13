import React from "react";
import { Container, Row, Col, Button } from "reactstrap";
import bio from "../assets/bio2-min.jpeg";
import BaseImage from "./Base/BaseImage";
import { css } from "emotion";
import ResumeModal from "./ResumeModal";

const override = css`
  .buttonStyle {
    width: 230px;
    font-size: 18px;
    background-color: lightcoral;
    border-color: white;
    font-family: monospace;
  }
  .headingStyle {
    font-family: fantasy;
    font-size: 60p;
  }
  .noteStyle {
    font-family: sans-serif;
    text-align: justify;
    fontsize: 18p;
  }
  .labelColor {
    color: lightcoral;
  }
`;

const email = "charmaine.stepaniuk@gmail.com";

export default function Bio() {
  const onContactMe = () => {
    window.location.href = `mailto:${email}`;
  };

  const onResumeView = () => {};

  return (
    <Container fluid id="bio-section" className={override}>
      <Row className="py-5 justify-content-center">
        <Col md={{ size: 5, offset: 1 }}>
          <div>
            <h1 className="display-3 headingStyle">
              <strong className="labelColor">Lives</strong> in Ukraine
              <br />
              <strong className="labelColor">Works</strong> anywhere
            </h1>
          </div>
          <br />
          <div>
            <p className="noteStyle">
              Hi there! I'm{" "}
              <strong>
                <span className="labelColor">Cham</span>
              </strong>
              , a nurse by profession turned{" "}
              <strong>
                <span className="labelColor">
                  Virtual Assistant since 2017.{" "}
                </span>
              </strong>
              My goal is to{" "}
              <strong>
                <span className="labelColor">provide services</span>{" "}
              </strong>
              that delight consumers and business owners. I aim to{" "}
              <strong>
                <span className="labelColor">drive innovation</span>{" "}
              </strong>
              across organizations, expand existing customer sales, brand and
              product evolution,{" "}
              <strong>
                <span className="labelColor">
                  excellent customer satisfaction{" "}
                </span>
              </strong>
              and social media endorsement. <br />
              <br />I am a work in progress but I know I'll always give my best
              in everything I do. After all, Franklin Roosevelt once said,{" "}
              <strong>
                <span className="labelColor">
                  "A smooth sea never made a skilled sailor".
                </span>
              </strong>
            </p>
          </div>
          <div className="text-center pt-5">
            <Row>
              <Col>
                <Button onClick={onContactMe} className="buttonStyle">
                  Contact me
                </Button>
              </Col>
              <Col>
                <ResumeModal
                  buttonLabel="View Online Resume"
                  cssClasses={["buttonStyle"]}
                />
                {/* <Button onClick={onResumeView} className="buttonStyle">
              View Online Resume
            </Button> */}
              </Col>
            </Row>
          </div>
        </Col>
        <Col md={{ size: 5, offset: 1 }} className="py-2 text-center">
          <BaseImage
            imageSrc={bio}
            style={{ maxHeight: "500px" }}
            cssClasses={["rounded-circle img-fluid"]}
          />
        </Col>
      </Row>
    </Container>
  );
}
