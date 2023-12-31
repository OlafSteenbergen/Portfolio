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
                <div class="title"><FaLaptopCode /> HTML, CSS, Javascript</div>
                <div class="descr">Landed my first job as Front-end Developer working with a customer to define requirements and turn this into a (static) website.</div>
            </li>
            <li>
                <div class="date">2017</div>
                <div class="title"><FaLaptopCode /> Python, R</div>
                <div class="descr">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga minima consequuntur soluta placeat iure totam commodi repellendus ea delectus, libero fugit quod reprehenderit, sequi quo, et dolorum saepe nulla hic.</div>
            </li>
            <li>
                <div class="date">2019</div>
                <div class="title"><FaLaptopCode /> React, React Native</div>
                <div class="descr">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit, cumque.</div>
            </li>
            <li>
                <div class="date">2020</div>
                <div class="title"><FaLaptopCode /> Django</div>
                <div class="descr">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Odit, non.</div>
            </li>
            <li>
                <div class="date">2021</div>
                <div class="title" style={{color: 'gold'}}><MdOutlineWorkOutline /> Job announcement</div>
                <div class="descr">Started working with the International Red Cross as Data Analyst, moving to Budapest.</div>
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
                <div class="descr">.</div>
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
