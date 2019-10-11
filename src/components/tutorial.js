import React from "react";
import { Container, Row, Col } from "reactstrap";
import TutCard from "./tutCard";

const Tutorial = () => {
  return (
    <section id="tutorial" className="bg-default py-10 text-white text-center">
      <Container>
        <h4 className="font-family-quicksand-book">How Does It Works?</h4>
        <section className="mx-lg-5 mx-md-3 mx-sm-2 px-lg-5 px-md-3 px-sm-2">
          <p className="font-family-quicksand-l font-size-90 m-0 mx-lg-5 px-lg-5">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
            ipsum dolor sit amet.
          </p>
        </section>
        <hr
          width="70%"
          className="border-primary d-none d-lg-block"
          style={{ marginBottom: "-85px", marginTop: "100px" }}
        />
        <Row>
          <Col md="4" xs="12">
            <TutCard
              title="Download The App"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              className="mb-3"
            />
          </Col>
          <Col md="4" xs="12">
            <TutCard
              title="Search for Place or Activity"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              className="mb-3"
            />
          </Col>
          <Col md="4" xs="12">
            <TutCard
              title="Share your Gala Adventure"
              content="Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod."
              className="mb-3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Tutorial;
