import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.jpg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter
} from "react-icons/ai";

import { MdOutlineWorkOutline, MdAutoGraph } from "react-icons/md";
import { FaMedium } from "react-icons/fa6";

import { FaLinkedinIn, FaLaptopCode } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>

        <h1 className="heading-name" style={{color: 'white', marginBottom:'3%'}}>
                My programming <strong className="main-name">journey</strong>
        </h1>
        <ul>
            <li>
                <div class="date">2015</div>
                <div class="title"><FaLaptopCode /> HTML, CSS</div>
                <div class="descr">Started my bachelor degree in Business Information Technology and developed my first website, </div>
            </li>
            <li>
                <div class="date">2016</div>
                <div class="title" style={{color: 'gold'}}><MdOutlineWorkOutline /> Job announcement</div>
                <div class="descr">Landed my first job as Front-end Developer of (static) websites.</div>
            </li>
            <li>
                <div class="date">2017</div>
                <div class="title"><FaLaptopCode /> Python, R</div>
                <div class="descr">Started my journey of learning more about data transformation, analysis and visualization in Python and R.</div>
            </li>
            <li>
                <div class="date">2019</div>
                <div class="title"><FaLaptopCode /> SQL, Database Management</div>
                <div class="descr">Designed databases and learned how to use SQL.</div>
            </li>
            <li>
                <div class="date">2019</div>
                <div class="title"><FaLaptopCode /> React, React Native</div>
                <div class="descr">Used React (Native) for the first time to build a web application and multipel interactive websites commercially.</div>
            </li>
            <li>
                <div class="date">2020</div>
                <div class="title"><FaLaptopCode /> Django</div>
                <div class="descr">Developed my first web application!</div>
            </li>
            <li>
                <div class="date">2021</div>
                <div class="title" style={{color: 'gold'}}><MdOutlineWorkOutline /> Job announcement</div>
                <div class="descr">Started working with the International Red Cross as Data Analyst.</div>
            </li>
            <li>
                <div class="date">2021</div>
                <div class="title"><FaLaptopCode /> Node.JS</div>
                <div class="descr">Learned how to develop, deploy and maintain APIs.</div>
            </li>
            <li>
                <div class="date">2022</div>
                <div class="title"><MdAutoGraph /> Power BI, Tableau</div>
                <div class="descr">Further developed my expertise in visualizing information using Business Intelligence software.</div>
            </li>
            <li>
                <div class="date">2023</div>
                <div class="title"><FaLaptopCode /> MongoDB, PostgreSQL</div>
                <div class="descr">Building onto my SQL knowledge, I looked into alternative database solutions and learned how to deploy them in web applications.</div>
            </li>
        </ul>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/OlafSteenbergen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/olafsteenbergen"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/olafsteenbergen/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <FaMedium />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
