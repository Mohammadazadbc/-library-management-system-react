import React from 'react';
import "./home.css"
import { Link } from 'react-router-dom';


const Home = () => {
    return (
        <div className='home'>
            <h1>Books are the training weights of the mind.</h1>
            <div className="homeWrapper">
                <a className='homeLeft' href="/searchbook"> 
                
                    <h3 className='homeLeftTitle'>Books in the library</h3>
                    <img src="./asset/book.png" alt="" />
               
                </a>
                <div className="homeCenter">
                   <h3>About us</h3> 
                   <img src="./asset/building.png" alt="" />
                </div>
                <a className="homeRight" href='/login' >
                    <h3>Sign In /Sign Up</h3>
                    <img src="./asset/welcome.png" alt="" />
                </a>

            </div>
        </div>
    );
};

export default Home;