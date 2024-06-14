import React from "react";
import { Link, Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const Dashboard = () => {
  return (
    <div>
      <Navbar />
      <div className="drawer lg:drawer-open">
        <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content m-5">
          <Outlet />
        </div>
        <div className="drawer-side">
          <label
            htmlFor="my-drawer-2"
            aria-label="close sidebar"
            className="drawer-overlay"
          ></label>
          <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
            {/* Sidebar content here */}
            <li>
              <Link to="/dashboard/myCourses">My Courses</Link>
            </li>
            <li className="bg-success">
              <Link to="">Add Course</Link>
            </li>
            <li className="bg-success">
              <Link to="">List of My Course</Link>
            </li>
            <li className="bg-sky-500">
              <Link to="/dashboard/viewAllCourse">View All Course</Link>
            </li>
            <li className="bg-sky-500">
              <Link to="/dashboard/viewAllUser">View All User</Link>
            </li>
            <li className="bg-sky-500">
              <Link to="/dashboard/viewAllInstructor">View All Instructor</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
