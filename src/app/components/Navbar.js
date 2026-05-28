"use client";

import Link from "next/link";
import { useState } from "react";

const productCategories = [
  { name: "Gấu Bông", slug: "gau-bong" },
  { name: "Mèo Bông Amuse", slug: "meo-bong" },
  { name: "Chó Bông Shiba", slug: "cho-bong" },
  { name: "Mèo Dinga", slug: "meo-dinga" },
];

export default function Navbar() {
  const [showProducts, setShowProducts] = useState(false);

  return (
    <nav className="main-nav">
      <ul className="menu">
        <li>
          <Link href="/">Trang Chủ</Link>
        </li>

        <li
          className="dropdown"
          onMouseEnter={() => setShowProducts(true)}
          onMouseLeave={() => setShowProducts(false)}
        >
          <span className="dropdown-label">Sản Phẩm ▼</span>

          {showProducts && (
            <ul className="sub-menu">
              {productCategories.map((cat) => (
                <li key={cat.slug}>
                  <Link
                    href={`/products?category=${cat.slug}`}
                    prefetch={false}
                  >
                    {cat.name}
                  </Link>
                </li>
              ))}
            </ul>
          )}
        </li>

        <li>
          <Link href="/promotions">Khuyến Mãi</Link>
        </li>

        <li>
          <Link href="/news">Tin Tức</Link>
        </li>

        <li>
          <Link href="/contact">Liên Hệ</Link>
        </li>
      </ul>

      <style jsx>{`
        .main-nav {
          background: #111827;
          padding: 12px 0;
        }

        .menu {
          list-style: none;
          display: flex;
          justify-content: center;
          gap: 30px;
          margin: 0;
          padding: 0;
          font-family: sans-serif;
        }

        .menu li {
          position: relative;
        }

        .menu li a,
        .dropdown-label {
          text-decoration: none;
          color: #fff;
          font-weight: 500;
          cursor: pointer;
          padding: 6px 8px;
          display: inline-block;
        }

        .menu li a:hover,
        .dropdown-label:hover {
          color: #38bdf8;
        }

        .dropdown {
          position: relative;
        }

        .sub-menu {
          position: absolute;
          top: 100%;
          left: 0;
          min-width: 180px;
          background: #1f2937;
          list-style: none;
          padding: 10px 15px;
          margin: 0;
          border-radius: 10px;
          border: 1px solid #ddd;
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
          z-index: 999;
        }

        .sub-menu li {
          margin: 6px 0;
        }

        .sub-menu li a {
          color: #fff;
          text-decoration: none;
          font-weight: 400;
        }

        .sub-menu li a:hover {
          color: #38bdf8;
        }
      `}</style>
    </nav>
  );
}