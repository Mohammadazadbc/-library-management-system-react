import React from 'react';
import Nav from '../component/nav/Nav';
import "./allbooks.css"
import {useState, useEffect} from "react"
import Onebook from '../oneBook/Onebook';
const AllBooks = () => {
    const [bookInfo ,setbookInfo] = useState([]);
    const [showBookSt, setShowBookSt] = useState(true)
    const [bookFinded, setBookFined] = useState([]);
    const [userType , setUserType]= useState("");
    const [oneBook, setOneBook] = useState(false);
    const [oneBookId, setOneBookId] = useState();

    
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

    const checkBookDet =(id)=>{
        setOneBook(true);
        setOneBookId(id);
    }

    if(oneBook){
        return <Onebook oneBookId={oneBookId} />
    }
    
    return (
        <div className='searchBook'>
            <Nav/>
           
            <form class="form-inline my-2 my-lg-0 col-sm-8" className='searcForm'>
                <input onChange={(e)=>setUserType(e.target.value)} class="form-control mr-sm-2" type="search" placeholder="Search the book..." aria-label="Search" />
                <button onClick={SearchForBook} class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>

        { showBookSt ?<div className="popBooks">
              {bookInfo.map((val)=>(
                <div className='booksList'>
                    <img  src={"http://localhost:8000/"+val.coverImg}/>
                    <div>
                    <h4>{val.titre} </h4>
                    <h4>{val.ISBNNumber} </h4>
                    <p>{val.description} </p>
                    <button onClick={()=> checkBookDet(val.id)} className='btn bg-primary'>More detailes</button>
                    </div>
                    
                </div>

                   
              )) }
            </div>  :
            <div className="populairBooks"> { 
            bookFinded.map((val)=>(
                <div className='booksList'>
                <img  src={"http://localhost:8000/"+val.coverImg}/>
                <div>
                <h4>{val.titre} </h4>
                <p>{val.description} </p>
                </div>
            </div>
            ))
             }
            </div>
              }
              
            
        </div>
    );
};

export default AllBooks;