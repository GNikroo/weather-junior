import React from "react";
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "../styles/NavBar.module.css";

const NavBar = () => {
  return (
    <Navbar>
      <Link to="/today" className="text-decoration-none">
        Kid's Daily Forecast
      </Link>
      <Nav>
        <Link to="/about" className={styles.Links}>
          About
        </Link>
        <br></br>
        <Link to="/today" className={styles.Links}>
          Current Weather
        </Link>{" "}
        <br></br>
        <Link to="/past" className={styles.Links}>
          Historical Weather
        </Link>
      </Nav>
    </Navbar>
  );
};

export default NavBar;
