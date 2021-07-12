import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import horiseon from "../../Assets/Projects/horiseon.jpg";
import myportfolio from "../../Assets/Projects/myPortfolio.jpg";
import password from "../../Assets/Projects/password.jpg";
import myquiz from "../../Assets/Projects/myQuiz.jpg";
import workday from "../../Assets/Projects/dayPlanner.jpg";
import weather from "../../Assets/Projects/weatherApp.jpg";
import profile from "../../Assets/Projects/profile.jpg";
import note from "../../Assets/Projects/noteTaker.png";
import tracker from "../../Assets/Projects/employeeTracker.png";
import commerce from "../../Assets/Projects/ecommerce.png";
import tech from "../../Assets/Projects/blog.png";
import workout from "../../Assets/Projects/workout.png";
import budget from "../../Assets/Projects/budget.png";
import employee from "../../Assets/Projects/employee.png";
import rocket from "../../Assets/Projects/rocket.JPG";
import shoeinventory from "../../Assets/Projects/shoeinventory.png";
import showmatch from "../../Assets/Projects/showMatch.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={horiseon}
              isBlog={false}
              title="Code Refactor"
              description="Check out how I structured the HTML page and optimized the website for search engines."
              link="https://github.com/javiistacks/prestigeworldwide"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myportfolio}
              isBlog={false}
              title="My first portfolio"
              description="Made by using only HTML and CSS."
              link="https://github.com/javiistacks/myPortfolio"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={password}
              isBlog={false}
              title="Password Generator"
              description="Hate making passwords? No worries,this website uses JavaScript in the Backend to help you create a password."
              link="https://github.com/javiistacks/passwordgenerator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myquiz}
              isBlog={false}
              title="My Quiz"
              description="Have fun answering riddles in my quiz which was made possible with JavaScript in the backend."
              link="https://github.com/javiistacks/myQuiz"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workday}
              isBlog={false}
              title="Work Day Scheduler"
              description="Help keep your work day organized by using my Work day scheduler. It saves your entry by using local storage."
              link="https://github.com/javiistacks/dayPlanner"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather App"
              description="Check out the weather from anywhere around the world with my weather app. Made possible by fetching data using an API in JavaScript."
              link="https://github.com/javiistacks/weatherApp"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={profile}
              isBlog={false}
              title="Team Profile generator"
              description="The Team Profile Generator is a command-line-input application run in Node that requests information from the user about members of an engineering team and generates an HTML file displaying that information."
              link="https://github.com/javiistacks/teamProfileGenerator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={note}
              isBlog={false}
              title="Note Taker"
              description="An application that can be used to write, save, and delete notes. This application uses an express backend and can save and retrieve note data from a JSON file."
              link="https://github.com/javiistacks/note-Taker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tracker}
              isBlog={false}
              title="Employee Tracker"
              description="An Employee Management CLI interface capable of creating, viewing, updating, and deleting records and saving them in a MySql database."
              link="https://github.com/javiistacks/employee-Tracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={commerce}
              isBlog={false}
              title="E-Commerce"
              description="A mysql database and application backend for an e-commerce site."
              link="https://github.com/javiistacks/e-commerce"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={tech}
              isBlog={false}
              title="Tech-Blog"
              description="A full stack web application blog where people can connect and talk about all things technical. You will be able to create user, delete post, and comment on post."
              link="https://github.com/javiistacks/tech-Blog"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={workout}
              isBlog={false}
              title="Workout Tracker"
              description="A real-time workout tracker, that allows the user to create a new workout, add to an existing workout, and view your exercise statistics."
              link="https://github.com/javiistacks/workoutTracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={budget}
              isBlog={false}
              title="Budget Tracker"
              description="Budget Tracker is a progressive web application that allows the user to track their finances, with or without internet connection."
              link="https://github.com/javiistacks/budgetTracker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Employee Directory"
              description="A full stack Employee Directory application created using react. The Employee Directory allows the user to seach employees by first or last name and sort them by their location, first and last name. This Project was bootstrapped with Create React App."
              link="https://github.com/javiistacks/employee_Directory"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rocket}
              isBlog={false}
              title="Coming Soon"
              description="Come check back for updates to more recent work."
              link="https://github.com/javiistacks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rocket}
              isBlog={false}
              title="Coming Soon"
              description="Come check back for updates to more recent work."
              link="https://github.com/javiistacks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rocket}
              isBlog={false}
              title="Coming Soon"
              description="Come check back for updates to more recent work."
              link="https://github.com/javiistacks"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rocket}
              isBlog={false}
              title="Coming Soon"
              description="Come check back for updates to more recent work."
              link="https://github.com/javiistacks"
            />
          </Col>
          
        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Projects </strong> 
        </h1>
        <p style={{ color: "white" }}>Check out the Projects I've worked on</p>
        <Row style={{ justifyContent: "center" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={showmatch}
              isBlog={false}
              title="Show Match"
              description="This is the first project that I worked on as a team. It allows the user to view a trailer of a movie or TV show they are interested in watching. Check out how we made it."
              link="https://github.com/cdfishe1/show-match"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={shoeinventory}
              isBlog={false}
              title="Shoe Inventory"
              description="Shoe Inventory is a full-stack web application that allows users to buy or sell used high-end and designer shoes in their local area. It is the perfect platform to sell your gently used high-end shoe, or to find high-end shoes at a bargain price. Shoe Inventory is easy to use, just sign up, then post a picture and information about your shoe."
              link="https://github.com/javiistacks/myTreasures"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={rocket}
              isBlog={false}
              title="Dollar-Sense"
              description="An app that helps young people budget and plan for retirement investing."
              link="https://github.com/cdfishe1/dollar-sense"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
