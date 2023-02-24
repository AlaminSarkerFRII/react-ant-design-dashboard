import React from "react";
import Layout from "../../Layout/Layout";
import Products from "../Products";
import Profile from "../Profile";

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ width: "100%" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          {/* <UserList /> */}
          <Products />
          <Profile />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
