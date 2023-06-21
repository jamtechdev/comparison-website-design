"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import dynamic from "next/dynamic";
import Link from "next/link";
const Header = dynamic(() => import("./components/Header/Header"));
const Footer = dynamic(() => import("./components/Footer/Footer"));
export default function RootLayout({ children }) {
  return (
    <SSRProvider>
      <html lang="en">
        <meta charset="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon-512x512.png" />
        <meta name="theme-color" content="#000" />
        <body>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </SSRProvider>
  );
}
