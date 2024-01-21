

import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import Category from '../Components/Category';
import { productData } from '../Assets/productData';
import './Sections.css';
import MyContext from '../Components/MyContext';
import Navbar from '../Components/Navbar';
import UserAccount from '../Components/UserAccount';


function Men() {
  const {
    loggedInMsg,
    setLoggedInMsg,
    cartItems,
    setCartItems,
    setProductDetail, 
    storeEmail,
    productDataState,
    showUserDetails,
    setShowUserDetails,
    setUserEmail,
    userEmail,
    liked,setLiked
    } = useContext(MyContext);

  const [selectedSize, setSelectedSize] = useState(null);
  const [likedItemsState, setLikedItemsState] = useState({});


  useEffect(() => {
    const resetMessage = setTimeout(() => {
      setLoggedInMsg('');
    }, 3000);
    return clearTimeout(resetMessage);
  }, [loggedInMsg]);

  const menProducts = productDataState.filter(
    (item) => item.gen === 'men' && (!selectedSize || item.size === selectedSize)
  );
  const handleToggleUserDetails = (email) => {
    setUserEmail(email);
    setShowUserDetails(!showUserDetails);
   
  };

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };

  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (!storeEmail) {
      alert('Please login to add items to the cart.');
      return;
    }
  
    if (existingItem) {
      alert('Item already added to cart');
    } else {
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
      setTimeout(() => {
        alert('Item added to cart');
      }, 500); 
    }
  };
  const isItemLiked = (item) => Array.isArray(liked) && liked.some((likedItem) => likedItem.id === item.id);

  
  const handleLike = (item) => {
    const itemId = item.id;
  
    // Check if the user is logged in
    if (!storeEmail) {
      alert('Please login to like items.');
      return;
    }
  
    setLikedItemsState((prevLikedItemState) => ({
      ...prevLikedItemState,
      [itemId]: !prevLikedItemState[itemId],
    }));
  
    const isLiked = liked.some((like) => like.id === itemId);
  
    if (isLiked) {
      setLiked((prevLiked) => prevLiked.filter((like) => like.id !== itemId));
    } else {
      setLiked((prevLiked) => [...prevLiked, item]);
    }
  
    console.log(liked);
  };
  

  const handleItemClick = (item) => {
   
    setProductDetail([item]);
  };

  return (
    <>
       <Navbar onToggleUserDetails={handleToggleUserDetails} />
      {showUserDetails && <UserAccount email={userEmail}  />}
      <div className='men-container'>
        <Category onSizeClick={handleSizeClick} selectedSize={selectedSize} categoryTitle='Mens' />
        <div className='section-right'>
          {menProducts.map((item, i) => (
            <div className='item'>
              {/* Wrap each item with Link and set an onClick handler */}
              <p className='section-name'>{item.name}</p>
              

              <Link  key={i}  onClick={() => handleItemClick(item)} to='/productdetail'><img className='section-img' src={item.img} alt={item.name} /></Link>
              <h6 className='section-size'>Size {item.size}</h6>
              
              <span className='price-sec'>
                <h5> {item.oldPrice}</h5>
                <h2>{item.price}</h2>
              </span>
              
              <div className='like-n-cart'>
                <button className='section-btn' onClick={() => handleAddToCart(item)}>
                  Add to Cart
                    </button>
                  
                    <i
                  className={`fa fa-heart ${isItemLiked(item) ? 'liked' : ''}`}
                  id="heart"
                  onClick={() => handleLike(item)}
                ></i>

                  </div>

              </div>
            
          ))}
        </div>
      </div>
    </>
  );
}

export default Men;
