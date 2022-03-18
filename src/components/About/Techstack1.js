import React from "react";
import { Col, Row } from "react-bootstrap";
import {
  DiNodejs,
  DiMongodb,
} from "react-icons/di";
import {
  SiExpress,
} from "react-icons/si";

function Techstack1() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <span> < DiNodejs/><span><h6>Nodejs</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < SiExpress/><span><h6>Express</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < DiMongodb/><span><h6>Mongodb</h6></span></span> 
      </Col>
    </Row>
  );
}

export default Techstack1;
