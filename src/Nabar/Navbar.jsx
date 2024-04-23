// eslint-disable-next-line no-unused-vars
import React, { useState } from 'react';
import './Navbar.css'; // Import your custom styles

const Navbar = () => {
  const iconStyles = {
    '--1': 7,
    '--2': 8,
    '--3': 9,
    '--4': 10,
    '--5': 11,
    '--6': 12,
    '--7': 13,
    '--8': 14,
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setSearchOpen(false); // Close search when opening menu
  };

  // const toggleSearch = () => {
  //   setSearchOpen(!isSearchOpen);
  //   setMenuOpen(false); // Close menu when opening search
  // };

  return (
    <div className='navbar'>
      <nav className={`navbar ${isMenuOpen ? 'active' : 'container'}`}>
        <div className="container-contral ">
          <div className="logo">
            <a href="/"><i className="fa-solid fa-layer-group"></i>Aittisone DSP</a>
          </div>

          <div className={`menu ${isMenuOpen ? 'open' : ''}`}>
            <ul>
              <a href="/#home" style={{ '--1': iconStyles['--1'] }}>
                Home
              </a>
              <a href="/#about" style={{ '--1': iconStyles['--2'] }}>
              About
              </a>
              <a href="/#services" style={{ '--1': iconStyles['--3'] }} >
              Services
              </a>
              <a href="/#skills" style={{ '--1': iconStyles['--4'] }}>
              Skills
              </a>
              <a href="/#protfolio" style={{ '--1': iconStyles['--5'] }}>
              Projects
              </a>
              <a href="/#education" style={{ '--1': iconStyles['--6'] }}>
              Educations
              </a>
              <a href="/#experiences" style={{ '--1': iconStyles['--7'] }}>
              Experience
              </a>
              <a href="/#contact" style={{ '--1': iconStyles['--8'] }}>
                Contact
              </a>
            </ul>
          </div>
          <div className={`search-container ${isSearchOpen ? 'open active' : ''}`}>
            <div className="search">
              <input
                type="search"
                placeholder="Search Your Design"
                aria-label="Search"
                onChange={() => { }}
              />
            </div>
            <div className="search-success">
              <input
              
                type="search"
                placeholder="Search"
                aria-label="Search Success"
                onChange={() => { }}
              />
            </div>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? 'fa-times' : 'fa-bars'}`}></i>
          </div>
        </div>
      </nav >
    </div>
  );
};

export default Navbar;







// import React from 'react';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import 'bootstrap/dist/js/bootstrap.bundle.min';
// import './Navbar.css';
// const Navbar = () => {
//     return (
//         <nav className="navbar navbar-expand-lg navbar-light ">
//             <div className="container-fluid">
//                 <a className="navbar-brand" href="/"> 
//                 <i className="fa-solid fa-layer-group"></i> Aittisone</a>
//                 <button
//                     className="navbar-toggler"
//                     type="button"
//                     data-bs-toggle="collapse"
//                     data-bs-target="#navbarSupportedContent"
//                     aria-controls="navbarSupportedContent"
//                     aria-expanded="false"
//                     aria-label="Toggle navigation"
//                 >
//                     <i className="fa-solid fa-bars"></i>
//                 </button>
//                 <div className="collapse navbar-collapse" id="navbarSupportedContent">
//                     <ul className="navbar-nav me-auto mb-2 mb-lg-0">
//                         <li className="nav-item">
//                             <a className="nav-link active " aria-current="page" href="/">
//                                 Home
//                             </a>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a
//                                 className="nav-link dropdown-toggle"
//                                 href="/"
//                                 id="navbarDropdown"
//                                 role="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                             >
//                                 Solution
//                             </a>
//                             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <li>
//                                     <a className="dropdown-item" href="/contac">
//                                         SAP Business One
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/contac">
//                                         Oracle Netsuite
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/contac">
//                                         Web site Designer
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/contac">
//                                         Customise product
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <hr className="dropdown-divider" />
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         Click Hear Help
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a
//                                 className="nav-link dropdown-toggle"
//                                 href="/"
//                                 id="navbarDropdown"
//                                 role="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                             >
//                                 Product
//                             </a>
//                             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         SAP Business One
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         Oracle Netsuite
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         Web site Designer
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         Customise product
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <hr className="dropdown-divider" />
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         Click Hear Help
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                         <li className="nav-item dropdown">
//                             <a
//                                 className="nav-link dropdown-toggle"
//                                 href="/"
//                                 id="navbarDropdown"
//                                 role="button"
//                                 data-bs-toggle="dropdown"
//                                 aria-expanded="false"
//                             >
//                                 Product
//                             </a>
//                             <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         SAP Business One
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         Oracle Netsuite
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         Web site Designer
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         Customise product
//                                     </a>
//                                 </li>
//                                 <li>
//                                     <hr className="dropdown-divider" />
//                                 </li>
//                                 <li>
//                                     <a className="dropdown-item" href="/">
//                                         Click Hear Help
//                                     </a>
//                                 </li>
//                             </ul>
//                         </li>
//                     </ul>
//                     <form className="d-flex">
//                         <input
//                             className="form-control me-2"
//                             type="search"
//                             placeholder="Search......"
//                             aria-label="Search"
//                         />
//                         <button className="btn btn-outline-success" type="submit">
//                             Search
//                         </button>
//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// };

// export default Navbar;
