import React, { useEffect, useState } from 'react';
import './Todos.css'

function Todos(props) {

    const [timer,settimer] = useState(0);
    const {task} = props;

    useEffect(()=>{
        console.log(`useEffected called`)
        const time = setInterval(()=>{
            settimer((timer)=>timer+1);
        },1000);

        return ()=>{
            clearInterval(time);
        }
    },[])
  return (
    <>
    <div>
      <div className="todoContainer">
        <p className="todo">{task}</p>
        <p>⏱️: <span className="timer">{timer} seconds </span></p>
      </div>
    </div>
    
    </>
  )
}

export default Todos
