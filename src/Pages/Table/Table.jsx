import { useQuery } from "@tanstack/react-query";
import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { FaEdit, FaEye, FaTrash } from "react-icons/fa";
import { BounceLoader } from "react-spinners";
import UpdateModal from "./UpdateModal";
import ViewDetails from "./ViewDetails";

const Table = () => {
  const [modalData, setModalData] = useState({
    firstName: "",
    lastName: "",
    age: "",
    email: "",
  });
  const {
    data: resources,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["resources"],
    queryFn: async () => {
      const res = await fetch(`https://person-resource-server.vercel.app/people`);
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
    fetch(`https://person-resource-server.vercel.app/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setModalData(data);
      });
  };

  const handleDelete = (id) => {
    const confirmed = window.confirm("Are you sure want to delete");
    if (confirmed) {
      fetch(`https://person-resource-server.vercel.app/people/${id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount) {
            refetch();
            toast.success("Deleted successfully");
          }
        });
    }
  };

  const handleViewDetails = (id) => {
    fetch(`https://person-resource-server.vercel.app/people/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setModalData(data);
      });
  };

  const handleReloadData = () => {
    refetch();
  };
  return (
    <section>
      <p
        onClick={handleReloadData}
        className="text-white hover:bg-gray-800 bg-opacity opacity-70 text-sm font-thin text-center my-4 py-3 cursor-pointer hover:underline"
      >
        Reload Data
      </p>

      <div className="overflow-x-auto w-[90%] mx-auto">
        <table className="table w-full font-sans">
          <thead>
            <tr className="text-blue-700 font-thin">
              <th>ID</th>
              <th>First name</th>
              <th>Last name</th>
              <th>Age</th>
              <th>Email</th>
              <th>View details</th>
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
                  <label htmlFor="view_modal">
                    <FaEye
                      onClick={() => handleViewDetails(resource._id)}
                      className="ml-8 text-blue-700 text-xl hover:text-2xl duration-300  cursor-pointer"
                    />
                  </label>
                </td>
                <td>
                  <label htmlFor="people-update-modal">
                    <FaEdit
                      onClick={() => handleRowData(resource._id)}
                      className="ml-4 text-blue-700 text-xl hover:text-2xl duration-300  cursor-pointer"
                    />
                  </label>
                </td>
                <td>
                  <FaTrash
                    onClick={() => handleDelete(resource._id)}
                    className="ml-4 text-red-600 text-xl hover:text-2xl duration-300 cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>

        <UpdateModal modalData={modalData}></UpdateModal>
        <ViewDetails modalData={modalData}></ViewDetails>
      </div>
    </section>
  );
};

export default Table;
