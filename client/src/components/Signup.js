import React,{useState} from 'react'
import { NavLink , useHistory } from 'react-router-dom'
 const Signup=()=>{
     const history=useHistory();
     const [user,setUser] =useState({
         name:'', email:'', phone:'', password:'', cpassword:''
     });
let name,value;
 const handleInputs=(e)=>{
    //  console.log(e);
     name=e.target.name;
     value=e.target.value;

     setUser({...user,[name]:value});
 }
const PostData= async(e)=>{
e.preventDefault();
const {name, email, phone, password, cpassword}=user;
  const res =await fetch("/register",{
      method:"POST",
      headers:{
          "Content-Type":"application/json"
      },
      body:JSON.stringify({
        name, email, phone, password, cpassword
      })
  });
  const data=await res.json();
  if(res.status===422 || !data){
      window.alert("Invalid Registration or Email already Exist")
      console.log("Invalid Registration")
  }else{
    window.alert("Registration  Successfull")
    console.log("Registration Successfull")
    history.push("/Login");
  }
}


    return (
        <div className="wrapper">
        <form method="POST" className="register-form registration-form " id="register-form">
            <div className="h5 font-weight-bold text-center mb-3">Register Page</div>
            <div className="form-group d-flex align-items-center ">
                <label htmlFor="name"> <i className="zmdi zmdi-account zmdi-hc-2x material-icon-name  pl-3  pt-2"></i></label>
                <input autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                id="name" name="name" type="text" className="form-control" placeholder=" Your Name"/>
            </div>

            <div className="form-group d-flex align-items-center">
                <label htmlFor="email"><i className="zmdi zmdi-email zmdi-hc-2x material-icon-name pl-3  pt-2"></i></label>
             <input autoComplete="off"
                value={user.email}
                onChange={handleInputs}
             id="email" name="email"  type="email" className="form-control" placeholder="Your Email"/>
            </div>


            <div className="form-group d-flex align-items-center">
            <label htmlFor="phone"><i className="zmdi zmdi-phone zmdi-hc-2x material-icon-name  pl-3  pt-2"></i></label>
             <input autoComplete="off"
            value={user.phone}
                onChange={handleInputs}
             type="phone" name="phone" id="phone"  className="form-control" placeholder="Your Phone"/>
            </div>
            
            <div className="form-group d-flex align-items-center">
            <label htmlFor="password"><i className="zmdi zmdi-lock-outline zmdi-hc-2x material-icon-name  pl-3  pt-2"></i></label>
                <input autoComplete="off"
                    value={user.password}
                    onChange={handleInputs}
                name="password"  id="password" type="password"  className="form-control" placeholder=" Your Password"/>
            </div>
            <div className="form-group d-flex align-items-center">
            <label htmlFor="cpassword"><i className="zmdi zmdi-lock zmdi-hc-2x material-icon-name  pl-3  pt-2"></i></label>
                <input autoComplete="off"
                    value={user.cpassword}
                    onChange={handleInputs}
                type="password" name="cpassword" id="cpassword" className="form-control" placeholder="Confirm Password"/>
            </div> 
                    <span>Already Have Account ?_</span>
            <NavLink className="link" to="/Login">Login</NavLink><br /><br />
            <div className="btn btn-primary mb-3 from-group form-button">
                <input type="submit" id="Signup" className="form-submit " name="Signup" value="Signup" onClick={PostData}/>
            </div>
            
        </form>
    </div>
    )

}
export default Signup
