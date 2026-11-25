import React, { useEffect, useRef } from 'react'
import '../css/titleCards.css'
import cards_data from '../assets/cards/Cards_data'
import { useState } from 'react'
import { getMovies } from '../services/api'
import {Link} from 'react-router-dom'

const TitleCards = ({title,category}) => {
    const cardsRef = useRef();

    const handleWheel =(e)=>{
        e.preventDefault();
        cardsRef.current.scrollLeft += e.deltaY;
    }
    useEffect(()=>{
        cardsRef.current.addEventListener('wheel',handleWheel)
    },[])

    const [movies,setMovies] = useState([])
    const [error,setError] = useState(null)
    const [load, setload] = useState(true)

    useEffect(()=>{
        const loadMovies = async()=>{
            try {
            const data = await getMovies(category)
            setMovies(data)
            } catch (error) {
            console.log(error);
            setError('Failed to load movies...')
                
            }finally{
                setload(false)
            }
        }
        loadMovies()
    },[])


  return (
    <div className='title-cards'>
        <h2>{title?title:"Popular on Netflix"}</h2>
        <div className="card-list" ref={cardsRef}>
            {movies.map((card,index)=>{
               return <Link to={`/player/${card.id}`} key={index} className="card">
                        <img src={`https://image.tmdb.org/t/p/w500/${card.backdrop_path}`} alt="card poster" />
                        <p>{card.original_title}</p>
                    </Link>                
            })}
        </div>               
    </div>
  )
}

export default TitleCards
