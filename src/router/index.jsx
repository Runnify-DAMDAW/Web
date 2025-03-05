import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../layouts/RootLayout";
import LoginPage from "../pages/LoginPage";
import Home from "../pages/Home";
import ErrorPage from "../pages/ErrorPage";
import CarreraDetails from "../pages/CarreraDetails";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <LoginPage />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/details/:id",
        element: <CarreraDetails />,
      },
    ],
  },
]);
