import React from "react";

const About = () => {
  return (
    <div className="p-4">
      <h2>About Weather Jr.</h2>
      <p>
        Weather Jr. is designed to provide weather information for children. It
        aims to present weather data in an engaging and pedagogical way, making
        it easier for children to understand and interact with.
      </p>
      <p>
        The app includes features such as animated weather icons, colorful
        visuals, and simplified weather descriptions. It also provides
        educational content related to weather phenomena, allowing children to
        learn while exploring the app.
      </p>
      <p>
        The goal of Weather Jr. is to make weather forecasting fun and
        accessible for young users.
      </p>
      <p>Explore and enjoy!</p>

      <h2>Contact</h2>
      <p>
        If you have suggestions, comments, or questions, feel free to contact
        me. I will get back to you as soon as possible{" "}
        <a href="mailto:weatherjunior.com@gmail.com">
          weatherjunior.com@gmail.com
        </a>
        .
      </p>
    </div>
  );
};

export default About;
