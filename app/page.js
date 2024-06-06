'use client'
import Image from 'next/image';
import { useEffect, useState } from 'react';
import TaskItem from './components/TaskItem';
import TaskList from './components/TaskList';


// const task = {id: 1, text: "Todo Test", completed: false}

export default function Home() {
  // const tasks = []; // rewrite using states
  //const filter = 'all'; // rewrite using states

  const [tasks, setTasks] = useState([{ id: 1, text: "Todo Test", completed: false }]);
  const [taskText, setTaskText] = useState("");
  const [filter, setFilter] = useState('all');
  const [leftItems, setLeftItems] = useState(0);

  useEffect(() => {
    setLeftItems(tasks.filter(task => !task.completed).length);
  }, [tasks]);



  const handleAddTask = () => {
    // Implement add task logic here
    const newTask = { id: tasks.length + 1, text: taskText, completed: false };
    setTasks(tasks => [...tasks, newTask]);
    setTaskText("");
  };

  const handleDeleteTask = (task) => {
    // Implement delete task logic here
    alert("Delete task");
    setTasks(tasks.filter(t => t.id !== task.id))
  };

  const clearCompletedTasks = () => {
    setTasks(tasks.filter(t => !t.completed))
  };

  const toggleTaskStatus = (task) => {
    setTasks(tasks.map(t => 
      t.id === task.id ? { ...t, completed: !t.completed } : t
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    if (filter === 'active') return !task.completed;
    if (filter === 'completed') return task.completed;
  });


  
  return (
    <div className="container mx-auto p-4">
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-4xl font-bold">TODO</h1>

      </div>
      <div className="mb-4 flex items-center">
        <input
          type="text"
          className="bg-gray-800 text-white border-none rounded p-4 flex-grow"
          placeholder="What to do ?"
          value={taskText}
          onChange={event => setTaskText(event.target.value)}
        />
        <button
          onClick={handleAddTask}
          className="bg-blue-500 text-white p-4 rounded ml-4"
        >
          Add Task
        </button>
      </div>
      <div className="bg-gray-800 rounded p-4">
        {/* Medium level: extract todo's listing to TaskList component */}
        {/* Basic level: map through tasks state by using this code: */}

      
        <TaskList tasks={filteredTasks} removeProps={handleDeleteTask} toggleTaskStatus={toggleTaskStatus}/>


        <div className="mt-4 flex justify-between items-center text-sm text-gray-400">
          <span> {leftItems} items left</span>  {/* show how many uncompleted items left */}
          <div>
            <button onClick={() => setFilter('all')} className={`mr-2 ${filter === 'all' ? 'text-white' : ''}`}>All</button>
            <button onClick={() => setFilter('active')} className={`mr-2 ${filter === 'active' ? 'text-white' : ''}`}>Active</button>
            <button onClick={() => setFilter('completed')} className={`${filter === 'completed' ? 'text-white' : ''}`}>Completed</button>
          </div>
          <button
            onClick={clearCompletedTasks}
            className="text-gray-400 hover:text-white"
          >
            Clear Completed
          </button>
        </div>
      </div>

    </div>
  )
}

