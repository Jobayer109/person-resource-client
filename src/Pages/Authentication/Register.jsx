import { GoogleAuthProvider } from "firebase/auth";
import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { toast } from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
import google from "../../assets/images/google.png";
import { AuthContext } from "../../Contexts/AuthProvider";

const Register = () => {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const googleProvider = new GoogleAuthProvider();

  const { createUser, update, googleSignIn } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleRegister = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        update(data.name);
        toast.success("User created successfully");
        navigate("/login");
        setError("");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.code, error.message);
        return;
      });
  };

  const handleGoogleSignIn = () => {
    googleSignIn(googleProvider)
      .then((result) => {
        navigate("/");
        toast.success("Welcome to Homepage");
        console.log(result.user);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <div className="text-center h-screen bg-yellow-300 py-20">
      <h3 className="text-2xl font-semibold text-blue-500 mb-6">Register</h3>
      <p className="text-xs text-red-600 text-center font-semibold">{error}</p>
      <form onSubmit={handleSubmit(handleRegister)}>
        <input
          type="text"
          name="name"
          {...register("name", { required: true })}
          placeholder="Your name"
          className="border w-80 p-3 bg-yellow-300 text-sm rounded-md mt-2 border-black outline-none"
        />{" "}
        {errors.name?.type === "required" && (
          <p className="text-xs text-red-700">Name is required</p>
        )}
        <br />
        <input
          type="email"
          name="email"
          {...register("email", { required: true })}
          placeholder="Email"
          className="border w-80 p-3 text-sm bg-yellow-300 rounded-md mt-2 border-black outline-none"
        />{" "}
        {errors.email?.type === "required" && (
          <p className="text-xs text-red-700">Email is required</p>
        )}
        <br />
        <input
          type="password"
          name="password"
          {...register("password", {
            required: true,
            pattern: /^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9]).*$/,
          })}
          placeholder="Password"
          className="border w-80 p-3 text-sm bg-yellow-300 rounded-md mt-2 border-black outline-none"
        />{" "}
        {errors.password?.type === "required" && (
          <p className="text-xs text-red-700">Password is required</p>
        )}
        <br />
        <input
          type="submit"
          value="Register"
          className="border w-80 bg-blue-600 px-2 py-2 mt-5 rounded-md font-medium hover:bg-blue-700 text-white cursor-pointer"
        />
        <div className="w-[27%] mx-auto cursor-pointer ">
          <div className="divider  text-xs text-blue-600">OR</div>
          <div
            onClick={handleGoogleSignIn}
            className="md:flex lg:flex md:items-center lg:items-center md:border lg:border border-black rounded-full p-1 hover:bg-blue-200"
          >
            <img src={google} alt="" className="h-8 mx-auto md:mx-0 lg:mx-0" />
            <input
              type="button"
              value="Continue with google"
              className="md:ml-10 lg:ml-16  font-medium text-sm hidden md:block lg:block"
            />
          </div>
          <p className="text-xs mt-2">
            Already have an account ?{" "}
            <Link to="/login" className="text-blue-600  text-sm  hover:underline">
              please sign in
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
