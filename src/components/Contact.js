import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Container, Row, Col } from "reactstrap";
import { getContacts } from "../services/dataService";

export default class Contact extends Component {
  constructor() {
    super();
    this.contacts = getContacts();
    this.redirectToSocilaMedia = this.redirectToSocilaMedia.bind(this);
  }

  redirectToSocilaMedia = link => window.open(link, "_blank");

  render() {
    return (
      <Container fluid className="pb-4">
        <Row className="text-center">
          <Col md={{ size: 12 }}>
            {this.contacts.map((i, index) => {
              return (
                <FontAwesomeIcon
                  icon={["fab", i.src]}
                  size="6x"
                  style={i.style}
                  title={i.title}
                  onClick={() => this.redirectToSocilaMedia(i.link)}
                  key={index}
                />
              );
            })}
          </Col>
        </Row>
      </Container>
    );
  }
}
