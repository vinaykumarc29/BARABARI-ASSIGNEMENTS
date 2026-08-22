import React, { useState } from 'react';
import './Todos.css'

function Todos(props) {

  const { todos ,deleteTodo ,updateTodoStatus } = props;
  return (
    <div>

      {todos.map((todo) => {
        return<div className="todo" key={todo.id}>

          <input type="checkbox"  defaultChecked={todo.isCompleted}
          name="status" id="isCompleted" onChange={()=>{updateTodoStatus(todo.id)} } />
          <span className={`todoText ${todo.isCompleted&&`isCompleted`}`}>{todo.todoText}</span>
          <button className="deleteTodoBtn" onClick={()=>{
            deleteTodo(todo.id);
          }}>delete</button>
        </div>

      })}



      {/* <div className="todo">
        <input type="checkbox" name="status" id="isCompleted" />
        <span className="todoText">this is a sample todo</span>
        <button className="deleteTodoBtn">delete</button>
      </div>

      <div className="todo">
        <input type="checkbox" name="status" id="isCompleted" />
        <span className="todoText ">this is a sample todo</span>
        <button className="deleteTodoBtn">delete</button>
      </div> */}
    </div>
  )
}

export default Todos
