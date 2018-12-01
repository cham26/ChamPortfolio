import React, { Component } from "react";
import { Container, Row, Col, Button } from "reactstrap";
import bio from '../assets/bio1.jpg'
export default class Bio extends Component {
  constructor(props) {
    super(props);
    this.imageStyle = {
        height: "600px",
        width: "600px"
    }
    this.buttonStyle ={
      width: '200px',
      fontSize: '25px'
    }
    this.email = 'chamEmail'
    this.onContactMe = () => {
        window.location.href = `mailto:${this.email}`;
    }
  }
  
  render() {
    return (
      <Container fluid id="bio-section">
            <Row className="py-2">
            <Col md={{ size: 5, offset: 1 }}>
            <div>
            <h1 className="display-3">
          <b style={Object.assign({
              color: 'lightcoral'
          })}>Lives</b> in Ukraine
          <br/>
          <b style={Object.assign({
              color: 'lightcoral'
          })}>Works</b> anywhere
        </h1>
            </div>
              <div>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit doloribus velit iure mollitia quos vitae accusamus debitis, soluta eum. Consequatur id, fuga repellendus explicabo dolore laborum perferendis ducimus ipsam quod repellat enim! Laborum hic facere porro minus quis ea ut saepe perspiciatis accusamus alias repellat mollitia, rerum eum. Quas, expedita facilis voluptatem et odio accusantium quidem neque inventore, dolore beatae quo quis, suscipit commodi aspernatur nam necessitatibus id! Maiores ipsum perferendis cum totam aspernatur et similique corrupti in ut, eveniet non exercitationem quasi delectus eaque itaque vitae alias debitis eligendi quia culpa rerum quis? Cumque nisi unde culpa placeat aliquid debitis accusamus sunt error aut, delectus omnis doloremque maxime! Quod, ipsam sed asperiores nesciunt quis vero placeat alias ad? Mollitia?
              </div>
              {/* <br> */}
              <div className="text-center pt-5">
              <Button 
              color="primary"
              onClick={this.onContactMe}
              style={this.buttonStyle}>
                Contact Me
              </Button>
              </div>
              </Col>
              <Col md={{ size: 5}}>
                <img src={bio}  style={this.imageStyle}/>
              </Col>
            </Row>
      </Container>
    );
  }
}
