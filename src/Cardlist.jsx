import Card from "./Card";
import './Cardlist.css'
import { StaffContext } from "./context/StaffContext";
import stafflist from "./stafflist";
import { useContext } from "react";
function Cardlist(props){

const {staff} = useContext(StaffContext)
  // const filteredstaff   = staff.filter((staff)=>{

  //   return(staff.name.toLowerCase().startsWith(props.searchTerm.toLowerCase()))


  //    })
return(
<div className="row">
   
  
   { Object.keys(staff).map(function c(name, i){
return<Card 
      key= {staff[name].key}
      image = {staff[name].image}
      name=  {staff[name].name}
      job ={staff[name].job}
     
    />
    

    })}


</div>

)

}

export default Cardlist;