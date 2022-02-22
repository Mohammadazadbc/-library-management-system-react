import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Nav from '../component/nav/Nav';
import { update } from '../component/redux/userSlice';
import "./onebook.css";


const Onebook = ({oneBookId}) => {
    const [bookInfo, setbookInfo] = useState([]);
    const [bookEdition, setBookEdition] = useState([]);
    const [bookAuteur, setBookAuteur] = useState([]);
    const [bookCommnets , setBookCommnets] = useState([]);
    const [userComment , setUserComment]  = useState()
   
   

    let datFromLoc = JSON.parse(localStorage.getItem('user-info'));
    const name = datFromLoc.name;
    const lastname = datFromLoc.lastname;
    const email = datFromLoc.email;
    const profilePic = datFromLoc.profilePic;
    
    const dispatch = useDispatch();
        dispatch(update ({name, email, lastname,profilePic}))

    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/book/${oneBookId}`)
        .then(resp=>resp.json())
        .then((data)=>{
            setbookInfo(data)
        })
    },[])  



    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/bookedition/${oneBookId}`)
        .then(resp=>resp.json())
        .then((data)=>{
            setBookEdition(data[0])
            
        })
    },[])
    useEffect(()=>{
        fetch(`http://127.0.0.1:8000/api/bookauteur/${oneBookId}`)
        .then(resp=>resp.json())
        .then((data)=>{
            setBookAuteur(data[0])
            
        })
    },[])

    const showBookComments =()=>{
        fetch(`http://127.0.0.1:8000/api/bookcomment/${oneBookId}`)
        .then(resp=>resp.json())
        .then((data)=>{
            setBookCommnets(data);     
        })
    }
    useEffect(()=>{
        showBookComments()
    },[])


    const addComment = (id)=>{
        const newComment = {
            comment: userComment,
            auteurName: name,
            auteurLName: lastname,
        }
        fetch(`http://127.0.0.1:8000/api/comment/${id}`, {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify(newComment)
        })
        .then(resp=>resp.json())
        .then((data)=>{
            if(data){
                console.log("data added");
                showBookComments();
                
            }
            else{
                console.log("something went wrong")
            }
        })
      
    }    
    const addTofavBook = ()=>{
        const formData = new FormData() 
            formData.append("titre",bookInfo.titre)
            formData.append("description", bookInfo.description)
            formData.append("publishDate",bookInfo.publishDate )
            formData.append("coverImg", bookInfo.coverImg)
            formData.append("ISBNNumber",bookInfo.ISBNNumber )
            formData.append("maisonEdition",bookInfo.maisonEdition )
            formData.append("auteur",bookInfo.auteur )
        
        fetch("http://127.0.0.1:8000/api/favbook", {
            method:"POST",
            headers:{
                "Content-Type":"application/json"
            },
            body:formData
        })
        console.log('worked');
       
    }
    return (
        <div className="onebook" >
            <Nav/>
            <div className='oneWrapper'>
            <div className="oneleft">
            <img  src={"http://localhost:8000/"+bookInfo.coverImg}/>
            <div>
                <button onClick={addTofavBook} className='add'>ADD TO FAVORITE</button>
                <button className='bookBtn'><img src="https://img.icons8.com/external-flaticons-lineal-color-flat-icons/64/000000/external-reading-addiction-flaticons-lineal-color-flat-icons.png"/> READ A RESUME </button>
                <button className='bookBtn'> <img src="https://img.icons8.com/fluency/48/000000/add-bookmark.png"/> READ A CRETIC </button>
            </div>
            </div>
            <div className="oneright">
                <div className="rightTop">
                    <h4>{bookInfo.titre}</h4>
                    <p>ISBN Number :{bookInfo.ISBNNumber} </p>
                    <p>Pulish Date : {bookInfo.publishDate} </p>
                    <p>Auteur: {bookAuteur.auteur} </p>
                    <p>Maison edition: {bookEdition.maisonEdition } </p>
                </div>
                
                <div className="rightBottom">
                    <p> {bookInfo.description} </p>
                </div>
            </div>
            </div>
            <div className="review">
                    <h4>Book Review</h4>
                <div className="reviewTop">
                 { bookCommnets.map((val)=>(
                     <div>
                         <h5> {val.auteurName} {val.auteurLName} </h5>
                         <p> {val.comment} </p>
                         
                         <hr />
                     </div>
                 )) }
                </div>
                <div className="reviewBottom">
                    <textarea onChange={(e)=>setUserComment(e.target.value)} cols="40" rows="2"></textarea>
                    <button onClick={(e)=>addComment(oneBookId)} >Comment</button>
                </div>
                
            
            </div>
          
        </div>
    );
};

export default Onebook;