import React from 'react';

const Footer = () => {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <div className="footer-section">
          <h1>LabubUIT</h1>
          <h4 className = "text-gray-400">Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.</h4>
        </div>
        <div className="footer-section">
          <h3>Đường dẫn</h3>
          <ul>
            <li><a href="/about">Trang chủ</a></li>
            <li><a href="/products">Sản phẩm</a></li>
            <li><a href="/blog">Về chúng tôi</a></li>
            <li><a href="/contact">Liên hệ</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h3>Hỗ trợ</h3>
          <p>Phương thức thanh toán</p>
          <p>Hoàn trả</p>
          <p>Chính sách bảo mật</p>
        </div>
        <div className="footer-section">
          <h3>Liên hệ</h3>
          <div className="footer-contact">
            <input type="text" placeholder="Nhập email của bạn" className="email-input border-0"/>
            <button className="btn btn-primary">Gửi</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>2025 LabubUIT. All rights reverved.</p>
      </div>
    </footer>
  );
};

export default Footer; 