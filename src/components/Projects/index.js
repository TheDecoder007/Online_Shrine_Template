import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./style.css";

function Projects() {
  return (
    <Container fluid className="mainCont">

    <Container fluid className="projectCont" id="projects">
      <Row>
        <h3 className="text-center sectionHead">The Object of my Obsession</h3>
      </Row>

      <Row className="CardRow">
        <Col className="col1">
          <Card className="card">
            <Card.Img
              src={require("./../../assets/photos/tati8.png")}
              className="images"
              />
          </Card>
        </Col>
      </Row>

      <Row className="CardRow">
        <Col className="col1">
          <Card className="card">
            <Card.Img
              src={require("./../../assets/photos/tati1.png")}
              className="images"
              />
          </Card>
        </Col>
        <Col className="col1">
          <Card className="card">
            <Card.Img
              src={require("./../../assets/photos/tati2.png")}
              className="images"
              />
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img
              src={require("./../../assets/photos/tati3.png")}
              className="images"
              />
          </Card>
        </Col>
      </Row>

      <Row>
        <h3 className="text-center sectionHead">Isn't She Gorgeous</h3>
      </Row>

      <Row className="CardRow">
        <Col className="col1">
          <Card className="card">
            <Card.Img
              src={require("./../../assets/photos/tati4.png")}
              className="images"
              />
          </Card>
        </Col>
        <Col className="col1">
          <Card className="card">
            <Card.Img
              src={require("./../../assets/photos/tati5.png")}
              className="images"
              />
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img
              src={require("./../../assets/photos/tati6.png")}
              className="images"
              />
          </Card>
        </Col>
      </Row>

      <Row className="CardRow">
        <Col className="col1">
          <Card className="card">
            <Card.Img
              src={require("./../../assets/photos/tati7.png")}
              className="images"
              />
          </Card>
        </Col>
        <Col className="col1">
          <Card className="card">
            <Card.Img
              src={require("./../../assets/photos/tati22.png")}
              className="images"
              />
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img
              src={require("./../../assets/photos/tati23.png")}
              className="images"
              />
          </Card>
        </Col>
      </Row>
            </Container>


      <Row>
        <h3 className="text-center sectionHead">Start New Design Below</h3>
      </Row>

<Container fluid className="midContainer">

      <Row className="CardRow">
        <Col className="col1">
          <Card className="card">
            <Card.Img
              src={require("./../../assets/photos/tati9.png")}
              className="images"
              />
          </Card>
        </Col>
        <Col className="col1">
          <Card className="card">
            <Card.Img
              src={require("./../../assets/photos/tati10.png")}
              className="images"
              />
          </Card>
        </Col>
        <Col className="col1">
          <Card>
            <Card.Img
              src={require("./../../assets/photos/tati11.png")}
              className="images"
              />
          </Card>
        </Col>
      </Row>
    </Container>


  </Container>
  );
}

export default Projects;
