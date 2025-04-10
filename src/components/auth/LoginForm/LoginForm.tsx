'use client';

import React, { useState } from 'react';
import './LoginForm.css';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
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
    // Xử lý đăng nhập tại đây
    console.log('Form submitted:', formData);
  };

  return (
    <div className="login-container">
      <h1 className="login-title">Đăng nhập</h1>
      <div className="login-form-container">
        <div className="login-form-wrapper">
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
          
          <button type="submit" className="login-button" onClick={(e) => handleSubmit(e as any)}>
            Đăng nhập
          </button>
        </div>
      </div>
    </div>
  );
};

export default LoginForm;