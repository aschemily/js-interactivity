console.log('hello world')

let input = document.querySelector('input')
const form = document.querySelector('form')
const message = document.getElementById('message')


const addMovie = (e) =>{
    e.preventDefault()
    let movie = document.createElement('li')
    let movieTitle = document.createElement('span')
    movieTitle.textContent = input.value
    //console.log('movie title', movieTitle.innerHTML)
    movieTitle.addEventListener('click', crossOfMovie)
   
   movie.appendChild(movieTitle)

   document.querySelector('ul').appendChild(movie)

   let deleteBtn = document.createElement('button')
    deleteBtn.textContent = 'X'

    movie.appendChild(deleteBtn)
    deleteBtn.addEventListener('click', deleteMovie)
}

const deleteMovie = (e) =>{
    e.target.parentNode.remove() 
    //console.log(e.target.parentNode)
    message.textContent = "Movie Deleted"
}

const crossOfMovie = (e) =>{
   // console.log('e is', e.target)
  e.target.classList.toggle('checked')
  //console.log('e.target.classList', e.target.classList)

  if(e.target.classList.contains('checked')){
      message.textContent = 'Movie Watched!'
  }else{
      message.textContent = 'Movie added back!'
  }
}




 

//console.log('movie', movie)



// input.addEventListener('input', addMovie)
form.addEventListener('submit', addMovie)


