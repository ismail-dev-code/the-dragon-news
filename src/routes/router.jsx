import { createBrowserRouter } from "react-router";

const router = createBrowserRouter([
  {
    path: "/",
    element: <h1>Home layout</h1>,
  },
  {
    path: "/auth",
    element: <h1>Authentication layout</h1>,
  },
  {
    path: "/news",
    element: <h1>News layout</h1>,
  },
  {
    path: "/*",
    element: <h1>Error404</h1>,
  },
]);

export default router;
