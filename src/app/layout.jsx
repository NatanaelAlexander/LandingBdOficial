import "./globals.css";

/* import Navbar from "@/components/global/Navbar"; */
import Navbar from "../components/global/Navbar";
import Footer from "../components/global/Footer";

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body className="bg-zinc-900">
        <Navbar />
        {children}
        <div className="pt-[165px]">
          <Footer />
        </div>
      </body>
    </html>
  );
}
