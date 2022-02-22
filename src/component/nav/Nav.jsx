import React from 'react';
import "./nav.css"
import {Link} from "react-router-dom"
const Nav = () => {
    const userInfo = localStorage.getItem('user-info');
    return (
       
        <div>
             { userInfo ? <ul class="nav justify-content-center navbar navbar-dark bg-dark">    
                <li class="nav-item">
                    <a class="nav-link text-light" aria-current="page" href="/">Home </a>
                  
                </li> <li class="nav-item">
                <a class="nav-link text-light" aria-current="page" href="/login">Profile </a>
                  
                </li>
                
            </ul>
             
             
             :  <ul class="nav justify-content-center navbar navbar-dark bg-dark">    
                <li class="nav-item">
                    <a class="nav-link text-light" aria-current="page" href="/">Home </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-light" aria-current="page" href="/login">Sign In </a>
                </li>
                <li class="nav-item">
                    <a class="nav-link  text-light" href="/register">Sign Up</a>
                </li>
            </ul> }
        
        </div>
    );
};

export default Nav;