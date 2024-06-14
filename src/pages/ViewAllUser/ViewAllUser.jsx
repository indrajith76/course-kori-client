import React, { useEffect, useState } from "react";
import { FaChalkboardTeacher, FaEdit, FaGraduationCap } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const ViewAllUser = () => {
  const [allUser, setAllUser] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/users")
      .then((res) => res.json())
      .then((data) => setAllUser(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl">All User</h1>

      <div className="overflow-x-auto mt-5">
        <table className="table">
          <thead className="bg-sky-700 text-white">
            <tr>
              <th></th>
              <th>User Name</th>
              <th>Email</th>
              <th>Role</th>
              <th className="text-center">Avatar</th>
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
                  <div className="border p-2 rounded-full bg-sky-700">
                    {userData.role == "learner" ? (
                      <FaGraduationCap className="text-3xl text-white" />
                    ) : (
                      <FaChalkboardTeacher className="text-3xl text-white" />
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewAllUser;
