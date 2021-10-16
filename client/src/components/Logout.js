import React,{useEffect} from 'react'
import { useHistory } from 'react-router';
const Logout = () => {
//promise
const history = useHistory();

        useEffect(()=>{
        fetch('/logOut',{
            method:"GET",
                        headers:{
                            // Accept:"application/json",
                            "Content-Type":"application/json"
                        },
                        // credentials:"include"
  }).then((res) => {
    history.push('/', {replace : true});
    if(res.status != 200){
        const error=new Error(res.error);
        throw error;   
    }
  }).catch((err) => {
      console.log(err);
  });
 });

    return (<>
    <form method="GET"></form>
   <h1>welcome</h1>
   </>
    )
}

export default Logout
