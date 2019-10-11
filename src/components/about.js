import React from "react";
import { Container, Row, Col } from "reactstrap";
import AboutCard from "./aboutCard";
import { ReactComponent as ArrowDown } from "../assets/svg/arrow-down.svg";

const About = () => {
  return (
    <section id="about" className="d-flex flex-column align-items-center">
      <a href="#about">
        <section className="scroll-down-badge bg-white">
          <ArrowDown width="20" />
        </section>
      </a>

      <Container className="py-5">
        <Row className="py-5 justify-content-center">
          <Col lg="4" md="6" xs="12">
            <AboutCard
              title="Discover"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore"
              shadow
              className="text-center rounded m-3"
            />
          </Col>
          <Col lg="4" md="6" xs="12" className="pt-lg-5">
            <AboutCard
              title="Plan"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore"
              shadow
              className="text-center rounded m-3 mt-lg-5"
            />
          </Col>
          <Col lg="4" md="6" xs="12">
            <AboutCard
              title="Share"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                      sed do eiusmod tempor incididunt ut labore et dolore"
              shadow
              className="text-center rounded m-3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
