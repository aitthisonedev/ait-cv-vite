// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import "./home.css";
import TypedComponent from "./TypedComponent";
import { useTranslation } from 'react-i18next';

const Home = () => {
  
  const { t } = useTranslation();

  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="me-img">
        <img src="image/aittisonepng.png" alt="Aittisone" />
        </div>
        <h1>{t('home.Name')} {t('home.LateName')}</h1>
        <h3><span ><TypedComponent /></span>
        </h3>
        <br />
        <p>
         {t('home.Description')}
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
          {t('home.More')}
        </a>
      </div>
      <span className="home-imagHover"></span>
    </section>
  );
};

export default Home;
