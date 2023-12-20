// Trending.js
import React from 'react';
import { trending } from '../../../project/src/Assets/trending';
import './Trending.css';

function Trending() {
  return (
    <>
    <h1>TRENDING NOW</h1>
     <div className='trend-container'>
     
     {trending.map((item, i) => (
       <div key={i} className="trend-item">
         <p>{item.name}</p>
         <img src={item.img} alt={item.name} />
         <h4>{item.price}</h4>
       </div>
     ))}
   </div>
    </>
   
  );
}

export default Trending;
