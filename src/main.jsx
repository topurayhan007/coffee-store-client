import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import "./index.css";
import AddCoffee from "./components/AddCoffee.jsx";
import UpdateCoffee from "./components/UpdateCoffee.jsx";
import Homepage from "./components/Homepage.jsx";
import ViewCoffee from "./components/ViewCoffee.jsx";
import ErrorPage from "./components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Homepage></Homepage>,
        loader: () =>
          fetch(
            "https://coffee-store-server-topurayhan007-topurayhan007s-projects.vercel.app/coffee"
          ),
      },

      {
        path: "addCoffee",
        element: <AddCoffee></AddCoffee>,
      },
      {
        path: "updateCoffee/:id",
        element: <UpdateCoffee></UpdateCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-topurayhan007-topurayhan007s-projects.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "viewCoffee/:id",
        element: <ViewCoffee></ViewCoffee>,
        loader: ({ params }) =>
          fetch(
            `https://coffee-store-server-topurayhan007-topurayhan007s-projects.vercel.app/coffee/${params.id}`
          ),
      },
      {
        path: "*",
        element: <ErrorPage></ErrorPage>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <App>
        <Outlet />
      </App>
    </RouterProvider>
  </React.StrictMode>
);
