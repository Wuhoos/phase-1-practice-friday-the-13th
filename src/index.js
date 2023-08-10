// const movieImageDisplay = document.getElementById('movie-list')
// const image = document.getElementById('detail-image')
// const title = document.getElementById('title')
// const releaseYear = document.getElementById('year-released')
// const description = document.getElementById('description')
// const bloodAmount = document.getElementById('amount')
// const movieWatchedButton = document.getElementById('watched')
// const bloodForm = document.getElementById('blood-form')


// fetch('http://localhost:3000/movies')
// .then(response => response.json())
// .then(movieList => {
//     movieList.forEach(movie => {
//         showMovieImage(movie)
//     })
//     showMovieDetails(movieList[0])
// })

// function showMovieImage(movie){
//     const image = document.createElement('img')
//     image.src = movie.image
//     movieImageDisplay.append(image)
//     image.addEventListener('click', () => showMovieDetails(movie))
// }

// function showMovieDetails(movie){
//     image.src = movie.image
//     title.textContent = movie.title
//     releaseYear.textContent = movie.release_year
//     description.textContent = movie.description
//     bloodAmount.textContent = movie.blood_amount

//     if(movie.watched === false){
//         return movieWatchedButton.textContent = "Unwatched"
//     } else if( movie.watched === true){
//         return movieWatchedButton.textContent = "Watched"
//     }  
// }

// movieWatchedButton.addEventListener('click', () => {
//     if(movieWatchedButton.textContent === "Unwatched"){
//         return movieWatchedButton.textContent = "Watched"
//     } else if(movieWatchedButton.textContent === "Watched" ){
//         return movieWatchedButton.textContent = "Unwatched"
//     }
// })

// bloodForm.addEventListener('submit', (e) => {
//     e.preventDefault()
//     const amountOfBloodAdded = document.getElementById('blood-amount').value
//     const totalAmountBlood = document.getElementById('amount')
//     totalAmountBlood.textContent = parseInt(totalAmountBlood.textContent) + parseInt(amountOfBloodAdded)   
// })



//Version 1 blood amount presist when switch between movie
fetch('http://localhost:3000/movies')
.then(response => response.json())
.then(movies => {
    createImg(movies)
    renderMovie(movies[0])
})

function createImg(movie){
    movie.forEach(movieDetail => {
        const navElement = document.getElementById('movie-list')
        const movieImage = document.createElement('img')
        movieImage.src = movieDetail.image
        navElement.appendChild(movieImage)
        movieImage.addEventListener('click', e => {
            e.preventDefault()
            renderMovie(movieDetail)
        })
    })
}

function renderMovie(movie){
        const title = document.getElementById('title')
        const releaseYear = document.getElementById('year-released')
        const description = document.getElementById('description')
        const image = document.getElementById('detail-image')
        const watchedOrNot = document.getElementById('watched')
        const bloodAmount = document.getElementById('blood-amount')

        bloodAmount.textContent = movie.blood_amount
        image.src = movie.image
        title.textContent = movie.title
        releaseYear.textContent = movie.release_year
        description.textContent = movie.description
        
        if (movie.watched === false){
            return watchedOrNot.textContent = 'Unwatch'
        } else if ( movie.watched === true) {
            return watchedOrNot.textContent = 'Watched'
        }
}


const watchButton = document.getElementById('watched')
watchButton.addEventListener('click', e => {
    buttonChange(e.target)
})

function buttonChange(button){
    if(button.textContent === "Unwatch"){
         button.textContent = 'Watch'
    } else if (button.textContent === "Watch"){
        button.textContent = 'Unwatch'
    }
}

const input = document.getElementById('blood-form')
input.addEventListener('submit', e => {
    e.preventDefault()
    const bloodAmount = document.getElementById('blood-amount').value
    const totalAmountOfBlood = document.getElementById('amount')
    totalAmountOfBlood.textContent = parseInt(totalAmountOfBlood.textContent) + parseInt(bloodAmount)
})