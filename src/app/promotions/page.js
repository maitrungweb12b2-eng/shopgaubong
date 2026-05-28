export default function Promotions() {
  const promoData = [
    {
      title: "Giảm 20% Mèo Dinga",
      desc: "Áp dụng đến 30/12",
      accent: "#ff4d6d",
    },
    {
      title: "Mua 2 tặng 1",
      desc: "Dành cho Mèo Bông Amuse",
      accent: "#22c55e",
    },
    {
      title: "Combo 6 con",
      desc: "Giảm 15% khi mua từ 2 con",
      accent: "#f59e0b",
    },
    {
      title: "Freeship Toàn Quốc",
      desc: "Cho đơn hàng từ 500k",
      accent: "#38bdf8",
    },
  ];

  return (
    <div
      style={{
        minHeight: "100vh",
        padding: "60px 0",
      }}
    >
      {/* Box chính */}
      <div
        style={{
          maxWidth: "1000px",
          margin: "0 auto",
          background: "#0b1220",
          borderRadius: "16px",
          padding: "40px",
          boxShadow: "0 20px 40px rgba(0,0,0,.45)",
        }}
      >
        <h2
          style={{
            textAlign: "center",
            color: "#ff4d6d",
            marginBottom: "36px",
            fontSize: "2rem",
            fontWeight: 600,
          }}
        >
          Chương Trình Khuyến Mãi
        </h2>

        {/* Grid */}
        <div
          className="product-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "20px",
          }}
        >
          {promoData.map((item, index) => (
            <div
              key={index}
              className="product-card"
              style={{
                background: "#0f172a",
                border: `1px solid ${item.accent}`,
                borderRadius: "14px",
                padding: "20px",
                transition: "all 0.3s ease",
              }}
            >
              <h3
                style={{
                  color: item.accent,
                  marginBottom: "8px",
                  fontSize: "1.1rem",
                }}
              >
                {item.title}
              </h3>

              <p
                style={{
                  color: "#94a3b8",
                  fontSize: "0.95rem",
                  marginBottom: "14px",
                }}
              >
                {item.desc}
              </p>

              <button
                className="promo-button"
                style={{
                  background: item.accent,
                  color: "#fff",
                  border: "none",
                  padding: "8px 14px",
                  borderRadius: "8px",
                  cursor: "pointer",
                  fontSize: "0.9rem",
                }}
              >
                Nhận ưu đãi
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}