// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./home.css";
// import TypingEffect from './TypingEffect';
import TypedComponent from "./TypedComponent";

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="me-img">
        <img src="image/aittisonepng.png" alt="Aittisone" />
        </div>
        {/* <h3>Hello, I am Mr.</h3> */}
        <h1>Aitthisone <br />Duangsompheang</h1>
        <h3><span ><TypedComponent /></span>
        </h3>
        <br />
        <p>
          I m a web Designer with extensive experience for over 5 years. My
          expertise is in creating website designs and Frontend Design.
        </p>
        <div className="home-sci">
          <a
            href="https://www.facebook.com/itsarkhone"
            target="_Bank"
            style={{ "--1": 6 }}
            className="active"
          >
            <i className="fa-brands fa-facebook"></i>
          </a>
          <a href="https://www.instagram.com/aittisone_dsp/" target="_Bank" style={{ "--1": 7 }} className="active">
            <i className="fa-brands fa-square-instagram"></i>
          </a>
          <a href="https://api.whatsapp.com/send?phone=8562078866695" target="_Bank" style={{ "--1": 9 }} className="active">
            <i className="fa-brands fa-square-whatsapp"></i>
          </a>
          <a href="https://line.me/ti/p/dVra1dIvXy" target="_Bank" style={{ "--1": 10 }} className="active">
            <i className="fa-brands fa-line"></i>
          </a>
        </div>
        <a href="#about" className="btn-box">
          Lead More
        </a>
      </div>
      <span className="home-imagHover"></span>
    </section>
  );
};

export default Home;
