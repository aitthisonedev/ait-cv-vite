// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from 'react';
import emailjs from 'emailjs-com';
// import './contact.css';

export const ContactUs = () => {
  const form = useRef();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    emailjs
      .sendForm('service_n9u6z11', 'template_rfjtgfy', form.current, 'I2Nixa8c87Z3PuQ3j')
      .then(
        (result) => {
          console.log(result.text);
          setFormData({
            name: '',
            email: '',
            phone: '',
            subject: '',
            message: '',
          });
          setError(null);
        },
        (error) => {
          console.log(error.text);
          setError('Failed to send email. Please try again.');
        }
      )
      .finally(() => setLoading(false));
  };

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    sendEmail(e);
    console.log(formData);
  };

  return (
    <form ref={form} onSubmit={handleSubmit}>
      <div className="input-flex">
        <div className="inputBx">
          <input
            type="text"
            name="name"
            id=""
            placeholder="Enter your name..."
            value={formData.name}
            onChange={handleChange}
          />
        </div>

        <div className="inputBx">
          <input
            type="text"
            name="email"
            id=""
            placeholder="Enter your email..."
            value={formData.email}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="input-flex">
        <div className="inputBx">
          <input
            type="text"
            name="phone"
            id=""
            placeholder="Enter your phone..."
            value={formData.phone}
            onChange={handleChange}
          />
        </div>

        <div className="inputBx">
          <input
            type="text"
            name="subject"
            id=""
            placeholder="Enter your Subject..."
            value={formData.subject}
            onChange={handleChange}
          />
        </div>
      </div>
      <div className="inputBx">
      <textarea
        name="message"
        id=""
        cols="30"
        rows="10"
        placeholder="Message..."
        value={formData.message}
        onChange={handleChange}
      ></textarea>
      </div>

      <div className="input-button">
        <input type="submit" value={loading ? 'Sending...' : 'Send'} disabled={loading} />
      </div>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
};
export default ContactUs;