import { Outlet } from "react-router-dom";
import {Link} from "react-router-dom"
function Navigation(){

    return(
        <>
          <Link to ="/">
             Home 
          </Link>

          <Link to ="/about">
           About
          </Link>
         <Link to= "/">
Contact          
</Link>
 <Link to ="\login">
     Login
 </Link>
 
          <Outlet />
        </>
    )

}
export default Navigation;