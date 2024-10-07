import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import './css/contact.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs.send('service_xqqh4b9', 'template_mirgdy8', formData, 'd0U0HAlLlGtiqU2hb')
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        alert('Message sent successfully!');
      }, (error) => {
        console.log('FAILED...', error);
        alert('Failed to send the message.');
      });

    setFormData({ name: '', email: '', phone: '', message: '' });
  };

  return (
    <div className='bg-gradient-to-br from-black from-50% to-white min-h-screen w-full flex justify-center items-center p-6'>
      <div className="contact-container">
        <div className="contact-info">
          <h2>Contact <span>me</span></h2>
          <div className="contact-details">
            <div className="contact-item">
              <p><FontAwesomeIcon icon={faEnvelope} /> boukhadejatas@gmail.com</p>
            </div>
            <div className="contact-item">
              <p><FontAwesomeIcon icon={faPhone} /> +216 28 645 745</p>
            </div>
            <div className="contact-item">
              <p><FontAwesomeIcon icon={faMapMarkerAlt}/> Elgazala, Ariana Governorate, 2083 Ariana, Tunisia</p>
            </div>
          </div>
        </div>
        <div className="contact-form">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Tasnime Boukhaddeja"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="boukhaddejatas@gmail.com"
                value={formData.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">Phone</label>
              <input
                type="text"
                id="phone"
                name="phone"
                placeholder="+216 28 645 745"
                value={formData.phone}
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                placeholder="Please write your message..."
                value={formData.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Send message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;

