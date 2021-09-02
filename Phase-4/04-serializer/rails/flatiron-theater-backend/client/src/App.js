import { Route, Switch } from "react-router-dom";

import {useEffect, useState} from 'react'
import ProductionContainer from './components/ProductionContainer'
import ProductionForm from './components/ProductionForm'
import Navigation from './components/Navigation'
import ProductionDetail from './components/ProductionDetail'
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
    // <div className="App">
    //   {errors?errors.map(e => <div>{e}</div>):null}
    //  <ProductionContainer productions={productions}/>
    //  <ProductionForm handlePost={handlePost} />
    // </div>
    <>
    <Navigation/>
    <Switch>
    <Route exact path="/">
      <ProductionContainer productions={productions}/>
    </Route>
    <Route exact path="/productions/new">
      <ProductionForm handlePost={handlePost} errors={errors} />
    </Route>
    <Route exact path="/productions/:id">
        <ProductionDetail  />
    </Route>
    </Switch>
    </>
  );
}

export default App;
