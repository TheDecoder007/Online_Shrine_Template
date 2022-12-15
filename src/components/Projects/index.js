import React from "react";
// import ProjectCard from "./PhotoCard";
// import {projects} from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from 'react-bootstrap/Card';
import "./style.css";


function Projects() {

    return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">The Object of my Obsession</h3>
      </Row>

      <Row className="CardRow">
        <Card>
      <Card.Img src="../../assets/photos/Tati/tati8.jpg" className="images" />
        </Card>
    <Col className="col2">
      <Image src="../../assets/photos/Tati/tati1.jpg" className="images" />
    </Col>
    <Col className="col3">
      <Image src="../../assets/photos/Tati/tati8.jpg" className="images" />
    </Col>
      </Row>
      </Container>
    );
};

export default Projects;
