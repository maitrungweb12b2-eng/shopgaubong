"use client";
import { useState, useEffect } from "react";
import "./banner.css"; // CSS riêng cho banner

const images = [
  "https://gaubongonline.com.vn/wp-content/uploads/2026/03/8.3_Banner-.webp",
  "https://gomi.vn/uploads/images/banners/Web%201.jpg",
  "https://gomi.vn/uploads/images/banners/Thumnail%20b%C3%A0i%20vi%E1%BA%BFt/Website.png",
];

export default function Banner() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner-wrapper">
      {images.map((src, index) => (
        <div
          key={index}
          className={`banner-item ${index === current ? "active" : ""}`}
        >
          <img src={src} alt={`Banner ${index}`} />
          <div className="banner-overlay">
            <h2>Thế Giới Gấu Bông</h2>
            <p>Cửa hàng gấu bông chất lượng</p>
          </div>
        </div>
      ))}
    </div>
  );
}