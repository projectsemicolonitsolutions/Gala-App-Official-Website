import React from "react"
import { Container, Row, Col } from "reactstrap"
import BrandLogo from "../assets/svg/logo.svg"
import BrandTitle from "../assets/svg/title.svg"
import Facebook from "../assets/svg/facebook-f.svg"
import Twitter from "../assets/svg/twitter.svg"
import Youtube from "../assets/svg/youtube.svg"
import { useStaticQuery, graphql } from "gatsby"

const Footer = () => {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            author
            social {
              facebook
              twitter
              youtube
            }
          }
        }
      }
    `
  )

  const { author, social } = site.siteMetadata
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
                © 2019 Copyright, All Rights Reserved by {author}
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
                      <a
                        href={social.facebook}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <Facebook
                          height="20px"
                          width="20px"
                          className="fill-white mr-2"
                        />
                      </a>
                      <a
                        href={social.twitter}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
                        <Twitter
                          height="20px"
                          width="20px"
                          className="fill-white mr-2"
                        />
                      </a>
                      <a
                        href={social.youtube}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-white"
                      >
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
  )
}

export default Footer
