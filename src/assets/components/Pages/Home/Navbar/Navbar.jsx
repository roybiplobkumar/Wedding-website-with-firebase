import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../../Providers/AuthProviders";
import swal from "sweetalert";
import { FaUserTie } from 'react-icons/fa';

const Navbar = () => {
  const { logout, user } = useContext(AuthContext);

  const logOut = () => {
    logout()
      .then(() => {
        swal('Log Out Successfully', 'You have been logged out.', 'success');
      })
      .catch(err => {
        swal('Error', err.message, 'error');
      });
  };

  const navLinks = (
    <>
      <li>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
          }
        >
          Home
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/register"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
          }
        >
          Register
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/blog"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
          }
        >
          Blogs
        </NavLink>
      </li>
      <li>
        <NavLink
          to="/contact"
          className={({ isActive }) =>
            isActive ? "text-blue-500 font-bold" : "hover:text-blue-400"
          }
        >
          Contact Us
        </NavLink>
      </li>
    </>
  );

  return (
    <div className="navbar bg-base-100 shadow-md p-4 sticky top-0 z-50">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-white rounded-box w-52"
          >
            {navLinks}
          </ul>
        </div>
        <Link
          to="/"
          className="btn btn-ghost  hidden  normal-case text-2xl font-bold text-blue-600 md:flex items-center gap-2"
        >
          <img
            className="w-10 h-10 rounded-full"
            src="couple.png"
            alt="logo"
          />
          CAMERA WEDDING
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal text-lg font-medium space-x-4">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end flex items-center gap-4">
        {user ? (
          <>
            <span className="hidden md:block text-sm text-gray-600">
              {user.email}
            </span>
            <button onClick={logOut} className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white">
              Sign out
            </button>
          </>
        ) : (
          <Link to="/login">
            <button className="btn btn-sm bg-blue-500 hover:bg-blue-600 text-white">
              Login
            </button>
          </Link>
        )}
        {user?.photoURL ? (
          <img
            className="h-10 w-10 rounded-full border border-blue-500"
            src={user.photoURL}
            alt="User"
          />
        ) : (
          <FaUserTie className="h-10 w-10 text-blue-500" />
        )}
      </div>
    </div>
  );
};

export default Navbar;
