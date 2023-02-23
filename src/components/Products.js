import React from 'react';
import "../Sass/Products.scss";
import Header from '../components/FirstPage/Header';
import NavProducts from './Products/NavProducts';
import ProLists from './Products/ProLists';
import Footer from "./FirstPage/Footer";
import Footer2 from "./FirstPage/Footer2";

const Products = () => {
  return (
    <div className='MainProducts'>
        <Header/>
        <NavProducts/>
        <ProLists/>
        <Footer/>
        <Footer2/>
    </div>
  )
}

export default Products