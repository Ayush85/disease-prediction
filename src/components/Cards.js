import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Check out these EPIC Destinations!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='Heart Disease Prediction'
              label='Heart Disease Prediction'
              path='/heart'
            />
            <CardItem
              src='images/img-2.jpg'
              text='Tubercolusis Prediction'
              label='Tubercolusis Prediction'
              path='/tubercolusis'
            />
          </ul>

        </div>
      </div>
    </div>
  );
}

export default Cards;
