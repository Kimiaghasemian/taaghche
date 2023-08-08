import { createBrowserRouter } from "react-router-dom";
import PageLayout from "../components/Layout";
import HomePage from "./HomePage";

const routes = [
  {
    path: "/",
    element: <PageLayout />,
    children: [
      {
        path: "/",
        element: <HomePage />,
      },
      {
        path: "/book/:bookId",
        element: <div>Book</div>,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
