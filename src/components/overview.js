import React from "react";
import { Container, Row, Col } from "reactstrap";
import Card from "./card";
import { ReactComponent as ArrowDown } from "../assets/svg/arrow-down.svg";

const Overview = () => {
  return (
    <section id="about" className="d-flex flex-column align-items-center">
      <div style={{ width: "50px", position: "absolute", marginTop: "-25px" }}>
        <a href="#about">
          <section className="scroll-down-badge bg-white">
            <ArrowDown width="20" />
          </section>
        </a>
      </div>

      <Container className="py-5">
        <Row className="py-5 justify-content-center">
          <Col lg="4" md="6" xs="12">
            <Card
              title="Discover"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore"
              shadow
              className="text-center rounded m-3"
            />
          </Col>
          <Col lg="4" md="6" xs="12" className="pt-lg-5">
            <Card
              title="Plan"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, 
                    sed do eiusmod tempor incididunt ut labore et dolore"
              shadow
              className="text-center rounded m-3 mt-lg-5"
            />
          </Col>
          <Col lg="4" md="6" xs="12">
            <Card
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

export default Overview;
