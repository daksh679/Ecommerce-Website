import { privateRoutes } from "./privateRoutes";
import Mainlayout from "./../../layout/Mainlayout";

export const getRoutes = () => {
  return {
    path: "/",
    element: <Mainlayout />,
    children: privateRoutes,
  };
};
