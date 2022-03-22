import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi, I am <span className="purple">Paritosh Parihar </span>
            from <span className="purple"> M.P. India.</span>
            <br />I am an Observant and innovative aspiring full-stack developer with a good understanding of JavaScript. 
            <br />
            <br />
            Apart from coding, I am a good team player with leadership skills. Looking forward to some interesting and challenging opportunities.
          </p>
          <p style={{ color: "rgb(155 126 172)" }}>
            "Skill is only developed by hours and hours of work !"{" "}
          </p>
          <footer className="blockquote-footer">Usain Bolt</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
