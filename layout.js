import "./globals.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";

export const metadata = {
  title: "Chun Store 🐻",
  description: "Cửa hàng gấu bông",
};

export default function RootLayout({ children }) {
  return (
    <html lang="vi">
      <body>
        <Header />
        <Navbar />

        <main style={{ minHeight: "80vh" }}>
          {children}
        </main>
      </body>
    </html>
  );
}