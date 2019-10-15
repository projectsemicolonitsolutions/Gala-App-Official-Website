import React from "react";
import { Container, Row, Col } from "reactstrap";
import HeaderBg from "./shared-components/headerBg";
import bgCapsule from "../assets/svg/capsule.svg";
import Blog from "./shared-components/blog";
import BlogAside from "./shared-components/blogAside";

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
            <p className="font-family-quicksand-l text-muted font-size-80 mb-5">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Lorem
              ipsum dolor sit amet.
            </p>
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col lg="10" xs="11">
            <Row>
              <Col md="6" xs="12">
                <Blog
                  title="The master bedroom suite is phenomenally spacious"
                  content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                  className="mb-5"
                />
              </Col>
              <Col md="6" xs="12">
                <aside className="d-flex flex-column">
                  <BlogAside
                    title="Lorem ipsum dolor"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris."
                    className="mb-4"
                  />
                  <BlogAside
                    title="Lorem ipsum dolor"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                    className="mb-4"
                  />
                  <BlogAside
                    title="Lorem ipsum dolor"
                    content="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod."
                    className="mb-4"
                  />
                </aside>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default LatestBlog;
