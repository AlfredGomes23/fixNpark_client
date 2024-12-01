import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";

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
            //     path:'/about',
            //     element:<About></About>
            // },
            // {
            //     path:'/parkings',
            //     element:<Parkings></Parkings>
            // },
            // {
            //     path:'/services',
            //     element:<Services></Services>
            },
        ]
    },
]);