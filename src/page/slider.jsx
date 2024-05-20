// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import { useTranslation } from 'react-i18next';
import './Slider.css';
import LogoSlider from './LogoSlider';
const Slider = () => {
  const {t}= useTranslation();
  const logos = [
    "/image/certificate01.jpg",
    "/image/certificate08.jpg",
    "/image/certificate02.jpg",
    "/image/certificate09.jpg",
    "/image/certificate03.jpg",
    "/image/certificate10.jpg",
    "/image/certificate04.jpg",
    "/image/certificate05.jpg",
    "/image/certificate06.jpg",
    "/image/certificate07.jpg",
];

  return (
    <div className="Slider" >
      <h1>{t("home.Certificate")}</h1>
      <LogoSlider logos={logos} />
    </div>
    
  );
};

export default Slider;
