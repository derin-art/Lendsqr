import React from "react";
import logo from "./logo.svg";
import "./App.scss";
import LendsqrIcon from "./Icons/LendsqrIcon";
import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import {
  BrowserRouter,
  Route,
  Routes,
  createBrowserRouter,
  RouterProvider,
  useRoutes,
  useLocation,
  Pathname,
} from "react-router-dom";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login></Login>,
    },
    {
      path: "/Dashboard",
      element: <Dashboard></Dashboard>,
    },
  ]);
  return (
    <div className="">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
