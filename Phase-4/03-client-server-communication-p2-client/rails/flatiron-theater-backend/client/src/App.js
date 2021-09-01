import { func } from 'prop-types'
import {useEffect, useState} from 'react'
import ProductionCard from './components/ProductionCard'
import ProductionForm from './components/ProductionForm'

function App() {
  const [productions, setProductions] = useState([])
  const [errors, setErrors] = useState(false)

  useEffect(() => {
    fetch('/productions')
    .then(res => res.json())
    .then(setProductions)
  },[])

  function handlePost(obj){
      fetch('/productions',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        if(data.errors){
          setErrors(data.errors)
        } else {
          setProductions([...productions,data])
        }
      })
  }

  return (
    <div className="App">
      {errors?errors.map(e => <div>{e}</div>):null}
      <table>
     {productions.map(production => <ProductionCard key={production.id} production={production} />)}
     </table>
     <ProductionForm handlePost={handlePost} />
    </div>
  );
}

export default App;
