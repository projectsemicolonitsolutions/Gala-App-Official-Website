import React from "react"
import { Container, Row, Form, Input, Button } from "reactstrap"

import BrandLogo from "../assets/svg/logo.svg"
import User from "../assets/svg/user.svg"
import Key from "../assets/svg/key.svg"

const Login = () => {
  return (
    <section className="py-10 bg-body">
      <Container>
        <Form
          className="mx-auto bg-white px-5 pb-2 shadow"
          style={{ maxWidth: "500px", marginTop: "100px" }}
        >
          <section
            className="d-flex align-items-center bg-default rounded-circle position-absolute"
            style={{
              width: "160px",
              height: "160px",
              marginTop: "-80px",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <BrandLogo height="100px" className="mx-auto fill-white" />
          </section>
          <section style={{ paddingTop: "100px" }}>
            <h2 className="text-secondary border-bottom border-w2 border-secondary mb-4 d-inline-block font-weight-bold">
              LOGIN
            </h2>
            <Row
              noGutters
              className="border input-default input-round-l p-2 w-100 mb-3 flex-nowrap"
            >
              <div className="p-2 bg-default rounded-circle d-flex align-items-center">
                <User height="20px" width="22px" className="fill-white" />
              </div>
              <Input
                type="text"
                placeholder="Username"
                className="input-default border-0"
              />
            </Row>
            <Row
              noGutters
              className="border input-default input-round-l p-2 w-100 mb-3 flex-nowrap"
            >
              <div className="p-2 bg-default rounded-circle d-flex align-items-center">
                <Key height="20px" width="22px" className="fill-white" />
              </div>
              <Input
                type="password"
                placeholder="Password"
                className="input-default border-0"
              />
            </Row>
            <Button block className="btn-default btn-round-l mb-5">
              LOGIN
            </Button>
            <p className="text-center">
              <a href="#" className="text-muted">
                Forgot password?
              </a>
            </p>
          </section>
        </Form>
      </Container>
    </section>
  )
}

export default Login
