import React, { useContext } from 'react'
import UserContext from '../context/UserContext'
import { User, Briefcase, MoveRight } from 'lucide-react';
import { Link } from 'react-router-dom';

import './Home.css'
function Home() {
  const userContext = useContext(UserContext);
  console.log(userContext);
  return (
    <div>
      {/* <h1>Home Page</h1> */}

      <div className="usersContainer">
        <h1>User Profile Manager</h1>
        <div className="userCardsContainer">

          {userContext.isLoading ? <div className="loadingContainer">
            <h1>Loading...</h1>
          </div> : <>
            {userContext.data.map((user) => {
              return <div className="userCard" key={user.id}>
                <User size={42} />
                <h2>{user.name}</h2>
                <p> <Briefcase size={15} /> {user.role} </p>
                <Link to={`/profile/${user.id}`}>
                  <button className="btn">View Profile <MoveRight /> </button>
                </Link>
              </div>

            })}
          </>}
          {/*  */}


          {/* <div className="userCard">
            <User size={42}/>
            <h2>Vinay</h2>
            <p> <Briefcase size={15} /> Frontend Intern </p>
            <button className="btn">View Profile <MoveRight /> </button>
          </div>

           <div className="userCard">
            <User size={42}/>
            <h2>Vinay</h2>
            <p> <Briefcase size={15} /> Frontend Intern </p>
            <button className="btn">View Profile <MoveRight /> </button>
          </div>

           <div className="userCard">
            <User size={42}/>
            <h2>Vinay</h2>
            <p> <Briefcase size={15} /> Frontend Intern </p>
            <button className="btn">View Profile <MoveRight /> </button>
          </div>

           <div className="userCard">
            <User size={42}/>
            <h2>Vinay</h2>
            <p> <Briefcase size={15} /> Frontend Intern </p>
            <button className="btn">View Profile <MoveRight /> </button>
          </div> */}



        </div>



      </div>


    </div>
  )
}

export default Home
