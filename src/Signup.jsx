import Button from "./Button"
import Input from "./Input"
import { useState } from "react";
import { Link } from "react-router-dom";
import './Login.css'
import {creatinguserwithsignup, creataUserdocfromauth} from './utils/firebase'
function Signup(){
 let [contact, setcontact]= useState({
         displayName:"",
         email:"",
         password:"",
         confirmPassword:""
 
   })
   const {displayName, email, password,confirmPassword} =contact
   console.log(contact)


   async function handleuser(){

       if (password !== confirmPassword) 
       {
        alert("password and confirm password should be matched")
        return;
       }
       const {user}= await creatinguserwithsignup(email,password)  
       const r= await creataUserdocfromauth(user, {displayName})  
      console.log(r)
   }

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
         name ="displayName"
         type="text"
         placeholder="enter name"
         onChange= {handleContact}
         />
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
          <Input 
         name ="confirmPassword"
         type="password"
         placeholder=" confirm Password"
         onChange= {handleContact}
 
         />
         <br></br>
         <button       onClick={handleuser} >Sign up</button>

         <Link to ='/login'>
         Login
         </Link>
 
        </div>
    </div>
)

}
export default Signup