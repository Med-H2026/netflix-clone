const API_KEY = import.meta.env.VITE_TMDB_API_KEY
const URL_BASE = import.meta.env.VITE_TMDB_BASE_URL

export const getMovies = async (category)=>{
    const response = await fetch(`${URL_BASE}/movie/${category?category : "now_playing"}?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results
}

export const getMoviesById = async (id)=>{   
    const response = await fetch(`${URL_BASE}/movie/${id}/videos?api_key=${API_KEY}`)
    const data = await response.json()
    return data.results[0]
}