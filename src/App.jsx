// eslint-disable-next-line no-unused-vars
import React, { useEffect } from 'react';
import './App.css'
import Home from './page/home';
import About from './page/about';
import Services from './page/services';
import Skills from './page/Skill';
import Project from './page/Project';
import Contact from './page/contect';
import WorkExperience from './page/experiences';
import Slideshow from './page/slider';
import Education from './page/Education';
import MapEmbed from './page/MapEmbed'
import { useTranslation } from 'react-i18next';
function App() {
  const { i18n } = useTranslation();
  useEffect(() => {
    const langClass = `lang-${i18n.language}`;
    document.body.classList.remove('lang-en', 'lang-th', 'lang-la');
    document.body.classList.add(langClass);
  }, [i18n.language]);

  return (
    <>
      <div className='App'>
        < Home />
        <Slideshow/>
        <Services />
        <Project />
        <About />
        <WorkExperience />
        <Skills />
        <Education/>
        <MapEmbed />
        <Contact />
        <br />
        <a href="#home" className="top"><i className="fa-solid fa-arrow-up"></i></a>
      </div>
    </>
  )
}

export default App
