import React from 'react';

const StoreItem = () => {
  return (
    <div className='store-item store-item__container'>
      <div className='store-item__preview'>
        <img src='' alt='' />

        <button className='store-item__action'>Add to cart</button>
      </div>
      <div className='store-item__content'>
        <h3>Ticket name 1</h3>
        <p>20 left</p>
      </div>
    </div>
  );
};

export default StoreItem;

