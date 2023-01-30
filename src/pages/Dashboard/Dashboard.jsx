import React from "react";
import Layout from "../../Layout/Layout";
import Products from "../Products";
import UserList from "../UserList";

const Dashboard = () => {
  return (
    <Layout>
      <div style={{ width: "100%" }}>
        <h2>Dashboard Hopme Container</h2>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            flexDirection: "row",
            gap: "10px",
            justifyContent: "center",
          }}
        >
          <UserList />
          <Products />
          <UserList />
          <Products />
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
