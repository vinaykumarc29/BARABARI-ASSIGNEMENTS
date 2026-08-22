import React, { Component } from 'react'
import { User } from 'lucide-react';
import './Home.css';
import { Link } from 'react-router-dom';


function Home(props){

    const {data} = props;
    // console.log(data);
    return (
      <div>

        <div className="container">
          <h1> Users Directory</h1>
        </div>


        {data.map((user)=>{
          return <Link to={`user/${user.id}`} key={user.id}>
          <div className="profileCard" >
            <p><User size={18} /> <span className="name">{user.name}</span></p>
          </div>
          </Link>
        })}



      </div>
    )
  }


export default Home
