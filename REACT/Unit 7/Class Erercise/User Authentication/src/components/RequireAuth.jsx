import React from 'react'
import useAuth from './useAuth'
import { Navigate } from 'react-router-dom';

function RequireAuth(props) {

  const auth = useAuth();
  const {children} = props;

  if((auth.user)){
    return(children);    
  }else{
    console.log(location.pathname)
    console.log(`redirected to login page`);
    return <Navigate to="/login"/>
  } 

  // return(
  //   <>
  //   {auth.user ? {children} : ()=>{navigate('/login')}}
  //   </>
  // )
  
}

export default RequireAuth
