import React from "react";
// import ProjectCard from "./PhotoCard";
import {projects} from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col  from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import "./style.css";


function Projects() {

    return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">The Object of my Obsession</h3>
      </Row>

      <Row className="CardRow">
      <Col xs={6} md={4}>
      <Image src="../assets/photos/tati/tati8.jpg" rounded />
    </Col>
      </Row>
      </Container>
    );
};

export default Projects;
