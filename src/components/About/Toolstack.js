import React from "react";
import { Col, Row } from "react-bootstrap";
import {

  SiVisualstudiocode,
  SiHeroku,
  
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
    
      <Col xs={4} md={2} className="tech-icons">
      <h5>Visual Studio Code</h5>
        <SiVisualstudiocode />
      </Col>
     
  
      <Col xs={4} md={2} className="tech-icons">
        <h5>Heroku</h5>
        <SiHeroku />
      </Col>
    </Row>
  );
}

export default Toolstack;
