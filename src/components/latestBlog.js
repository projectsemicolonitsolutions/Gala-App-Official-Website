import React from "react";
import { Container, Row, Col } from "reactstrap";
import HeaderBg from "./headerBg";
import bgCapsule from "../assets/svg/capsule.svg";

const LatestBlog = () => {
  return (
    <section className="py-5">
      <Container>
        <Row className="flex-column align-items-center text-center">
          <HeaderBg
            className="blog-color pt-2 pb-3 font-family-quicksand-book"
            value="Latest Blog"
            background={bgCapsule}
          />
          <Col xl="8" xs="11">
            <p className="font-family-quicksand-l text-muted font-size-80">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet.
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestBlog;
