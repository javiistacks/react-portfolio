import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiGit,
  DiBootstrap,
  DiCss3,
  DiHtml5,
} from "react-icons/di";
import { SiPytorch, SiTensorflow, SiFirebase, SiNpm, SiMysql } from "react-icons/si";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <h4>Bootstrap</h4>
        <DiBootstrap />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>JavaScript</h5>
        <DiJavascript1 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>NodeJS</h5>
        <DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>React</h5>
        <DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>MongoDB</h5>
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>CSS</h5>
        <DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>HTML</h5>
        <DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>NPM Packages</h5>
        <SiNpm />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>GitIgnore</h5>
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <h5>mySQL</h5>
        <SiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
