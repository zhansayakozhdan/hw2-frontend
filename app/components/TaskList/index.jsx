import React from 'react';
import TaskItem from '../TaskItem';

const TaskList = ({tasks, removeProps, toggleTaskStatus}) => {
  // Render TaskItems using TaskItem component
  // Filter tasks by status here
  return (
    <ul>
          {tasks.map((task) => (
            <li key={task.id} className="flex justify-between items-center p-2 bg-white rounded mb-2">
              <TaskItem task={task} removeProps={removeProps} toggleTaskStatus={toggleTaskStatus}/>
          </li>
          ))}
    </ul>
  );
};

export default TaskList;
