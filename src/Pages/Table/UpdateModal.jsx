import React, { useState } from "react";
import { toast } from "react-hot-toast";

const UpdateModal = ({ modalData }) => {
  const { _id, firstName, lastName, age, email } = modalData;
  const [update, setUpdate] = useState({});

  const handleChange = (e) => {
    e.preventDefault();
    const value = e.target.value;
    const field = e.target.name;
    const newModalData = { ...modalData };
    newModalData[field] = value;
    setUpdate(newModalData);
  };

  const handleUpdate = (id) => {
    fetch(`https://person-resource-server.vercel.app/people/${id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(update),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.matchCount) {
          toast.success("updated successfully");
        }
      });
  };

  return (
    <div>
      <input type="checkbox" id="people-update-modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative bg-gradient-to-b from-yellow-500 to-white w-96">
          <label
            htmlFor="people-update-modal"
            className="btn btn-sm btn-circle bg-red-600 hover:bg-red-700 absolute right-2 top-2"
          >
            ✕
          </label>
          <div className="ml-6 mt-10">
            <form>
              <input
                onChange={handleChange}
                defaultValue={firstName}
                type="text"
                name="firstName"
                className="border border-black w-72 mt-3 p-2 rounded-sm outline-none"
                placeholder="First name"
              />
              <br />
              <input
                onChange={handleChange}
                defaultValue={lastName}
                type="text"
                name="lastName"
                className="border border-black w-72 mt-3 p-2 rounded-sm outline-none"
                placeholder="Last name"
              />
              <br />
              <input
                onChange={handleChange}
                defaultValue={age}
                name="age"
                className="border border-black w-72 mt-3 p-2 rounded-sm outline-none"
                placeholder="Age"
              />
              <br />
              <input
                onChange={handleChange}
                defaultValue={email}
                type="email"
                name="email"
                className="border border-black w-72 mt-3 p-2 rounded-sm outline-none"
                placeholder="Email"
              />

              <br />
              <input
                onClick={() => handleUpdate(_id)}
                type="submit"
                value="Update now"
                className="w-72 btn px-12 py-2  rounded-sm bg-blue-600 hover:bg-blue-700 shadow-xl my-6"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateModal;
