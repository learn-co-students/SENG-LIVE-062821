import ProductionCard from './ProductionCard'
import {useEffect, useState} from 'react'

function ProductionContainer({productions, errors, setUser, setProductions, setErrors}) {
    useEffect(() => {
        fetch("/me").then((response) => {
          if (response.ok) {
            response.json().then((user) => setUser(user));
          }
        });
        fetch('/productions')
        .then(res => res.json())
        .then(data => {
          console.log('hi')
          console.log(data)
          console.log(errors)
          if(data.error){
            console.log('24')
            setErrors(data.error)
          } else {
            console.log('26')
            setProductions(data)
          }
        })
      },[]) 
    return (
     <div>
         {errors? errors.map(e => <div>{e}</div>):<table>{productions.map(production => <ProductionCard  key={production.id} production={production} />)}</table>
        }
         </div>
    );
  }
  
  export default ProductionContainer;