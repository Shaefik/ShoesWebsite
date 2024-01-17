import React, { useContext } from 'react';
import MyContext from './MyContext';
import Navbar from './Navbar';
import { Nav } from 'react-bootstrap';
import './Liked.css';

function Liked() {
  const { liked, setLiked } = useContext(MyContext);

  function handleDislike(itemId) {
   
    const updatedLiked = liked.filter((item) => item.id !== itemId);
    setLiked(updatedLiked);
  }

  return (
    <div>
      <Navbar />
      <>
        {liked.map((item) => (
          <div className='item' key={item.id}>
            <p className='section-name'>{item.name}</p>
            <img className='section-img' src={item.img} alt={item.name} />
            <h6 className='section-size'>Size {item.size}</h6>
            <span className='price-sec'>
              <h5>{item.oldPrice}</h5>
              <h2>{item.price}</h2>
            </span>
            <button
              className='section-btn'
              onClick={() => handleDislike(item.id)}
            >
              Dislike
            </button>
          </div>
        ))}
      </>
    </div>
  );
}

export default Liked;
