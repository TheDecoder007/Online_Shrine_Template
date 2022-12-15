import React from "react";
import ProjectCard from "./ProjectCard";
import {projects} from "./data";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import "./style.css";


function Projects() {

    return (
    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">The Object of my Obsession</h3>
      </Row>
      <Row className="CardRow">

      </Row>
      </Container>
    );
};

export default Projects;
