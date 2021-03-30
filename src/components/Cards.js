import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards() {
  return (
    <div className='cards'>
      <h1>Categories of Products!</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <CardItem
              src='images/img-9.jpg'
              text='We have all types of vegetable'
              label='View More'
              path='/services'
            />
            <CardItem
              src='images/img-2.jpg'
              text='We have all types of vegetable'
              label='View More'
              path='/services'
            />
          </ul>
          <ul className='cards__items'>
            <CardItem
              src='images/img-3.jpg'
              text='We have all types of vegetable'
              label='View More'
              path='/services'
            />
            <CardItem
              src='images/img-4.jpg'
              text='We have all types of vegetable'
              label='View More'
              path='/products'
            />
            <CardItem
              src='images/img-8.jpg'
              text='We have all types of vegetables'
              label=' View More'
              path='/sign-up'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
