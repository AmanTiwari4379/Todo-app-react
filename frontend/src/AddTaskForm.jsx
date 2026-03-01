import React from "react";
import { Link, Route, Routes } from "react-router-dom";
import { useState } from "react";
import "./App.css";

const AddTaskForm = ({ addTask }) => {
  const [task, setTask] = useState("");
  const [date, setDate] = useState("");
  const [priority, setPriority] = useState("");
  const [description, setDescription] = useState("");

  const showOutput = () => {
    const newTask = {
      title: task,
      date: date,
      priority: priority,
      description: description,
      completed: false,
    };

    addTask(newTask);
    setTask("");
    setDate("");
    setPriority("");
    setDescription("");
  };
  return (
    <>
      <div className="grid place-items-center bg-black-800">
        <div className="grid mt-14 p-4 w-1/3 mx:auto border border-black rounded-4xl">
          <div className="pb-1">
            <p className="text-lg md:text-lg font-medium">Title</p>
            <input
              value={task}
              onChange={(e) => setTask(e.target.value)}
              type="text"
              placeholder="Enter a task"
              className="h-8 w-2/4 border border-black-800 rounded-lg pl-4 text-lg"
            />
          </div>
          <div className="pb-1">
            <p className="text-lg md:text-lg font-medium">Date</p>
            <input
              value={date}
              onChange={(e) => setDate(e.target.value)}
              type="date"
              className="h-8 w-2/4 border border-black-800 rounded-lg pl-4 text-lg"
            />
          </div>
          <div className="pb-2">
            <p className="text-lg md:text-lg font-medium">Priority</p>
            <div className="flex gap-14 items-center pt-1">
              <label>
                <input
                  type="radio"
                  value="Extreme"
                  name="priority"
                  checked={priority === "Extreme"}
                  onChange={(e) => setPriority(e.target.value)}
                />{" "}
                Extreme
              </label>
              <label>
                <input
                  type="radio"
                  value="Moderate"
                  name="priority"
                  checked={priority === "Moderate"}
                  onChange={(e) => setPriority(e.target.value)}
                />{" "}
                Moderate
              </label>
              <label>
                <input
                  type="radio"
                  value="Low"
                  name="priority"
                  checked={priority === "Low"}
                  onChange={(e) => setPriority(e.target.value)}
                />{" "}
                Low
              </label>
            </div>
          </div>
          <div className="pb-1">
            <p className="text-lg md:text-lg font-medium">Task Description</p>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              className="w-full border rounded p-2 text-lg resize-none"
              rows={4}
              placeholder="Enter task description..."
            />
          </div>
        </div>
        <div className="pt-9">
          <button
            className="bg-indigo-700 hover:bg-indigo-500 text-white text-md font-medium rounded-lg border border-black w-25 h-9"
            onClick={showOutput}
          >
            Add Task
          </button>
        </div>
      </div>
    </>
  );
};

export default AddTaskForm;
