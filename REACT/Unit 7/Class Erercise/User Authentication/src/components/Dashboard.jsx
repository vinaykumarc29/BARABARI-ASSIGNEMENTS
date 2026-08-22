import React from 'react';
import useAuth from './useAuth';
import { CircleUser } from 'lucide-react';
import './Dashboard.css';

function Dashboard() {
  const auth = useAuth()
  return (
    <div className="container">
      <div className="profileCard">
        <CircleUser size={100} className="profileIcon" />
        <h2>Welcome, {auth.user}</h2>
        <p className="subtitle">You are successfully logged in.</p>
        <button
          className="btn"
          onClick={() => {
            auth.logout();
          }}
        >
          Logout
        </button>
      </div>
    </div>
  )
}

export default Dashboard
