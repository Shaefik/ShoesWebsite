import React,{useContext, useState} from 'react';
import Category from '../Components/Category';
import Banner from '../Components/Banner';
import { productData } from '../Assets/productData';
import './Sections.css';
import MyContext from '../Components/MyContext';

function Men() {

  const [selectedSize, setSelectedSize] = useState(null);
  const {cartItems,setCartItems} = useContext(MyContext)

  const menProducts = productData.filter(
    (item) => item.gen === 'men' && (!selectedSize || item.size === selectedSize)
  );

  const handleSizeClick = (size) => {
    setSelectedSize(size === selectedSize ? null : size);
  };
  const handleAddToCart = (item) => {
    // Check if the item is already in the cart
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (existingItem) {

      setCartItems((prevCartItems) =>
        prevCartItems.map((cartItem) =>
          cartItem.id === item.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        )
      );
    } else {
   
      setCartItems((prevCartItems) => [...prevCartItems, { ...item, quantity: 1 }]);
    }
  };
  
  return (
    <>
    <Banner/>
     <div className='men-container'>
     <Category onSizeClick={handleSizeClick} selectedSize={selectedSize} />
      <div className='section-right'>
        {menProducts.map((item, i) => (
          <div key={i} className='item'>
            <p className='section-name'>{item.name}</p>
            <img className='section-img' src={item.img} alt={item.name} />
            <h6 className='section-size'>Size {item.size}</h6>
            <h4 className='section-price'>Price {item.price}</h4>
            <button
              className='section-btn'
              onClick={() => handleAddToCart(item)}
            >
              Add to Cart
            </button>

          </div>
        ))}
      </div>
    </div>
    </>
   
  );
}

export default Men;
