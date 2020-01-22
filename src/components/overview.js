import React from "react"
import { Container, Row, Col } from "reactstrap"
import Card from "./shared-components/card"
import ArrowDown from "../assets/svg/arrow-down.svg"

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
              content="Get a list of newly sighted places to visit that will fulfill 
              your interest and travel must. This would be base with your interest and 
              highest rating to visit place around the Philippines"
              shadow
              className="text-center rounded m-3"
            />
          </Col>
          <Col lg="4" md="6" xs="12" className="pt-lg-5">
            <Card
              title="Plan"
              content="Manage and Organize your travel journey and expenses we are a 
              one-stop app for your travel needs. Make your way plan and organize your 
              journey, whether you are looking for the best itinerary or DIY your activities,
              we will give it to you."
              shadow
              className="text-center rounded m-3 mt-lg-5"
            />
          </Col>
          <Col lg="4" md="6" xs="12">
            <Card
              title="Share"
              content="Share the world, how great your travel experience is, and make them aware 
              of some beautiful tourism spots that surely make your journey breathe-taking and 
              and enjoy every scenery, food, instagrammable places that nature offers."
              shadow
              className="text-center rounded m-3"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Overview
