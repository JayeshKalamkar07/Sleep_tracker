import React,{useEffect,useState} from 'react'
import jkpic from "../images/background.jpg"
import {useHistory} from "react-router-dom"

const About = () => {
   
const history =useHistory();
//
const [userData,setUserData] = useState({});

    const callAbout=async () =>{
                try{
                    const res = await fetch('/about',{

                        method:"get",
                        headers:{
                            Accept:"application/json",
                            "Content-Type":"application/json"
                        },
                        credentials:"include"
                    });
                   
                     const data= await res.json();
                     console.log(data);
                     
                
                     setUserData(data);



                     if(!res.status === 200){
                         const error=new Error(res.error);
                         throw error;
                         
                     }
                }catch(err){
                    console.log(err)

                    history.push('/login')
                }
    }
    
    useEffect(() => {
    callAbout();
  }, []);

    return ( 
       <>
                            <div className="container emp-profile">
                                <form  method="get">
                        <div className="row roww mt-5 pt-5">
                            <div className="col-md-4">
                                <div className="profile-img">
                                <img  src={jkpic} alt="jk" />
                                </div>     
                            </div>
                            <div className="col-md-6">
                                <div className="profile-head">
                                    <h5>{userData.name}</h5>
                                    <p className="profile-reating">RANKING : <span>1/10</span></p>
                                    
                                    <ul className="nav nav-tabs" role="tablist">
                                        <li className="nav-item">
                                            <a className="nav-link active mt-5" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="false">About</a>
                                        </li>
                            
                                        </ul>
                                </div>
                            </div>
                            <div className="col-md-2">
                                <input type="submit" className="profile-edit-btn" name="btnAddMore" value="Edit-Profile" />
                            </div>
                        </div>

                <div className="row roww  ">
                    {/* left side url */}
                    <div className="col-md-4">
                        <div className="profile-work pt-3">

                            <p> WORK LINK</p>
                            <a href=" https://www.youtube.com/watch?v=cJ74XdrOI60" target="_sleep"> Youtube</a><br />
                            <a href="https://www.diet-health.info/en/100122/blog/6279/health/what-makes-a-good-nights-sleep?gclid=Cj0KCQjwzYGGBhCTARIsAHdMTQxY0bf6Q_uKZvgo9GTAfus7BL8oDlbdRKwP7J-mdCmKuD2sAAeQqogaAl-hEALw_wcB" target="_sleep"> Google</a><br />
                            <a href="http://" target="_sleep"> Stack OverFlow</a><br />
                            <a href="http://" target="_sleep"> Github</a><br />
                            <a href="http://" target="_sleep"> Web Devloper</a><br />
                            <a href="http://" target="_sleep"> Software Engineering</a><br />
                        </div>
                    </div>

                    {/* right side data toggle */}
                    <div className="col-md-8 pl-5 about-info">

                        <div className="tab-content profile-tab" id="myTabContent">

                        <div className="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">

                            <div className="row roww">
                                <div className="col-md-6">
                                    <label>User ID</label>
                                </div>
                                <div className="col-md-6">
                                   <p>{userData._id}</p>
                                </div>
                            </div>
                            <div className="row roww mt-2">
                                <div className="col-md-6">
                                    <label>Name</label>
                                </div>
                                <div className="col-md-6">
                                   <p>{userData.name}</p>
                                </div>
                            </div>
                            <div className="row roww mt-2">
                                <div className="col-md-6">
                                    <label>Email</label>
                                </div>
                                <div className="col-md-6">
                                   <p> {userData.email}</p>
                                </div>
                            </div>
                            <div className="row roww mt-2">
                                <div className="col-md-6">
                                    <label>Phone</label>
                                </div>
                                <div className="col-md-6">
                                   <p>{userData.phone}</p>
                                </div>
                            </div>
                        </div>
                      
                        </div>
                    </div>




                </div>



           </form>
            </div>
       </>
    )
}

export default About