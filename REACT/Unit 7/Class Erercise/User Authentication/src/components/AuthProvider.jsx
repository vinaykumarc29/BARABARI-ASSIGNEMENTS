import React, { useState } from 'react';
import AuthContext from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

function AuthProvider(props) {


    const [user, setUser] = useState(null);
    const navigate = useNavigate();
    const { children } = props;

    const handleLogin = (username) => {

        if(username.trim() == ``){
            return;
        }


        console.log(`${username} logged !`)
        setUser(username);
        navigate('/dashboard');
    }

    const handleLogout = () => {
        setUser(null);
        navigate('/login');
    }
    return (
        <div>
            <AuthContext.Provider value={{ user: user, login: handleLogin, logout: handleLogout }}>
                {children}
            </AuthContext.Provider>


        </div>
    )
}

export default AuthProvider
