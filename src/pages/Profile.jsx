import { Card } from "antd";
import React from "react";
import { useSelector } from "react-redux";

const Profile = () => {
  const user = useSelector((state) => state.user.user);

  console.log(user);

  return (
    <Card style={{ width: 300, backgroundColor: "blue" }}>
      <h2>{user.email}</h2>
    </Card>
  );
};

export default Profile;
