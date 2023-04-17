import React from "react";
import Logo1 from "../../img/1.png";
import Logo2 from "../../img/2.png";
import Logo3 from "../../img/3.png";
import Logo4 from "../../img/4.png";
import Points from "../../img/image624.png";
import { NavLink } from "react-router-dom";

const WeAre = () => {
  return (
    <div className="WeAre">
      <h1>WHO WE ARE AND WHAT WE DO ?</h1>
      <div className="Info">
        <div className="Description">
          <h3>
            Qalay Sharan bitumen and barrel manufacturing plant is situated in
            Erbil/ Kurdistan Region/ Iraq.With growing global economy,
            infrastructure building has become a top strategic priority for many
            administrations including in emerging economies. This has led to a
            surge in demand for high quality bitumen in many markets, primarily
            to use for building new roads. With plenty available resources, on.
          </h3>
          <NavLink to="/AboutUs" className="btnPlace">
            <button>Read more</button>
          </NavLink>
        </div>
        <div className="Icons">
          <div className="item">
            <img src={Logo1} alt="Logo1" />
            <h3>produces 500 metric tons of bitumen per day</h3>
          </div>
          <div className="item">
            <img src={Logo2} alt="Logo1" />
            <h3>guarantee excellent quality</h3>
          </div>
          <div className="item">
            <img src={Logo3} alt="Logo1" />
            <h3>our supplies to buyers come in bulk</h3>
          </div>
          <div className="item">
            <img src={Logo4} alt="Logo1" />
            <h3>production capacity is 15,000 units per month</h3>
          </div>
        </div>
      </div>
      <img className="Points" src={Points} alt="Points" />
    </div>
  );
};

export default WeAre;
