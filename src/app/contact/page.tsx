import React from 'react';
import ContactForm from '../../components/contact/ContactForm';
import ContactInfo from '../../components/contact/ContactInfo';
import './contact.css';

export default function ContactPage() {
  return (
    <div className="contact-page">
      <h1 className="contact-title">Liên hệ với chúng tôi</h1>
      
      <div className="contact-container">
        <ContactInfo />
        <ContactForm />
      </div>
    </div>
  );
}