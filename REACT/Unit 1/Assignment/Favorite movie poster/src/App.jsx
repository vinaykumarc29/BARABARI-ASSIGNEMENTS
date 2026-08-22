import { useState } from 'react'
import './App.css'

function App() {

  const movieTitle =`The Dark Knight(2008)`;
  const tagLine = `When a menace known as the Joker wreaks havoc and chaos on the people of Gotham, Batman, James Gordon and Harvey Dent must work together to put an end to the madness.`;


  return (
    <>  
    <div className="container">
      <div className="innerContainer">
      <h1 className="movieTitle">{movieTitle}</h1>
      <br />
      <h2 className="tagLine">The night is darkest before the dawn.</h2>
      <br /><br />
      <p className='info'>The film pushes Batman’s moral boundaries and explores the high cost of heroism </p>
      <br />
      <p className='info'>Its been 18 years since it was released </p>

      </div>
    </div>  
    </>
  )
}

export default App
