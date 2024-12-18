import PageNotFound from "../pages/PageNotFound";
import GuestLayout from "../layouts/GuestLayout";
import LoginPage from "../pages/LoginPage";
import RegistrationPage from "../pages/RegistrationPage";
import TaskPage from "../pages/TaskPage";
import { createBrowserRouter } from "react-router";
import AuthLayout from "../layouts/AuthLayout";

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
    children: [{
      index: true,
      path: "/task",
      element: <TaskPage/>,
    }]
  },
  {
    path: '/*',
    element: <PageNotFound/>
  }
]);

export default routes;