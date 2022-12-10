import './App.css';
import React, { useState } from "react";
import AppBar from './components/AppBar';
import ToDo from './components/To-Do';
import Tasks from './components/Tasks'


function App() {
  const [tasks, setTasks] = useState([]);
  

  const saveTasks = (newTask) => {
    setTasks([newTask, ...tasks]);
    console.log(tasks)
  }

  const deleteTask = (id) => {
    let filteredTaskArr = tasks.filter(taskObj => {
      return id !== taskObj.id
    })
    setTasks(filteredTaskArr);
  }


  return (
    <div className="App">
      
      <AppBar />
      <ToDo saveTasksProp={task=> saveTasks(task)}/>
      <Tasks tasks={tasks} setTasks={setTasks} removeTask={(id) => deleteTask(id)}/>
      
    </div>
  );
}

export default App;
