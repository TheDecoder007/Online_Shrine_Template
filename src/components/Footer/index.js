import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col"

import "./style.css";



function PageFooter () {

    return (
    <Container fluid className="footerCont">
        <Row>
            <footer className="footer">
                <Col className="footerCol">
                    <div className="footerText" href="/">
                        OnlineShrine.org
                    </div>


                </Col>

            </footer>
        </Row>

    </Container>


    )
}

export default PageFooter;