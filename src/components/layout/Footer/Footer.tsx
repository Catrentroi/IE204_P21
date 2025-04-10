import React from 'react';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="container footer-content">
        <div className="footer-company">
          <h3 className="footer-logo">LabubUIT</h3>
          <p className="footer-address">
            Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.
          </p>
        </div>
        
        <div className="footer-links">
          <div className="footer-section">
            <h4 className="footer-heading">Đường dẫn</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/products">Shop</Link></li>
              <li><Link href="/about">About</Link></li>
              <li><Link href="/contact">Contact</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Hỗ trợ</h4>
            <ul>
              <li><Link href="/payment">Phương thức thanh toán</Link></li>
              <li><Link href="/returns">Hoàn trả</Link></li>
              <li><Link href="/policies">Chính sách bảo mật</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Liên hệ</h4>
            <div className="footer-newsletter">
              <input type="email" placeholder="Nhập email tại đây" />
              <button className="newsletter-button">Gửi</button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>2025 labubuit. All rights reverved</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;