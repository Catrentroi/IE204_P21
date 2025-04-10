import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Banner Section */}
      <section className="hero-banner">
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">SẢN PHẨM MỚI</div>
            <h1 className="hero-title">KHÁM PHÁ NGAY BỘ SƯU TẬP MỚI</h1>
            <p className="hero-description">
              Đợi chờ gì nữa mà không sắm ngay cho mình một bé Labubu về để decor căn phòng bé xinh của mình nào ❤️
            </p>
            <Link href="/products" className="hero-button">
              mua ngay
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Products Section */}
      <section className="featured-products">
        <div className="container">
          <h2 className="section-title">SẢN PHẨM NỔI BẬT</h2>
          
          <div className="featured-grid">
            <div className="featured-item">
              <div className="featured-image">
                <Image src="https://picsum.photos/400/500" alt="LABUBU Diver Figurine" width={400} height={500} />
              </div>
              <h3 className="featured-title">LABUBU Diver Figurine</h3>
            </div>
            
            <div className="featured-item">
              <div className="featured-image">
                <Image src="https://picsum.photos/400/501" alt="LABUBU × PRONOUNCE" width={400} height={500} />
              </div>
              <h3 className="featured-title">LABUBU × PRONOUNCE - WINGS OF FORTUNE Vinyl Plush Hanging Card</h3>
            </div>
            
            <div className="featured-item">
              <div className="featured-image">
                <Image src="https://picsum.photos/400/502" alt="THE MONSTERS × One Piece Series" width={400} height={500} />
              </div>
              <h3 className="featured-title">THE MONSTERS × One Piece Series Figures</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Products Section */}
      <section className="products-section">
        <div className="container">
          <h2 className="section-title">SẢN PHẨM</h2>
          
          <div className="product-grid">
            {Array(8).fill(0).map((_, index) => (
              <div className="product-card" key={index}>
                <div className="product-image">
                  <Image src={`https://picsum.photos/300/300?random=${index}`} alt={`Product ${index + 1}`} width={300} height={300} />
                  {index % 3 === 0 && <div className="product-badge discount">-30%</div>}
                  {index % 4 === 1 && <div className="product-badge new">New</div>}
                </div>
                
                <div className="product-info">
                  <h3 className="product-title">{['Syltherine', 'Leviosa', 'Lolito', 'Respira', 'Grifo', 'Muggo', 'Pingky', 'Potty'][index % 8]}</h3>
                  <p className="product-description">Stylish decorative figure</p>
                  <div className="product-price">
                    <span className="current-price">Rp {(index + 2) * 500}.000</span>
                    {index % 2 === 0 && <span className="original-price">Rp {(index + 3) * 500}.000</span>}
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="show-more-container">
            <button className="show-more-button">Hiển thị thêm</button>
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="blog-section">
        <div className="container">
          <div className="blog-header">
            <h2 className="section-title">Xem thêm blog về LABUBU</h2>
            <p className="section-subtitle">
              Our designer already made a lot of beautiful prototipe of rooms that inspire you
            </p>
          </div>
          
          <div className="blog-content">
            <div className="blog-image">
              <div className="blog-overlay">
                <div className="blog-counter">01</div>
                <h3 className="blog-title">Labubu là gì?</h3>
              </div>
            </div>
            
            <button className="explore-button">Explore More</button>
          </div>
        </div>
      </section>

      {/* Social Media Section */}
      <section className="social-section">
        <div className="container">
          <div className="social-header">
            <h3 className="social-subtitle">Cùng chia sẻ khoảng khắc với</h3>
            <h2 className="social-title">#LabubUIT</h2>
          </div>
          
          <div className="social-grid">
            {Array(9).fill(0).map((_, index) => (
              <div className="social-image" key={index}>
                <Image src={`https://picsum.photos/200/200?random=${index + 20}`} alt={`Social Image ${index + 1}`} width={200} height={200} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
