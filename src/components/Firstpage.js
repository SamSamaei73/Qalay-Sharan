import React from 'react';
import '../Sass/FirstPage.scss';
import Header from './FirstPage/Header';
import Navbar from './FirstPage/Navbar';
import WeAre from './FirstPage/WeAre';
import EveryThing from './FirstPage/EveryThing';
import FirstProducts from './FirstPage/FirstProducts';
import Footer from './FirstPage/Footer';

const Firstpage = () => {
  return (
    <div className='Firstpage'>
      <Header/>
      <Navbar/>
      <WeAre/>
      <EveryThing/>
      <FirstProducts/>
      <Footer/>
    </div>
  )
}

export default Firstpage