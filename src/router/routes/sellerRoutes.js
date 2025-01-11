import { lazy } from "react";
import Products from "../../views/seller/Products";
import DiscountedProducts from "../../views/seller/DiscountedProducts";
import Orders from "../../views/seller/Orders";
const Home = lazy(() => import("./../../views/Home"));
const SellerDashboard = lazy(() =>
  import("./../../views/seller/SellerDashboard")
);
const AddProduct = lazy(() => import("./../../views/seller/AddProduct"));

export const sellerRoutes = [
  {
    path: "/",
    element: <Home />,
    ability: ["admin", "seller"],
  },
  {
    path: "/seller/dashboard",
    element: <SellerDashboard />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/add-product",
    element: <AddProduct />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/all-products",
    element: <Products />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/discounted-products",
    element: <DiscountedProducts />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/orders",
    element: <Orders />,
    ability: ["seller"],
  },
];
