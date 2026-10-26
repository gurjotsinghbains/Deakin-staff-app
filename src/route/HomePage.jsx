import { useState } from 'react'
import Cardlist from '../Cardlist'
import Header from '../Header'
function HomePage(){
let [search, setsearch] =useState("")
   
  function handlechange(event){
    let value = event.target.value;
    setsearch(value)


   }
  return (
    <>
      <div className='head'>
     <Header 
     text = "Staff List"
     />
     <input  type="text" placeholder='Search the Staff' onChange={handlechange}/>
     </div>
     <Cardlist
     searchTerm = {search}
     
     />

     
     </>
  )
}
export default HomePage