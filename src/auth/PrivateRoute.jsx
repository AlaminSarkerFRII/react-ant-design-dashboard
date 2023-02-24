import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute = () => {
  const authenticated = false; // initiatly will be false

  return !authenticated ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;
