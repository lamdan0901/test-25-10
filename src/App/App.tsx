import { Navigate, createBrowserRouter, RouterProvider } from "react-router-dom";
import NotFound from "@/modules/NotFound";
import MainLayout from "@/layouts/MainLayout";
import Product from "@/modules/Products/Products";
import DashBoard from "@/modules/Dashboard/Dashboard";
import Settings from "@/modules/Settings/Settings";
import { PATH } from "@/constants/paths";

const router = createBrowserRouter([
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
    path: "/test",
    element: <div>test</div>
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

const App = () => <RouterProvider router={router} />;

export default App;
