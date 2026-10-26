import './Cardlist.css'
function Card(props){

return(
   <div className='column'>
      <img src = {props.image} alt ="staff" height ="200" width ="200"/>
      <h3>{props.name}</h3> 
      <p>{props.job}</p>
   
   </div>
    
)

}

export default Card;