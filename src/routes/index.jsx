import PageNotFound from "../pages/PageNotFound";
import GuestLayout from "../layouts/GuestLayout";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import TaskPage from "../pages/TaskPage";
import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";
import UserPage from "../pages/UserPage";

const routes = createBrowserRouter([
  {
    element: <GuestLayout/>,
    children: [
      {
        path: '/',
        index: true,
        element: <LoginPage/>
      },
      {
        path: "/register",
        element: <RegistrationPage/>
      },
     
    ]
  }, 
  {
    element : <AuthLayout/>,
    children: [
      {
        index: true,
        path: "/task",
        element: <TaskPage/>,
      },
      {
        index: true,
        path: "/user",
        element: <UserPage/>,
      },
    ]
  },
  {
    path: '/*',
    element: <PageNotFound/>
  }
]);

export default routes;