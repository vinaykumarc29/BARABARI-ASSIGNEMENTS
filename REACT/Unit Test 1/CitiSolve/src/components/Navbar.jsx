import React from 'react';
import './Navbar.css'
import { Link } from 'react-router-dom';
import useFetch from '../hooks/useFetch';

function Navbar() {
  const { logout, isAuth , setIsAuth ,role } = useFetch();
  

  return (

    <nav className="navbar">
      <div className="logoContainer">
        <Link to="/">
          <h1 className='logo'>🏛️ <span>CitiSolve</span> </h1>
        </Link>
      </div>

      {(isAuth && role =='citizen') && <div className="complaintBtnsContainer">
        <Link to="submit-complaint">
          <button className="complaintBtns" id='submitComplaintBtn'>Submit Complaint</button>
        </Link>
        <Link to='my-complaint' >
          <button className="complaintBtns" id='myComplaintBtn'>My Complaint</button>
        </Link>
      </div>}



      <div className="authBtnsContainer">

        {isAuth ? <button className="authBtns" id='logoutBtn' onClick={()=>logout()}>Logut</button> : <> <Link to="login">
          <button className="authBtns" id='loginBtn'>Login</button>
        </Link>
          <Link to="register">
            <button className="authBtns" id='RegisterBtn'>Register</button>
          </Link>
        </>}
      </div>
    </nav>

  )
}

export default Navbar
