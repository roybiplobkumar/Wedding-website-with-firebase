
import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../../../../Providers/AuthProviders";

import swal from "sweetalert";
import { FaUserTie } from 'react-icons/fa';



const Navbar = () => {
  const { logout, user } = useContext(AuthContext)
  const logOut = () => {
    logout()
      .then((res)=> {
        swal('Log Out Successfully', 'You have been logged out.', 'success');

      })
      .catch(err => {
        swal('Error', err.message, 'error');

      })
  }

  const navLinks = < >
    <li>
      <NavLink
        to="/"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        Home
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/register"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        Register
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/blog"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        Blogs
      </NavLink>
    </li>
    <li>
      <NavLink
        to="/contact"
        className={({ isActive, isPending }) =>
          isPending ? "pending" : isActive ? "text-red-500 underline" : ""
        }
      >
        Contact Us
      </NavLink>
    </li>
  </>

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
          </label>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">

            {navLinks}

          </ul>
        </div>
        <a className="btn btn-ghost normal-case text-xl"><img className="w-full h-10 hidden md:block" src="https://www.vhv.rs/dpng/d/419-4195998_wedding-logo-png-wedding-dj-clip-art-transparent.png" alt="" /></a>
      </div>
      <div className="navbar-center hidden lg:flex items-center">
        <ul className="menu menu-horizontal text-xl px-1">
          {navLinks}
        </ul>
      </div>
      <div className="navbar-end">
      {
                    user ? <>
                        <span className="hidden md:block">{user.email}</span>
                        <a onClick={logOut} className="btn btn-sm mx-2">Sign out</a>
                    </> 
                    : <Link to="/login">
                        <button className="btn btn-sm">Login</button>
                    </Link>
                }
        
         {user?.photoURL? 
       <img className="h-10 w-10 rounded-full" src={user.photoURL
       } alt="" /> :
       <FaUserTie className="h-10 w-10 rounded-full"  ></FaUserTie>  
      }
      </div>
    </div>
  );
};

export default Navbar;