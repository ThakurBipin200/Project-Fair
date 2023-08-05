import React from "react";
import "./Footer.css";

function Footer(props) {
  return (
    <div className="footer">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12 col-sm-4 align-self-center">
            <div className="text-center">
              <a
                className="btn btn-social-icon btn-fa-github"
                href="https://github.com/thakurbipin200"
              >
                <i className="fa fa-github"></i>
              </a>
              <a
                className="btn btn-social-icon btn-fa-envelope"
                href="mailto:bipinkumar9871x@gmail.com"
              >
                <i className="fa fa-envelope"></i>
              </a>
              <a
                className="btn btn-social-icon btn-linkedin"
                href="https://www.linkedin.com/in/bipin-kumar-68494a170/"
              >
                <i className="fa fa-linkedin"></i>
              </a>
              <a
                className="btn btn-social-icon btn-twitter"
                href="https://twitter.com/official_bipink"
              >
                <i className="fa fa-twitter"></i>
              </a>
            </div>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-auto">
            <p>© Copyright 2023 Projects Fair</p>
            <p>~Bipin kumar</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
