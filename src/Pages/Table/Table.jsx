import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import { BounceLoader } from "react-spinners";
import UpdateModal from "./UpdateModal";

const Table = () => {
  const [modalData, setModalData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const { data: resources, isLoading } = useQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      const res = await fetch(`http://localhost:5000/people`);
      const data = res.json();
      return data;
    },
  });

  if (isLoading) {
    return (
      <BounceLoader
        color="#FFBF00"
        style={{ position: "fixed", top: "50%", left: "48%", paddingBottom: "100px" }}
      />
    );
  }

  const handleRowData = (id) => {
    fetch(`http://localhost:5000/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setModalData(data);
      });
  };
  return (
    <div className="overflow-x-auto w-[90%] mx-auto">
      <table className="table w-full font-sans">
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
          {resources?.map((resource, i) => (
            <tr key={i}>
              <td>{i + 1}</td>
              <td>{resource.firstName}</td>
              <td>{resource.lastName}</td>
              <td>{resource.age}</td>
              <td>{resource.email}</td>
              <td>
                <label htmlFor="people-update-modal">
                  <FaEdit
                    onClick={() => handleRowData(resource._id)}
                    className="ml-4 text-blue-700 text-xl hover:text-2xl duration-300  cursor-pointer"
                  />
                </label>
              </td>
              <td>
                <FaTrash className="ml-4 text-red-600 text-xl hover:text-2xl duration-300 cursor-pointer" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <UpdateModal modalData={modalData}></UpdateModal>
    </div>
  );
};

export default Table;
