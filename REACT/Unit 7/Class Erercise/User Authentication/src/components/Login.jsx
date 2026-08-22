import React, { useState } from 'react'
import useAuth from './useAuth';
import './Login.css';

function Login() {
    const [inputFieldValue, setInputFieldValue] = useState('');
    const auth = useAuth();


    return (
        <div >
            <div className="loginConatiner">
            <h1>Welcome Back</h1>
                    <input type="text" placeholder='Enter Your Name' value={inputFieldValue} onChange={(e) => setInputFieldValue(e.target.value)} name="userNameField" id="userNameField" />
                    <input type='submit' id="submit" className='btn' onClick={(e) => {
                        e.preventDefault();
                        auth.login(inputFieldValue);
                    }} />
            </div>
        </div>
    )
}

export default Login
