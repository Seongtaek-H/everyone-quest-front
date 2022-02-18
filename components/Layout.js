import Navbar from "./Navbar";
import Script from "next/script";

export default function Layout({ children }) {
  return (
    <div className="mainBody">
      <Script
        src="https://kit.fontawesome.com/462cde4b43.js"
        crossorigin="anonymous"
      ></Script>
      <Navbar />
      <div className="mainContent">{children}</div>
      <style jsx>{`
        .mainBody {
          height: 100vh;
        }
        .mainContent {
          padding-top: 60px;
        }
      `}</style>
    </div>
  );
}
