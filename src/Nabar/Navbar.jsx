// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Navbar.css"; // Import your custom styles
import { useTranslation } from "react-i18next";
// import { FaGlobe } from "react-icons/fa";
import "../i18n";

const Navbar = () => {
  const { t, i18n } = useTranslation();
  const iconStyles = {
    "--1": 7,
    "--2": 8,
    "--3": 9,
    "--4": 10,
    "--5": 11,
    "--6": 12,
    "--7": 13,
    "--8": 14,
  };

  const [isMenuOpen, setMenuOpen] = useState(false);
  const [isSearchOpen, setSearchOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!isMenuOpen);
    setSearchOpen(false); // Close search when opening menu
  };

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    setDropdownOpen(false);
  };
  const toggleDropdown = () => {
    setDropdownOpen(!dropdownOpen);
  };
 

  return (
    <div className="navbar">
      <nav className={`navbar ${isMenuOpen ? "active" : "container"}`}>
        <div className="container-contral ">
          <div className="logo">
            <a href="/">
              <i className="fa-solid fa-layer-group"></i>Aitthisone DSP
            </a>
          </div>
          
          <div className={`menu ${isMenuOpen ? "open" : ""}`}>
            <ul>
              <a href="/#home" style={{ "--1": iconStyles["--1"] }}>
                {t("navbar.home")}
              </a>
              <a href="/#services" style={{ "--1": iconStyles["--2"] }}>
                {t("navbar.services")}
              </a>
              <a href="/#protfolio" style={{ "--1": iconStyles["--3"] }}>
                {t("navbar.projects")}
              </a>
              <a href="/#about" style={{ "--1": iconStyles["--4"] }}>
                {t("navbar.about")}
              </a>
              <a href="/#experiences" style={{ "--1": iconStyles["--5"] }}>
                {t("navbar.experience")}
              </a>
              <a href="/#skills" style={{ "--1": iconStyles["--6"] }}>
                {t("navbar.skills")}
              </a>
              <a href="/#education" style={{ "--1": iconStyles["--7"] }}>
                {t("navbar.education")}
              </a>
              <a href="/#contact" style={{ "--1": iconStyles["--8"] }}>
                {t("navbar.contact")}
              </a>
            </ul>
          </div>
          <div className="menu-icon" onClick={toggleMenu}>
            <i className={`fas ${isMenuOpen ? "fa-times" : "fa-bars"}`}></i>
          </div>
          <div className="language-selector">
            <button onClick={toggleDropdown} className="icon-fa">
            <i className="fa-solid fa-earth-americas fa-beat-fade" ></i>{t('navbar.language')}
            </button>
            {dropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => changeLanguage("en")}>English</li>
                <li onClick={() => changeLanguage("th")}>ไทย</li>
                <li onClick={() => changeLanguage("la")}>ລາວ</li>
              </ul>
            )}
          </div>
          
          <div
            className={`search-container ${isSearchOpen ? "open active" : ""}`}
          >
            <div className="search">
              <input
                type="search"
                placeholder={t('navbar.search')}
                aria-label="Search"
                onChange={() => {}}
              />
            </div>
            </div>
          </div>
      </nav>
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
