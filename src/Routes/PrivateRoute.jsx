import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { BounceLoader } from "react-spinners";
import { AuthContext } from "../Contexts/AuthProvider";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();
  if (loading) {
    return (
      <BounceLoader
        color="#FFBF00"
        style={{ position: "fixed", top: "50%", left: "48%", paddingBottom: "100px" }}
      />
    );
  }
  if (!user?.email) {
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>;
  }
  return children;
};

export default PrivateRoute;
