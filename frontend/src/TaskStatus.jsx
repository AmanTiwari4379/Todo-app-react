import React from 'react'

const TaskStatus = ({tasks}) => {
  const taskCompleted = tasks.filter((task) => task.completed === true).length;
  const taskPending = tasks.filter((task) => task.completed === false).length;
  const markedTasks = tasks.filter((task) => task.completed === true);
  return (
    <div className="flex flex-col items-center justify-center">
      <h2>Tasks Status</h2>
      <p>Total tasks: {tasks.length}</p>
      <p>Completed tasks: {taskCompleted}</p>
      <p>Pending tasks: {taskPending}</p>
      <div>
        {markedTasks.map((task, index) => (
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

export default TaskStatus
