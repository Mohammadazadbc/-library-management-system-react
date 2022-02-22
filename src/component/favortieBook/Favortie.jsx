import React,{useState, useEffect} from 'react';
import "./favorit.css"
import Nav from "../nav/Nav"
const Favortie = () => {
    const [favBooks, setFavBooks] = useState([]);

    const showFavBooks =()=>{
        fetch("http://127.0.0.1:8000/api/favbook")
        .then(resp=>resp.json())
        .then((data)=>{
            setFavBooks(data)
        })
    }
    useEffect(()=>{
        showFavBooks();
    })
    return (
        <div className='favorite'>
            <Nav />
          <main class="favoriteWrapper">    
            <div className="favTop">
                <h2>Favorite Books</h2>
                <div className="books">
                    {favBooks.map((val)=>(
                        <>
                        <div className="bookInfo">
                            <h4>{val.titre} </h4>    
                            <p>{val.description} </p>
                         </div>
                        <div className="bookImg">
                        <img src="https://img-19.ccm2.net/cI8qqj-finfDcmx6jMK6Vr-krEw=/1500x/smart/b829396acc244fd484c5ddcdcb2b08f3/ccmcms-commentcamarche/20494859.jpg" alt="" />
                    </div>
                        </>
                    )) }
                    
                </div>
            </div>
            <div className="favBottom">
                <header>
                    <h2 class="tm-text-uppercase tm-text-gray-light tm-mb">
                        Contact Us
                    </h2>
                </header>
                <form action="index.html" class="tm-contact-form" method="POST">
                    <div class="tm-form-group">
                        <input type="text" id="contact_name" name="contact_name" class="form-control" placeholder="Name" required/>
                    </div>
                    <div class="tm-form-group">
                        <input type="email" id="contact_email" name="contact_email" class="form-control" placeholder="Email" required/>
                    </div>
                    <div class="tm-form-group">
                        <textarea rows="5" id="contact_message" name="contact_message" class="form-control" placeholder="Message" required></textarea>
                    </div>
                    <div class="tm-text-right">
                        <button type="submit" class="tm-btn tm-btn-secondary tm-btn-pad-big">Send</button>
                    </div>
                </form>
            </div>
            

    </main>
        </div>
    );
};

export default Favortie;