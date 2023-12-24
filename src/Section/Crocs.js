import React,{useState,useContext} from 'react';
import MyContext from '../Components/MyContext';
import Category from '../Components/Category';
import Banner from '../Components/Banner';
import { productData } from '../Assets/productData';
import { Link } from 'react-router-dom';
import './Sections.css';
import Navbar from '../Components/Navbar';

function Crocs() {
  const {
    cartItems,
    setCartItems,
    setProductDetail, 
  } = useContext(MyContext);

  const [selectedSize, setSelectedSize] = useState(null);

  const crocsProducts = productData.filter(
    (item) => item.brand === 'crocs' && (!selectedSize || item.size === selectedSize)
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
  const handleItemClick = (item) => {
    setProductDetail([item]);
  };
  return (
    <>
    <Navbar/>
    <Banner />
     <div className='men-container'>

<Category onSizeClick={handleSizeClick} selectedSize={selectedSize} />  
<div className='section-right'>
  {crocsProducts.map((item, i) => (
    <div key={i} className='item'>
      <p className='section-name'>{item.name}</p>
      <Link  key={i}  onClick={() => handleItemClick(item)} to='/productdetail'><img className='section-img' src={item.img} alt={item.name} /></Link>
      <h6 className='section-size'>Size {item.size}</h6>
      <h4 className='section-price'>Price {item.price}</h4>
      <button className='section-btn' onClick={()=>handleAddToCart(item)}>Add to Cart</button>
    </div>
  ))}
</div>
</div>
    </>
   
  );
}

export default Crocs;
