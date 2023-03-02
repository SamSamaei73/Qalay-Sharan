import React from 'react';
import Logo from '../../img/logo-qalay.png';
import "../../Sass/Cpanel.scss";
import { NavLink } from "react-router-dom";




const  Cpanel = () => {
  return (
    <div className='Cpanel'>
        <div className="header">
        <img src={Logo} alt="Logo" />
        <div className="listPage">
        <NavLink to="/TableProduct">Products</NavLink>
        <NavLink to="/Cpanel" className='active'>Add Products</NavLink>
        </div>

        </div>
        <div className="mainPlace">
            <h1>Products</h1>
            <div className="box">
                <h3>Pruduct Name :</h3>
                <input type="text" />
            </div>
            <div className="box">
                <h3>Pruduct Price :</h3>
                <input type="text" />
            </div>
            <div className="boxText">
                <h3>Pruduct Description :</h3>
                <textarea name="" id="" cols="30" rows="10"></textarea>
            </div>
            <div className="box">
                <h3>Pruduct Image :</h3>
                <input type="file" />
            </div>
            <div className="btn">
                <button>Add</button>
            </div>
        </div>
    </div>
  )
}

export default  Cpanel