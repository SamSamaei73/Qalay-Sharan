import React from "react";
import Instagram from "../../img/instaw.png";
import Telegram from "../../img/icons8-telegram-app-48.png";
import Whats from "../../img/icons8-whatsapp-48.png";
import Map from '../../img/map.png';

const Footer = () => {
  return (
    <div className="Footer" id="Footer">
      <div className="infoAddress">
        <h1>CONTACT US</h1>
        <h2>Head Office :</h2>
        <a href="">Unit 675-2th floor - Neshtiman Build - Erbil - Iraq</a>
        <h2>Qalay Sharan Bitumen Factory :</h2>
        <a href="">In front of Lanaz , Goyer Ave . Erbil , Iraq</a>
        <a href="tel:+9647503939892">+964 750 393 9892</a>
        <a href="tel:+9647506353200">+964 750 635 3200</a>
        <a href="tel:+989120884939">+98 912 088 4939</a>
        <div className="social">
          <a href="https://telegram.me/isaelmjou" className="box">
            <img src={Telegram} alt="Telegram" />
          </a>
          <a href="https://www.instagram.com/qalaysharan.co/" className="box">
            <img src={Instagram} alt="Instagram" />
          </a>
          <a href="whatsapp://send?text=Hello Qalay!&phone=+989120884939" className="box">
            <img src={Whats} alt="Whats" />
          </a>
        </div>
      </div>
      <a className="Map" href="http://maps.google.com/?q=<36.150249>,<43.763853>" >
          <img src={Map} alt="Map" />
      </a>
    </div>
  );
};

export default Footer;
