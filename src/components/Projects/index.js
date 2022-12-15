import React from "react";
// import ProjectCard from "./PhotoCard";
// import {projects} from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./style.css";
import { photos } from "./data";

function Projects({ img1, alt }) {
  return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">The Object of my Obsession</h3>
      </Row>

      <Row className="CardRow">
        <Col className="col1">
          <Card>
            <Card.Img src={img1} alt={alt} className="images" />
          </Card>
        </Col>
        <Col className="col1">
          <Image src="../../assets/photos/tati1.png" className="images" />
        </Col>
        <Col className="col1">
          <Image src="../../assets/photos/tati8.png" className="images" />
        </Col>
      </Row>
    </Container>
  );
}

export default Projects;
