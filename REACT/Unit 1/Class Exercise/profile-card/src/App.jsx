import { useState } from 'react'
import './App.css'

function App() {
  const name =`Vinay`;
  const aim =`Aspiring FullStack Developer`;
  const funFact = `Iam Always Ready To Code And Participate In Tech Related Events !!`;

  return (
    <>
    <div className="container">
      <div className="innerContainer">
      <h1 className="mainHeading">Hello, Iam {name} 🙂🙏</h1>
      <h1 className="subHeading">{aim}</h1>
      <p className='desc'>Iam Currently Learning MERN Stack</p>
      <p className='fact'>{funFact}</p>
      </div>
    </div>
    </>
  )
}

export default App
