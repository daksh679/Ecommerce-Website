import { lazy } from "react";
const Products = lazy(() => import("./../../views/seller/Products"));
const DiscountedProducts = lazy(() =>
  import("./../../views/seller/DiscountedProducts")
);
const Orders = lazy(() => import("./../../views/seller/Orders"));
const Payments = lazy(() => import("./../../views/seller/Payments"));
const SellerToCustomer = lazy(() =>
  import("./../../views/seller/SellerToCustomer")
);
const SellerToAdmin = lazy(() => import("./../../views/seller/SellerToAdmin"));
const Profile = lazy(() => import("./../../views/seller/Profile"));
const EditProduct = lazy(() => import("./../../views/seller/EditProduct"));
const OrderDetails = lazy(() => import("./../../views/seller/OrderDetails"));
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
  {
    path: "/seller/dashboard/order/details/:orderId",
    element: <OrderDetails />,
    ability: ["seller"],
  },
];
