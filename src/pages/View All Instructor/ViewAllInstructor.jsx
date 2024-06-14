import React, { useEffect, useState } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const ViewAllInstructor = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:3000/users?role=instructor`)
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl">All Instructor</h1>

      <div className="overflow-x-auto mt-5">
        <table className="table">
          <thead className="bg-sky-700 text-white">
            <tr>
              <th>Sl.no</th>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="flex justify-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allUser.map((userData, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{userData?.name}</td>
                <td>{userData?.email}</td>
                <td>{userData?.role}</td>
                <td className="flex justify-center">
                  <button className="text-white bg-error p-2 rounded">
                    Click to Ban Instructor
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllInstructor;
