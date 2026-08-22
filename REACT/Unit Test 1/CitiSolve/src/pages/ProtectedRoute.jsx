import React, { Children } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoute(props) {
    const token = localStorage.getItem("token");
    const navigate = useNavigate();
    const {children} = props;
    if(!token){
        navigate('/register') ;
        return       
    }  

    return (
        <>
        {children}
        </>
    )
}

export default ProtectedRoute
