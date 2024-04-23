// App.js
// eslint-disable-next-line no-unused-vars
import React from 'react';
import './Slider.css';
import LogoSlider from './LogoSlider';
const Slider = () => {
  const logos = [
    "https://marketplace.canva.com/EAFlVDzb7sA/1/0/1600w/canva-white-gold-elegant-modern-certificate-of-participation-bK_WEelNCjo.jpg", // Replace with actual URLs of your certificates
    "https://images.template.net/297220/Certificate-Design-Template-edit-online-2.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
    "https://piktochart.com/wp-content/uploads/2023/05/large-271-600x424.jpg",
];

  return (
    <div className="Slider" >
      <h1>Certificate</h1>
      <LogoSlider logos={logos} />
    </div>
    
  );
};

export default Slider;
