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
    <Footer/>
  </Router>
  </React.StrictMode>,
)
