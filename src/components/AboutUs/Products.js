import React from 'react';
import Photo1 from "../../img/1.png";
import Photo2 from "../../img/2.png";
import Photo3 from "../../img/3.png";
import Photo4 from "../../img/4.png";
import MainPhoto from "../../img/IMG_7648.png";
import Point from "../../img/image624.png";


const Products = () => {
  return (
    <div className='Products'>
        <div className="PhotoPlace">
              <div className="mainBox">
                  <div className="ColorBox"><img src={MainPhoto} alt="MainPhoto" /></div>
              </div>
                <img src={Point} alt="Point" />
                <img src={Point} alt="Point" />
                <img src={Point} alt="Point" />
            </div>
         <div className="Icons">
              <div className="items">
                 <img src={Photo1} alt="Photo1" />
                 <h2>produces 500 metric tons of bitumen per day</h2>
              </div>
              <div className="items">
                 <img src={Photo2} alt="Photo2" />
                 <h2>guarantee excellent quality</h2>
              </div>
              <div className="items">
                 <img src={Photo3} alt="Photo3" />
                 <h2>our supplies to buyers come in bulk</h2>
              </div>
              <div className="items">
                 <img src={Photo4} alt="Photo4" />
                 <h2>production capacity is 15,000 units per month</h2>
              </div>
         </div>
    </div>
  )
}

export default Products