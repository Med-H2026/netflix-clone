import '../css/player.css'
import back_arrow_icon from '../assets/back_arrow_icon.png'
import { useEffect, useState } from 'react'
import { getMoviesById } from '../services/api'
import { useNavigate, useParams } from 'react-router-dom'

const Player = () => {
    const {id} = useParams()
    const navigate = useNavigate()
    const [movieId, setMovieId] = useState({
        name:"",
        key:"",
        published_at:"",
        typeof:""
    })
    useEffect(()=>{
        const loadMovieId = async ()=>{
            try {
                const data = await getMoviesById(id)              
                setMovieId(data)
                
            } catch (error) {
                console.log(error);
            }
        }
        loadMovieId()
    },[])
    

  return (
    <div className='player'>
      <img src={back_arrow_icon} alt="back arrow icon" onClick={()=>{navigate(-1)}}/>
      <iframe width="90%" height="85%" frameborder="0" allowFullScreen
      src={`https://www.youtube.com/embed/${movieId.key}`} title='trailer'></iframe>
      <div className="movie-info">
        <p>{movieId.published_at.slice(0,10)}</p>
        <p>{movieId.name}</p>
        <p>{movieId.type}</p>
      </div>
    </div>
  )
}

export default Player
