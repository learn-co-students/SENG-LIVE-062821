//Render ***********
function renderAside(storeObj){
  console.log(storeObj)
  document.querySelector('.location').textContent = storeObj.name
  document.querySelector('#hours').textContent = storeObj.hours
  // document.getElementById('hours').textContent = storeObj.hours
  console.log(document.querySelectorAll('aside ul li'))
  document.querySelectorAll('aside ul li')[0].textContent = storeObj.number
  document.querySelectorAll('aside ul li')[1].textContent = storeObj.address
  // console.log(document.getElementsByTagName('div'))

}

function renderCard(book){
  //console.log(book)
  let li = document.createElement('li')
  let h4Title = document.createElement('h4')
  let h4Author = document.createElement('h4')
  let img = document.createElement('img')

  li.className = 'card'
  img.src = book.image_url
  h4Title.textContent = book.title 
  h4Author.textContent = book.author

  li.append(img, h4Title, h4Author)
  document.querySelector('#book-list').prepend(li)

  console.log(li)
  

}


//Initial Render 
function initialRender(){
  renderAside(bookStore)
  document.querySelector('#book-list li').remove()
  bookStore.inventory.forEach(book => renderCard(book))
  //bookStore.inventory.forEach(renderCard)

}
initialRender()
