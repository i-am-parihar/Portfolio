import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import instacart from "../../Assets/Projects/instacart_image1.png";
import Uboric from "../../Assets/Projects/Uboric.png";


import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { BiLinkExternal } from "react-icons/bi";
import {
  DiJavascript1,
  DiNodejs,
  DiMongodb,
  DiHtml5,
  DiCss3,
} from "react-icons/di";
import {
  SiExpress,
} from "react-icons/si";

// import { Col, Row } from "react-bootstrap";




function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>

        {/* First Project */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" , display:"flex"}}>
          <Col md={7} className="project-card">
          <Card className="project-card-view">
          <Card.Img variant="top" src={instacart} alt="card-img" />

          <Card.Body>
          <Card.Title>Instacart</Card.Title>
          <Card.Text style={{ textAlign: "justify"}}>
          A web application that provides grocery delivery and pick-up service.
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
          Features :
          </Card.Text>
          <Card.Text style={{ textAlign: "justify"  , lineHeight:"0"  }}>
          Sign-in/Sign-up and interactive Home Page
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
          Store Page with Cart Page as a sidebar for Easy Navigation
          </Card.Text>
          <Card.Text style={{ textAlign: "justify"  , lineHeight:"0" }}>
          User-Friendly Add to Cart and Checkout Page
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
          Tech Stack :
          </Card.Text>

        <Row style={{ whiteSpace: "10px" }}>
          <Col xs={4} md={2} className="proj-icons">
          <span> < DiJavascript1/><span><h6>JavaScript</h6></span></span> 
          </Col>
          <Col xs={4} md={2} className="proj-icons">
          <span> < DiNodejs /><span><h6>Node</h6></span></span>
          </Col>
          <Col xs={4} md={2} className="proj-icons">
          <span> <SiExpress /><span><h6>Express</h6></span></span>
          </Col>
          <Col xs={4} md={2} className="proj-icons">
          <span> <DiMongodb /><span><h6>Mongodb</h6></span></span>
          </Col>
          <Col xs={4} md={2} className="proj-icons">
          <span> <DiHtml5 /><span><h6>HTML</h6></span></span>
          </Col>
          <Col xs={4} md={2} className="proj-icons">
          <span> <DiCss3 /><span><h6>CSS</h6></span></span>
          </Col>

        <Col className="view">
          <Button variant="primary" href="https://instacart-app.netlify.app/" target="_blank">
          <BiLinkExternal /> &nbsp;
          View Project
          </Button>
        </Col>
        
        </Row> 

        </Card.Body>
        </Card>
        </Col>
        </Row>
        

        {/* Second Project */}
        <Row style={{ justifyContent: "center", paddingBottom: "10px" , display:"flex"}}>
          <Col md={7} className="project-card">
          <Card className="project-card-view">
          <Card.Img variant="top" src={Uboric} alt="card-img" />

          <Card.Body>
          <Card.Title>Uboric</Card.Title>
          <Card.Text style={{ textAlign: "justify"}}>
          A web application that sells varieties of products.
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
          Features :
          </Card.Text>
          <Card.Text style={{ textAlign: "justify"  , lineHeight:"0"  }}>
          Sign-in/Sign-up and interactive Home Page
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
          Well-designed Home Page and Product Page
          </Card.Text>
          <Card.Text style={{ textAlign: "justify"  , lineHeight:"0" }}>
          User-Friendly Add to Cart and Checkout Page
          </Card.Text>
          <Card.Text style={{ textAlign: "justify" }}>
          Tech Stack :
          </Card.Text>

        <Row style={{ whiteSpace: "10px" }}>
          <Col xs={4} md={2} className="proj-icons">
          <span> < DiJavascript1/><span><h6>JavaScript</h6></span></span> 
          </Col>
          <Col xs={4} md={2} className="proj-icons">
          <span> <DiHtml5 /><span><h6>HTML</h6></span></span>
          </Col>
          <Col xs={4} md={2} className="proj-icons">
          <span> <DiCss3 /><span><h6>CSS</h6></span></span>
          </Col>

        <Col className="view">
          <Button variant="primary" href="https://uboricproject.vercel.app/index.html" target="_blank">
          <BiLinkExternal /> &nbsp;
          View Project
          </Button>
        </Col>
        
        </Row> 

        </Card.Body>
        </Card>
        </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;



