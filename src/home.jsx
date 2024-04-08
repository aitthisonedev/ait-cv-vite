// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from 'react';
import './home.css';
// import TypingEffect from './TypingEffect';
import TypedComponent from './TypedComponent';


const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="me-img">
          <img src="/image/Aittisonepng.png" alt="Aittisone Duangsompheang" />
        </div>
        <h3>Hello, I am Mr.</h3>
        <h1>Aittisone Duangsompheang</h1>
        <h3>And I m a<span className="text"><TypedComponent/></span></h3>
        <p>
          I m a web Designer with extensive experience for over 5 years. My expertise is in creating website designs and Frontend Design.
        </p>
        <div className="home-sci">
          <a href="#" style={{ '--1': 6 }} className="active"><i className="fa-brands fa-facebook"></i></a>
          <a href="#" style={{ '--1': 7 }} className="active"><i className="fa-brands fa-square-instagram"></i></a>
          <a href="#" style={{ '--1': 8 }} className="active"><i className="fa-brands fa-square-whatsapp"></i></a>
          <a href="#" style={{ '--1': 9 }} className="active"><i className="fa-brands fa-line"></i></a>
        </div>
        <a href="#" className="btn-box">More about Me</a>
      </div>
      <span className="home-imagHover"></span>
    </section>
  );
};

export default Home;
