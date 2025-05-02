import React, { use } from "react";
import { Link, NavLink } from "react-router";
import userImg from "../assets/user.png";
import { AuthContext } from "../provider/AuthProvider";

const Navbar = () => {
  const { user, logOut } = use(AuthContext);
  const handleLogOut = () => {
    logOut()
      .then(() => {
        alert("you have successfully log out.");
      })
      .catch((error) => {
        alert(error);
      });
  };

  return (
    <div className="flex justify-between items-center w-11/12 mx-auto">
      <div className=""><small>{user && user.email}</small></div>
      <div className="nav  flex gap-5 text-accent">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/career"}>Career</NavLink>
      </div>
      <div className="nav-btn flex gap-5">
        <img
          className="w-10 rounded-full"
          src={`${user ? user.photoURL : userImg}`}
          alt="user img"
        />
        {user ? (
          <button onClick={handleLogOut} className="btn btn-primary px-10">
            Log out
          </button>
        ) : (
          <Link to={"/auth/login"} className="btn btn-primary px-10">
            Login
          </Link>
        )}
      </div>
    </div>
  );
};

export default Navbar;
