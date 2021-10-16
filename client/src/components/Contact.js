import React ,{useEffect,useState}from 'react'

const Contact = () => {
    
const [userData,setUserData] = useState({name:"" , email:"",phone:"",message:""});

    const usercontact=async () =>{
                try{
                    const res = await fetch('/getdata',{

                        method:"get",
                        headers:{
                            "Content-Type":"application/json"
                        },
                    });

                     const data= await res.json();
                     console.log(data);
                     
                
                     setUserData({...userData, name:data.name, email:data.email, phone:data.phone});



                     if(!res.status === 200){
                         const error=new Error(res.error);
                         throw error;
                     }
                }catch(err){
                    console.log(err)
                  
                }
    }
  
    useEffect(() => {
        usercontact();
  }, []);

        //   we are storing data in state
        const handleInputes=(e)=>{
        const name =e.target.name;
        const value=e.target.value;
        setUserData ({...userData, [name]:value});
} 
// send the data to backend
const contactForm=async (e)=>{
                e.preventDefault();

                const { name,email,phone,message}=userData;

                const res=await fetch('/contact',{
                    method:"post",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body:JSON.stringify({
                        name,email,phone,message                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      
                    })
    });
    const data=await res.json();
    if(!data){
        console.log("Message Not Send");
    } else{
     alert("Message Send");
     setUserData({...userData, message: ""})

    }
}


    return (
     <>
     
     <form method="POST">

         <div className="contact-form-input d-flex -flex-md-row flex-column ">

         <div className="row contact_row m-2 mt-5">
         <label className="  text-center contact-label contact_form_name col-md-3  mr-5  ml-5 mt-4 " > Name</label>
         <label className="  text-center contact-label contact_form_name col-md-3  mr-5  ml-5 mt-4 "> Email</label>
         <label className="  text-center contact-label contact_form_name col-md-3  mr-5  ml-5 mt-4 "> Phone</label>
         </div>

             <div className="row contact_row m-2 mt-2">
                
                    <input type="text" id="contact_form_name"  className="  text-center contact_form_name input_field col-md-3  mr-5   ml-5  "
                        
                        name="name"
                        onChange={handleInputes}
                        value   ={userData.name}
                        placeholder="YourName" required/>
                
                    <input type="email" id="contact_form_email"  className=" text-center contact_form_email input_field col-md-3  ml-5 mr-5 "
                        
                        name="email"
                        onChange={handleInputes}
                        value   ={userData.email}
                        placeholder="YourEmail" required/>
                
          
                    <input type="text" id="contact_form_phone"  className="  text-center contact_form_phone input_field col-md-3 mr-5  ml-5 "
                        
                        name="phone"
                        onChange={handleInputes}
                        value={userData.phone}
                        placeholder="YourPhone" required/>
</div>
         </div>
         <div className="contact_form_text  text-center mt-5 ">
             <textarea className="text_field contact_form_message" 
             name="message"
             onChange={handleInputes}
             value={userData.message} placeholder=" Enter Your Messege" ></textarea>
         </div><br />

         <div className="contact_form_button ml-5 row contact_row m-2 mt-2" > 
         <button  onClick={contactForm} type="submit" className="contact-submit_button button" >
            SEND
         </button>
         </div>
     </form>
     
     </>
    )
}

export default Contact
