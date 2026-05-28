export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Cột 1 */}
        <div className="footer-col">
          <h3>Về Fish Store</h3>
          <p>Cửa hàng gấu bông chất lượng, quà tặng yêu thương dành cho mọi lứa tuổi. Khám phá bộ sưu tập thú nhồi bông độc đáo, mềm mại và an toàn, hoàn hảo để làm quà sinh nhật, kỷ niệm, hay gửi gắm tình cảm.</p>

          <p>📍 123 Đường Biển Xanh, Quận 1, TP.HCM</p>
          <p>📞 0123 456 789</p>
          <p>✉ lienhe@fishstore.vn</p>
        </div>

        {/* Cột 2 */}
        <div className="footer-col">
          <h3>Liên Kết Nhanh</h3>
          <ul>
            <li>Chính sách giao hàng</li>
            <li>Chính sách bảo hành/đổi trả</li>
            <li>Hướng dẫn chăm sóc</li>
          </ul>
        </div>

        {/* Cột 3 */}
        <div className="footer-col">
          <h3>Bản Đồ</h3>
          <iframe
            src="https://www.google.com/maps?q=Quận+1+TPHCM&output=embed"
            width="100%"
            height="150"
            style={{ border: 0, borderRadius: "10px" }}
            loading="lazy"
          ></iframe>
        </div>

      </div>

      {/* Bottom */}
      <div className="copyright">
        © 2026 Mai Trung Teddy Store. All Rights Reserved.
      </div>
    </footer>
  );
}