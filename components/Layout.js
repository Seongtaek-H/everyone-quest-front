import Navbar from "./Navbar";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <div>
      <Script
        src="https://kit.fontawesome.com/462cde4b43.js"
        crossorigin="anonymous"
      ></Script>
      <Navbar />
      <body>{children}</body>
      <style jsx>{`
        body {
          background-color: #fceddb;
          height: 100vh;
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
