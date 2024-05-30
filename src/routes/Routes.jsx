import { createBrowserRouter } from "react-router-dom";
import AllFoodPage from "../Pages/AllFoodPage/AllFoodPage";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import FoodPurchase from "../Pages/FoodPurchasePage/FoodPurchase";
import GalleryPage from "../Pages/GalleryPage/GalleryPage";
import Home from "../Pages/Home/Home";
import Login from "../Pages/Login/Login";
import AddFood from "../Pages/MyProfile/AddFood/AddFood";
import MyAddedFood from "../Pages/MyProfile/MyAddedFood/MyAddedFood";
import MyAddedFoodUpdate from "../Pages/MyProfile/MyAddedFood/MyAddedFoodUpdate";
import MyOrderFood from "../Pages/MyProfile/MyOrderFood/MyOrderFood";
import Payment from "../Pages/MyProfile/Payment/Payment";
import Register from "../Pages/Register/Register";
import SingleFood from "../Pages/SingleFoodPage/SingleFood";
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
        // loader: () => fetch("https://bengali-delights-server-lilac.vercel.app/allFoods"),
      },
      {
        path: "/singleFood/:id",
        element: <SingleFood />,
        loader: ({ params }) =>
          fetch(
            `https://bengali-delights-server-lilac.vercel.app/allFoods/${params.id}`
          ),
      },
      {
        path: "/foodPurchases/:id",
        element: (
          <PrivateRoute>
            <FoodPurchase />
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://bengali-delights-server-lilac.vercel.app/allFoods/${params.id}`
          ),
      },
      {
        path: "/myAddedFood",
        element: <MyAddedFood />,
      },
      {
        path: "/addFood",
        element: <AddFood />,
      },
      {
        path: "/myOrderedFood",
        element: <MyOrderFood />,
      },
      {
        path: "/myAddedFoodUpdate/:id",
        element: <MyAddedFoodUpdate />,
        loader: ({ params }) =>
          fetch(
            `https://bengali-delights-server-lilac.vercel.app/allFoods/${params.id}`
          ),
      },
      {
        path: "/gallery",
        element: <GalleryPage />,
      },
      {
        path: "/payment",
        element: <Payment />,
      },
      // {
      //   path: "/test",
      //   element: (
      //     <PrivateRoute>
      //       <Test />
      //     </PrivateRoute>
      //   ),
      // },
    ],
  },
]);

export default router;
