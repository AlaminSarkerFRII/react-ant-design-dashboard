import React from "react";

const Header = () => {
  return (
    <div style={{ height: "60", backgroundColor: "blue", textAlign: "center" }}>
      <nav
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-between",
          padding: "0 40px",
        }}
      >
        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
            listStyle: "none",
            fontSize: "20px",
            fontWeight: "bold",
            // danger: true,
          }}
        >
          <li>Home</li>
          <li>About</li>
          <li>Blog</li>
          <li>User Profile</li>
        </ul>

        <ul
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "10px",
            listStyle: "none",
            fontSize: "20px",
            fontWeight: "bold",
            // danger: true,
          }}
        >
          <li>Sign Up</li>
          <li>Sign Up</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
