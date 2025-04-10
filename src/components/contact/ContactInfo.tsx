import React from 'react';
import './ContactInfo.css';
import { FaMapMarkerAlt, FaPhone, FaClock } from 'react-icons/fa';

const ContactInfo = () => {
  return (
    <div className="contact-info">
      <div className="info-item">
        <div className="icon-container">
          <FaMapMarkerAlt className="contact-icon" />
        </div>
        <h3>Địa chỉ</h3>
        <p>Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.</p>
      </div>
      
      <div className="info-item">
        <div className="icon-container">
          <FaPhone className="contact-icon" />
        </div>
        <h3>Phone</h3>
        <p>SĐT: 113</p>
      </div>
      
      <div className="info-item">
        <div className="icon-container">
          <FaClock className="contact-icon" />
        </div>
        <h3>Working Time</h3>
        <p>Làm việc 24h/ngày<br />7 ngày/tuần<br />4 tuần/tháng<br />12 tháng/năm</p>
      </div>
    </div>
  );
};

export default ContactInfo;