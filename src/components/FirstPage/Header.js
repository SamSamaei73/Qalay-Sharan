import React, { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";
import Linkedin from "../../img/icons8-linkedin-circled-50.png";
import Whatsapp from "../../img/icons8-whatsapp-50.png";
import Instagram from "../../img/icons8-instagram-48.png";
import Logo from "../../img/logo-qalay.png";
import scrollToComponent from "react-scroll-to-component";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [sectionData, setSectionData] = useState([]);

  const { i18n } = useTranslation();
  const changeLanguageHandler = (e) => {
    const languageValue = e.target.value;
    i18n.changeLanguage(languageValue);
  };

  const scrollC = (Id) => {
    scrollToComponent(sectionData[Id], {
      offset: 0,
      align: "top",
      duration: 800,
    });
  };

  return (
    <div className="Header">
      <div className="rightTop">
        <div className="Language">
          <select className="custom-select" onChange={changeLanguageHandler}>
            <option value="en"> English 🇬🇧 </option>
            <option value="fa">فارسی 🇮🇷 </option>
          </select>
        </div>
        <NavLink className="Logo" to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
        <div className="socialMedia">
          <a href="">
            <img src={Linkedin} alt="Linkedin" />
          </a>
          <a href="">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="">
            <img src={Whatsapp} alt="Whatsapp" />
          </a>
        </div>
      </div>
      <div className="leftTop">
        <div className="lists">
          <NavLink to="/">Home</NavLink>
          <NavLink className="bordShadow" to="/Products">
            Products
          </NavLink>
          <NavLink to="/AboutUs" className="bordShadow">
            About Us
          </NavLink>
          <a href="#Footer" className="bordShadow">
            Contacts
          </a>
        </div>
        <NavLink className="Logo" to="/">
          <img src={Logo} alt="Logo" />
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
