"use client";

import { useParams, useRouter } from "next/navigation";
import { products } from "../../data/products";

export default function ProductDetail() {
  const { id } = useParams();
  const router = useRouter();

  const sp = products.find((p) => p.id === id);

  if (!sp)
    return (
      <p style={{ padding: 20, color: "#fff" }}>
        Không tìm thấy sản phẩm
      </p>
    );

  // 👉 THÊM VÀO GIỎ HÀNG
  const addToCart = () => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];

    const existingIndex = cart.findIndex((item) => item.id === sp.id);

    if (existingIndex !== -1) {
      cart[existingIndex].quantity += 1;
    } else {
      cart.push({ ...sp, quantity: 1 });
    }

    localStorage.setItem("cart", JSON.stringify(cart));

    alert("Đã thêm vào giỏ hàng!");
  };

  // 👉 MUA NGAY
  const buyNow = () => {
    addToCart();
    router.push("/cart");
  };

  return (
    <main
      style={{
        maxWidth: 1100,
        margin: "40px auto",
        padding: "0 20px",
        color: "#fff",
      }}
    >
      {/* Quay lại */}
      <div
        onClick={() => router.back()}
        style={{
          cursor: "pointer",
          marginBottom: 25,
          color: "#38bdf8",
          fontWeight: 600,
          fontSize: 18,
        }}
      >
        ← Quay lại
      </div>

      <div
        style={{
          background: "#1f2937",
          borderRadius: 20,
          padding: 30,
          boxShadow: "0 10px 30px rgba(0,0,0,0.4)",
        }}
      >
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 40,
          }}
        >
          {/* Hình ảnh */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <img
              src={sp.hinhAnh}
              alt={sp.tenSP}
              style={{
                width: "100%",
                borderRadius: 20,
                objectFit: "cover",
              }}
            />
          </div>

          {/* Thông tin */}
          <div style={{ flex: 1, minWidth: 320 }}>
            <h1 style={{ fontSize: 36 }}>{sp.tenSP}</h1>

            <div
              style={{
                fontSize: 32,
                fontWeight: 700,
                color: "#38bdf8",
                marginBottom: 20,
              }}
            >
              {sp.giaSP.toLocaleString()}₫
            </div>

            <p style={{ color: "#d1d5db", lineHeight: 1.8 }}>
              {sp.moTa}
            </p>

            {/* Button */}
            <div
              style={{
                marginTop: 30,
                display: "flex",
                gap: 20,
                flexWrap: "wrap",
              }}
            >
              <button
                onClick={buyNow}
                style={{
                  padding: "14px 30px",
                  border: "none",
                  borderRadius: 10,
                  background: "#38bdf8",
                  color: "#fff",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Mua ngay
              </button>

              <button
                onClick={addToCart}
                style={{
                  padding: "14px 30px",
                  border: "2px solid #38bdf8",
                  borderRadius: 10,
                  background: "transparent",
                  color: "#38bdf8",
                  fontWeight: 700,
                  cursor: "pointer",
                }}
              >
                Thêm vào giỏ
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}