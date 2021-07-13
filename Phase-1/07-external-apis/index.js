document.querySelector('form').addEventListener('submit', youtubeSearch)

const API = ''

function youtubeSearch(e){
  e.preventDefault()
  console.log(e.target.search.value)

fetch(`https://youtube.googleapis.com/youtube/v3/search?part=snippet&order=date&q=${e.target.search.value}&type=video&videoDefinition=any&key=${API}`)
.then(res => res.json())
.then(data => {
    buildVideo(data.items[0])
    document.querySelector('aside').innerHTML = ''
    data.items.forEach(buildAside)
})
}

function buildVideo(video){
    console.log(video)
    let main = document.querySelector('main')
    let iframe = document.createElement('iframe')
    let info_container = document.createElement('div')
    let h1 = document.createElement('h1')
    let p = document.createElement('p')
    main.innerHTML = ''
    main.id = 'main_video'
    iframe.src = `https://www.youtube.com/embed/${video.id.videoId}`
    iframe.style.width = '800px'
    iframe.style.height = '500px'
    h1.innerText = video.snippet.title
    p.innerText = video.snippet.description
    info_container.id = 'info_container'
    info_container.append(h1,p)
    main.append(iframe,info_container)
}

function buildAside(video){
    console.log(video.snippet.thumbnails.default.url)
    let div = document.createElement('div')
    let img = document.createElement('img')
    div.className = 'aside_videos'
    img.src = video.snippet.thumbnails.default.url
    div.appendChild(img)
    div.addEventListener('click',() => buildVideo(video) )
    document.querySelector('aside').appendChild(div)
}




// fetch ("https://swapi.dev/api/planets/1/?format=wookiee")
// .then (res => res.json())
// .then (data => console.log(data))


