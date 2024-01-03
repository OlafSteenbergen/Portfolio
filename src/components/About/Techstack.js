import React from "react";
import { Col, Row } from "react-bootstrap";
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiReact,
  DiNodejs,
  DiMongodb,
  DiPython,
  DiGit,
  DiJava,
  DiMysql
} from "react-icons/di";
import {
  SiRedis,
  SiFirebase,
  SiNextdotjs,
  SiSolidity,
  SiPostgresql,
  SiRstudio
} from "react-icons/si";
import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <p>Python</p><DiPython />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <p>HTML</p><DiHtml5 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>CSS</p><DiCss3 />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>JavaScript</p><DiJsBadge />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>React</p><DiReact />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>Node.js</p><DiNodejs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>MongoDB</p><DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <p>PostgreSQL</p><SiPostgresql />
      </Col>
      
      <Col xs={4} md={2} className="tech-icons">
      <p>MySQL</p><DiMysql />
      </Col>
    </Row>
  );
}

export default Techstack;
