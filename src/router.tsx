import { Navigate, useRoutes } from "react-router-dom";
import { PATH } from "./constants/paths";
import NotFound from "@/modules/NotFound";
import MainLayout from "@/layouts/MainLayout";
import Product from "@/modules/Products/Products";
import DashBoard from "@/modules/Dashboard/Dashboard";
import Settings from "@/modules/Settings/Settings";

const RouterConfig = () => {
  const createRoutes = useRoutes([
    {
      path: PATH.HOME,
      element: <MainLayout />,
      children: [
        {
          path: PATH.HOME,
          element: <Navigate to={PATH.DASHBOARD} />
        },
        {
          path: PATH.DASHBOARD,
          element: <DashBoard />
        },
        {
          path: PATH.PRODUCT,
          element: <Product />
        },
        {
          path: PATH.SETTINGS,
          element: <Settings />
        }
      ]
    },
    {
      path: "*",
      element: <NotFound />
    }
  ]);

  return createRoutes;
};

export default RouterConfig;
