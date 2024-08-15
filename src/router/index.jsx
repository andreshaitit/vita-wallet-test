import { createBrowserRouter } from "react-router-dom";
import LayoutPrivate from "../layout/LayoutPrivate";
import Home from "../pages/Home";
import NotFound from "../pages/NotFound";
import Exchange from "../pages/Exchange";

export const router = createBrowserRouter([
    {
      path:'/',
      element: <LayoutPrivate />,
      errorElement: <NotFound />,
      children:[
          {
              index: true,
              element: <Home />,
          },
          {
              path: '/intercambiar',
              element: <Exchange />,
          },
      ]  
    },
])