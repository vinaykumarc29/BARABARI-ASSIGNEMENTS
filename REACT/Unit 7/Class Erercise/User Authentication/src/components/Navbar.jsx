import React, { useContext, useState } from 'react';
import { Home, LayoutDashboard, User } from 'lucide-react';
import './Navbar.css';
import { Link } from 'react-router-dom';
import AuthContext from '../context/AuthContext';
import useAuth from './useAuth';

function Navbar() {
    const auth = useAuth();
    return (
        <div>
            <nav>
                <div className="logo">  <p><span> <Home size={18} /> Auth Demo </span> </p>  </div>
                <div className="links">

                    <Link to="/">
                        <p><Home size={18} /> Home</p>
                    </Link >

                    {auth.user &&  <>
                        <Link to="/dashboard">
                            <p><LayoutDashboard size={18} /> Dashboard</p>
                        </Link>
                        <p disabled={true}><User size={18} />{auth.user}</p>
                    </>
                    }

                    {auth.user ? <button onClick={()=>auth.logout()} >Logout</button>: <Link to="/login">
                        <p id='loginBtn'>  <User size={18} /> Login  </p>
                    </Link>

                    }

                   

                </div>
            </nav>

        </div>
    )
}

export default Navbar
