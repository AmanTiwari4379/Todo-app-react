import { useState } from "react";
import "./App.css";
import { Routes, Route, Link} from "react-router-dom"
import AddTaskForm from "./AddTaskForm";
import Home from "./Home";
import Navbar from "./Navbar";
import TaskList from "./TaskList";
import Login from "./Login";

function App() {
  return (
    <div>
    <Navbar/>
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/task" element={<AddTaskForm/>} />
      <Route path="/list" element={<TaskList/>} />
      <Route path="/login" element={<Login/>} />
      </Routes>  
    </div>
  );
}

export default App;
