import React, { Component } from "react";
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
        <Navbar color="light" light expand="md">
          <Container>
            <NavbarBrand href="/">reactstrap</NavbarBrand>
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
