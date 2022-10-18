import React from 'react';
import Hero from '../components/HeroSection/Hero'
import '../pages/Home.css'
import { useNavigate } from 'react-router-dom';
import CardsComponent from '../components/cards/CardsComponent';



const Home = () => {
    const navigate = useNavigate();
    return(
     <>
        <div
        style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-start',
            height: '100vh'
            }}
        >
            <div class='container'>
                <Hero />
                <button type="button" className='btns' onClick={() => navigate("/Store")}>
                    SE VÅRT UTVALG HER
                </button>     
            </div>
            
        </div>
        <CardsComponent />
     </>
    );
};

export default Home;