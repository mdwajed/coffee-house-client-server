import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Expresso from "./Component/Expresso.jsx";
import AddCoffee from "./Component/AddCoffee.jsx";
import EspressoEmporium from "./Component/EspressoEmporium.jsx";
import NiceTies from "./Component/NiceTies.jsx";
import Banner from "./Component/Banner.jsx";
import Instagram from "./Component/Instagram.jsx";
import DeliciousCoffee from "./Component/DeliciousCoffee.jsx";
import AddCoffeePage from "./Pages/AddCoffeePage.jsx";
import Page404 from "./Pages/Page404.jsx";
import HomePages from "./Pages/HomePages.jsx";
import ViewPage from "./Pages/ViewPage.jsx";
import UpdateCoffee from "./Pages/UpdateCoffee.jsx";
import NicetiesPage from "./Pages/NicetiesPage.jsx";
import Fram1 from "./Pages/Fram1.jsx";
import UpdateEditing from "./Component/UpdateEditing.jsx";
import PopularProducts from "./Component/PopularProducts.jsx";


const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePages></HomePages>,
  },
  {
    path: "/viewpage",
    element: <ViewPage></ViewPage>,
  },
  {
    path: "/updatecoffee",
    element: <UpdateCoffee></UpdateCoffee>,
  },
  {
    path: "/nicetiespage",
    element: <NicetiesPage></NicetiesPage>,
  },
  {
    path: "/addcoffeepage",
    element: <AddCoffeePage></AddCoffeePage>,
  },
  {
    path: "/fram1",
    element: <Fram1></Fram1>,
  },
  {
    path: "/expresso",
    element: <Expresso></Expresso>,
  },
  {
    path: "/espressoemporium",
    element: <EspressoEmporium></EspressoEmporium>,
  },
  {
    path: "/updateediting",
    element: <UpdateEditing></UpdateEditing>,
  },
  {
    path: "/niceties",
    element: <NiceTies></NiceTies>,
  },
  {
    path: "/banner",
    element: <Banner></Banner>,
  },
  {
    path: "/popularproducts",
    element: <PopularProducts></PopularProducts>,
  },
  {
    path: "/instagram",
    element: <Instagram></Instagram>,
  },
  {
    path: "/deliciouscoffee",
    element: <DeliciousCoffee></DeliciousCoffee>,
  },
  {
    path: "/addcoffee",
    element: <AddCoffee></AddCoffee>,
  },
  {
    path: "/page404",
    element: <Page404></Page404>,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
