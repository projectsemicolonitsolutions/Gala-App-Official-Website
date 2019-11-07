import React from "react"
import { Container, Row, Col } from "reactstrap"
import HeaderBg from "./shared-components/headerBg"
import bgCapsule from "../assets/svg/capsule.svg"
import Blog from "./shared-components/blog"
import BlogAside from "./shared-components/blogAside"

// Temporary images for the latest blog
import img1 from "../blogs/img/img1.jpg"
import img2 from "../blogs/img/img2.jpg"
import img3 from "../blogs/img/img3.jpg"

const LatestBlog = ({ blogs }) => {
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
                  thumbnail={img1 || blogs[0].img}
                  title={
                    blogs[0].title ||
                    `The master bedroom suite is phenomenally spacious`
                  }
                  content={
                    blogs[0].description ||
                    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`
                  }
                  className="mb-5"
                />
              </Col>
              <Col md="6" xs="12">
                <aside className="d-flex flex-column">
                  <BlogAside
                    thumbnail={img2 || blogs[1].img}
                    title={blogs[1].title || `Lorem ipsum dolor`}
                    content={
                      blogs[1].description ||
                      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`
                    }
                    className="mb-4"
                  />
                  <BlogAside
                    thumbnail={img3 || blogs[2].img}
                    title={blogs[2].title || `Lorem ipsum dolor`}
                    content={
                      blogs[2].description ||
                      `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`
                    }
                    className="mb-4"
                  />
                  <BlogAside
                    thumbnail={img1 || blogs[3].img}
                    title={`Lorem ipsum dolor`}
                    content={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.`}
                    className="mb-4"
                  />
                </aside>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default LatestBlog
