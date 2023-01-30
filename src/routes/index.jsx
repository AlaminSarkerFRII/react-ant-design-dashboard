import { createBrowserRouter } from "react-router-dom";
import Home from "../App";
import Layout from "../Layout/Layout";
import NotFound from "../pages/404";
import DashboardHome from "../pages/Dashboard/Dashboard";
import SignOut from "../pages/SignOut";
import UserList from "../pages/UserList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
    errorElement: <NotFound />,
    children: [
      {
        path: "/",
        element: <DashboardHome />,
      },
      {
        path: "/userlist",
        element: (
          <Layout title={"User-List"}>
            <UserList />
          </Layout>
        ),
      },
      {
        path: "/signout",
        element: <SignOut />,
      },
    ],
  },
]);

export default router;
