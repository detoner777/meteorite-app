import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Footer extends Component {
  render() {
    return (
      <div className="footer">
        <div className="social-media">
          <a
            href="https://github.com/detoner777"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faGithub}
              size="2x"
              color="#D66853"
              className="social-icons"
            />{" "}
          </a>
          <a
            href="https://www.linkedin.com/in/%D0%B0%D0%BB%D0%B5%D0%BA%D1%81%D0%B5%D0%B9-%D0%BB%D1%8B%D1%81%D0%B5%D0%BD%D0%BA%D0%BE-8ab07910b/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FontAwesomeIcon
              icon={faLinkedinIn}
              size="2x"
              color="#D66853"
              className="social-icons"
            />
          </a>
        </div>
        <p>
          Handcrafted by ©{" "}
          <a href="http://fromgaming.com/" target="_blank">
            Ethan Vernon
          </a>
        </p>
      </div>
    );
  }
}
