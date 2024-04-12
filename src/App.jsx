// eslint-disable-next-line no-unused-vars
import  React  from 'react'
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
        <Portfolio />
        <Contact />
        <a href="#home" className="top"><i className="fa-solid fa-arrow-up"></i></a>
      </div>
    </>
  )
}

export default App
