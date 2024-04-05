import React, { useState, useEffect } from 'react';
// import Typed from 'react-typed';
import './home.css';

// const TypingAnimation = () => {
//   return (
//     <Typed
//       strings={['Freelancer', 'Web Developer', 'Frontend Developer']}
//       typeSpeed={50}
//       backSpeed={30}
//       backDelay={1000}
//       loop
//     />
//   );
// };

const TypingAnimation = () => {
  const phrases = ['Freelancer', 'Web Developer', 'Frontend Developer'];
  const [currentPhrase, setCurrentPhrase] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentPhrase((prevPhrase) => (prevPhrase + 1) % phrases.length);
    }, 1500); // Adjust the interval time as needed

    return () => clearInterval(interval);
  }, []);

  return <span>{phrases[currentPhrase]}</span>;
};

const Home = () => {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <div className="me-img">
          <img src="/image/Aittisonepng.png" alt="Aittisone Duangsompheang" />
        </div>
        <h3>Hello, I am M</h3>
        <h1>Aittisone Duangsompheang</h1>
        <h3>And I'm a <span className="text">< TypingAnimation/></span> </h3>
        <p>
          I'm a web Designer with extensive experience for over 5 years. My expertise is in creating website designs and Frontend Design.
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
