import React from 'react'
import UserContext from '../contexts/UserContext'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function UserProvider(props) {
    const {children} = props ;
    const navigate = useNavigate();
    const[isAuth , setIsAuth] = useState(
        !!(localStorage.getItem('token'))
    )
    const [role,setRole] = useState((localStorage.getItem('role')) || null);

const logout = ()=>{
    localStorage.clear();
    setIsAuth(false);
    navigate('/login');
}
   
  return (
    <div>
        <UserContext.Provider value={{logout:logout , isAuth:isAuth , setIsAuth:setIsAuth ,role:role ,setRole:setRole}} >
            {children}
        </UserContext.Provider>
      
    </div>
  )
}

export default UserProvider
