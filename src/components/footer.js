import React from "react";
import { Container, Row, Col } from "reactstrap";
import { ReactComponent as BrandLogo } from "../assets/svg/logo.svg";
import { ReactComponent as BrandTitle } from "../assets/svg/title.svg";
import { ReactComponent as Facebook } from "../assets/svg/facebook-f.svg";
import { ReactComponent as Twitter } from "../assets/svg/twitter.svg";
import { ReactComponent as Youtube } from "../assets/svg/youtube.svg";

const Footer = () => {
  return (
    <footer className="pt-5 bg-default text-white">
      <Container>
        <Row className="justify-content-center">
          <Col xs="10">
            <Row>
              <Col md="6" className="mb-3">
                <a className="d-flex align-items-center" href="/">
                  <BrandLogo className="fill-white" height="50" />
                  <BrandTitle className="ml-3 fill-white" height="30" />
                </a>
                <section className="font-family-quicksand-book font-size-80">
                  <p className="m-1">Sagot namin ang Gala Adventure more</p>
                  <p className="m-1">Tara Gala na !</p>
                </section>
              </Col>
              <Col md="6" className="mb-2">
                <nav className="d-flex justify-content-between font-size-90 font-family-quicksand-book">
                  <ul className="list-unstyled">
                    <li>Home</li>
                    <li>Features</li>
                    <li>Blog</li>
                    <li>Faqs</li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>Become a partner</li>
                    <li>Support Us</li>
                  </ul>
                  <ul className="list-unstyled">
                    <li>Company</li>
                  </ul>
                </nav>
              </Col>
              <Col
                lg="6"
                xs="12"
                className="font-size-90 font-family-quicksand-book text-white font-size-90 mt-2"
              >
                © 2019 Copyright, All Rights Reserved by Project Semicolon
              </Col>
              <Col
                lg="6"
                xs="12"
                className="font-size-90 font-family-quicksand-book mt-2"
              >
                <ul className="list-unstyled d-flex justify-content-between font-size-90">
                  <li>
                    <a href="/" className="text-white text-decoration-none">
                      Terms & Condition
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white text-decoration-none">
                      Privacy Policy
                    </a>
                  </li>
                  <li>
                    <a href="/" className="text-white text-decoration-none">
                      Help
                    </a>
                  </li>
                  <li>
                    <section className="d-flex justify-content-between">
                      <a href="/" className="text-white">
                        <Facebook
                          height="20px"
                          width="20px"
                          className="fill-white mr-2"
                        />
                      </a>
                      <a href="/" className="text-white">
                        <Twitter
                          height="20px"
                          width="20px"
                          className="fill-white mr-2"
                        />
                      </a>
                      <a href="/" className="text-white">
                        <Youtube
                          height="20px"
                          width="20px"
                          className="fill-white"
                        />
                      </a>
                    </section>
                  </li>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
