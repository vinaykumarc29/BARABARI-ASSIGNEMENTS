import React, { useState  } from 'react';
import { Link ,useNavigate } from 'react-router-dom';
import useFetch from '../hooks/useFetch';
import './Register.css';

function Register() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);

  const navigate = useNavigate();4
  const {logout , isAuth ,setIsAuth} = useFetch();
  const URL = `https://citisolve-smarter-complaint-resolution.onrender.com/api`;


  const handleRegister = async () => {
    try {
      if (password !== confirmPassword) {
        setErrorMsg(`Password and Confirm Password Must Be Same !!`);
        return;
      }

      setLoading(true);

      const response = await fetch(`${URL}/auth/register`, {
        method: "POST",
        body: JSON.stringify({
          name: name,
          email: email,
          role: role,
          password: password
        }),
        headers: {
          "content-type": "application/json"
        }
      });

      const data = await response.json();
      console.log(data);

      if(!response.ok){
        throw new Error(data.message || `something went wrong !`);
        
      }

      localStorage.setItem('token', data.token);
      localStorage.setItem('username', data.name);
      localStorage.setItem('role' , data.role);
      setIsAuth(true);
      navigate('/');

    } catch (error) {
      console.log(error);
      setErrorMsg(error.message)
    } finally {
      setLoading(false)

    }
  }

  return (
    <div className="registerPage">
      <div className="registerCard">

        <h1 className="registerTitle">Create Account</h1>
        <p className="registerSubtitle">
          Join our citizen resolution system
        </p>

        {errorMsg && <p id="error">{errorMsg}</p> } 

        <form className="registerForm" onSubmit={(e) => {
          e.preventDefault();
          handleRegister();
        }}>

          <label className="registerLabel">Full Name</label>
          <input
            type="text"
            className="registerInput"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter your full name"
          />

          <label className="registerLabel">Email Address</label>
          <input
            type="email"
            className="registerInput"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email address"
          />

          <label className="registerLabel">Role</label>
          <select className="registerSelect" value={role}
            onChange={(e) => setRole(e.target.value)}>
            <option value="citizen">Citizen</option>
            <option value="admin">Admin</option>
          </select>

          <label className="registerLabel" >Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <label className="registerLabel">Confirm Password</label>
          <input
            type="password"
            className="registerInput"
            placeholder="Confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />

          <button type='submit' className="registerBtn" disabled={loading}>
            {loading ?  `Registering...`: `Create Account`}
          </button>

          <p className="signinText">
            Already have an account?
            <Link to='/login'> <span> Sign In</span> </Link>
          </p>

        </form>

      </div>
    </div>
  )
}

export default Register
