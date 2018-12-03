import React, { Component } from "react";
import {
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle
} from "reactstrap";

const cardStyle = {
  maxWidth: "65%"
};

export default class WorkCard extends Component {
  render() {
    const { logo, description } = this.props;
    return (
      <div>
        <Card style={cardStyle} className="mx-auto my-2">
          <CardImg
            top
            width="100%"
            src={logo}
            className="img-fluid"
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>{description}</CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}
