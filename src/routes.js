import { Navigate, Outlet } from "react-router-dom";
import Login from "./views/Login";
import Todo from "./views/Todo";
// import NotFoundView from "./errors/NotFoundView";

export const routes = [
    {
        path: "/",
        element: <Outlet />,
        children: [
          { index: true, element:  <Navigate to="/login" /> },
          {
            path: "todo",
            element:<Todo />,
          },
          {
            path: "login",
            element:<Login />,
          },
          {
            path: "404",
            element: <>not fount</>,
          },
          { path: "*", element: <Navigate to="/404" /> }
        ]
      }
]