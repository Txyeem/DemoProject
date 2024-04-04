import { Inter } from "next/font/google";

import Navbar from "../components/navbar"
import Info from "../components/info";
import Footer from "../components/footer";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Brainwave.io",
  description: "Landing Page UI Kit by Tayeem",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Info />
        <Footer />
      </body>
    </html>
  );
}