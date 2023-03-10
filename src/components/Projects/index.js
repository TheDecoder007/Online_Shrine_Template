import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Image from "react-bootstrap/Image";
import Card from "react-bootstrap/Card";
import "./style.css";
import Aos from "aos";

function Projects() {
  return (
    <Container fluid className="mainCont">
      <Container fluid className="projectCont" id="projects">
        <Row>
          <h3 className="text-center sectionHead">
            The Object of my Obsession
          </h3>
        </Row>

        <Row className="CardRow">
          <Col className="colSolo">
            <Card className="cardSolo">
              <Card.Img
                src={require("./../../assets/photos/tati8.png")}
                className="images"
              />
            </Card>
          </Col>
        </Row>
      </Container>

      <Container fluid className="projectCont2" id="projects">
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
                src={require("./../../assets/photos/tati3.png")}
                className="images"
              />
            </Card>
          </Col>
        </Row>

        <Row className="CardRow">
          <Col className="col1">
            <Card data-aos="fade-right" className="card">
              <Card.Img 
                src={require("./../../assets/photos/tati14.png")}
                className="images"
              />
            </Card>
          </Col>

          <Col className="col1">
            <Card data-aos="fade-left">
              <Card.Img
                src={require("./../../assets/photos/tati13.png")}
                className="images"
              />
            </Card>
          </Col>
        </Row>
        </Container>

<section className="container1">

        <Row>
          <h3 data-aos="fade-up" className="text-center sectionHead1">She's Elegant</h3>
        </Row>

        <Row className="CardRow1">
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
                src={require("./../../assets/photos/tati6.png")}
                className="images"
                />
            </Card>
          </Col>
        </Row>

        <Row className="CardRow1">
          <Col className="col1">
            <Card data-aos="fade-up">
              <Card.Img
                src={require("./../../assets/photos/tati4.png")}
                className="images"
                />
            </Card>
          </Col>
          <Col className="col1">
            <Card data-aos="fade-up" className="card">
              <Card.Img
                src={require("./../../assets/photos/tati11.png")}
                className="images"
                />
            </Card>
          </Col>
          <Col className="col1">
            <Card data-aos="fade-up" className="card">
              <Card.Img
                src={require("./../../assets/photos/tati5.png")}
                className="images"
                />
            </Card>
          </Col>
              </Row>
  </section>

  <Container fluid>

          <Row>
            <h3 data-aos="fade-down" className="text-center sectionHead">She's Funny too</h3>
          </Row>

              <Row className="CardRow">
          <Col className="col1">
            <Card>
              <Card.Img
                src={require("./../../assets/photos/tati7.png")}
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
          </Row>
          <Row>
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

<Container>
        <Row>
          <h3 data-aos="fade-up" className="text-center sectionHead">What A Beauty!</h3>
        </Row>

        <Row className="CardRow">
          <Col className="col1">
            <Card className="card">
              <Card.Img
                src={require("./../../assets/photos/tati19.png")}
                className="images"
              />
            </Card>
          </Col>
          <Col className="col1">
            <Card data-aos="fade-up" className="card">
              <Card.Img
                src={require("./../../assets/photos/tati18.png")}
                className="images"
              />
            </Card>
          </Col>
          <Col className="col1">
            <Card>
              <Card.Img
                src={require("./../../assets/photos/tati20.png")}
                className="images"
                />
            </Card>
          </Col>
        </Row>
                </Container>

<section className="container1">

        <Row>
          <h3 className="text-center sectionHead1">She's Got It All</h3>
        </Row>

        <Row className="CardRow1">
          <Col className="col1">
            <Card data-aos="fade-left" className="card">
              <Card.Img
                src={require("./../../assets/photos/tati21.png")}
                className="images"
              />
            </Card>
          </Col>
          <Col className="col1">
            <Card data-aos="fade-right" className="card">
              <Card.Img
                src={require("./../../assets/photos/tati16.png")}
                className="images"
              />
            </Card>
          </Col>
          <Row>
            <Col className="col1">
              <Card >
                <Card.Img
                  src={require("./../../assets/photos/tati12.png")}
                  className="images"
                  />
              </Card>
            </Col>
           
          </Row>
          <Row>
            <Col className="col1">
              <Card data-aos="fade-right">
                <Card.Img
                  src={require("./../../assets/photos/tati17.png")}
                  className="images"
                  />
              </Card>
            </Col>
            <Col className="col1">
              <Card data-aos="fade-left"className="card">
                <Card.Img
                  src={require("./../../assets/photos/tatLook.png")}
                  className="images"
                  />
              </Card>
            </Col>
          </Row>

        </Row>
                  </section>
    </Container>
  );
}

export default Projects;
