import React from 'react'

const TodayTasks = ({tasks}) => {
  const today = new Date();
  const date = today.toISOString().split('T')[0];
  const totalTasks = tasks.filter((task) => task.date === date ).length;
  const todayTasks = tasks.filter((task) => task.date === date);
  console.log("This is today's task variable: ",todayTasks);
  console.log("This is date variable: ",date);
  
  
  return (
    <div className='flex flex-col items-center justify-center'>
      <p>Total Tasks: {totalTasks}</p>
      <div>
        {todayTasks.map((task, index) => (
          <div
          key={index} 
          className="border border-black w-200 h-40 mb-7 p-3 text-lg"
        >
          <p>Title : {task.title}</p>
          <p>Date : {task.date}</p>
          <p>Priority : {task.priority}</p>
          <p>Description : {task.description}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

export default TodayTasks
