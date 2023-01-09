import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import UpdateModal from "./UpdateModal";

const Table = () => {
  return (
    <div className="overflow-x-auto w-[90%] mx-auto">
      <table className="table w-full ">
        <thead>
          <tr className="text-blue-700 font-thin">
            <th>ID</th>
            <th>First name</th>
            <th>Last name</th>
            <th>Age</th>
            <th>Email</th>
            <th>Update</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>First name</td>
            <td>Last name</td>
            <td>Age</td>
            <td>Email</td>
            <td>
              <label htmlFor="hobby-update-modal">
                <FaEdit className="ml-4 text-blue-700 text-xl hover:text-2xl duration-300  cursor-pointer" />
              </label>
            </td>
            <td>
              <FaTrash className="ml-4 text-red-600 text-xl hover:text-2xl duration-300 cursor-pointer" />
            </td>
          </tr>
        </tbody>
      </table>

      <UpdateModal></UpdateModal>
    </div>
  );
};

export default Table;
