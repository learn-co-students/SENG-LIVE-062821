document.addEventListener('DOMContentLoaded', () => {
  // to run the server, in the directory with the dbStarWars.json run
  // json-server --watch dbStarWars.json
  // Create a function that will fetch from 
  // http://localhost:3000/starwars/1
  // Take a look at the index html and add the name, 
  // height, mass, hair color, eye color, 
  // birth year, gender, home world, and films.
  fetchOne(1)
  })

  function fetchOne(id){
    fetch(`http://localhost:3000/starwars/${id}`)
    .then(res => res.json())
    .then(json => addInfo(json))
  }

  function addInfo(swinfo){
    console.log(swinfo)
    document.querySelector('h1').textContent = swinfo.name
    document.querySelector('#height').textContent = `Height: ${swinfo.height}`
    document.querySelector('#mass').textContent = `Mass: ${swinfo.mass}`
    document.querySelector('#hair_color').textContent = `Hair Color: ${swinfo.hair_color}`
    document.querySelector('#eye_color').textContent = `Eye Color: ${swinfo.eye_color}`
    document.querySelector('#birth_year').textContent = `Birth Year: ${swinfo.birth_year}`
    document.querySelector('#gender').textContent = `Gender: ${swinfo.gender}`
    document.querySelector('#homeworld').textContent = `Homeworld: ${swinfo.homeworld}`


    document.querySelector('li').remove()
    //swinfo.films is the array we loop through
    swinfo.films.forEach(filmItem => {
      //filmItem is the item we are on in our loop
      let li = document.createElement('li')
      li.textContent = filmItem
      document.querySelector('.films-links').append(li)
    })

  }
 