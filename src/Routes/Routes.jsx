import {
    createBrowserRouter,
} from "react-router-dom";
import Home from "../Pages/Home";
import MainLayout from "../layouts/MainLayout";
import About from "../Pages/About";
import SigninSignup from "../Pages/SigninSignup";
import PrivateRoutes from "./PrivateRoutes";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/about',
                element: <About></About>
            },
            // {
            //     path: '/parkings',
            //     element: <PrivateRoutes>
            //         <Parkings></Parkings>
            //     </PrivateRoutes>
            // },
            // {
            //     path:'/services',
            //     element:<Services></Services>
            // },
            {
                path: '/signin-signup',
                element: <SigninSignup></SigninSignup>
            },
        ]
    },
]);