import { createBrowserRouter } from "react-router-dom";

import Home from "./Home";
import About from "./About";
import App from "../App";
import NotFound from "./NotFound";
import ErrorComponent from "../components/ErrorComponent";
import UserDetail from "./users/detail";
import Followers from "./users/followers";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Home />,
        errorElement: <ErrorComponent />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "users/:userId",
        element: <UserDetail />,
        children: [
          {
            path: "followers",
            element: <Followers />,
          },
        ],
      },
    ],
    errorElement: <NotFound />,
  },
]);

export default router;
