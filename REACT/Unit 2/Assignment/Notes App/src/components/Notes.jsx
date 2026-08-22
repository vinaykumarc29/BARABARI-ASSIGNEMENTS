import React from 'react';
import './Notes.css'

function Notes(props) {
  let { notes } = props;
  console.log(notes);
  return (
    <div>
      {notes.map((note,index) => {
        return <div className="noteContainer" key={index}>
          <p>{note}</p>
        </div>
      })}

    </div>
  )
}

export default Notes
