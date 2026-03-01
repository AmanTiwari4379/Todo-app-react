import React from "react";
import { NavLink, Link } from "react-router-dom";
import { assets } from "./assets/assets";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar, setShowSearch }) => {


  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-800 text-white p-5 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}
    >
      <button onClick={toggleSidebar}>
        <img src={assets.closeSidebar} alt="" />
      </button>
      <ul className="space-y-4 mt-4">
        <div>
          <NavLink to="/" className="">
            <p>Home</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/task" className="">
            <p>Add Task</p>
          </NavLink>
        </div>
        <div>
          <button onClick={()=> setShowSearch(true)}>Search</button>
        </div>
        <div>
          <NavLink to="/list" className="">
            <p>Task List</p>
          </NavLink>
        </div>
        <div>
          <NavLink to='/taskstatus' className="">
            <p>Task Status</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/login" className="">
            <p>Login</p>
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
