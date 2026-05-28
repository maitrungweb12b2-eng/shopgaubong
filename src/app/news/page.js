"use client"; // ← bắt buộc để dùng styled-jsx và client-side hooks
import Link from "next/link";

const news = [
  { 
    id: 1, 
    title: "Cách vệ sinh Gấu Bông khi mới vừa mua về", 
    desc: "Hướng dẫn chi tiết từ cách vệ sinh Gấu Bông đến cách phơi...", 
    date: "20/03/2026",
    image: "https://gaubongonline.com.vn/wp-content/uploads/2025/09/Gau-Bong-Hoa-Qua-Nhiet-Doi-Nhi-2-500x500.jpg"
  },
  { 
    id: 2, 
    title: "Top 3 dòng Gấu Bông đẹp nhất 2026", 
    desc: "Khám phá những dòng Gấu Bông đang làm mưa làm gió trong cộng đồng thủy sinh năm nay với màu sắc vô cùng ấn tượng...", 
    date: "18/03/2026",
    image: "https://gaubongonline.com.vn/wp-content/uploads/2025/07/capybara-the-thao-deo-bong-1-500x500.jpg"
  },
  { 
    id: 3, 
    title: "Hướng dẫn quy trình đổi trả khi sản phẩm bị lỗi", 
    desc: "Gấu Bông khi giao hàng tới tận tay Quý Khách nếu bị lỗi không đúng màu sắc vui lòng Liên Hệ cho Shop ...", 
    date: "15/03/2026",
    image: "https://gaubongonline.vn/wp-content/uploads/2017/08/Asset-2.png"
  },
];

export default function News() {
  return (
    <div className="news-container">
      <h2 className="news-title">Tin Tức Gấu Bông giảm giá</h2>

      <div className="news-grid">
        {news.map((item) => (
          <div key={item.id} className="news-card">
            <div className="news-image">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="news-content">
              <span className="news-date">{item.date}</span>
              <h3>{item.title}</h3>
              <p>{item.desc}</p>
              <Link href={`/news/${item.id}`} className="read-more">
                Xem chi tiết →
              </Link>
            </div>
          </div>
        ))}
      </div>

      <style jsx>{`
        .news-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 50px 20px;
        }

        .news-title {
          text-align: center;
          font-size: 2.2rem;
          color: #FF6FAF;
          margin-bottom: 40px;
          font-weight: 700;
        }

        .news-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 30px;
        }

        .news-card {
          background: #fff;
          border-radius: 15px;
          overflow: hidden;
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          transition: transform 0.3s, box-shadow 0.3s;
          display: flex;
          flex-direction: column;
        }

        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 12px 30px rgba(0,0,0,0.12);
        }

        .news-image img {
          width: 100%;
          height: 200px;
          object-fit: cover;
        }

        .news-content {
          padding: 20px;
          display: flex;
          flex-direction: column;
          flex-grow: 1;
        }

        .news-date {
          font-size: 0.85rem;
          color: #888;
          margin-bottom: 10px;
        }

        .news-content h3 {
          font-size: 1.25rem;
          margin-bottom: 10px;
          color: #333;
        }

        .news-content p {
          flex-grow: 1;
          color: #555;
          font-size: 0.95rem;
          margin-bottom: 15px;
        }

        .read-more {
          color: #FF6FAF;
          font-weight: 600;
          text-decoration: none;
          transition: color 0.3s;
        }

        .read-more:hover {
          color: #FF3380;
        }

        @media (max-width: 768px) {
          .news-title {
            font-size: 1.8rem;
          }

          .news-card {
            flex-direction: column;
          }

          .news-image img {
            height: 180px;
          }
        }
      `}</style>
    </div>
  );
}