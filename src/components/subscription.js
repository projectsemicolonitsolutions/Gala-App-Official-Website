import React from "react";
import { Form, InputGroup, InputGroupAddon, Input, Button } from "reactstrap";

const Subscribe = ({ className, title, subtitle }) => {
  return (
    <section
      className={`font-family-quicksand-b text-center ${className || ``}`}
    >
      <p className="text-color-default font-size-120 m-0">{title}</p>
      <p className="text-white font-size-150">{subtitle}</p>
      <Form>
        <InputGroup>
          <Input
            type="email"
            name="email"
            placeholder="Enter Your Email"
            className="input-default font-size-80 input-round-l bg-transparent"
          />
          <InputGroupAddon addonType="append">
            <Button className="font-size-80 text-uppercase btn-round-l btn-default">
              Subcribe
            </Button>
          </InputGroupAddon>
        </InputGroup>
        <p className="text-muted font-size-80 font-family-quicksand-l mt-2">
          By keeping informed, you agree to receive occasional email from us
        </p>
      </Form>
    </section>
  );
};

export default Subscribe;
