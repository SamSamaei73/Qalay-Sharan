import React from 'react';
import { NavLink } from "react-router-dom";


const NavProducts = () => {
  return (
    <div className='NavProducts'>
        <div className="shadow">
        <NavLink  to="/">Home</NavLink><pre>&gt;</pre><NavLink to="/Products">Products</NavLink>
        </div>
    </div>
  )
}

export default NavProducts