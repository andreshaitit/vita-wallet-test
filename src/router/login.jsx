import { createBrowserRouter } from "react-router-dom";
import NotFound from "../pages/NotFound";
import Login from "../pages/Login";

export const login = createBrowserRouter([
    {
      path:'/',
      element: <Login />,
      errorElement: <NotFound />,
    },
])