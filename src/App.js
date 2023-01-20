import React from "react";
import './App.css';
import Hero from "./components/Hero";
// import PageFooter from "./components/Footer";
import Projects from "./components/Projects";
import "../src/assets/index.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Container from "react-bootstrap/Container";
import PageFooter from "./components/Footer";


function App() {



  return (
    <Container fluid className="mainContainer">
    <Hero></Hero>
    <Projects></Projects>
    <PageFooter></PageFooter>
    </Container>
  );
}

export default App;
