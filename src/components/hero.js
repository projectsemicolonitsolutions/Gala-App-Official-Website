import React from "react";
import { Row, Col } from "reactstrap";
import Subcribe from "./subscription";
import galaMap300w from "../assets/images/gala-map-300w.png";
import galaMap600w from "../assets/images/gala-map-600w.png";
import galaMap1500w from "../assets/images/gala-map-1500w.png";
import galaMap1800w from "../assets/images/gala-map-1800w.png";
import galaMap2000w from "../assets/images/gala-map-2000w.png";

const Hero = () => {
  return (
    <main className="bg-body">
      <Row className="pt-5 m-0 align-items-stretch">
        <Col
          lg="6"
          md="12"
          className="d-flex flex-column justify-content-center min-vh-100"
        >
          <section className="text-center px-lg-5 px-md-3">
            <h4 className="font-family-quicksand-b">
              Best Mobile App for your Gala Adventure
            </h4>
            <section className="px-lg-5 px-md-3 px-sm-2 mx-lg-5 mx-md-3 mx-sm-2">
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
            </section>
          </section>
        </Col>
        <Col lg="6" className="d-none d-lg-flex">
          <img
            src={galaMap300w}
            srcSet={`${galaMap300w} 300w, ${galaMap600w} 600w, ${galaMap1500w} 1500w, ${galaMap1800w} 1800w, ${galaMap2000w} 2000w`}
            alt="gala map"
            width="100%"
          />
        </Col>
      </Row>
    </main>
  );
};

export default Hero;
