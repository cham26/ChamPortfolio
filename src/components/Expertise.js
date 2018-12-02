import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";

export default class Expertise extends Component {
  constructor(props) {
    super(props);
    this.expertise = [
      {
        src:
          "https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/v1/194761/bb662579-d508-4d6c-90e9-d1ec1ae39393_mkrvou.jpg",
        text:
          "CLINICAL SUPPORT"
      },
      {
        src:
          "https://res.cloudinary.com/hrscywv4p/image/upload/c_limit,fl_lossy,h_9000,w_1200,f_auto,q_auto/v1/194761/bb662579-d508-4d6c-90e9-d1ec1ae39393_mkrvou.jpg",
        text:
          "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Reprehenderit doloribus velit iure mollitia quos vitae accusamus debitis, soluta eum. Consequatur id, fuga repellendus explicabo dolore laborum perferendis ducimus ipsam quod repellat enim! Laborum hic facere porro minus quis ea ut saepe perspiciatis accusamus alias repellat mollitia, rerum eum. Quas, expedita facilis voluptatem et odio accusantium quidem neque inventore, dolore beatae quo quis, suscipit commodi aspernatur nam necessitatibus id! Maiores ipsum perferendis cum totam aspernatur et similique corrupti in ut, eveniet non exercitationem quasi delectus eaque itaque vitae alias debitis eligendi quia culpa rerum quis? Cumque nisi unde culpa placeat aliquid debitis accusamus sunt error aut, delectus omnis doloremque maxime! Quod, ipsam sed asperiores nesciunt quis vero placeat alias ad? Mollitia?"
      }
    ];
  }
  render() {
    return (
      <Container fluid>
        {this.expertise.map((i, index) => {
          return (
            <Row className="py-2"  key={index}>
              <Col md={{ size: 6, offset: 1 }} >
                <img src={i.src} alt="" className="img-fluid"/>
              </Col>
              <Col md={{ size: 4 }}>{i.text}</Col>
            </Row>
          );
        })}
      </Container>
    );
  }
}
