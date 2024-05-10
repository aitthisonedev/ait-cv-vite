// eslint-disable-next-line no-unused-vars
import  React  from 'react'
import './App.css'
import Home from './home';
import About from './about';
import Services from './services';
import Skills from './Skill';
import Project from './Protfolio';
import Contact from './contect';
import WorkExperience from './experiences';
import Slideshow from './slider';
import Education from './Education';
import MapEmbed from './MapEmbed'
function App() {
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

        <a href="#home" className="top"><i className="fa-solid fa-arrow-up"></i></a>
      </div>
    </>
  )
}

export default App
