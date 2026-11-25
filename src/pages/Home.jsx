import React, { useEffect, useState } from 'react'
import '../css/home.css'
import Navbar from '../components/Navbar'
import hero_banner from '../assets/hero_banner.jpg'
import hero_title from '../assets/hero_title.png'
import play_icon from '../assets/play_icon.png'
import info_icon from '../assets/info_icon.png'
import TitleCards from '../components/TitleCards'
import Footer from '../components/Footer'

const Home = () => {

 

  return (
    <div className='home'>
        <Navbar />
        <div className="hero">
            <img src={hero_banner} alt="hero banner image" className="banner-img" />
            <div className="hero-caption">
                <img src={hero_title} alt="hero banner title" className="caption-img" />
                <p>Discovering his ties to a secret ancient order, a young man living in modern Istanbul
                    embarks on a quest to save the city from an immortal enemy
                </p>
                <div className="hero-buttons">
                    <button className='btn'><img src={play_icon} alt="Play icon" /> Play</button>
                    <button className='btn dark-btn'><img src={info_icon} alt="Info icon" /> More Info</button>                    
                </div>
                <TitleCards/>
            </div>            
        </div>
        <div className="more-cards">
            <TitleCards  title={"Blockbuster Movies"} category={"now_playing"} />     
            <TitleCards title={"Only on Netflix"} category={"popular"} />     
            <TitleCards title={"Upcoming"} category={"top_rated"} />     
            <TitleCards title={"Top Pics for You"} category={"upcoming"} /> 
        </div>  
        <Footer/>      
    </div>
  )
}

export default Home
