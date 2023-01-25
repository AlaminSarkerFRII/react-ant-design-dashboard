import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/404";
import Dashboard from "../pages/Dashboard";
import SignOut from "../pages/SignOut";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
  },
  {
    path: "/signout",
    element: <SignOut />,
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
