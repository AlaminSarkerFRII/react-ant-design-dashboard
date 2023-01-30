import React, { memo, useEffect } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

import "./Layout.css";

const Layout = memo(({ children, title }) => {
  useEffect(() => {
    document.title = `${title || "SMM-Dashboard"} - SMM`;
  }, []);
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        minHeight: "100vh",
        //   width: "100vw",
      }}
    >
      <Header />
      <main
        style={{
          display: "flex",

          //   height: "100vh",
          //   width: "100vw",
        }}
      >
        <SideMenu />

        {children}
      </main>
      <Footer />
    </div>
  );
});

export default Layout;
