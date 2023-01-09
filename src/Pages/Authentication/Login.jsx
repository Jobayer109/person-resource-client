import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import google from "../../assets/images/google.png";

const Login = () => {
  const [error, setError] = useState("");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleSignIn = () => {};

  return (
    <div className="text-center h-screen bg-yellow-300 py-20">
      <Link to="/">
        <p className="absolute right-20 font-bold ">Back to Home</p>
      </Link>
      <h3 className="text-2xl font-semibold text-blue-600 mb-6">Sign in</h3>
      <p className="text-xs text-red-600 text-center font-semibold">{error}</p>
      <form onSubmit={handleSubmit(handleSignIn)}>
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="border w-80 p-3 text-sm rounded-md mt-2 border-black bg-yellow-300 outline-none"
        />{" "}
        <br />
        {errors.email?.type === "required" && (
          <small className="text-xs text-red-700">Email is required</small>
        )}{" "}
        <br />
        <input
          type="password"
          name="password"
          {...register("password", { required: true })}
          placeholder="Password"
          className="border w-80 p-3 text-sm rounded-md mt-2 border-black bg-yellow-300 outline-none"
        />{" "}
        <br />
        {errors.password?.type === "required" && (
          <small className="text-xs text-red-700">Password is required</small>
        )}
        <p className="w-[84%] cursor-pointer text-blue-500 hover:underline">
          <small>Forgot password ?</small>
        </p>
        <input
          type="submit"
          value="Sign in"
          className="border w-80 bg-blue-600 px-2 py-2 mt-5 rounded-md font-medium hover:bg-blue-700 text-white"
        />
        <div className="w-[27%] mx-auto cursor-pointer ">
          <div className="divider  text-xs text-green-600">OR</div>
          <div
            // onClick={handleGoogleSignIn}
            className="md:flex lg:flex md:items-center lg:items-center md:border lg:border border-black bg-yellow-300 rounded-full p-1 hover:bg-blue-200"
          >
            <img src={google} alt="" className="h-8 mx-auto md:mx-0 lg:mx-0" />
            <input
              type="button"
              value="Continue with google"
              className="md:ml-10 lg:ml-16  font-medium text-sm hidden md:block lg:block"
            />
          </div>
          <p className="text-xs mt-2">
            New in Laptop Cloud ? {""}
            <Link className="text-blue-600 text-sm  hover:underline" to="/register">
              create an account
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
