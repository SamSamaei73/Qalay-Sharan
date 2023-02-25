import React from 'react';
import ProPhoto from '../../img/Frame39210.jpg';

const MainDetails = () => {
  return (
    <div className='MainDetails'>
        <div className="InfoDetails">
            <h1 className='name'>BITUMEN 80/100</h1>
            <div className="Price">
            <h1 className='PriceNum'>$11.90</h1>
            </div>
        </div>
        <div className="Imgpro">
            <img src={ProPhoto} alt="ProPhoto" />
        </div>
    </div>
  )
}

export default MainDetails