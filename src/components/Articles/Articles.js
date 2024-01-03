import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import Particle from "../Particle";
import Card from "react-bootstrap/Card";
import articleimg from "../../Assets/article1.jpg";
import { BsFillStarFill } from "react-icons/bs";


function Articles() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">publications </strong> and <strong className="purple">articles </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={6}>
            <Card className="project-card-view" style= {{alignItems: "center"}}>  
          <Card.Body>
              <Card.Title style={{fontSize: "85%"}}> <strong className="purple">Academic article, peer-reviewed and published</strong></Card.Title>
              <Card.Title style={{borderBottom: "2px solid white"}}>Towards Transparentizing Personal Data Processing, Winning Public Trust</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>Over the past decade, as private organizations have increased the amount of data that is being processed, governmental institutions and other non-profit organizations (who shall be referred to as public organizations) have followed suit. Both types of organizations carry responsibilities regarding personal data processing, yet as clients of public organizations are not always able to avoid services provided, additional questions arise regarding the transparency of processing. Currently, this transparency is lacking, causing privacy concerns of clients to rise due to what is termed informational uncertainty, or the lack of information regarding the content, the process, and the purpose of data processing. By taking an information systems (IS) perspective, this research shows five principles to be effective in enhancing the privacy of the general public for public organizations: transparency, accountability, purpose specification, security, and ownership. In addition, results show the influence of the absence of time and experience on these principles.</Card.Text>
            </Card.Body>
            <Button href='https://aisel.aisnet.org/icis2021/soc_impact/soc_impact/10/' target="_blank">Full read</Button>
            <Card.Img variant="top" style={{ width: "60%", margin: "4%"}} src={articleimg} alt="card-img" />
          </Card>
          </Col>
          <Col md={6}>
            <Card className="project-card-view">  
          <Card.Body>
              <Card.Title style={{fontSize: "85%"}}> <strong className="purple">Academic article, peer-reviewed and published</strong></Card.Title>
              <Card.Title style={{borderBottom: "2px solid white"}}>Data Management in Emergency Response: Observations from the Field During COVID-19 and Storm Ana</Card.Title>
              <Card.Text style={{ textAlign: "justify" }}>During disruptive events, the exchange of information is a key factor in successfully managing the adverse effects. Today, there is a plethora of data and related data-technologies available for emergency response organizations, which can help address the information needs. Data has a great potential to support responders in their operations, especially in complex emergencies with longer lasting and more widespread effects. However, the increasing availability and use of data in emergency response also presents new challenges. The emergence of data in the field of crisis response is not only technical in nature, but also has impacts on the organizational aspects. Drawing on existing literature and best practices in data management and governance activities, we explore this topic in two cases centered around large-scale emergency responses. Data-management challenges faced by responders are observed first-hand and implications are identified for successfully leveraging the potential of data in the immediate responses to large-scale emergencies.</Card.Text>
              <Button href='https://scholarspace.manoa.hawaii.edu/items/065b9a95-234b-4955-9def-8ba0d4fd47e2' target="_blank">Full read</Button>
            </Card.Body>
          </Card>
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Articles;
