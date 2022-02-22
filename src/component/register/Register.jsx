import React, { useState } from 'react';
import "./register.css"
import {Link} from "react-router-dom"
import Profile from '../Pages/Profile';

const Register = () => {
    const [name, setName] = useState("");
    const [lastname, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    

    const RegiserUser =()=>{
        const newUser ={
            name:name,
            lastname:lastname,
            email:email,
            password:password
        }
        fetch("http://127.0.0.1:8000/api/users",{
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newUser)
        })
        .then(resp=>resp.json())
        .then((data)=>{
            localStorage.setItem("user-info", JSON.stringify(data));
            console.log(data);
            setTimeout(()=>{
                window.location.reload();
            },1000)
        })
        
    } 
    let userInfo = localStorage.getItem('user-info');
    if(userInfo){
     return <Profile/>
    }

    return (
        <div className='login'>
        <div className="registerWrapper">
            <div className="loginTop">
            <img className='loginlogo' src="./asset/logo.png" alt="" />
                <h4>Single Sign in</h4>
            </div>
            <div className="loginCenter">
                <input onChange={(e)=>setName(e.target.value)} type="text" required placeholder='Enter you name...' />
                <input onChange={(e)=>setLastName(e.target.value)} type="text" required placeholder='Enter you last name...' />
                <input onChange={(e)=>setEmail(e.target.value)} type="email" required placeholder='Enter you email...' />
                <input onChange={(e)=>setPassword(e.target.value)} type="password" required placeholder='Enter you password...' />
               
                <button onClick={RegiserUser} className='btn bg-primary text-light' type='button'>Sign up </button>
                
            </div>
            <div className="loginBottom">
                <p>Already have account?</p>
                <Link to="/login" ><button>Sign in</button></Link>
            </div>
        </div>
    </div>
    );
};

export default Register;