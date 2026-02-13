import React from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import { assets } from "../assests/assets.js";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between font-medium text-lg">
       <Link to='/'><img src={assets.logo} /></Link>
       <br /><br /><br />
      <ul className="hidden sm:flex gap-5 text-gray-700">
        <NavLink to='/' className="flex flex-col items-center gap-1">
          <p>Home</p>
        </NavLink>
        <NavLink to='/task' className="flex flex-col items-center gap-1">
            <p>Add Task</p>
        </NavLink>
        <NavLink to='/list' className="flex flex-col items-center gap-1">
        <p>Task List</p>
        </NavLink>
        <NavLink to='/login' className='flex flex-col items-center gap-1'>
        <p>Login</p>
        </NavLink>
      </ul>
    </div>
    
  );
};
export default Navbar;