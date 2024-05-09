// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from "react";
import "./contact.css";
import Form from './ContactForm';
const Contact = () => {
  return (
    <section className="contact" id="contact">
      <div className="contact">
        <div className="contact-text">
          <h2>
            Contact <span>Me</span>
          </h2>
          <h4>Let us work together</h4>
          <p>
            🎨 Creative Design: I breathe life into designs, ensuring each pixel
            is in its perfect place. From sleek, modern interfaces to
            interactive user experiences, your vision is my blueprint.
            <br />
            <br />
            <h4>Why Collaborate With Me?</h4>
            <br />✨ Attention to Detail: It is not just about the big picture;
            it is the small details that make a difference. I obsess over the
            details to deliver a polished and refined final product.
          </p>
          <ul className="context-list">
            <li>
              <i className="fa-solid fa-paper-plane"></i>&nbsp; Email:
              itsarkhone@gmail.com
            </li>
            <li>
              <i className="fa-solid fa-phone"></i>&nbsp; Tel: +856 20 788 666
              95
            </li>
            <li>
              <i className="fa-solid fa-location-dot"></i>&nbsp; Address:
              Dongkhamxang Village, Hardxayfong District, Vientiane Lao PDR
            </li>
          </ul>
          <div className="contact-icons">
            {/* Ensure links are properly labeled for accessibility, '_blank' for opening new tab */}
            <a
              href="https://www.facebook.com/itsarkhone"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-facebook"></i>
            </a>
            <a
              href="https://www.instagram.com/aittisone_dsp/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-instagram"></i>
            </a>
            <a
              href="https://api.whatsapp.com/send?phone=8562078866695"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-square-whatsapp"></i>
            </a>
            <a
              href="https://line.me/ti/p/dVra1dIvXy"
              target="_blank"
              rel="noopener noreferrer"
            >
              <i className="fa-brands fa-line"></i>
            </a>
          </div>
        </div>
        <div className="contact-form">
            <Form/>
        </div>
      </div>
    </section>
  );
};

export default Contact;
