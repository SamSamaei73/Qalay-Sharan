import React from 'react';
import '../Sass/FirstPage.scss';
import Header from './FirstPage/Header';
import Navbar from './FirstPage/Navbar';
import WeAre from './FirstPage/WeAre';
import FirstProducts from './FirstPage/FirstProducts';
import Footer from './FirstPage/Footer';
import Footer2 from './FirstPage/Footer2';
import ScrollToTop from "react-scroll-up";

const Firstpage = () => {
  return (
    <div className='Firstpage'>
      <Header/>
      <Navbar/>
      <WeAre/>
      {/* <EveryThing/> */}
      <FirstProducts/>
      <Footer/>
      <Footer2/>
      <ScrollToTop showUnder={120} style={{ marginBottom: "3rem" }}>
            <span className="scrollUp">▲</span>
       </ScrollToTop>
    </div>
  )
}

export default Firstpage