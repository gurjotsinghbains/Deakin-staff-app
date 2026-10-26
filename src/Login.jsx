import Button from "./Button"
import Input from "./Input"
import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'
import {signinWithgoogle,creataUserdocfromauth,signinuser} from './utils/firebase'
import { useContext } from "react";

import { UserContext } from "./context/UserContext";
async function handleuser(){

const {user} = await signinWithgoogle();
const userDocref =await creataUserdocfromauth(user)
console.log(user)
}

function Login(){

  const { currentuser, setcurrentuser}=useContext(UserContext);
console.log(currentuser)

  async function handlelogin()
{
  const {user}= await signinuser(email,password)  ;
  setcurrentuser(user)
  console.log(user)
  console.log(currentuser)
  
}

 let [contact, setcontact]= useState({
         email:"",
         password:""
 
   })
     
   const {email,password} =contact
 
  function handleContact(event){
   const {name, value} = event.target;
   setcontact((preValue)=>{
     
  return {
          ...preValue,
          [name]:value
  }
    }
 
 
   )
   
  }
  
 
 
  return (
    <div className="head">
     <div className="login-style">

        <br></br>
         <Input 
         name ="email"
         type="email"
         placeholder="enter email"
         onChange= {handleContact}
         />
         <br></br>
          <Input 
         name ="password"
         type="password"
         placeholder="enter Password"
         onChange= {handleContact}
 
         />
         <br></br>
         <button onClick={handlelogin}>
          Login
         </button>

         <br></br>
         <button onClick ={handleuser}> Continue with Google</button>
         <Link to ='/signup'>
         Instead Sign up
         </Link>
        
         
 
        </div>
    </div>
)

}
export default Login