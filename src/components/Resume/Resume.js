// import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
// import axios from "axios";
import pdf from "../../Assets/myResumeFs.pdf";
import { AiOutlineDownload } from "react-icons/ai";

function Resume() {
  

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <AiOutlineDownload />
            &nbsp;Download Resume
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title"> Work Experience</h3>
            <Resumecontent
              title="Sales Consultant"
              date="January 2021 - Present"
              content={[
                "Provide customer service as well as offer integrated solutions to our customers to help grow the business.",
              ]}
            />
            <Resumecontent
              title="Retail Sales Manager"
              date="January 2018 - 2020"
              content={[
                "Coach and development sales team to help grow the business and manage back office operations.",
              ]}
            />
            <Resumecontent
              title="Sales Consultant"
              date="January 2014 - 2017"
              content={[
                "Provide customer service as well as offer integrated solutions to our customers to help grow the business.",
              ]}
            />

            <h3 className="resume-title">Skills</h3>
            <Resumecontent
              content={[
                "Worked on creating the frontend-end of the website using React, Bootstrap, and Javascript.",
              ]}
            />
            <Resumecontent
              content={[
                "Operated on developing the frontend end of the website using Bootstrap, Javascript and backend APIs using Node.js",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="Northwestern University "
              date="2021 - Present"
              content={["Full Stack Web Developer"]}
            />
            <Resumecontent
              title= "Wilbur Wright Community College"
              date="2015 - 2017"
              content={["Majored in Accounting"]}
            />
         
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
          <AiOutlineDownload />&nbsp;Download Resume
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;
