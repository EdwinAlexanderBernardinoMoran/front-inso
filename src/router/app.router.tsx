import { createBrowserRouter, Navigate } from "react-router";
import { AuthLayout } from "../auth/layouts/AuthLayout";
import { LoginPage } from "../auth/pages/login/LoginPage";
import { AdminLayout } from "../admin/layouts/AdminLayout";
import { DashboardPage } from "../admin/pages/dashboard/DashboardPage";
import { StudentsPage } from "../admin/pages/students/StudentsPage";
import { Layout } from "../home/layouts/Layout";
import { HomePage } from "../home/pages/HomePage";

export const appRouter = createBrowserRouter([

    // Public routes
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <HomePage />
            }
        ]
    },

    // Auth routes
    {
        path: "auth",
        element: <AuthLayout />,
        children: [
            {
                index: true,
                element: <Navigate to="/auth/login" />
            },
            {
                path: "login",
                element: <LoginPage />
            }
        ]
    },

    // Admin routes
    {
        path: "admin",
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <DashboardPage />
            },
            {
                path: "students",
                element: <StudentsPage />
            }
        ]
    },

    {
        path: "*",
        element: <Navigate to="/" />
    }
])