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

function renderPokemonDetail(pokemon){
  console.log(pokemon)
  return (`
    <div class="pokemon-card" id=${pokemon.id}> 
      <div class="pokemon-frame">
        <h1>${pokemon.id}: ${pokemon.name}</h1>
        <div class="pokemon-image">
        <img class="toggle-sprite" src="${pokemon.sprites.front}">
        <img class="toggle-sprite" src="${pokemon.sprites.back}">
        </div>
        <div>
          <p id="type">Types: ${pokemon.types.join(' ')}</p>
          <p id="height" >Height: ${pokemon.height}</p>
          <p id="weight">Weight: ${pokemon.weight}</p>
          <p id="abilities"> Abilities: ${pokemon.abilities.join(' ')}
          <p id="moves-list"> Moves: ${pokemon.moves.join(' ')}
          <form>
            <input type="text" id="moves" name="moves">
            <input type="submit" value="add moves">
          </form>
        </div>
      </div>
    </div>
  `)
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
  .then(json => {
    document.querySelector('#pokemon-container').innerHTML =  renderPokemonDetail(json)

    document.querySelector('#pokemon-container form').addEventListener('submit', (event) => {
      event.preventDefault()
      json.moves.push(event.target.moves.value)
      document.querySelector('#moves-list').textContent = json.moves.join(' ')
    })

  })
}

