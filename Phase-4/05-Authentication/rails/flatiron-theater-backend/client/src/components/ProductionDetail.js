import { useParams } from "react-router-dom";
import {useEffect, useState} from 'react'
function ProductionDetail({cart, setCart}) {
const [production, setProduction] = useState({crew_members:[], performers_and_roles:[]})
  const params = useParams();
  useEffect(()=>{
    console.log('hi')
    fetch(`/productions/${params.id}`)
    .then(res => res.json())
    .then(data => {
      console.log(data)
      setProduction(data)
    })
  },[])
  
  function buyTicket(production){
    setCart([...cart, production])
  }

    const {title, budget, genre, image,description, crew_members, performers_and_roles} = production
    return (
      <div className="card" >
      <h1>{title}</h1>
       <h3>{genre}</h3>
       <h3>$ {budget}</h3>
       <img style={{width:'100px'}} src={image}/>
       <p>{description}</p>
       <button onClick={() => buyTicket(production)}>Buy Ticket</button>
       <h1>Performers</h1> 
       {performers_and_roles.map(pr => <div>{pr}</div>)}
       <h1>Crew Members</h1>
        <div>
          {crew_members.map(cm => <div>{cm.job_title} : {cm.name}</div>)}
        </div>
      </div>
    );
  }
  
  export default ProductionDetail;