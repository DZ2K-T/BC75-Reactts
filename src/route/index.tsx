// import AboutPage from "@/pages/homeTemplate/AboutPage";
// import HomeTemplate from "../pages/homeTemplate";
// import HomePage from "../pages/homeTemplate/homePage";
import { Route } from "react-router-dom";

import { lazy } from "react";

type TRoute = {
  path: string;
  element: React.LazyExoticComponent<() => JSX.Element>;
  children?: TRoute[];
};

const routes: TRoute[] = [
  {
    path: "",
    element: lazy(() => import("@/pages/homeTemplate")),
    children: [
      {
        path: "",
        element: lazy(() => import("@/pages/homeTemplate/homePage")),
      },
      {
        path: "about",
        element: lazy(() => import("@/pages/homeTemplate/AboutPage")),
      },
    ],
  },
];

const renderRoutes = () => {
  return routes.map((route) => {
    if (route.children) {
      return (
        <Route key={route.path} path={route.path} element={<route.element />}>
          {route.children.map((item) => (
            <Route
              key={item.path}
              path={item.path}
              element={<item.element />}
            />
          ))}
        </Route>
      );
    } else {
      return (
        <Route key={route.path} path={route.path} element={<route.element />} />
      );
    }
  });
};

export default renderRoutes;
