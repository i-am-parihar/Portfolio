import React from "react";
import { Col, Row } from "react-bootstrap";
import { SiRedux} from "react-icons/si" ;
import {
  DiJavascript1,
  DiReact,
  DiHtml5,
  DiCss3,
} from "react-icons/di";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
      <span> < DiReact/><span><h6>React</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < SiRedux/><span><h6>Redux</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < DiJavascript1/><span><h6>JavaScript</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < DiHtml5/><span><h6>HTML</h6></span></span> 
      </Col>
      <Col xs={4} md={2} className="tech-icons">
      <span> < DiCss3/><span><h6>CSS</h6></span></span> 
      </Col>
    </Row>
  );
}

export default Techstack;
