import React from 'react';
import Image from 'next/image';


const TaskItem = ({task, removeProps, toggleTaskStatus}) => {

  const handleToggleTask = () => {
    toggleTaskStatus(task)
  };

  // Component that shows each TaskItem
  return (
    <>
    <div className="flex items-center">
              <button 
              className="w-6 h-6 my-auto mr-6"
              onClick={handleToggleTask} 
              >
                <Image
                      src={task.completed ? "https://www.svgrepo.com/show/86058/check-mark.svg" : "https://www.svgrepo.com/show/21400/circle-outline.svg"}
                      alt="Task status"
                      width={30}
                      height={30}
                />
              </button>
              <span className={`ml-2 ${task.completed ? 'line-through text-gray-500' : 'text-gray-900'}`}>{task.text}</span>
            </div>
            <button onClick={() => removeProps(task)} className="text-gray-400 hover:text-gray-900">
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
    </>
  );
};

export default TaskItem;
