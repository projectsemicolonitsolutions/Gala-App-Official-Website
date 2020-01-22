import React from "react"
import { Row, Col } from "reactstrap"
import Subcribe from "./shared-components/subscription"
import ImgMap from "./imgMap"

const Hero = ({ description }) => {
  return (
    <main className="bg-body">
      <Row className="pt-5 m-0 align-items-stretch">
        <Col
          lg="6"
          md="12"
          className="d-flex-center text-center flex-column py-5 mt-5"
        >
          <h4 className="font-family-quicksand-b">
            Best Mobile App for your Gala Adventure
          </h4>
          <section className="d-flex justify-content-center">
            <Col lg="8" md="10" xs="11">
              <p className="font-family-quicksand-r font-size-90 text-muted my-4">
                {description}
              </p>
              <Subcribe
                title="Notify me"
                subtitle={`Let me know when it's live`}
              />
            </Col>
          </section>
        </Col>
        <Col lg="6">
          <ImgMap />
        </Col>
      </Row>
    </main>
  )
}

export default Hero
