import React from 'react';
import { NavLink } from "react-router-dom";


const NavDetail = () => {
  return (
    <div className='NavDetail'>
        <div className="shadow">
        <NavLink  to="/">Home</NavLink><pre>&gt;</pre><NavLink to="/Products">Products</NavLink><pre>&gt;</pre><NavLink >BITUMEN</NavLink>
        </div>
    </div>
  )
}

export default NavDetail