import React from "react";
import { Card, Container } from "react-bootstrap";
import appStyles from "../App.module.css";
import styles from "../styles/Footer.module.css";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <Container className={`${appStyles.Section} text-center`}>
      <Card.Footer className={`${styles.Footer} fixed-bottom`}>
        <p>Gina Nikroo &copy; {currentYear} All rights reserved.</p>
      </Card.Footer>
    </Container>
  );
};

export default Footer;
