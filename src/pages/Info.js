import React from "react";
import { Dropdown } from "react-bootstrap";
import styles from "../styles/Info.module.css";

const Info = () => {
  return (
    <div className={`${styles.Info} p-2`}>
      <div className="d-flex flex-column">
        <Dropdown className="p-0 m-0">
          <Dropdown.Toggle className="ABOUT" id="dropdown-basic">
            About Weather Jr.
          </Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.ItemText>
              <p>
                Weather Jr. is designed to provide weather information for
                children. It aims to present weather data in an engaging and
                pedagogical way, making it easier for children to understand and
                interact with.
              </p>
              <p>
                The app includes colorful visuals and simplified weather
                descriptions while providing educational content related to
                weather phenomena.
              </p>
              <p>Explore and enjoy!</p>
            </Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown className="mt-4">
          <Dropdown.Toggle id="dropdown-basic">Contact</Dropdown.Toggle>
          <Dropdown.Menu>
            <Dropdown.ItemText>
              <p>
                If you have suggestions, comments, or questions, feel free to
                contact me. I will get back to you as soon as possible{" "}
                <a href="mailto:info.weatherjr@gmail.com">
                  info.weatherjr@gmail.com
                </a>
                .
              </p>
            </Dropdown.ItemText>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
};

export default Info;
