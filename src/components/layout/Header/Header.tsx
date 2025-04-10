import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = () => {
  return (
    <header className="site-header">
      <div className="container header-container">
        <div className="logo-container">
          <Link href="/" className="logo">
            <span className="logo-text">LabubUIT</span>
          </Link>
        </div>

        <nav className="main-nav">
          <ul className="nav-links">
            <li><Link href="/" className="active">Trang chủ</Link></li>
            <li><Link href="/products">Sản phẩm</Link></li>
            <li><Link href="/about">Về chúng tôi</Link></li>
            <li><Link href="/contact">Liên hệ</Link></li>
          </ul>
        </nav>

        <div className="header-icons">
          <Link href="/account" className="icon-link">
            <Image src="/user.svg" alt="Account" width={24} height={24} />
          </Link>
          <Link href="/search" className="icon-link">
            <Image src="/search.svg" alt="Search" width={24} height={24} />
          </Link>
          <Link href="/wishlist" className="icon-link">
            <Image src="/heart.svg" alt="Wishlist" width={24} height={24} />
          </Link>
          <Link href="/cart" className="icon-link">
            <Image src="/cart.svg" alt="Cart" width={24} height={24} />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;