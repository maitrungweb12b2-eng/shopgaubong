"use client";

import { useState } from "react";

export default function Header() {
  const [cartCount, setCartCount] = useState(0);

  const handleSearch = () => {
    const keyword = document.getElementById("searchInput").value;
    alert("Tìm: " + keyword);
  };

  return (
    <header className="header">
      <div className="logo">
        <h1> Chun <span>Store 🐻</span></h1>
      </div>

      <div className="header-actions">
        <div className="search-bar">
          <input id="searchInput" placeholder="Tìm kiếm Gấu Bông..." />
          <button onClick={handleSearch}>🔍</button>
        </div>

        <div className="cart-icon">
          🛒 <span className="cart-count">{cartCount}</span>
        </div>

        <div className="user-icon">👤</div>
      </div>
    </header>
  );
}