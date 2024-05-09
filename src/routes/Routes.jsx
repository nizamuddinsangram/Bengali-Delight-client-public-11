import { createBrowserRouter } from "react-router-dom";
import AllFoodPage from "../Pages/AllFoodPage/AllFoodPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import Test from "../Pages/Test/Test";
import Main from "../layout/Main";
import PrivateRoute from "./PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/allFood",
        element: <AllFoodPage />,
        loader: () => fetch("http://localhost:8000/allFoods"),
      },
      {
        path: "/test",
        element: (
          <PrivateRoute>
            <Test />
          </PrivateRoute>
        ),
      },
    ],
  },
]);

export default router;
