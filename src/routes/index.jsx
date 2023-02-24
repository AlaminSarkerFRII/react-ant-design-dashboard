import { createBrowserRouter } from "react-router-dom";
import Home from "../App";
import PrivateRoute from "../auth/PrivateRoute";
import Layout from "../Layout/Layout";
import NotFound from "../pages/404";
import DashboardHome from "../pages/Dashboard/Dashboard";
import Login from "../pages/Login";
import Profile from "../pages/Profile";
import SignOut from "../pages/SignOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRoute>
        <Home />
      </PrivateRoute>
    ),
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {
        path: "/profile",
        element: (
          <Layout title={"User"}>
            <Profile />
          </Layout>
        ),
      },
    ],
  },

  {
    path: "/signout",
    element: <SignOut />,
  },

  {
    path: "/login",
    element: <Login />,
  },
]);

export default router;
