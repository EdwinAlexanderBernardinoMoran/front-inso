import { RouterProvider } from "react-router"
import { appRouter } from "./router/app.router"

export const AttendanceSystemApp = () => {
  return (
    <RouterProvider router={appRouter} />
  )
}