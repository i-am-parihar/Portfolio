import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  SiGit,
  SiVisualstudiocode,
  SiPostman,
  SiHeroku,
  SiVercel,
} from "react-icons/si";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <span> < SiVisualstudiocode/><span><h6>VS Code</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < SiGit/><span><h6>GitHub</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < SiPostman/><span><h6>Postman</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < SiVercel /><span><h6>Vercel</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < SiHeroku /><span><h6>Heroku</h6></span></span> 
      </Col>
    </Row>
  );
}

export default Toolstack;
