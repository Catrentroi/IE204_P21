import Image from 'next/image';
import { Mail, Phone, MapPin } from 'lucide-react';
import React from 'react';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-800">
       {/* Banner */}
       <div className="banner">
        <div className="banner-overlay">
          <div className="banner-text">
            <h1>Về chúng tôi</h1>
            <p>Trang chủ {'>'} Về chúng tôi</p>
          </div>
        </div>
      </div>
      {/* Content */}
      <div className="about-content">
        <h2>Về LabubuUIT</h2>

        <div className="content-inner">
          <Image
            src="https://s3-alpha-sig.figma.com/img/494f/07c4/8a61c7ba82bdc8ba0ff02337fb34ad25?Expires=1745193600&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=A8Oxbn3Vk4B-hwCl64JoeFcJaLpJzOA4LlRxmdwjJfAgytQGZZgPQ~1eP6NyuBlKoMpW44s8~qqd4fTvwE0i-GuJe~eZg9AbtzpJn6AE0M5evddop99fxtRvnhs5X03VE3VhKmjR3nN9SIo7dRDwT8uDAHSzOOEDgJUMbbMUm3~cLLCYYTGXQGcreYXHAWyvwiWoVQnDAn1QrqAZPMZ-KvBLr5ql8a6rZkDDNCuomeg-GdbT0LeIal~pQHEzlT5S5A4zTgR0irJ4goPBfYqBvBkIzbv9zNdiLH2njaRo~u7vIQuXf-4b7P5q2ngoRwU8fO87EpR2nmb8N7C0ex2zeA__"
            alt="Labubu Image"
            width={300}
            height={300}
            className="rounded-img"
          />

          <div className="text-content">
            <p>
              Từ hai bàn tay trắng đi lên, chúng tôi - 5 cậu sinh viên, đã cùng nhau góp vốn để mở LabubuUIT với mong muốn mang đến những mô hình chính hãng, chất lượng, những chú lính chì mặt cười háo hức - mà còn là một cộng đồng dành cho những ai yêu thích sưu tầm.
            </p>
            <p>
              Bạn đã sẵn sàng khám phá thế giới Labubu chưa? Kết nối với chúng tôi ngay hôm nay!
            </p>
            <ul>
              <li><Mail className="icon" /> labubuuit@gmail.com</li>
              <li><Phone className="icon" /> 113</li>
              <li><MapPin className="icon" /> Khu phố 6, P.Linh Trung, Tp.Thủ Đức, Tp.Hồ Chí Minh.</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Features */}
      <div className="features">
        <div className="features-grid">
          {[
            {
              title: 'Chất lượng cao',
              description: 'Được sản xuất an toàn',
            },
            {
              title: 'Chính sách bảo hành',
              description: '2 năm bảo hành',
            },
            {
              title: 'Free Shipping',
              description: 'Với hóa đơn trên 200.000',
            },
            {
              title: 'Hỗ trợ 24/7',
              description: 'Tư vấn nhiệt tình',
            },
          ].map((item, index) => (
            <div key={index} className="feature-card">
              <p className="font-semibold">{item.title}</p>
              <p className="desc">{item.description}</p>
            </div>
          ))}
        </div>
      </div>

  
    </div>
  );
}