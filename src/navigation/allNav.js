import { AiOutlineDashboard } from "react-icons/ai";
import { BiLogOut } from "react-icons/bi";
import { FaShoppingCart } from "react-icons/fa";
import { BiCategory } from "react-icons/bi";
import { IoIosPeople } from "react-icons/io";
import { MdPayment } from "react-icons/md";
import { MdPeopleOutline } from "react-icons/md";
import { FaCodePullRequest } from "react-icons/fa6";
import { SiLivechat } from "react-icons/si";

export const allNav = [
  {
    id: 1,
    title: "Dashboard",
    role: "admin",
    icon: <AiOutlineDashboard />,
    path: "/admin/dashboard",
  },
  {
    id: 2,
    title: "Orders",
    role: "admin",
    icon: <FaShoppingCart />,
    path: "/admin/dashboard/orders",
  },
  {
    id: 3,
    title: "Category",
    role: "admin",
    icon: <BiCategory />,
    path: "/admin/dashboard/category",
  },
  {
    id: 4,
    title: "Sellers",
    role: "admin",
    icon: <IoIosPeople />,
    path: "/admin/dashboard/sellers",
  },
  {
    id: 5,
    title: "Payment Request",
    role: "admin",
    icon: <MdPayment />,
    path: "/admin/dashboard/payment-request",
  },
  {
    id: 6,
    title: "Deactive Sellers",
    role: "admin",
    icon: <MdPeopleOutline />,
    path: "/admin/dashboard/deactive-sellers",
  },
  {
    id: 7,
    title: "Sellers Request",
    role: "admin",
    icon: <FaCodePullRequest />,
    path: "/admin/dashboard/sellers-request",
  },
  {
    id: 8,
    title: "Live Chat",
    role: "admin",
    icon: <SiLivechat />,
    path: "/admin/dashboard/chat-sellers",
  },
];
