'use client';

import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Xử lý gửi form ở đây, ví dụ gọi API
    console.log('Form submitted:', formData);
    // Reset form sau khi gửi
    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
    alert('Thông tin của bạn đã được gửi thành công!');
  };

  return (
    <div className="contact-form-container">
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Tên của bạn</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Abc"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Abc@def.com"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="subject">Tiêu đề</label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            placeholder="Dòng này là bắt buộc"
            required
          />
        </div>
        
        <div className="form-group">
          <label htmlFor="message">Nội dung</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder="Xin chào! Tôi tên là.."
            rows={5}
            required
          />
        </div>
        
        <button type="submit" className="submit-button">
          Gửi
        </button>
      </form>
    </div>
  );
};

export default ContactForm;