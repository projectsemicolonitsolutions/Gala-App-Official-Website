import React from "react";
import { Container, Row, Col } from "reactstrap";
import TutCard from "./shared-components/tutCard";

const Tutorial = () => {
  return (
    <section id="tutorial" className="bg-default py-5 text-white text-center">
      <Container>
        <Row className="justify-content-center">
          <Col lg="7" xs="11">
            <h4 className="font-family-quicksand-book">How Does It Works?</h4>
            <p className="font-family-quicksand-l font-size-90 m-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet.
            </p>
          </Col>
        </Row>

        <hr
          width="70%"
          className="border-primary d-none d-lg-block"
          style={{ marginBottom: "-100px", marginTop: "100px" }}
        />
        <Row>
          <Col md="4" xs="12">
            <TutCard
              title="Download The App"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              className="mb-lg-0 mb-sm-3"
            />
          </Col>
          <Col md="4" xs="12">
            <TutCard
              title="Search for Place or Activity"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              className="mb-lg-0 mb-sm-3"
            />
          </Col>
          <Col md="4" xs="12">
            <TutCard
              title="Share your Gala Adventure"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              className="mb-lg-0 mb-sm-3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tutorial;
