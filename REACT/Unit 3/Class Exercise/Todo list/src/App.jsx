import { useEffect, useState } from 'react';
import './App.css'
import Todos from './components/Todos';


function App() {

  const [todoList, setTodoList] = useState([]);
  const [task , setTask ] = useState(``);

  const addTodo = () => {
    let todoText =task.trim();
    if(todoText == ``){
      alert(`Task Cannot be empty !`);
      return;
    }
    let id = Math.floor(Math.random() * 4000);

    let newTodoList = [...todoList, { id: id, todoText: todoText, isCompleted: false }] ;

    setTodoList(newTodoList);

    localStorage.setItem('todos',JSON.stringify(newTodoList));

    // console.log(todoList);
    setTask(``);

  }

  const deleteTodo = (id)=>{
    let filteredTodos = todoList.filter((todo)=>{
      return todo.id != id ;
    });
    setTodoList(filteredTodos);
    localStorage.setItem("todos",JSON.stringify(filteredTodos));
    // console.log(filteredTodos);
  }

  const updateTodoStatus = (id)=>{
    
    let updatedTodoList = todoList.map((todo)=>{
      if(todo.id == id){
       todo.isCompleted = !(todo.isCompleted);
      }
      return todo ;
    });
    setTodoList(updatedTodoList);
    localStorage.setItem("todos",JSON.stringify(updatedTodoList));
    // console.log(updatedTodoList);
  }


  useEffect(()=>{
    let localTodos = JSON.parse(localStorage.getItem('todos'));
    if(localTodos){
      setTodoList(localTodos);
    }

  },[]);

  return (
    <>
      <div className="container">
        <h1>TO-DO List</h1>
        <div className="todoInputContainer">

          <input type="text" name="todoInputField" value={task} onChange={(e)=>setTask(e.target.value)} id="todoInputField" placeholder='Enter Task' onKeyDown={(e)=>{
            if(e.key ===`Enter`) addTodo();
          }}  />

          <button id='addTodoBtn' onClick={addTodo}>Add Task</button>
        </div>

        <Todos todos={todoList}  deleteTodo={deleteTodo} updateTodoStatus = {updateTodoStatus}/>
      </div>
    </>
  )
}

export default App
