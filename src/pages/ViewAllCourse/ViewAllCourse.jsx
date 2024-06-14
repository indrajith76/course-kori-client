import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const ViewAllCourse = () => {
  const [allCourse, setAllCourse] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/courses")
      .then((res) => res.json())
      .then((data) => setAllCourse(data));
  }, []);

  return (
    <div>
      <h1 className="text-3xl">All Course</h1>

      <div className="overflow-x-auto mt-5">
        <table className="table">
          <thead className="bg-sky-700 text-white">
            <tr>
              <th></th>
              <th>Title</th>
              <th>Author</th>
              <th>Rating</th>
              <th>Price</th>
              <th className="w-28 flex justify-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {allCourse.map((course, idx) => (
              <tr>
                <th>{idx + 1}</th>
                <td>{course?.title}</td>
                <td>{course?.author}</td>
                <td>{course?.rating}</td>
                <td>{course?.basicPrice}</td>
                <td className="flex justify-center gap-2">
                  <button className="text-white bg-success p-2 rounded">
                    <FaEdit />
                  </button>
                  <button className="text-white bg-error p-2 rounded">
                    <RiDeleteBin5Line />
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

export default ViewAllCourse;
