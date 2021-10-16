import React,{useState} from 'react'
import { NavLink , useHistory } from 'react-router-dom'




const Login = () => {
  const history=useHistory();


  
const [email,setEmail]=useState('');
const [password,setPassword]=useState('');


const loginUser =async (e)=>{
  e.preventDefault();

  const res = await fetch('/signin',{
    method:"POST",
    headers:{
      "Content-Type":"application/json"
    }, 
    body:JSON.stringify({
         email,
         password
    })
  });
  const data=res.json();

  if(res.status === 400 || !data){
    window.alert("Invalid Credentials");
  }else{

    window.alert("Login Successfull");
    history.push("/")
  }
}
  return (<>
    <div className="wrapper">
    <form method="POST">
        <div className="h5 font-weight-bold text-center mb-3">Login Page</div>
        
        <label>EMAIL ID</label> 
         <div className="form-group d-flex align-items-center">
                <label htmlFor="email"><i className="zmdi zmdi-email zmdi-hc-2x material-icon-name pl-3  pt-3"></i></label>
             <input autoComplete="off" id="email" name="email" type="email" className="form-control"
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            placeholder="Your Email" required/>
            </div>
        <label>PASSWORD</label>     
        <div className="form-group d-flex align-items-center">
            <label htmlFor="password"><i className="zmdi zmdi-lock-outline zmdi-hc-2x material-icon-name pl-3  pt-3"></i></label>
                <input autoComplete="off"  name="password"  id="password" type="password" className="form-control"
               value={password}
               onChange={(e)=>setPassword(e.target.value)}
               placeholder=" Your Password" required/>
            </div>
            <span> No Account?_</span>
        <NavLink className="link" to="/Signup">Create One</NavLink><br /><br />        
        <div className="btn btn-primary mb-3 from-group form-button">
                <input type="submit" id="Signin" className="form-submit" name="Signup" value="Log In"
                onClick={loginUser}
                />
            </div>
    </form>
</div>
 </>
  )
}

export default Login
