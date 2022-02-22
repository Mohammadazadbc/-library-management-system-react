import React, { useEffect, useState } from 'react';
import Nav from '../nav/Nav';
import "./searchBook.css"
const SearchBook = () => {
    const [bookInfo ,setbookInfo] = useState([]);
    const [showBookSt, setShowBookSt] = useState(true)
    const [bookFinded, setBookFined] = useState([]);
    const [userType , setUserType]= useState("");

    
    const SearchForBook= (e)=>{
        e.preventDefault()
        fetch(`http://127.0.0.1:8000/api/searchbook/${userType}`)
        .then(resp=>resp.json())
        .then((data)=>{
            setBookFined(data)
            setShowBookSt(false)
        })
    }
    useEffect(()=>{
        fetch("http://127.0.0.1:8000/api/book")
        .then(resp=>resp.json())
        .then((data)=>{
            setbookInfo(data)
        })
    },[])
    
    return (
        <div className='searchBook'>
            <Nav/>
            <img className='logo' src="https://previews.123rf.com/images/marco1987/marco19871803/marco1987180300153/96606910-library-logo-with-building-and-books.jpg" alt="" />
            <form class="form-inline my-2 my-lg-0 col-sm-8" className='searcForm'>
                <input onChange={(e)=>setUserType(e.target.value)} class="form-control mr-sm-2" type="search" placeholder="Search the book..." aria-label="Search" />
                <button onClick={SearchForBook} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

        { showBookSt ?<div className="populairBooks">
              {bookInfo.map((val)=>(
 
                    <img  src={"http://localhost:8000/"+val.coverImg}/>
                   
              )) }
            </div>  :
            <div className="populairBooks"> { 
            bookFinded.map((val)=>(
                 <img className='filterImg' src={"http://localhost:8000/"+val.coverImg}/>
            ))
             }
            </div>
              }
              
            
        </div>
    );
};

export default SearchBook;