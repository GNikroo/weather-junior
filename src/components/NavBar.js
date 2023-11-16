import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";
import NavDropdown from "react-bootstrap/NavDropdown";

const NavBar = () => {
  return (
    <Container>
      <Navbar className={styles.Section}>
        <Link to="/" className={`${styles.Brand} text-decoration-none`}>
          Weather Jr.
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse className={styles.Dropdown} id="basic-navbar-nav">
          <NavDropdown title="" id="basic-nav-dropdown">
            <Link to="/about" className={styles.Links}>
              About
            </Link>
            <br></br>
            <Link to="/today" className={styles.Links}>
              Current Weather
            </Link>
            <br></br>
            <Link to="/past" className={styles.Links}>
              Historical Weather
            </Link>
          </NavDropdown>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  );
};

export default NavBar;
