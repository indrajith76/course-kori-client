import React from "react";
import { FaEdit } from "react-icons/fa";
import { RiDeleteBin5Line } from "react-icons/ri";

const MyCourses = () => {
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
              <tr>
                <th>{1}</th>
                <td>title</td>
                <td>author</td>
                <td>rating</td>
                <td>$9</td>
                <td className="flex justify-center gap-2">
                  <button className="text-white bg-success p-2 rounded">
                    <FaEdit />
                  </button>
                  <button className="text-white bg-error p-2 rounded">
                    <RiDeleteBin5Line />
                  </button>
                </td>
              </tr> 
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyCourses;
