import React,{useEffect,useState}from 'react'
import titleimg from "../images/redclock.png"
import img2 from "../images/sleepyhead.jpg"
import goodsleep from "../images/goodsleep.png"


const Home = () => {
      
const [userName,setUserName] = useState('');
const [ show,setShow]=useState(false);


const userHome=async () =>{
            try{
                const res = await fetch('/getdata',{

                    method:"get",
                    headers:{
                        "Content-Type":"application/json"
                    },
                });

                 const data= await res.json();
                 console.log(data);
                 setUserName(data.name);
                 setShow(true);

            }catch(err){
                console.log(err)
              
            }
}

useEffect(() => {
    userHome();
}, []);

  return (<>
    <section id="title">
      <div className="container-fluid">

        {/* <!-- NAVBAR --> */}
        <nav className="navbar navbar-expand-lg navbar-dark">
          <span style={{ padding:'10px' }}><i class="zmdi zmdi-alarm zmdi-hc-3x" style={{ color: "white" }}></i></span>
          <a className="navbar-brand" href="#"><h2> ᔕᒪEEᑭY</h2></a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav ml-auto">
              <li className="nav-item">
                <a className="nav-link" href="#about"><b> ABOUT TRACKER</b></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#support"><b> SUPPORT</b></a>
              </li>
            </ul>
          </div>
        </nav>


        <hr />

        {/* <!--TITLE--> */}
        <div className="row">
          <div className="col-lg-6">
            <p>WELCOME</p>
            <h1>{userName}</h1><br />
            <h2 className="title-padding">{ show ? ' In The Sleepy, track your sleep patterns' :'Track your sleep pattern and wake up rested'}</h2>
           
            <button className="btn btn-lg btn-light download-button g-signin2" style={{ padding: '0px' }} data-onsuccess="onSignIn"></button>
          </div>
          <div className="col-lg-6">
            <img className="title-image" src={titleimg} alt="alarm clock" />
          </div>
        </div>

      </div>
    </section>


    <section id="about">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-4 divpadding">
            <i className="fas fa-procedures fa-5x coloringfont"></i>
            <h3>Sleep duration</h3>
            <p>Create your own sleep duration by setting up sleep and wakeup time. </p>
          </div>
          <div className="col-lg-4 divpadding">
            <i className="fas fa-list fa-5x coloringfont"></i>
            <h3>Entries</h3>
            <p>You can keep track of entries made a Week ago.</p>
          </div>
          <div className="col-lg-4 divpadding">
            <i className="fas fa-edit fa-5x coloringfont"></i>
            <h3>Manage</h3>
            <p>You can edit,reset or even cancel the sleep schedule.</p>

          </div>

        </div>
        <br />
        <hr />
        <div className="row">
          <div className="col-lg-6 divpadding">
            <img className="imagesize" src={img2} alt="Sleep deprivation" />

          </div>
          <div className="col-lg-6 mt-5 divpadding extrapadding">
            <h3>Some of the most serious potential problems associated with chronic sleep deprivation are high blood pressure, diabetes, heart attack, heart failure or stroke. Other potential problems include obesity, depression, impairment in immunity
              and lower sex drive. Chronic sleep deprivation can even affect your appearance. - <em style={{ color: '#bbb' }}>health.clevelandclinic.org</em></h3>
          </div>
        </div> <br /><br />

        <hr />

        <div className="row">
          <div className="col-lg-6 mt-5 divpadding">
            <h3>A review of 15 studies found that people who don't get enough sleep are at far greater risk of heart disease or stroke than those who sleep 7–8 hours per night ( 15 ). Sleeping less than 7–8 hours per night is linked to an increased
              risk of heart disease and stroke.-<em style={{ color: '#bbb' }}> <b> healthline.com</b></em></h3>

          </div>

      <div className="col-lg-6 divpadding">
        <img className="imagesize" src={goodsleep} alt="goosleep image" />
      </div>
    </div>
      </div>
    </section>
    <hr />


{/* try it out */}
    
    <section id="cta">
      <h3 className="diff-font">What are you waiting for?Try out sleepy now.</h3>
      <button className="btn btn-lg btn-light download-button g-signin2" href='/google' style={{ padding: "0px" }} data-onsuccess="onSignIn"></button>
    </section>


    <footer id="support">
      <a className="anchor-color " href="https://twitter.com"><i className="zmdi zmdi-twitter zmdi-hc-2x p-3"></i></a>
      <a className="anchor-color" href="https://www.facebook.com"><i className="zmdi zmdi-facebook zmdi-hc-2x p-3"></i></a>
      <a className="anchor-color" href="https://www.instagram.com"><i className="zmdi zmdi-instagram zmdi-hc-2x p-3"></i></a>
      <a className="anchor-color" href="mailto:xyz@gmail.com"><i className="zmdi zmdi-email zmdi-hc-2x p-3"></i></a>
      <h3>© Copyright 2021 Sleepy</h3>

    </footer>
  </>
  )
}

export default Home
