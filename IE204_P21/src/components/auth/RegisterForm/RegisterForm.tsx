'use client';

import React, { useState } from 'react';
import './RegisterForm.css';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    confirmPassword: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Kiểm tra mật khẩu và xác nhận mật khẩu
    if (formData.password !== formData.confirmPassword) {
      alert('Mật khẩu và nhập lại mật khẩu không khớp');
      return;
    }
    // Xử lý đăng ký tại đây
    console.log('Form submitted:', formData);
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Đăng ký</h1>
      <div className="register-form-container">
        <div className="register-form-wrapper">
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="username">Tên đăng nhập:</label>
              <input
                type="text"
                id="username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                placeholder="Abc@gmail.com"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="password">Mật khẩu:</label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="123"
                required
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="confirmPassword">Nhập lại mật khẩu:</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder="123123"
                required
              />
            </div>
            
            <button type="submit" className="register-button">
              Đăng ký
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RegisterForm;