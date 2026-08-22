import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Login.css';
import useFetch from '../hooks/useFetch';

function Login() {
    
    const navigate = useNavigate();
    const URL = `https://citisolve-smarter-complaint-resolution.onrender.com/api`;


    const {logout , isAuth , setIsAuth ,role ,setRole} = useFetch();
    const [email ,setEmail] = useState(``);
    const [password , setPassword] = useState(``);
    const [loading ,setLoading] = useState(false);
    const [errorMsg ,seterrorMsg] = useState(null);
    

    const handleLogin = async()=>{
        try{
            setLoading(true);
            const response = await fetch(`${URL}/auth/login`,{
                method:"POST",
                headers:{
                    'content-type':'application/json'
                },
                body:JSON.stringify({
                    email:email,
                    password:password
                }),                
            });

            const data =await response.json();

            if(!response.ok){
                throw new Error(data.message ||  `Something went wrong !!`)
            }



            localStorage.setItem('token', data.token);
            localStorage.setItem('username', data.user.name);
            localStorage.setItem('role',data.user.role);
            setRole(data.user.role)
            setIsAuth(true);
            setEmail(``);
            setPassword(``);
            console.log(data);

            if(role == `admin`){
                return navigate('/admin-dashboard');
            }
            navigate('/');
        }catch(error){
            console.log(error);
            seterrorMsg(error.message);
        }finally{
            setLoading(false);
        }

    }
    return (
        <div className="loginPage">
            <div className="loginCard">


                <h1 className="loginTitle">
                    Login to Citizen Resolution
                </h1>
                {errorMsg && <p id='error'>{errorMsg}</p>}

                <form className="loginForm" onSubmit={(e)=>{
                    e.preventDefault();
                    handleLogin();
                }}>

                    <label className="loginLabel" htmlFor="email">
                        Email
                    </label>

                    <input
                        className="loginInput"
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        value={email}
                        onChange={(e)=>setEmail(e.target.value)}
                    />

                    <label className="loginLabel" htmlFor="password">
                        Password
                    </label>

                    <input
                        className="loginInput"
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e)=>setPassword(e.target.value)}
                    />

                    <button type="submit" className="loginBtn" disabled={loading}>
                        {loading ? `Submitting`:`Submit`}
                    </button>

                </form>

                <hr className="loginDivider" />

                <p className="loginRegisterText">
                    Don't have an account?
                    <Link to='/register'> Register here</Link>
                </p>
            </div>
        </div>
    )
}

export default Login
