import React from 'react';
import './cards.css';
import CardItem from './CardItem';


function Cards() {
  return (
    /* A div that contains the cards. */
    <div className='cards'>
      <h1>Les mer her!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
           {/* Creating a list of items.  */}
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Se våre nyheter her'
              label='Butikk'
              path='/Store'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Les om oss her'
              label='Om oss'
              path='/About'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='Send oss gjerne en melding'
              label='Kontakt oss'
              path='/Contact'
            />
            <CardItem
              src='images/img-4.jpg'
              text='Se handlekurv'
              label='Handlekurv'
              path='/Shopingcart'
            />
            <CardItem
              src='images/img-8.jpg'
              text='Gå til toppen'
              label='Hjem'
              path='/Home'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;