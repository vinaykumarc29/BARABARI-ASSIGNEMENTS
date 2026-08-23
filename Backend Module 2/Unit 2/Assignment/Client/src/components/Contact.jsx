import { Link } from 'react-router'

function Contact() {
    return (
        <div>
            <h1>This is Contact Me Page</h1>
            <Link to='/about'><button>About</button></Link>
            <Link to='/'><button>Home</button></Link>
        </div>
    )
}

export default Contact
