import React, { useState} from 'react'

function ProductionForm({handlePost}) {
  const [title, setTitle] = useState('')
  const [genre, setGenres] = useState('')
  const [budget, setBudget] = useState('')
  const [image, setImage] = useState('')
  const [director, setDirector] = useState('')
  const [description, setDescription] = useState('')
  function onSubmit(e){
    e.preventDefault()
    const production = {
      title,
      genre,
      budget,
      image,
      director,
      description,
      ongoing:true
    }
    handlePost(production)
  }
    return (
      <div className="App">
       <form onSubmit={onSubmit}>
       <label>
          Title
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <br/>
        <label>
        Genre
          <input type="text" value={genre} onChange={(e) => setGenres(e.target.value)} />
        </label>
        <br/>
        <label>
        Budget
          <input type="number" value={budget} onChange={(e) => setBudget(e.target.value)} />
        </label>
        <br/>
        <label>
        Image
          <input type="text" value={image} onChange={(e) => setImage(e.target.value)} />
        </label>
        <br/>
        <label>
        Director
          <input type="text" value={director} onChange={(e) => setDirector(e.target.value)} />
        </label>
        <br/>
        <label>
        Description
          <textarea type="text" rows="4" cols="50" value={description} onChange={(e) => setDescription(e.target.value)} />
        </label>
        <br/>
        <input type="submit" value="Submit Production" />
       </form>
      </div>
    );
  }
  
  export default ProductionForm;