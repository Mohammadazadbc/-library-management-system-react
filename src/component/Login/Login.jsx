import React, { useState } from 'react';
import "./login.css"
import {Link} from "react-router-dom"
import Profile from '../Pages/Profile';



const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [userData , setUserData] = useState();
   

    const LoginPage = ()=>{
        const user = {
            email:email,
            password:password
        }

        fetch("http://127.0.0.1:8000/api/login",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(user)
        }).then(resp=>resp.json())
        .then((data)=>{
            localStorage.setItem("user-info", JSON.stringify(data));
            
            setUserData(data)
         
            setTimeout(()=>{
                window.location.reload();
            },800)
            
        })
    }
    


    let userInfo = localStorage.getItem('user-info');
    if(userInfo){
    return <Profile/>
}

    return (
        <div className='login'>
            <div className="loginWrapper">
                <div className="loginTop">
                <img className='loginlogo' src="./asset/logo.png" alt="" />
                    <h4>Single Sign in</h4>
                </div>
                <div className="loginCenter">
                    <input onChange={(e)=>setEmail(e.target.value)}  type="email" required placeholder='Enter you email...' />
                    <input onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Enter you password' />
                    <button onClick={LoginPage} className='btn bg-primary text-light' type='button'>Log in</button>
                </div>
                <div className="loginBottom">
                    <p>First time visiting our library?</p>
                   <Link to="/register"> <button>Sign up</button> </Link> 
                </div>
            </div>
        </div>
    );
};

export default Login;