import Navigation from "./Navigation"
import Footer from "../Footer"

import { useContext } from "react"
import { UserContext } from "../context/UserContext"
function NavFooter(){
     
const {currentuser}=useContext(UserContext)

  console.log(currentuser)
    return(     <>

   <Navigation />

   <Footer />
   </>
     )

}
export default NavFooter