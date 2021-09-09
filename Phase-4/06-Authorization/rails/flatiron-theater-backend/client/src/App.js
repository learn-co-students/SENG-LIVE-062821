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
  const [user, setUser] = useState(false)

  useEffect(() => {
    fetch("/me").then((response) => {
      if (response.ok) {
        response.json().then((user) => setUser(user));
      } 
    });
  },[])

  if(!user) return <Login setUser={setUser} setErrors={setErrors}/>;

  function handlePost(obj){
      fetch('/productions',{
        method:'POST',
        headers: {'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => {
        console.log('hi')
        console.log(data)
        if(data.ok){
          setErrors(data.errors)
        } else {
          setProductions([...productions,data])
        }
      })
  }

  function onLogout(){
    setProductions([])
    setUser(false)
  }
  // if (!user) return <Login setUser={setUser} setErrors={setErrors} />;
  return (
    <>
    <Navigation onLogout={onLogout} user={user}/>
    <Switch>
    <Route exact path="/">
      <ProductionContainer errors={errors} productions={productions} setUser={setUser} setErrors={setErrors} setProductions={setProductions}/>
    </Route>
    <Route exact path="/productions/new">
      <ProductionForm handlePost={handlePost} errors={errors} />
    </Route>
    <Route exact path="/productions/:id">
        <ProductionDetail/>
    </Route>
    <Route path="/sign_up">
          <Auth />
    </Route>
    <Route path="/login">
          <Login setErrors={setErrors} />
    </Route>
    </Switch>
    </>
  );
}

export default App;
