import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import "./App.css";
import { assets } from "./assets/assets.js";

const Navbar = () => {
  return (
    <div className="font-medium text-lg">
      <ul className="hidden sm:flex gap-2 text-gray-700">
        <NavLink
          to="/about"
          className={({ isActive }) => (isActive ? "text-blue-800" : "")}
        >
          About
        </NavLink>
        <NavLink
          to="/setting"
          className={({ isActive }) => (isActive ? "text-blue-800" : "")}
        >
          Settings
        </NavLink>
      </ul>
    </div>
  );
};
export default Navbar;
