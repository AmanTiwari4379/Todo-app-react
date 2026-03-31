import React from "react";
import { useState } from 'react';
import { assets } from "./assets/assets";

const TaskList = ({ tasks, setTasks }) => {
  const totalTasks = tasks.length;
  const deleteTask = (id)=> {
    const updateTasks = tasks.filter(task => task.id !== id);
    setTasks(updateTasks);
    console.log("button is clicked");
  }
  const filteredTasks = tasks.filter((task) =>
    task.title);
  
  const taskCompleted  = (index)=>{
    const updatedTasks = tasks.map((task, i) => 
      i === index ? { ... task, completed: !task.completed } : task 
  );
  setTasks(updatedTasks);
  console.log(updatedTasks[index]);
  
  }
  return (
    <div className="flex flex-col items-center justify-center">
      
      <p className="pb-8 pt-4">Total Tasks: {totalTasks}</p>

      {filteredTasks.map((task, index) => (
        <div
          key={index}
          className="border border-black w-200 h-45 mb-7 p-3 text-lg"
        >
          <p>Title : {task.title}</p>
          <p>Date : {task.date}</p>
          <p>Priority : {task.priority}</p>
          <p>Description : {task.description}</p>
          <p>Completed : <input type="checkbox" checked={task.completed || false} onChange={() => taskCompleted(index)}/></p>
          <button className="float-right" onClick={()=> deleteTask(index)}>
          <img src={assets.deleteImg} alt="" />
          </button>
        </div>
      ))}

    </div>
  );
};

export default TaskList;
