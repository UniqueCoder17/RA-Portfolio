import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Skills from "./component/Skills";

import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import Root from "./layouts/Root";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        element: <Skills />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);