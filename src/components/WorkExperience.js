import React, { Component } from "react";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button
} from "reactstrap";

class WorkCard extends Component {
    constructor(props){
        super(props);
        this.state = { 
            logo: this.props.logo,
            description: this.props.description
        };
        this.cardStyle = {
            maxWidth: '75%'
        }
    }
  render() {
    return (
      <div>
        <Card style={this.cardStyle}>
          <CardImg
            top
            width="100%"
            src={this.state.logo}
            alt="Card image cap"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardSubtitle>Card subtitle</CardSubtitle>
            <CardText>
            {this.state.description}
            </CardText>
          </CardBody>
        </Card>
      </div>
    );
  }
}

export default class WorkExperience extends Component {
  constructor(props) {
    super();
    this.works = [
      {
        logo:
          "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        description:
          "Some quick example text to build on the card title and make up the bulk of the cards content"
      },
      {
        logo:
          "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        description:
          "Some quick example text to build on the card title and make up the bulk of the cards content"
      },
      {
        logo:
          "https://placeholdit.imgix.net/~text?txtsize=33&txt=318%C3%97180&w=318&h=180",
        description:
          "Some quick example text to build on the card title and make up the bulk of the cards content"
      }
    ];
  }
  render() {
    return (
      <div>
        <Row>
          {this.works.map((i, index) => {
            return  <Col md={{ size: '3', offset: 1 }} key={index}><WorkCard logo={i.logo} description={i.description}/></Col>
          })}
        </Row>
      </div>
    );
  }
}
