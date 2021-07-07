//Will run callback after dom has loaded
document.addEventListener('DOMContentLoaded', () => {
  fetchAllPokemon()
})

//Render ------------------------------------------------------------
function renderSinglePokemon(pokemon){
  //Using Create Element
  let divContainer = document.createElement('div')
  let divFrame = document.createElement('div')
  let divImage = document.createElement('div')
  let h1 = document.createElement('h1')
  let img = document.createElement('img')

  divContainer.className = 'pokemon-card'
  divFrame.className = 'pokemon-frame'
  divImage.className = 'pokemon-image'
  h1.className = 'center-text'
  h1.textContent = pokemon.name 
  img.src = pokemon.sprites.front

  divImage.append(img)
  divFrame.append(h1, divImage)
  divContainer.append(divFrame)

  divContainer.addEventListener('click',() => showPokemon(pokemon.id))

  document.querySelector('#pokemon-container').append(divContainer)
}

//GET Requests ------------------------------------------------------
//GET All
function fetchAllPokemon(){
  fetch('http://localhost:3000/pokemon')
  .then(res => res.json())
  .then(json => json.forEach(renderSinglePokemon))
 
}

//GET One
function showPokemon(id){
  console.log(id)
  fetch(`http://localhost:3000/pokemon/${id}`)
  .then(res => res.json())
  .then(json => console.log(json))
}

