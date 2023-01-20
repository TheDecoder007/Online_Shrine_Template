import React from "react";
import Row from "react-bootstrap/Row";
// import Container from "react-bootstrap/Container";
import "./style.css";

import Video from "../../assets/videos/heartpump222.mp4";

const Hero = () => {
  return (
    // <Container fluid className="HeroCont">
    <Row className="heroRow">
      <video autoPlay loop muted id="video" className="HeroVid">
        <source src={Video} type="video/mp4" />
      </video>
    </Row>
    // </Container>
  );
};

export default Hero;
