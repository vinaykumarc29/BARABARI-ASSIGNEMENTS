import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'
import useFetch from '../hooks/useFetch';
function Home() {
  const {logout, isAuth , setIsAuth ,role } = useFetch();
  console.log(role);
  return (
    <div>
      <div className="homeContainer">

        <div className="headingcontainer">
          <h1 className='mainHeading'>Citizen Resolution System</h1>
          <br />
          <h3 className="desc"><pre> Report and track community issues efficiently. Your voice matters</pre> in building a better community.</h3>

          {isAuth ? <div className="greetingsContainer">
            <p className="greetings"> Welcome , {localStorage.getItem('username')}</p>
          </div> : <div className="btnContainer">
            <Link to="login">
              <button className="authBtns" id='loginBtn'>Login</button>
            </Link>
            <Link to="register">
              <button className="authBtns" id='RegisterBtn'>Register</button>
            </Link>
          </div>}
        </div>
 {isAuth && 
         <div className="quickActionContainer">
          <h1>Quick Actions</h1>
          <div className="quickActionCardsContainer">

            {(isAuth && role === 'citizen') && <>
             <div className="quickActionCard">
              <h1>📝</h1>
              <h4>Submit Complaint</h4>
              <p>Report new issue</p>
              <Link to="submit-complaint">
                <button className="complaintBtns" id='btn1' >Submit Complaint</button>
              </Link>
            </div>

            <div className="quickActionCard">
              <h1>📊</h1>
              <h4>My Complaints</h4>
              <p>Track the status of your submitted complaints</p>
              <Link to='my-complaint' >
                <button className="complaintBtns" id='btn2' >My Complaint</button>
              </Link>
            </div>
            
            
            </>}

            {(isAuth && role === "admin") && <>

            <div className="quickActionCard">
              <h1>⚙️</h1>
              <h4>Admin Dashboard</h4>
              <p>Manage and monitor all citizen complaints</p>
              <Link to='/admin-dashboard' >
                <button className="complaintBtns" id='btn2' >Go to Dashboard</button>
              </Link>
            </div>

            
            
            
            </>
            
            
            }

           
            

          </div>
        </div> }
        
        
        
        {!(isAuth) && <>

          
          <h1>How It Works </h1>

          <div className="tutorialContainer">
            <div className="step">
              <h2>1</h2>
              <h4>Register</h4>
              <p>Create your account as a citizen
              </p>
            </div>

            <div className="step">
              <h2>2</h2>
              <h4>Submit</h4>
              <p>Report issues with details and photos</p>
            </div>

            <div className="step">
              <h2>3</h2>
              <h4>Track</h4>
              <p>Monitor progress and status updates</p>
            </div>

          </div>
        </>
}
      </div>
    </div>
  )
}

export default Home
