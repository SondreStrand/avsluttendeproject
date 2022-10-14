import React from 'react'
import ReactPlayer from 'react-player';
import BikeInAField from '../../videos/BikeInAField.mp4';
import '../HeroSection/Hero.css';
import {Routes, Route, useNavigate} from 'react-router-dom';
import Store from '../../pages/Store';


function Hero() {

  return (
/* A video that is playing in the background of the website. */
    <>
    <div class='container'>
      <div className='herovideo'>
        <ReactPlayer
          url={BikeInAField}
          playing
          loop
          muted
          width='100%'
          height='100%'
        />
      </div>
        
        
      <h1> Sykkelbutikken</h1>
      <p> Vi har sykler til alle </p>

{/* /* A button that is displayed on top of the video. */ }
      <button type="button" className='btns'>
          SE VÅRT UTVALG HER
      </button>
    </div>
    </>
  )
}

export default Hero

// let navigate = useNavigate(); 
// const handleclick = () => {
//   let path = '/Store'; 
//   navigate(path);
// }