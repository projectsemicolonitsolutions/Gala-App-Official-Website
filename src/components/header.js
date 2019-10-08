import React, { Component } from "react";
import { ReactComponent as BrandLogo } from "../assets/svg/logo.svg";
import { ReactComponent as BrandTitle } from "../assets/svg/title.svg";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  Container,
  Button
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <header>
        <Navbar className="bg-body" light expand="md">
          <Container>
            <NavbarBrand className="d-flex align-items-center" href="/">
              <BrandLogo className="fill-default" height="50" />
              <BrandTitle className="ml-3 fill-secondary" height="30" />
            </NavbarBrand>
            <NavbarToggler onClick={this.toggle} />
            <Collapse isOpen={this.state.isOpen} navbar>
              <Nav
                className="ml-auto mr-3 font-family-roboto-b text-uppercase"
                navbar
              >
                <NavItem>
                  <NavLink href="/">Home</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/features">Features</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/blog">Blog</NavLink>
                </NavItem>
                <NavItem>
                  <NavLink href="/faqs">faqs</NavLink>
                </NavItem>
              </Nav>
              <Button className="btn-default border-0 btn-rounded text-uppercase font-family-roboto-r">
                Become a Partner
              </Button>
            </Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }
}
export default Header;
