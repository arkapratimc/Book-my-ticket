import React from "react";
import ReactDOM from "react-dom/client";
import { App } from "./App.js";
import { Location } from "./pages/Location.js";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Navbar } from "./components/navbar/Navbar.js";

const queryClient = new QueryClient();

let router = createBrowserRouter([
  {
    path: "/", // <-- home route
    element: <Navbar />,
    children: [
      { index: true, element: <App /> },
      {
        path: "location/:movie", // <- https://www.abc.com/location/kalki eg(??)
        element: <Location />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  </React.StrictMode>
);

//end of part one//
