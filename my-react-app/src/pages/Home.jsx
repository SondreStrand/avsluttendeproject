import React from 'react';
import Hero from '../components/HeroSection/Hero'
import '../pages/Home.css'
import { useNavigate } from 'react-router-dom';


/**
 * The function returns a div with a flexbox display, and a h1 tag.
 * @returns A React component.
 */
const Home = () => {
    const navigate = useNavigate();
    return(
     <>
        <div
        // style={{
        //     display: 'flex',
        //     justifyContent: 'left',
        //     alignItems: 'flex-start',
        //     height: '100vh'
        //     }}
        >
            <div class='container'>
                <Hero />
                <button type="button" className='btns' onClick={() => navigate("/Store")}>
                    SE VÅRT UTVALG HER
                </button>     
            </div>
        </div> 
     </>
);
};

export default Home;