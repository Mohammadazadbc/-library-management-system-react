import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { update } from '../redux/userSlice';
import "./profile.css"
const Profile = () => {

    let datFromLoc = JSON.parse(localStorage.getItem('user-info'));
    const name = datFromLoc.name;
    const lastname = datFromLoc.lastname;
    const email = datFromLoc.email;
    const profilePic = datFromLoc.profilePic;
    
    const dispatch = useDispatch();
        dispatch(update({name, email, lastname,profilePic}))
    
    
    
    const user = useSelector(state=>state.user)
   const img1 = "https://www.gannett-cdn.com/media/2021/06/03/USATODAY/usatsports/imageForEntry18-8on.jpg?width=2560";
   const img2 = "https://ggsc.s3.amazonaws.com/images/uploads/The_Science-Backed_Benefits_of_Being_a_Dog_Owner.jpg";
   const img3 = "https://www.helpguide.org/wp-content/uploads/king-charles-spaniel-resting-head-768.jpg";
   const DogsImg = [img1, img2, img3];
   let value = 1;

   const [newImg, setNextImg] = useState(DogsImg[value]);
    function leftSlider (){
        value ++;
        if(value <0){
            value = DogsImg.length;
        }
        else if(value >= DogsImg.length){

            value = 0;
        }
        setNextImg(DogsImg[value]);
    }
    
    function rightSlider (){
        value--;
        if(value <0){
            value = DogsImg.length-1;
        }
        else if(value > DogsImg.length){

            value = 0;
        }
        console.log(value);
        setNextImg(DogsImg[value]);
    }
    const handleLogout =()=>{
        localStorage.clear();
        window.location.reload();
    }


    return (
        <div className='profile'>
           
            <div className="profileWrapper">
                <div className="profileTop">
                    
                        <img src="https://wwwaxiellcom.cdn.triggerfish.cloud/uploads/sites/6/2019/03/public-libraries.jpg" alt="" />
                    
                    <div className="topBottom">
                        <div className='topBottomRight'> 
                        <img src="https://chicagophotovideo.com/wp-content/uploads/2018/01/professional-headshots-for-linkedin-chicago-1024x1024.jpg" alt="" />
                        </div>
                        <div className="topBottomLeft">
                            <div className='userInfo'>
                            <h3>{user.name} </h3>
                            <p> {user.lastname} </p>
                            </div>
                            <div className='favbook'>
                            <li>  <a href="/favorite">Favortie books</a> <img src="https://img.icons8.com/color/48/000000/likes-folder.png"/></li>
                            <li> <a href="/allbook">All books</a> <img src="https://img.icons8.com/fluency/48/000000/show-all-views.png"/></li>
                            <li onClick={handleLogout} >
                            <button className='btn text-primary' >Log out</button>
                            <img src="https://img.icons8.com/external-others-sbts2018/58/000000/external-logout-social-media-basic-1-others-sbts2018.png"/>
                            </li>
                            </div>
                        
                        </div>
                    </div>
                </div>


                <div className="profileBottom">
                    <div className="bottomLeft">
                        <h4>Friends</h4>
                        <div className='friendsList' >    
                        <div className="friends">
                            <p>John corter </p>
                            <img src="https://content1.getnarrativeapp.com/68f6039f-a2f9-4e15-9b91-4f7cebe2a378/img_ref/4e80a9d6-aef4-4875-ab94-5952b6926e07/Hamish-5_professional_headshots_photographer_headshot_750.jpg" alt="" />
                        </div>
                        <div className="friends">
                        <p>Arthur </p>
                            <img src="https://www.isabellerobak.com/wp-content/uploads/2020/05/portrait-professionnel-isabelle-robak.jpg" alt="" />
                        </div>
                        <div className="friends">
                        <p>Najiba</p>
                            <img src="https://p5.storage.canalblog.com/50/89/1228697/127715041.jpg" alt="" />
                        </div>
                        <div className="friends">
                        <p>Jules</p>
                            <img src="https://eiko.ai/eiko/meero/61EumC3myGnHVsEWnny6fflcQYU/eyJpbnB1dCI6eyJzb3VyY2VzIjpbImh0dHBzOlwvXC9tZWRpYS5tZWVyby5jb21cL2Jsb2ctbWVkaWFcLzQxMVwvMDVhMjcxMjctOTNjZS00NjFmLTlkNjUtYTk0OTlkNjYyNTgwLmpwZyJdfSwib3BlcmF0aW9ucyI6W3sidHlwZSI6InJlc2l6ZSIsIndpZHRoIjoxMDI0fV0sIm91dHB1dCI6eyJxdWFsaXR5Ijo3MH19" alt="" />
                        </div>
                        </div>
                    </div>
                    <div className="bottomCenter">
                    <img src={newImg} alt="" /> 
                    <div className='btns'>
                    <img onClick={leftSlider}  className='nextImgBtn' src="https://img.icons8.com/fluency/96/000000/circled-chevron-right.png"/>
                    <img onClick={rightSlider} className='beforeImgBtn' src="https://img.icons8.com/flat-round/64/000000/back--v1.png"/>
                    </div>
                    
                    </div>
                    <div className="bottomRight">
                        <h4>Advertising</h4>
                        <img src="http://www.hanzadagroup.com/assets/artists/7faa2-adv-01.jpg" alt="" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Profile;