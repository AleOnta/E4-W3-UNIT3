import { Navbar, Nav, Container } from "react-bootstrap";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="/">SpaceFlight</Navbar.Brand>
        <Nav>
          <Link to="/" className="nav-link">
            Home
          </Link>
          <Link to="/aboutUs" className="nav-link">
            About Us
          </Link>
          <Link to="/pricing" className="nav-link">
            Pricing
          </Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
