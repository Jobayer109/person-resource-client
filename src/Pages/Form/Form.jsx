import React from "react";
import FormModal from "./FormModal";

const Form = () => {
  return (
    <div className="hero py-20">
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-neutral-content">
        <div className="">
          <h1 className="mb-5 text-5xl font-bold text-yellow-500">Add Person's Info</h1>

          <label
            htmlFor="hobby-modal"
            className="btn px-12 py-2  font-semibold  rounded-sm bg-blue-500 hover:bg-blue-600 shadow-lg hover:border"
          >
            Add Hobby
          </label>
        </div>
      </div>
      <FormModal></FormModal>
    </div>
  );
};

export default Form;
