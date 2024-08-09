import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";

import assets from "../assets";

const navbar = () => {
  return (
    <Navbar collapseOnSelect expand="lg" className="bg-red">
      <Container>
        <Navbar.Brand href="/">
          <img src={assets.tmmin} alt="tmmin" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <a className="nav-link" href="#our-services">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#why-us">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#testimonial">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#faq">
                FAQ
              </a>
            </li>
            <a href="#" className="btn btn-success">
              Register
            </a>
          </ul>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default navbar;
