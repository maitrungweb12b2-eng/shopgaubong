"use client";

import { useParams, useRouter } from "next/navigation";

export default function NewsDetail() {
  const { id } = useParams();
  const router = useRouter();

  return (
    <div className="detail-wrapper">
      <div className="detail-container">
        <button
          onClick={() => router.back()}
          className="back-link"
        >
          ← Quay lại danh sách
        </button>

        <header className="detail-header">
          <span className="detail-category">
            Kiến thức chuyên sâu
          </span>

          <h1>Chi tiết bài viết số {id}</h1>

          <p className="detail-meta">
            Đăng ngày 20/03/2026 • Bởi Admin
          </p>
        </header>

        <div className="detail-body">
          <p>
            Đây là nội dung chi tiết của bài viết có ID là{" "}
            <b>{id}</b>.
          </p>

          <p>
            Trong thực tế, bạn sẽ dùng ID này để gọi API
            hoặc lấy dữ liệu từ file data.js để hiển thị
            nội dung đầy đủ của bài viết tại đây.
          </p>

          <p style={{ textAlign: "justify" }}>
            Gấu bông không chỉ là đồ chơi mà còn là món
            quà ý nghĩa dành cho người thân, bạn bè và
            người yêu. Việc vệ sinh gấu bông đúng cách sẽ
            giúp sản phẩm luôn mềm mại, sạch sẽ và bền đẹp
            theo thời gian.
          </p>
        </div>
      </div>
    </div>
  );
}