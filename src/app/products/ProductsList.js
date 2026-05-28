"use client";

import { useSearchParams } from "next/navigation";
import { products } from "../data/products";
import styles from "../page.module.css";

export default function ProductsList() {
  const searchParams = useSearchParams();
  const category = searchParams.get("category");

  const filteredProducts = category
    ? products.filter((p) => p.category === category)
    : products;

  const titleMap = {
    "gau-bong": "Gấu Bông Teddy",
    "meo-bong": "Mèo Bông Amuse",
    "cho-bong": "Chó Bông Shiba",
    "meo-dinga": "Mèo Dinga",
  };

  const pageTitle = category
    ? titleMap[category] || "Sản Phẩm"
    : "Tất Cả Sản Phẩm";

  return (
    <section className={styles.content}>
      <h1>{pageTitle}</h1>

      <div className={styles.grid}>
        {filteredProducts.map((product) => (
          <div key={product.id} className={styles.card}>
            <img src={product.hinhAnh} alt={product.tenSP} />
            <h3>{product.tenSP}</h3>
            <p>{product.moTa}</p>
            <p className={styles.price}>
              {product.giaSP.toLocaleString()}₫
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}