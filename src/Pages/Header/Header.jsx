import React, { useContext } from "react";
import { FaHome } from "react-icons/fa";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Contexts/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(AuthContext);

  const handleSignOut = () => {
    logOut()
      .then((result) => {})
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="text-center bg-yellow-500 py-2 flex items-center justify-center">
      <Link to="/">
        <FaHome className="text-2xl mr-6 text-white" />
      </Link>
      <div>
        {user ? (
          <Link to="/login">
            <button
              onClick={handleSignOut}
              className="border border-black px-4 py-1 bg-white hover:bg-blue-400 hover:border-white hover:text-white text-black btn btn-xs rounded-sm"
            >
              Sign Out
            </button>
          </Link>
        ) : (
          <button className="border border-black px-4 py-1 bg-white hover:bg-blue-400 hover:border-white hover:text-white text-black btn btn-xs rounded-sm">
            Sign in
          </button>
        )}
      </div>
    </div>
  );
};

export default Header;
