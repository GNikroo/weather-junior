import React, { useState } from "react";
import { Container, Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  const [expanded, setExpanded] = useState(false);

  const handleNavClose = () => setExpanded(false);

  return (
    <Container>
      <Navbar
        className={styles.Section}
        expand="lg"
        expanded={expanded}
        onToggle={setExpanded}
      >
        <Navbar.Brand
          as={Link}
          to="/"
          className={`${styles.Brand} text-decoration-none`}
        >
          weather jr.
        </Navbar.Brand>
        <Navbar.Toggle
          className={styles.Hamburger}
          aria-controls="basic-navbar-nav"
        />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link
              as={Link}
              to="/today"
              className={styles.Links}
              onClick={handleNavClose}
            >
              Current Weather
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/historical"
              className={styles.Links}
              onClick={handleNavClose}
            >
              Historical Weather
            </Nav.Link>
            <Nav.Link
              as={Link}
              to="/info"
              className={styles.Links}
              onClick={handleNavClose}
            >
              App Information
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
