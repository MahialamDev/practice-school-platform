import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import { Component } from "react";
import AboutPage from "../Pages/About-Page/AboutPage";

const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'about',
                Component: AboutPage
            }
        ]
    }
])


export default router;