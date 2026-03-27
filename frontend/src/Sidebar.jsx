import React from "react";
import { NavLink } from "react-router-dom";
import { assets } from "./assets/assets";
import { useState } from "react";

const Sidebar = ({ isOpen, toggleSidebar,showSearch, setShowSearch }) => {


  return (
    <div
      className={`fixed top-0 left-0 h-full w-64 bg-gray-600 text-white p-5 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
      <button onClick={toggleSidebar}>
        <img src={assets.closeSidebar} alt="" />
      </button>
      <ul className="space-y-4 mt-4">
        <div>
          <NavLink to="/task" className="">
            <p>Add Task</p>
          </NavLink>
        </div>
        <div>
          <button onClick={()=> setShowSearch(true)}>Search</button>
        </div>
        <div>
          <NavLink to="/" className="">
            <p>Today Tasks</p>
          </NavLink>
        </div>
        <div>
          <NavLink to="/list" className="">
            <p>All Tasks</p>
          </NavLink>
        </div>
        <div>
          <NavLink to='/taskstatus' className="">
            <p>Task Status</p>
          </NavLink>
        </div>
      </ul>
    </div>
  );
};

export default Sidebar;
