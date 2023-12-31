import React from "react";
import Card from "react-bootstrap/Card";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Directly after graduating from my Master's Degree in Information Management, I started working with the <span style={{color: 'red', fontWeight: 'bold'}}>International Red Cross </span>
            from <span> Budapest (Hungary) and Geneva (Switzerland).</span>
            <br /><br />
            Since then, I have worked on many projects around the world. Use the map on the right to explore my work.
            <br />
            <br />
          </p>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Quote!"{" "}
          </p>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
