import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

import Map, {Marker} from 'react-map-gl';

function About() {
  const locs = [
    {"lon": 12, "lat": 12},
    {"lon": 13, "lat": 13},
]

  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={6}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="purple">me</strong> and <strong className="purple">my projects</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col md={6} className="about-img">
          <Map 
              mapboxAccessToken="pk.eyJ1Ijoib2xhZi1zdGVlbmJlcmdlbiIsImEiOiJjbGdiMjRma2EwMndmM2txbWNkd3hibTVrIn0.0rvvdImWe9DKzGFOIGdRuQ"
              initialViewState={{longitude: 0,latitude: 50, zoom: 1}}
              mapStyle="mapbox://styles/olaf-steenbergen/clqse54v100sh01r5erpi4yff">

          {locs.map(e => (
                      <Marker longitude={e.lon} latitude={e.lat} >
                        <img src='' className='h-10'/>
                        <p>HIER!!</p>
                      </Marker>
                    ))}    
              
          </Map>
          </Col>
        </Row>

        <h1 className="project-heading">
          Professional <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

      </Container>
    </Container>
  );
}

export default About;
