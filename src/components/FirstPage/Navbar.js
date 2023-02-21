import React from 'react';
import SharnV from '../../img/Sharan.mp4'

const Navbar = () => {
  return (
    <div className='Navbar'>
         <video src={SharnV} muted loop autoPlay />
         <div className="shadowNav">
             <h3>Welcome to</h3>
             <h1>Qalay Sharan</h1>
             <h2>Supply of high-quality bitumen products to the Global Market</h2>
         </div>
    </div>
  )
}

export default Navbar