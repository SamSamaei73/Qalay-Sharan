import React from 'react';
import Instagram from '../../img/instaw.png';
import Telegram from '../../img/icons8-telegram-app-48.png';
import Whats from '../../img/icons8-whatsapp-48.png';

const Footer = () => {
  return (
    <div className='Footer' id='Footer'>
        <div className="infoAddress">
            <h1>CONTACT US</h1>
            <h2>Head Office :</h2>
            <a href="">Unit 675-2th floor - Neshtiman Build - Erbil - Iraq</a>
            <h2>Qalay Sharan Bitumen Factory :</h2>
            <a href="">In front of Lanaz , Goyer Ave . Erbil , Iraq</a>
            <a href="tel:+9647503939892">+964 750 393 9892</a>
            <a href="tel:+9647705717755">+964 770 571 7755</a>
            <div className="social">
                <a href='' className="box"><img src={Telegram} alt="Telegram" /></a>
                <a href='' className="box"><img src={Instagram} alt="Instagram" /></a>
                <a href='' className="box"><img src={Whats} alt="Whats" /></a>
            </div>

        </div>
        <div className="Map">

        </div>
    </div>
  )
}

export default Footer