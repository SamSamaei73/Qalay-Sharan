import React from 'react';
import Img1 from '../../img/IMG_20230206_143548.png';
import Img2 from '../../img/IMG_20230206_143551.png';
import Img3 from '../../img/IMG_20230206_143545.png';

const EveryThing = () => {
  return (
    <div className='EveryThing'>
        <h1>EVERYTHING YOU WANT</h1>
        <h2>What We Supply</h2>
        <div className="section">
            <img src={Img1} alt="" />
            <div className="info">
                <h1>Jumbo Bags</h1>
                <h3>Jumbo Bags can be a cost-efficient solution to alternate for Bitumen drums. Some countries do not allow the import/ export of Bitumen in drums. For both above reasons we are also offering our Bitumen products in 1MT Jumbo Bags in metal cages.</h3>
            </div>
        </div>
        <div className="section">
            <img src={Img2} alt="Img2" />
            <div className="info">
                <h1>BITUMEN DRUM</h1>
                <h3>We supply our clients with the best Iraqi Quality-Bitumen in new steel drums . With an impressive track record, our products comply with all environmental and safety regulations. Make sure you get the best supplies for your business. Contact us for more information about this and other products available at Qalay Sharan.</h3>
            </div>
        </div>
        <div className="section">
            <img src={Img3} alt="Img3" />
            <div className="info">
                <h1>STORAGE FUEL TANKS</h1>
                <h3>Qalay Sharan has**** 4**** storage tanks that can be used to store petroleum products for its own use and to rent out.</h3>
            </div>
        </div>
    </div>
  )
}

export default EveryThing