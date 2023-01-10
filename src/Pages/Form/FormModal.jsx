import React from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";

const FormModal = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleAddInfo = (data) => {
    const personInfo = {
      firstName: data.firstName,
      lastName: data.lastName,
      age: data.age,
      email: data.email,
    };
    console.log(personInfo);
    fetch(`https://person-resource-server.vercel.app/people`, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(personInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          toast.success("Info added successfully");
        }
        if (data.acknowledged === false) {
          toast.error(data.message);
        }
      });
  };
  return (
    <div>
      <input type="checkbox" id="person_resource_modal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative w-96 bg-gradient-to-t from-yellow-500 to-white">
          <label
            htmlFor="person_resource_modal"
            className="btn btn-sm btn-circle absolute right-2 top-2 bg-red-600 hover:bg-red-700"
          >
            ✕
          </label>{" "}
          <br />
          <div className="ml-6">
            <form onSubmit={handleSubmit(handleAddInfo)}>
              <input
                type="text"
                {...register("firstName", { required: true })}
                className="border border-blue-600 w-72 mt-3 p-2 rounded-sm outline-none"
                placeholder="First name"
              />{" "}
              <br />
              {errors.firstName?.type === "required" && (
                <small className="text-red-600 text-xs my-0">First name is required</small>
              )}
              <input
                type="text"
                {...register("lastName", { required: true })}
                className="border border-blue-600 w-72 mt-3 p-2 rounded-sm outline-none"
                placeholder="Last name"
              />
              <br />
              {errors.lastName?.type === "required" && (
                <small className="text-red-600 text-xs my-0">Last name is required</small>
              )}
              <input
                type="number"
                {...register("age", { required: true })}
                className="border border-blue-600 w-72 mt-3 p-2 rounded-sm outline-none"
                placeholder="Age"
              />
              <br />
              {errors.age?.type === "required" && (
                <small className="text-red-600 text-xs my-0">Age is required</small>
              )}
              <input
                type="email"
                {...register("email", { required: true })}
                className="border border-blue-600 w-72 mt-3 p-2 rounded-sm outline-none"
                placeholder="Email"
              />
              {errors.email?.type === "required" && (
                <small className="text-red-600 text-xs my-0">Email is required</small>
              )}
              <br />
              <input
                type="submit"
                value="Add"
                className="w-72 btn px-12 py-2  rounded-sm bg-blue-600 hover:bg-blue-700 shadow-xl my-6"
              />
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FormModal;
