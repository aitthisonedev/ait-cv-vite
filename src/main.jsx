import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import App from './App.jsx'
import Navbar from './Nabar/Navbar.jsx';
import Footer from './Footer/Footer.jsx';
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Router >
    <Navbar />
    <Routes>
    <Route path='/' element={<App/>} />
    </Routes>
    <div className="Last-text">
<Footer/>
        <p>Developed with love by Aittisone Duangsompheang <i className="fa-solid fa-laptop-code"style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }} ></i> @ 2024</p>
    </div>
  </Router>
  </React.StrictMode>,
)
