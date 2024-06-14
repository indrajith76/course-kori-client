import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../layouts/Dashboard.jsx";
import Main from "../layouts/Main.jsx";
import AddCourse from "../pages/AddCourse/AddCourse.jsx";
import CheckOut from "../pages/CheckOut/CheckOut.jsx";
import CourseDetails from "../pages/CourseDetails/CourseDetails.jsx";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login.jsx";
import Registration from "../pages/Registration/Registration.jsx";
import ViewAllInstructor from "../pages/View All Instructor/ViewAllInstructor.jsx";
import ViewAllCourse from "../pages/ViewAllCourse/ViewAllCourse.jsx";
import ViewAllUser from "../pages/ViewAllUser/ViewAllUser.jsx";
import ViewProfile from "../pages/ViewProfile/ViewProfile.jsx";
import UserRoute from "./PrivateRoutes/UserRoute.jsx";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/registration",
        element: <Registration />,
      },
      {
        path: "CourseDetails/:id",
        element: <CourseDetails />,
        loader: async ({ params }) =>
          await fetch(`http://localhost:3000/courses/${params.id}`),
      },
      {
        path: "CheckOut/:id",
        element: (
          <UserRoute>
            <CheckOut />
          </UserRoute>
        ),
        loader: async ({ params }) =>
          await fetch(`http://localhost:3000/courses/${params.id}`),
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [
      {
        path: "/dashboard/profile",
        element: <ViewProfile />,
      },
      {
        path: "/dashboard/viewAllCourse",
        element: <ViewAllCourse />,
      },
      {
        path: "/dashboard/viewAllUser",
        element: <ViewAllUser />,
      },
      {
        path: "/dashboard/viewAllInstructor",
        element: <ViewAllInstructor />,
      },
      {
        path: "/dashboard/addCourse",
        element: <AddCourse />,
      },
    ],
  },
]);
