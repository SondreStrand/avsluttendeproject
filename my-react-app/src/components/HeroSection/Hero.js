import React from 'react'
import ReactPlayer from 'react-player';
import BikeInAField from '../../videos/BikeInAField.mp4';
import '../HeroSection/Hero.css';


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
        
        
      {/* A header and a paragraph. */}
      <h1> Sykkelbutikken</h1>
      <p> Vi har sykler til alle </p>
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