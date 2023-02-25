import React from 'react';
import "../Sass/ProDetails.scss";
import Header from './FirstPage/Header';
import NavDetail from './DetailsProdocts/NavDetail';
import MainDetails from './DetailsProdocts/MainDetails';
import TabDetails from './DetailsProdocts/TabDetails';
import Slider from "./FirstPage/FirstProducts";
import Footer from './FirstPage/Footer';
import Footer2 from './FirstPage/Footer2';

const ProductsPage = () => {
  return (
    <div className='ProductsPage'>
        <Header/>   
        <NavDetail/>   
        <MainDetails/>   
        <TabDetails/>   
        <Slider/>   
        <Footer/>
        <Footer2/>
    </div>
  )
}

export default ProductsPage