import { Link } from 'react-router'

function Home() {
  return (
    <div>
      <h1>HOME</h1>
      <Link to='/about'><button>About</button></Link>
      <Link to='/contact'><button>Contact</button></Link>
    </div>
  )
}

export default Home
