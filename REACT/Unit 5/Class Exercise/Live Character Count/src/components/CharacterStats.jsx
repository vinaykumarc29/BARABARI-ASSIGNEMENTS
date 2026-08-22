import React, { useEffect, useState } from 'react'

function CharacterStats(props) {

    const {text , setcharCount , charCount} = props;

    useEffect(()=>{
        console.log('Count updated !!')
        setcharCount(text.length);
    },[text])

  return (
    <div>
      <div className="statsContainer">
        <p className="stats">Character Count : <span className='characterCount'>{charCount}</span></p>
      </div>
    </div>
  )
}

export default CharacterStats
