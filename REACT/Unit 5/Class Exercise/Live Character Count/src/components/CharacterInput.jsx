import React from 'react'

function CharacterInput(props) {

  const { text, settext  ,charCount} = props;


  return (
    <div>
      <div className="inputFieldContainer">
      <h1> Live Character Counter</h1>
        <h3>Type Something:</h3>
        <textarea value={text} onChange={(e) => {
          settext(e.target.value);
        }} name="charactersField" placeholder='Type Something' id="charactersField" />

      {(charCount > 100) && <p id='errorMsg'>Character count should not exceed 100</p>}
      </div>


    </div>
  )
}

export default CharacterInput
