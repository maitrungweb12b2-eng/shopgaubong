import styles from "./page.module.css";
import { products } from "./data/products";

export default function ProductPage() {
  return (
    <main className={styles.main}>
      {/* BANNER CHUNG */}
      <div className={styles.banner}>
        <h2 id="bannerTitle">Thế Giới Gấu Bông</h2>
        <p>Mang sự ấm áp đến cho mọi nhà</p>
      </div>

      {/* TRANG CHỦ / PROMO */}
      <section className={styles.home}>
        <h2 className={styles.sectionTitle}>
          Chào Mừng Đến Với Chun Store
        </h2>

        <div className={styles.homeContent}>
          <p>
            Chun Store là điểm đến lý tưởng cho những ai yêu thích
            gấu bông và quà tặng dễ thương. Chúng tôi cung cấp hàng trăm mẫu
            gấu bông từ nhỏ xinh đến siêu to khổng lồ, phù hợp cho mọi dịp như
            sinh nhật, lễ tình nhân hay quà tặng đặc biệt.
          </p>
        </div>
      </section>

      {/* DANH SÁCH SẢN PHẨM */}
      <section className={styles.content}>
        <h1>Danh Sách Gấu Bông</h1>

        <div className={styles.grid}>
          {products.map((product) => (
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
    </main>
  );
}