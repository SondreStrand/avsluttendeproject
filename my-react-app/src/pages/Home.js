import React from 'react';


/**
 * The function returns a div with a flexbox display, and a h1 tag.
 * @returns A React component.
 */
const Home = () => {
    return(
     <>
        <div
        style={{
            display: 'flex',
            justifyContent: 'left',
            alignItems: 'flex-start',
            height: '100vh'
            }}
        >
        <h1>Bikes</h1>    
        </div> 
     </>
);
};

export default Home;