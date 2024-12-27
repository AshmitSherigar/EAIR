import React, { useState } from "react";
import "./Footer.css";
import {
  FaInstagram,
  FaFacebook,
  FaLinkedin,
  FaXTwitter,
  FaPlus,
  FaMinus,
} from "react-icons/fa6";

function Footer() {
  const [isExpanded, setIsExpanded] = useState(false);

  const toggleLanguages = () => {
    setIsExpanded(!isExpanded);
  };

  const contactText = "CONTACT";

  return (
    <>
      <div className="footer">
        <div className="footerbox">
          <div className="footerbox-up">
            <h4>ADDRESS</h4>
          </div>
          <div className="footerbox-down">
            <p>
              Chemin du Croset 7, Ecublens <br />
              Suisse
            </p>
          </div>
        </div>
        <div className="footerbox">
          <div className="footerbox-up">
            <h4>CONTACT</h4>
          </div>
          <div className="footerbox-down">
            <p>+41 (0) 79 460 18 95</p>
            <p>eair@gmail.com</p>
          </div>
        </div>
        <div className="footerbox">
          <div className="footerbox-up">
            <h4>SOCIAL MEDIA</h4>
          </div>
          <div className="footerbox-down">
            <div className="socials">
              <FaInstagram className="icon" />
              <FaFacebook className="icon" />
              <FaLinkedin className="icon" />
              <FaXTwitter className="icon" />
            </div>
          </div>
        </div>
        <div className="footerbox">
          <div
            className={`footerbox-up ${isExpanded ? "expanded" : ""}`}
            id="cupcake"
            onClick={toggleLanguages}
          >
            <h4>LANGUAGES</h4>
            {isExpanded ? <FaMinus /> : <FaPlus />}
          </div>
          <div
            id="fourth"
            className={`footerbox-down ${isExpanded ? "show-options" : ""}`}
          >
            <div className="options">
              English <br /> Hindi <br /> Telegu <br /> Tamil
            </div>
          </div>
        </div>
        <div className="footer-contact">
          <h1>
            {contactText.split("").map((char, index) => (
              <span key={index} className="contact-letter">
                {char}
              </span>
            ))}
          </h1>
          <p>2024 © Copyright Reserved to EAIR</p>
        </div>
      </div>
    </>
  );
}

export default Footer;
