'use client';
import React, { useState } from 'react';
import './checkout.css';

interface ProductInfo {
  name: string;
  quantity: number;
  price: number;
}

export default function Checkout() {
  const [product] = useState<ProductInfo>({
    name: "Labubu Dwrf Figurine",
    quantity: 1,
    price: 350000
  });

  return (
    <div className="checkout-container">
      <header className="checkout-header">
        <h1>Thanh toán</h1>
        <div className="breadcrumb">
          <span>Trang chủ</span> &gt; <span>Thanh toán</span>
        </div>
      </header>

      <div className="checkout-content">
        <div className="checkout-form">
          <h2>Chi tiết thanh toán</h2>
          
          <div className="form-group">
            <label>Nhập họ và tên</label>
            <input type="text" placeholder="Nhập họ và tên" />
          </div>

          <div className="form-group">
            <label>Điện thoại</label>
            <input type="tel" placeholder="Nhập số điện thoại" />
          </div>

          <div className="form-group">
            <label>Tỉnh/Thành phố</label>
            <select>
              <option value="">Chọn tỉnh/thành phố</option>
            </select>
          </div>

          <div className="form-group">
            <label>Quận/Huyện</label>
            <select>
              <option value="">Chọn quận/huyện</option>
            </select>
          </div>

          <div className="form-group">
            <label>Địa chỉ</label>
            <input type="text" placeholder="Nhập địa chỉ" />
          </div>
        </div>

        <div className="order-summary">
          <div className="product-details">
            <h3>Sản phẩm</h3>
            <div className="product-row">
              <span>{product.name}</span>
              <span>x {product.quantity}</span>
              <span>₫{product.price.toLocaleString()}</span>
            </div>
          </div>

          <div className="total-amount">
            <div className="subtotal">
              <span>Thành tiền</span>
              <span>₫{product.price.toLocaleString()}</span>
            </div>
            <div className="total">
              <span>Tổng cộng</span>
              <span>₫{product.price.toLocaleString()}</span>
            </div>
          </div>

          <div className="payment-methods">
            <h3>Phương thức thanh toán</h3>
            <div className="payment-options">
              <label className="payment-option"> 
                <span>Thanh toán bằng thẻ ngân hàng</span>
                <input type="radio" name="payment" value="card" />
              </label>
              <label className="payment-option">
                <span>Thanh toán khi nhận hàng</span>
                <input type="radio" name="payment" value="cod" />
              </label>
            </div>
          </div>

          <button className="checkout-button">Thanh toán</button>
        </div>
      </div>
    </div>
  );
}