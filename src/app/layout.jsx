"use client";
import "./globals.css";
import "bootstrap/dist/css/bootstrap.min.css";
import SSRProvider from "react-bootstrap/SSRProvider";
import dynamic from "next/dynamic";
import Link from "next/link";
import { useEffect, useState } from "react";
import { homePage } from "./_services/homepage.service";
const Header = dynamic(() => import("./components/Header/Header"));
const Footer = dynamic(() => import("./components/Footer/Footer"));

export default function RootLayout({ children }) {
  const [logoFavicon, setLogoFavicon] = useState();

  useEffect(() => {
    homePage
      .manageLogoFavicon()
      .then((res) => {
        setLogoFavicon(res?.data?.data);
      })
      .catch((err) => {
        console.log("Some Error Occured", err);
      });
  }, []);


  return (
    <SSRProvider>
      <html lang="en">
        <meta charSet="UTF-8" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="icon" href={`${logoFavicon?.favicon}`} type="image/png" sizes="64x64" />
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
