import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home";
import DashBoard from "../layout/DashBoard";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      children: [
        {
          path :"/",
          element: <Home />
        }
      ]
    },
    {
      path: "/dashboard",
      element: <DashBoard></DashBoard>,
      children: [
        // {
        //   path :"/",
        //   element: <Home />
        // }
      ]
    },
  ]);

  export default router