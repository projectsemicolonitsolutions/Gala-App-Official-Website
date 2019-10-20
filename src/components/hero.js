import React from "react"
import { Row, Col } from "reactstrap"
import Subcribe from "./shared-components/subscription"
import GalaMap300w from "../images/gala-map-300w.png"
import GalaMap600w from "../images/gala-map-600w.png"
import GalaMap1500w from "../images/gala-map-1500w.png"
import GalaMap1800w from "../images/gala-map-1800w.png"
import GalaMap2000w from "../images/gala-map-2000w.png"

const Hero = () => {
  return (
    <main className="bg-body">
      <Row className="pt-5 m-0 align-items-stretch">
        <Col
          lg="6"
          md="12"
          className="d-flex-center text-center flex-column min-vh-100"
        >
          <h4 className="font-family-quicksand-b">
            Best Mobile App for your Gala Adventure
          </h4>
          <section className="d-flex justify-content-center">
            <Col lg="8" md="10" xs="11">
              <p className="font-family-quicksand-r font-size-90 text-muted my-4">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                adipisicing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua.
              </p>
              <Subcribe
                title="Notify me"
                subtitle={`Let me know when it's live`}
              />
            </Col>
          </section>
        </Col>
        <Col lg="6" className="d-none d-lg-flex">
          <img
            src={GalaMap300w}
            srcSet={`${GalaMap300w} 300w, ${GalaMap600w} 600w, ${GalaMap1500w} 1500w, ${GalaMap1800w} 1800w, ${GalaMap2000w} 2000w`}
            alt="gala map"
            width="100%"
          />
        </Col>
      </Row>
    </main>
  )
}

export default Hero
