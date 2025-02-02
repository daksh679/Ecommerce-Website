import { lazy } from "react";
import Products from "../../views/seller/Products";
import DiscountedProducts from "../../views/seller/DiscountedProducts";
import Orders from "../../views/seller/Orders";
import Payments from "../../views/seller/Payments";
import SellerToCustomer from "../../views/seller/SellerToCustomer";
import SellerToAdmin from "../../views/seller/SellerToAdmin";
import Profile from "../../views/seller/Profile";
import EditProduct from "../../views/seller/EditProduct";
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
  {
    path: "/seller/dashboard/payments",
    element: <Payments />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/chat-customer",
    element: <SellerToCustomer />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/chat-support",
    element: <SellerToAdmin />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/profile",
    element: <Profile />,
    ability: ["seller"],
  },
  {
    path: "/seller/dashboard/edit-product/:productId",
    element: <EditProduct />,
    ability: ["seller"],
  },
];
