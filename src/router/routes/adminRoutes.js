import { lazy } from "react";
const AdminDashboard = lazy(() => import("./../../views/admin/AdminDashboard"));
const Orders = lazy(() => import("./../../views/admin/Orders"));
const Category = lazy(() => import("./../../views/admin/Category"));
const Sellers = lazy(() => import("./../../views/admin/Sellers"));
const PaymentRequest = lazy(() => import("./../../views/admin/PaymentRequest"));
const DeactiveSellers = lazy(() =>
  import("./../../views/admin/DeactiveSellers")
);
const SellersRequest = lazy(() => import("./../../views/admin/SellersRequest"));
const LiveChat = lazy(() => import("./../../views/admin/LiveChat"));
const SellerDetails = lazy(() => import("./../../views/admin/SellerDetails"));
const OrderDetails = lazy(() => import("./../../views/admin/OrderDetails"));

export const adminRoutes = [
  {
    path: "admin/dashboard",
    element: <AdminDashboard />,
    role: "admin",
  },
  {
    path: "admin/dashboard/orders",
    element: <Orders />,
    role: "admin",
  },
  {
    path: "admin/dashboard/category",
    element: <Category />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers",
    element: <Sellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/payment-request",
    element: <PaymentRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/deactive-sellers",
    element: <DeactiveSellers />,
    role: "admin",
  },
  {
    path: "admin/dashboard/sellers-request",
    element: <SellersRequest />,
    role: "admin",
  },
  {
    path: "admin/dashboard/chat-sellers",
    element: <LiveChat />,
    role: "admin",
  },
  {
    path: "admin/dashboard/seller/details/:id",
    element: <SellerDetails />,
    role: "admin",
  },
  {
    path: "admin/dashboard/order/details/:id",
    element: <OrderDetails />,
    role: "admin",
  },
];
