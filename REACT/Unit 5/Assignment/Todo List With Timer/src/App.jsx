import './App.css';
import { useState } from 'react';
import Todos from './components/Todos';

function App() {

  const [taskText, settaskText] = useState('');
  const [todoList, settodosList] = useState([]);

  const addTask = () => {

    if (taskText.trim() === ``) {
      alert(`Task cannot be Empty !!`);
    }
    settodosList([...todoList, { id: Math.floor(Math.random() * 1000), task: taskText }]);
    console.log(`task added!!`);
    settaskText("");
  }

  return (
    <>
      <div className="container">
        <h1>TODO List</h1>

        <div className="inputContainer">
          <input type="text" value={taskText}
          
          onChange={(e) => {
            settaskText(e.target.value);
          }} 

          onKeyDown={(e)=>{if(e.key == `Enter`)addTask()}}
          
          placeholder='Enter new task' name="taskInputField" id="taskInputField" />
          <button className="addTaskBtn" onClick={addTask}>Add Task</button>
        </div>

        {todoList.map((todo) => {
          return <Todos task={todo.task} key={todo.id} />
        })}

      </div>

    </>
  )
}

export default App
