import React from 'react';
import { NavLink } from "react-router-dom";


const NavAbout = () => {
  return (
    <div className='NavAbout'>
        <div className="shadow">
        <NavLink  to="/">Home</NavLink><pre>&gt;</pre><NavLink to="/About">About Us</NavLink>
        </div>
    </div>
  )
}

export default NavAbout