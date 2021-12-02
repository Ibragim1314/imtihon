let API_KEY = 'b971c2f0de8767f08d2bb84160ba24b7'
let tokenUpcoming = (`https://api.themoviedb.org/3/movie/upcoming?api_key=${API_KEY}&page=1`)
let tokenTop = (`https://api.themoviedb.org/3/movie/top_rated?api_key=${API_KEY}&page=1`)
let tokenPop = (`https://api.themoviedb.org/3/movie/popular?api_key=${API_KEY}&page=1`)
let topFilms = document.querySelectorAll(".btns")[0]
let popularFilms = document.querySelectorAll(".btns")[1]
let upcomingFilms = document.querySelectorAll(".btns")[2]
let btn = document.querySelector('.btn')
let append = document.querySelector('.append')
async function films()  {
    console.log(1);
    let response = await fetch(tokenTop+"1")
    let result = await response.json()
    let filtered = []
    btn.onclick = () => {
        append.innerHTML = null
        console.log(1);
        if(search.value) {
            append.innerHTML = null
            console.log(4);
            filtered = result.results.filter((el) => {
                return el.original_title.toLowerCase().includes(search.value)
            })
        }
        if(min.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                return date >= min.value && el.original_title.toLowerCase().includes(search.value)
            })
        }

        if(max.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                return date <= max.value && date >= min.value && el.original_title.toLowerCase().includes(search.value)
            })
        }
        if(score.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                let arg = date <= max.value && date >= min.value && el.original_title.toLowerCase().includes(search.value)
                return +el.vote_average >= score.value && arg
            })
            console.log(filtered);
        }

        render(filtered)
    }
    render(result.results)
}

films()


topFilms.addEventListener('click', async () => {
    append.innerHTML = null
    console.log(1);
    let response = await fetch(tokenTop+"1")
    let result = await response.json()
    let filtered = []
    next.onclick = async () => {
        console.log(7);
        title.textContent = +(title.textContent) + 1
        response = await fetch(tokenTop+`${title.textContent}`)
        result = await response.json()
    }
    btn.onclick = () => {
        append.innerHTML = null
        console.log(1);
        if(search.value) {
            append.innerHTML = null
            console.log(4);
            filtered = result.results.filter((el) => {
                return el.original_title.toLowerCase().includes(search.value)
            })
        }
        if(min.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                return date >= min.value && el.original_title.toLowerCase().includes(search.value)
            })
        }

        if(max.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                return date <= max.value && date >= min.value && el.original_title.toLowerCase().includes(search.value)
            })
        }
        if(score.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                let arg = date <= max.value && date >= min.value && el.original_title.toLowerCase().includes(search.value)
                return +el.vote_average >= score.value && arg
            })
            console.log(filtered);
        }

render(filtered)
    }
    render(result.results)
})  

popularFilms.addEventListener('click', async () => {
    title.textContent = 1
    append.innerHTML = null
    console.log(2);
    let response = await fetch(tokenPop+"1")
    let result = await response.json()
    btn.onclick = () => {
        append.innerHTML = null
        console.log(1);
        if(search.value) {
            append.innerHTML = null
            console.log(4);
            filtered = result.results.filter((el) => {
                return el.original_title.toLowerCase().includes(search.value)
            })
        }
        if(min.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                return date >= min.value && el.original_title.toLowerCase().includes(search.value)
            })
        }

        if(max.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                return date <= max.value && date >= min.value && el.original_title.toLowerCase().includes(search.value)
            })
        }
        if(score.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                let arg = date <= max.value && date >= min.value && el.original_title.toLowerCase().includes(search.value)
                return +el.vote_average >= score.value && arg
            })
            console.log(filtered);
        }

        render(filtered)
    }
    render(result.results)
})  

upcomingFilms.addEventListener('click', async () => {
    title.textContent = 1
    append.innerHTML = null
    console.log(3);
    let response = await fetch(tokenUpcoming+"1")
    let result = await response.json()
    btn.onclick = () => {
        append.innerHTML = null
        console.log(1);
        if(search.value) {
            append.innerHTML = null
            console.log(4);
            filtered = result.results.filter((el) => {
                return el.original_title.toLowerCase().includes(search.value)
            })
        }
        if(min.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                return date >= min.value && el.original_title.toLowerCase().includes(search.value)
            })
        }

        if(max.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                return date <= max.value && date >= min.value && el.original_title.toLowerCase().includes(search.value)
            })
        }
        if(score.value) {
            append.innerHTML = null
            filtered = result.results.filter((el) => {
                let arr = el.release_date.split('-')
                let date = arr[0]
                let arg = date <= max.value && date >= min.value && el.original_title.toLowerCase().includes(search.value)
                return +el.vote_average >= score.value && arg
            })
            console.log(filtered);
        }

        render(filtered)
    }
    render(result.results)
})  



function render(arg) {
    console.log(arg);
    for(let i of arg) {
        let div = document.createElement('div')
        div.classList.add('movie')
        div.innerHTML = `
        <img src="https://image.tmdb.org/t/p/w500${i.poster_path}" alt="Fast &amp; Furious Presents: Hobbs &amp; Shaw">
   
        <div class="movie-info">
            <h3>${i.original_title}</h3>
            <span class="orange">${i.vote_average}</span>
         </div>
         <span class="date">${i.release_date}</span>`

         append.append(div)
    }
}