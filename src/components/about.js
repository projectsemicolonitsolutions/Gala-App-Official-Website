import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as BrandLogo } from "../assets/svg/logo.svg";
import Subcribe from "./subscription";
import mobileDevices300 from "../assets/images/device300w.png";
import mobileDevices600 from "../assets/images/device600w.png";
import mobileDevices900 from "../assets/images/device900w.png";

const About = () => {
  return (
    <section>
      <Container>
        <Row className="justify-content-center">
          <Col md="9" xs="11">
            <Row className="justify-content-center">
              <Col xs="12">
                <header className="d-flex mb-2">
                  <section className="border-right border-dark pr-3 mr-4">
                    <BrandLogo className="fill-default" height="50" />
                  </section>
                  <section className="d-flex flex-column justify-content-between text-color-default">
                    <h5 className="font-family-quicksand-book m-0">
                      About Gala
                    </h5>
                    <h4 className="font-family-quicksand-b m-0">Our Mission</h4>
                  </section>
                </header>
              </Col>
              <Col md="6" xs="12" className="font-size-80 text-muted">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, quis nostrud exercitation ullamco
                  laboris.
                </p>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.{" "}
                </p>
              </Col>
              <Col md="6" xs="12" className="font-size-80 text-muted">
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam,
                </p>
                <p>Lorem ipsum dolor sit amet,</p>
              </Col>
              <Col lg="7" md="9" xs="12">
                <Subcribe title="Notify me" />
              </Col>
              <img
                src={mobileDevices300}
                alt="mobile-devices"
                srcset={`${mobileDevices300} 300w, ${mobileDevices600} 600w, ${mobileDevices900} 900w,`}
                width="100%"
              />
            </Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
