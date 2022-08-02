import { useState } from 'react'
import  './register.css'
import axios from 'axios'
import {Link} from 'react-router-dom'
export default function Register() {
  const [username,setUsername]= useState("");
  const [email,setEmail]= useState("");
  const [password,setPassword]=useState("");
  const [err,setError]=useState(false);
  const [error,seterrMsg]=useState("");
  const handleSubmit= async (e)=>{
    e.preventDefault();
    setError(false);
    try{
      const createUser= await axios.post("/auth/register",{username,email,password});
      {createUser.data && window.location.replace("/login")}
      //console.log(createUser);
    }catch(err){
      setError(true);
      seterrMsg(err.response.data);
      //console.log(err.response.data)
    }
  }

  return (

    <div className='register'>
        <span className="registerTitle">Register</span>
        <form  className="registerForm" onSubmit={handleSubmit}>
            <label>Username</label>
            <input className='registerInput' type="text" placeholder="Enter your Username......"
            onChange={(e)=>setUsername(e.target.value)}
            ></input>
            <label>Email</label>
            <input className='registerInput' type="text" placeholder="Enter your Email......"
            onChange={(e)=>setEmail(e.target.value)}
            ></input>
            <label>Password</label>
            <input className='registerInput' type="text" placeholder="Enter your Password......"
            onChange={(e)=>setPassword(e.target.value)}
            ></input>
            <button className="registerButton" type='submit'>register</button>
        </form>
        <Link to={`/login`}>
          <button className="registerLoginButton">Login</button>
        </Link>
        {err && <span className='errMsg'><b>{error}</b></span>}
    </div>
  )
}
