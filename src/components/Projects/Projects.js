import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import pythonstockanalysis from "../../Assets/Projects/PythonStockAnalysis.png";
import socialmedia from "../../Assets/Projects/socialmedia.png";


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
              imgPath={socialmedia}
              isBlog={false}
              title="Social Media Application"
              description="As pratice, worked on a Social Media application that allows users to register, log in, upload posts and like/respond to other posts."
              ghLink="https://github.com/OlafSteenbergen/SocialMedia"
              demoLink="https://socialmedia-production-7b03.up.railway.app/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pythonstockanalysis}
              isBlog={false}
              title="Python Stock Analysis"
              description="XYZ"
              ghLink="https://github.com/OlafSteenbergen/SocialMedia"
              demoLink="https://socialmedia-production-7b03.up.railway.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
