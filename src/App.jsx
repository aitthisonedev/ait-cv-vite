import { useState } from 'react'
import './App.css'
import Home from './home';
import About from './about';
import Services from './services';
import Skills from './Skill';
import Portfolio from './Protfolio';
import Contact from './contect';

function App() {
  return (
    <>
      <div className='App'>
        < Home />
        <About />
        <Services />
        <Skills />
        <br></br>
        <br></br>
        <Portfolio />
        <Contact />
        <a href="#home" class="top"><i class="fa-solid fa-arrow-up"></i></a>
      </div>
    </>
  )
}

export default App
