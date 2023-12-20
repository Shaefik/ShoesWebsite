// Trending.js
import React from 'react';
import { offers } from '../../../project/src/Assets/offers';
import './Offers.css';

function Offers() {
  return (
    <>
    <h1>OFFERS</h1>
     <div className='offer-container'>
     
     {offers.map((item, i) => (
       <div key={i} className="offer-item">
         <p>{item.name}</p>
         <img src={item.img} alt={item.name} />
        
       </div>
     ))}
   </div>
    </>
   
  );
}

export default Offers;