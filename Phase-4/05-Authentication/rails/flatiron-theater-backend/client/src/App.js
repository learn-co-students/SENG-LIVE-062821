import { Route, Switch } from "react-router-dom";

import {useEffect, useState} from 'react'
import ProductionContainer from './components/ProductionContainer'
import ProductionForm from './components/ProductionForm'
import Navigation from './components/Navigation'
import ProductionDetail from './components/ProductionDetail'
import Auth from './components/Auth'
import Login from './components/LogIn'

function App() {
  const [productions, setProductions] = useState([])
  const [errors, setErrors] = useState(false)
  const [cart, setCart] = useState([])

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
    <>
    <Navigation cart={cart}/>
    <Switch>
    <Route exact path="/">
      <ProductionContainer productions={productions}/>
    </Route>
    <Route exact path="/productions/new">
      <ProductionForm handlePost={handlePost} errors={errors} />
    </Route>
    <Route exact path="/productions/:id">
        <ProductionDetail cart={cart} setCart={setCart}/>
    </Route>
    <Route path="/sign_up">
          <Auth />
    </Route>
    <Route path="/login">
          <Login />
    </Route>
    </Switch>
    </>
  );
}

export default App;
