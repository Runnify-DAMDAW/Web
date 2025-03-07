import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import CarreraDetails from "../pages/CarreraDetails";
import Profile from "../pages/Profile";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/details/:id",
        element: <CarreraDetails />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
    ],
  },
]);
