import React from 'react';
import "../Sass/AboutUs.scss";
import Header from './FirstPage/Header';
import NavAbout from './AboutUs/NavAbout';
import Description from './AboutUs/Description';
import Products from './AboutUs/Products';
import Footer from './FirstPage/Footer';
import Footer2 from './FirstPage/Footer2';
import EveryThing from './FirstPage/EveryThing';


const AboutUs = () => {
  return (
    <div className='AboutUs'>
        <Header/>
        <NavAbout/>
        <Description/>
        <Products/>
        <EveryThing/>
        <Footer/>
        <Footer2/>
    </div>
  )
}

export default AboutUs