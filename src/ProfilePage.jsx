import { getAuth } from "firebase/auth"
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
function ProfilePage(){

 const auth = getAuth();
   
const navigate =useNavigate();

 useEffect(()=>{
       console.log(auth.currentUser)

 }, [])
  function logout(){

    auth.signOut();
    navigate('/')

  }

    return(
        <>
        {auth.currentUser ? <h1>{auth.currentUser.email}</h1> : <h1>user not logged in</h1>}
        {auth.currentUser && <button onClick={logout}>Log Out</button>}
        </>
    )


}
export default ProfilePage