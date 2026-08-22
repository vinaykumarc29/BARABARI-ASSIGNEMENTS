import { useState } from 'react';
import './App.css';
import CharacterInput from './components/CharacterInput';
import CharacterStats from './components/CharacterStats';


function App() {

  const [text, settext] = useState("");
  const [charCount, setcharCount] = useState(0);


  return (
    <>
      <div className="container">

        <CharacterInput text={text} settext={settext} charCount={charCount} />
        <CharacterStats text={text} charCount={charCount}  setcharCount={setcharCount} />

      </div>
    </>
  )
}

export default App
