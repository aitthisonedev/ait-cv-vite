// eslint-disable-next-line no-unused-vars
import React, { useRef, useState } from 'react';
import emailjs from 'emailjs-com';
import './contact.css';

const Form = () => {
    const form = useRef();
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        email: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_6ezlfxb', 'template_8wf51ns', form.current, 'YTlTSwK3hcP8Ck6Ca')
          .then((result) => {
            console.log('Email successfully sent!', result.text);
            setFormData({ name: '', phone: '', email: '', subject: '', message: '' }); // Reset form data
          }, (error) => {
            console.error('Failed to send email:', error.text);
          });
    };

    return (
        <div className="contact-form">
            <form ref={form} onSubmit={sendEmail}>
                <input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} required />
                <input type="tel" name="phone" placeholder="Enter your Phone" value={formData.phone} onChange={handleChange} required />
                <input type="email" name="email" placeholder="Enter your Email" value={formData.email} onChange={handleChange} required />
                <input type="text" name="subject" placeholder="Enter your Subject" value={formData.subject} onChange={handleChange} />
                <textarea name="message" cols="40" rows="10" placeholder="Enter your Message" value={formData.message} onChange={handleChange} required></textarea>
                <button type="submit" className="Send">Send</button>
            </form>
        </div>
    );
};

export default Form;
