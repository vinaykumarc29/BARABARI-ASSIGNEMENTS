import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Notes from './components/Notes';

function App() {

  const [notesList, setnotesList] = useState([]);

  const addNote = () => {
    const inputEle = document.querySelector('#noteInputField');

    const noteText = inputEle.value.trim();
    console.log(noteText);
    if (noteText == ``) {
      alert(`Note Cannot be empty !!`)
      return;
    }
    setnotesList([...notesList, noteText]);
    // console.log(notesList);
    inputEle.value = ``;
  }





  return (
    <>
      <Navbar />
      <Notes notes={notesList} />

      <div className="input-field">
        
        <input type="text" name="note" id="noteInputField"
         onKeyDown={(e) =>{
          if (e.key === 'Enter') addNote()
        }} placeholder='Enter Note' />

        <button className="addNoteBtn" onClick={addNote} >+</button>
      </div>
    </>
  )
}

export default App
