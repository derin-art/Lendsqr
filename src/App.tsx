import React from "react";
import logo from "./logo.svg";
import "./App.scss";

import Dashboard from "./components/Dashboard/Dashboard";
import Login from "./components/Login/Login";
import Users from "./components/UsersPage/UsersPage";
import UserDetailPage from "./components/UserDetailsPage/UserDetailsPage";
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
      element: (
        <Dashboard>
          <Users></Users>
        </Dashboard>
      ),
    },
    {
      path: "/UserDetails/:id",
      element: (
        <Dashboard>
          <UserDetailPage></UserDetailPage>
        </Dashboard>
      ),
    },
  ]);
  return <RouterProvider router={router}></RouterProvider>;
}

export default App;
