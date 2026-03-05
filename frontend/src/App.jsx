import { use, useEffect, useState } from "react";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import AddTaskForm from "./AddTaskForm";
import Home from "./Home";
import Navbar from "./Navbar";
import TaskList from "./TaskList";
import Login from "./Login";
import Sidebar from "./Sidebar";
import { assets } from "./assets/assets";
import About from "./About";
import TaskStatus from "./TaskStatus";
import TodayTasks from "./TodayTasks";

function App() {
  const [tasks, setTasks] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [showSearch, setShowSearch] = useState(false);
  const [users, setUsers] = useState([]);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const storedTasks = localStorage.getItem("tasks");
    if (storedTasks) {
      setTasks(JSON.parse(storedTasks));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (task) => {
    setTasks([...tasks, task]);
  };

  useEffect(() => {
    const storedUsers = localStorage.getItem("users");
    if (storedUsers) {
      setUsers(JSON.parse(storedUsers));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("users", JSON.stringify(users));
  }, [users]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    
    <div className="flex flex-col dark:bg-black text-black dark:text-white">
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} setShowSearch={setShowSearch} />
      <div className="flex p-1">
        <button onClick={toggleSidebar} className="px-4 py-2 rounded">
          <img src={assets.openSidebar} alt="" />
        </button>
      </div>
      <div>
      </div>
      {/* <Navbar/> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/task" element={<AddTaskForm addTask={addTask} />} />
        <Route path="/list" element={<TaskList tasks={tasks} setTasks={setTasks}  showSearch={showSearch} setShowSearch={setShowSearch} />} />
        <Route path="/login" element={<Login addUser={addUser} />} />
        <Route path="/sidebar" element={<Sidebar />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<h1 className="text-center mt-20 text-3xl">404 Not Found</h1>} />
        <Route path="/taskstatus" element={<TaskStatus tasks={tasks} />} />
        <Route path="/todaytasks" element={<TodayTasks tasks={tasks} />} />
      </Routes>
    </div>
    
  );
}

export default App;
