import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { RouterProvider } from "react-router-dom";
import store from "./app/store";

import "./index.css";
import router from "./routes";

ReactDOM.createRoot(document.getElementById("root")).render(
  // <React.StrictMode>

  // </React.StrictMode>

  <>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </>
);
