import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [pets, setPets] = useState([])
  const [shelters, setShelters] = useState([])
  const [name, setName] = useState('')
  const [breed, setBreed] = useState('')
  const [age, setAge] = useState('')
  const [weight, setWeight] = useState('')
  const [shelterId, setShelterId] = useState('')
  const [errors, setErrors] = useState('')


  useEffect(()=>{
    fetch('/pets')
    .then(res => res.json())
    .then(setPets)

    fetch('/shelters')
    .then(res => res.json())
    .then(setShelters)
    
    },[])

    function handleSubmit(e){
      e.preventDefault()
      const obj = {
        name,
        age,
        weight,
        breed,
        gps_chip:true,
        shelter_id: shelterId
      }
      fetch('/pets',{
        method:'POST',
        headers:{'Content-Type': 'application/json'},
        body:JSON.stringify(obj)
      })
      .then(res => res.json())
      .then(data => {
        if(data.error){
          setErrors(data)
        } else {
          setPets([...pets, obj])
        }
      })
    }
  return (
    <div className="App">
      {pets.map(pet => <div>{pet.breed}: {pet.name}</div>)}
      
      {errors? errors.map(e => <div>{e}</div>):null}
      
      <form onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        
        <label>Breed</label>
        <input type="text" value={name} onChange={(e) => setBreed(e.target.value)} />
        
        <label>Age</label>
        <input type="number" value={name} onChange={(e) => setAge(e.target.value)} />
        
        <label>Weight</label>
        <input type="number" value={name} onChange={(e) => setWeight(e.target.value)} />
        
        <label>Shelter</label>
        <select onChange={(e) => setShelterId(e.target.value)} >
        
        <option selected="selected">Select a Shelter</option>
          {shelters.map(shelter => <option value={shelter.id}>{shelter.name}</option>)}
        </select>
        <input type="submit"  />

      </form>
    </div>
  );
}

export default App;

