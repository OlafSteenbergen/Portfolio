import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiVisualstudiocode,
  SiVercel,
  SiRstudio,
  SiTableau,
  SiPowerbi,
  SiAdobeillustrator
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <p>VS Code</p><SiVisualstudiocode />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>R Studio</p><SiRstudio />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>Power BI</p><SiPowerbi />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>Illustrator</p><SiAdobeillustrator />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>Vercel</p><SiVercel />
      </Col>
    </Row>
  );
}

export default Toolstack;
