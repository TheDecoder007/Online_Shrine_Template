import React from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import "./style.css";

import Video from "../../assets/videos/heartPump.mp4"

const Hero = () => {

    return (
        <Container fluid className="Hero">
            <Row className="heroRow">
            <video autoPlay loop muted id="video">
          <source src={Video} type="video/mp4" />
        </video>
            </Row>
        </Container>

    );
};

export default Hero;