import React, { Component } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Container, Row, Col } from "reactstrap";

export default class Contact extends Component {
    constructor(props) {
        super(props);
        this.contacts = [
            {
                src: 'facebook-f',
                title: 'Facebook',
                style: {
                    color: '#4267b2'
                }
            },
            {
                src: "linkedin",
                title: 'Linkedin',
                style: {
                    color: '#0077B5',
                    margin: '0 50px'
                }
            },
            {
                src: 'twitter',
                title: 'Twitter',
                style: {
                    color: '#1da1f2'
                }
            }
        ]
      }
  render() {
    return (
        <Container fluid className="pb-4">
        <Row className="text-center">
        <Col md={{ size: 12}} >
        {this.contacts.map((i, index) => {
          return (<FontAwesomeIcon icon={['fab',  i.src]}  size='6x'  style={i.style} title={i.title} key={index}/>);
        })}
        </Col>
        
        </Row>
      </Container>
    )
  }
}
