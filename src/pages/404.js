import React from "react"
import { Container, Row } from "reactstrap"
import Logo from "../assets/svg/logo.svg"

const PageNotFound = () => {
  return (
    <section className="py-10 px-3 font-family-oden-r text-secondary fill-secondary">
      <Container>
        <Row className="align-items-baseline">
          <h1 style={{ fontSize: "130px" }}>4</h1>
          <Logo height="90px" />
          <h1 style={{ fontSize: "130px" }}>4</h1>
        </Row>
        <h2 className="font-family-oden-r-b pb-10">Page Not Found!</h2>
      </Container>
    </section>
  )
}

export default PageNotFound
