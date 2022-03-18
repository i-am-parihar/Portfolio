import React from "react";
import { Button, Col, Row } from "react-bootstrap";
import { BiLinkExternal } from "react-icons/bi";


function Github() {
  return (
   <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={2} md={5} className="tech-icons">
        <h3>First Position in Science & Technology </h3>
        <h5>National Exhibition held at MANIT, Bhopal Feb 2015</h5>
        <Button href="https://drive.google.com/file/d/1fIwlGyGSbwOhYyafS7lzZRlKbYDBnFQE/view?usp=sharing">
        <BiLinkExternal /> &nbsp;
          View</Button>
      </Col>
      <Col xs={2} md={5} className="tech-icons">
        <h3>Second Position in Rural Technology </h3>
        <h5>State Level Techno Social Event for Youth</h5>
        <h5>Held under PEHAL-2015 at NITTTR, Bhopal March 2015</h5>
        <Button href="https://drive.google.com/file/d/1fJHr4RfUhSHsf4Aki1h-__dPPOwXdIVN/view?usp=sharing" >
        <BiLinkExternal /> &nbsp;
          View</Button>
      </Col>
    </Row>
  );
}


export default Github;
