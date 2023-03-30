import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import axios from 'axios'
import './App.css'
import ShowTasks from './components/ShowTasks'

function App() {
  const [count, setCount] = useState(0)
  const [newTask, setNewTask] = useState("");
  const [updated, setUpdated] = useState(false);


  // sends new task to api
  // new task gets POSTed
  // field is cleared
  const handleOnSubmit = (e: any) => {
    e.preventDefault();
    console.log("submitting...");
    console.log(newTask);
    axios.post("http://localhost:8000/api/todo-list/",
      {
        task: newTask
      }
    )
    setUpdated(true);
    setNewTask("");
  }

  return (
    <div className="App">
      <h1>To-Do List</h1>
      {/* form to submit a new task */}
      <form onSubmit={(e) => handleOnSubmit(e)}>
        <label>Add a task:</label>
        <input onChange={(e) => setNewTask(e.target.value)} type='text' value={newTask}></input>
        <button type='submit'>Submit</button>
      </form>

      {/* show all tasks */}
      <h1>Tasks:</h1>
      <ShowTasks setUpdated={setUpdated} updated={updated}></ShowTasks>
    </div>
  )
}

export default App
