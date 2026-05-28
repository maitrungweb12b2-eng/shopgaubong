"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import { products } from "../data/products";
import styles from "../page.module.css";

/* Component CON dùng useSearchParams */
function ProductsContent() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 4;

  const titleMap = {
    "gau-bong": "Gấu Bông Teddy",
    "meo-bong": "Mèo Bông Amuse",
    "cho-bong": "Chó Bông Shiba",
    "meo-dinga": "Mèo Dinga",
  };

  // Reset page khi đổi category
  useEffect(() => {
    setCurrentPage(1);
  }, [category]);

  const filteredProducts = category
    ? products.filter(
        (p) =>
          (p.category || "").toLowerCase() ===
          (category || "").toLowerCase()
      )
    : products;

  const totalPages = Math.ceil(
    filteredProducts.length / productsPerPage
  );

  const safePage = Math.min(
    Math.max(currentPage, 1),
    totalPages || 1
  );

  const startIndex = (safePage - 1) * productsPerPage;
  const currentProducts = filteredProducts.slice(
    startIndex,
    startIndex + productsPerPage
  );

  const pageTitle = category
    ? titleMap[category] || "Sản Phẩm"
    : "Tất Cả Sản Phẩm";

  return (
    <section
      className={styles.content}
      style={{
        background: "#111827",
        minHeight: "100vh",
        color: "#fff",
        padding: "40px 20px",
      }}
    >
      <h1
        style={{
          marginBottom: "30px",
          color: "#38bdf8",
          textAlign: "center",
        }}
      >
        {pageTitle}
      </h1>

      <div className={styles.grid}>
        {currentProducts.map((product) => (
          <Link
            key={product.id}
            href={`/products/${product.id}`}
            style={{ textDecoration: "none", color: "#fff" }}
          >
            <div
              className={styles.card}
              style={{
                background: "#1f2937",
                borderRadius: "16px",
                overflow: "hidden",
              }}
            >
              <img
                src={product.hinhAnh}
                alt={product.tenSP}
                style={{
                  width: "100%",
                  height: "260px",
                  objectFit: "cover",
                }}
              />

              <div style={{ padding: "15px" }}>
                <h3>{product.tenSP}</h3>
                <p style={{ color: "#d1d5db" }}>
                  {product.moTa}
                </p>
                <p
                  style={{
                    color: "#38bdf8",
                    fontWeight: "700",
                  }}
                >
                  {product.giaSP.toLocaleString("vi-VN")}₫
                </p>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {totalPages > 1 && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "12px",
            marginTop: "60px",
            flexWrap: "wrap",
          }}
        >
          {Array.from({ length: totalPages }).map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentPage(index + 1)}
              style={{
                padding: "10px 20px",
                borderRadius: "10px",
                border:
                  safePage === index + 1
                    ? "2px solid #38bdf8"
                    : "1px solid #374151",
                background:
                  safePage === index + 1
                    ? "#38bdf8"
                    : "#1f2937",
                color: "#fff",
                cursor: "pointer",
                fontWeight: "700",
              }}
            >
              {index + 1}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}

/* Page bọc Suspense */
export default function ProductsPage() {
  return (
    <Suspense fallback={<div style={{ padding: 40 }}>Đang tải sản phẩm...</div>}>
      <ProductsContent />
    </Suspense>
  );
}