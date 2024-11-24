import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import AboutUs from "../Pages/AboutUs";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/about-us',
                element:<AboutUs></AboutUs>
            },
        ]
    },
]);