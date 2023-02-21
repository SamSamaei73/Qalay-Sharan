import React from 'react';
import { useTranslation } from 'react-i18next';
import Linkedin from '../../img/icons8-linkedin-circled-50.png';
import Whatsapp from '../../img/icons8-whatsapp-50.png';
import Instagram from '../../img/icons8-instagram-48.png';
import Logo from '../../img/logo-qalay.png';



const Header = () => {

    const { i18n } = useTranslation();
    const changeLanguageHandler = (e) => {
      const languageValue = e.target.value;
      i18n.changeLanguage(languageValue);
    };

    

  return (
    <div className='Header'>
        <div className="rightTop">
             <div className="Language">
                        <select
                    className="custom-select"
                    onChange={changeLanguageHandler}
                >
                    <option value="en"> English 🇬🇧  </option>
                    <option value="fa">فارسی 🇮🇷 </option>
                </select>
              </div>
              <div className="Logo">
                <img src={Logo} alt="Logo"/>
             </div>
            <div className="socialMedia">
                <a href=""><img src={Linkedin} alt="Linkedin" /></a>
                <a href=""><img src={Instagram} alt="Instagram" /></a>
                <a href=""><img src={Whatsapp} alt="Whatsapp" /></a>
            </div>
            
        </div>
        <div className="leftTop">
            <div className="lists">
                <a href="#">Home</a>
                <a href="#" className='bordShadow' >Products</a>
                <a href="#" className='bordShadow'>About Us</a>
                <a href="#" className='bordShadow'>Contacts</a>
            </div>
             <div className="Logo">
                <img src={Logo} alt="Logo"/>
             </div>
        </div>
    </div>
  )
}

export default Header