import React from 'react'
import { Link } from 'react-router'

function About() {
  return (
    <div>
      <h1>This is About Page</h1>
        <Link to='/'><button>Home</button></Link>
        <Link to='/contact'><button>Contact</button></Link>
    </div>
  )
}

export default About
