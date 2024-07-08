import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

let router = createBrowserRouter([
  {
    path: "/", // <-- home route
    element: <App />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

//end of part one//
