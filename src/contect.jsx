import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css';

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_6ezlfxb', 'template_8wf51ns', form.current, 'YTlTSwK3hcP8Ck6Ca')
      .then((result) => {
        console.log(result.text);
      }, (error) => {
        console.log(error.text);
      });
  };

  return (
    <section className="contact" id="contact">
      <div className="contact" id="contact">
        <div className="contact-text">
          <h2>Contact <span>Me</span></h2>
          <h4>Let's work Together</h4>
          <p>
            🎨 Creative Design: I breathe life into designs, ensuring each pixel is in its perfect place. From sleek, modern interfaces to interactive user experiences, your vision is my blueprint.
            <br />
            <br />
            <b>Why Collaborate With Me?</b>
            <br />
            <br />
            ✨ Attention to Detail: It's not just about the big picture; it's the small details that make a difference. I obsess over the details to deliver a polished and refined final product.
          </p>
          <div className="context-list">
            <li><i className="fa-solid fa-paper-plane"></i>&nbsp; Email: itsarkhone@gmail.com</li>
            <li><i className="fa-solid fa-phone"></i>&nbsp; Tel: +856 20 788 666 95</li>
            <li><i class="fa-solid fa-location-dot"></i>&nbsp; Address: Dongkhamxang Village, Hardxayfong District, Vientiane Lao PDR</li>
          </div>
          <div className="contact-icons">
            <a href="#" style={{ '--1': 6 }} className="active"><i className="fa-brands fa-facebook"></i></a>
            <a href="#" style={{ '--1': 7 }} className="active"><i className="fa-brands fa-square-instagram"></i></a>
            <a href="#" style={{ '--1': 8 }} className="active"><i className="fa-brands fa-square-whatsapp"></i></a>
            <a href="#" style={{ '--1': 9 }} className="active"><i className="fa-brands fa-line"></i></a>
          </div>
        </div>
        <div className="contact-form">
          <form action="">
            <input type="name" name='name' placeholder="Enter your name"required />
            <input type="phone"name='phone'placeholder="Enter your Phone"required />
            <input type="email" name='email'placeholder="Enter your Email"required />
            <input type="subject" name='subject'placeholder="Enter your Subject" />
            <textarea type="message"Name='message'cols="40" rows="10"placeholder="Enter your Message"required></textarea>
            <input className="Send" onClick={(e)=>sendEmail(e)} value="Send"  style={{ textAlign: 'center', color: 'aliceblue' }} />
          </form>
        </div>
      </div>
    </section>

  );
};

export default Contact;
