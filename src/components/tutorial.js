import React from "react"
import { Container, Row, Col } from "reactstrap"
import TutCard from "./shared-components/tutCard"

const Tutorial = () => {
  return (
    <section
      id="tutorial"
      className="bg-default pb-4 pt-5 text-white text-center"
    >
      <Container>
        <Row className="justify-content-center">
          <Col lg="7" xs="11">
            <h4 className="font-family-quicksand-book">How Does It Works?</h4>
          </Col>
        </Row>

        <hr
          width="70%"
          className="border-primary d-none d-lg-block"
          style={{ marginBottom: "-60px", marginTop: "100px" }}
        />
        <Row>
          <Col md="4" xs="12">
            <TutCard
              title="Download The App"
              content="Download the Gala app and you'll have one less thing to 
              worry about your worry about your Gala-venture and wanderlust needs"
              className="mb-lg-0 mb-sm-3 justify-content-start"
            />
          </Col>
          <Col md="4" xs="12">
            <TutCard
              title="Search for Place or Activity"
              content="Let Gala help you with the detailsof your Gala-venture and
              give you some recommendation base on your interest, wether you want to 
              eat or relax, Gala will make your crave fulfill"
              className="mb-lg-0 mb-sm-3 justify-content-start"
            />
          </Col>
          <Col md="4" xs="12">
            <TutCard
              title="Share your Gala Adventure"
              content="Don't be shy, share with the community your Gala-venture and make 
              them aware of new tourist spot visit and places to eat. Make them experience 
              the journey that you have"
              className="mb-lg-0 mb-sm-3 justify-content-start"
            />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Tutorial
