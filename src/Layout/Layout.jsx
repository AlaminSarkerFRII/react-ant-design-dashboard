import React, { memo, useEffect } from "react";
import { useDispatch } from "react-redux";
import { getData } from "../app/features/dataSlice";
import { getUser } from "../app/features/authSlice";
import Footer from "../components/Footer";
import Header from "../components/Header";
import SideMenu from "../components/SideMenu";

import "./Layout.css";

const Layout = memo(({ children, title }) => {
  //data facting
  const dispatch = useDispatch();

  useEffect(() => {
    fetch("https://dummyjson.com/carts")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getData(data.carts));
        console.log(data.carts);
      });

    // user Data

    fetch("https://dummyjson.com/users/1")
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUser(data));
        console.log(data);
      });
  }, []);

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
