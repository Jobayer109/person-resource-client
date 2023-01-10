import React from "react";
import { FaUser } from "react-icons/fa";

const ViewDetails = ({ modalData }) => {
  const { firstName, lastName, age, email } = modalData;
  return (
    <div>
      <input type="checkbox" id="view_modal" className="modal-toggle" />
      <div className="modal">
        <div className="">
          <div className=" modal-box relative flex flex-col justify-center w-96 py-16 bg-yellow-400 shadow-md rounded-xl sm:px-12 border bottom-4 border-blue-500">
            <label htmlFor="view_modal" className="btn btn-sm btn-circle absolute right-2 top-2">
              ✕
            </label>
            <FaUser className="w-16 h-16 mx-auto rounded-full  aspect-square" />
            <div className="space-y-4 text-center divide-y divide-gray-700">
              <div className="my-2 space-y-1">
                <p className="text-xl font-bold">
                  <span>{firstName}</span> <span>{lastName}</span>
                </p>
                <p className=" px-10 font-mono ">{email}</p>
                <span className="px-10 font-mono ">Age: {age}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
