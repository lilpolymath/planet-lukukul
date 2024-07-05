/* eslint-disable @next/next/no-img-element */

import React from 'react';

import eye from '@/assets/images/bandana.png';

const StoreItem = () => {
  return (
    <div className='store-item store-item__container'>
      <div className='store-item__preview'>
        <img src={eye.src} alt='' />
      </div>

      <div className='store-item__content'>
        <p>$344</p>
        <h3>Ticket name 1</h3>
      </div>

      <div className='store-item__actions'>
        <button className='button'>Add to cart</button>
        <button className='button'>Buy now</button>
      </div>
    </div>
  );
};

export default StoreItem;

