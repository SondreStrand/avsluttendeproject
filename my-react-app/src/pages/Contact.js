import React from 'react';
import Contactform from '../components/forms/Contactform';


const Contact = () => {
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
            <h1>Feel free to send us a message</h1>
            <Contactform/>
            
        </div>
    </>
    );
};

export default Contact;