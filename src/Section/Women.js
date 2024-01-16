import React,{useState,useContext} from 'react';
import MyContext from '../Components/MyContext';
import Category from '../Components/Category';
import { productData } from '../Assets/productData';
import { Link } from 'react-router-dom';
import './Sections.css';
import Navbar from '../Components/Navbar';
import UserAccount from '../Components/UserAccount';


function Women() {
  const {
    cartItems,
    setCartItems,
    setProductDetail, 
    storeEmail,
    productDataState,
    showUserDetails,
    setShowUserDetails,
    setUserEmail,
    userEmail
  } = useContext(MyContext);



  const [selectedSize, setSelectedSize] = useState(null);
 


  const womenProducts = productDataState.filter(
    (item) => item.gen === 'women' && (!selectedSize || item.size === selectedSize)
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
  const handleItemClick = (item) => {
    // Set the clicked item details to ProductDetail
    setProductDetail([item]);
  };


  return (
   <>
   <Navbar onToggleUserDetails={handleToggleUserDetails} />
      {showUserDetails && <UserAccount email={userEmail}  />}
    <div className='men-container'>
      <Category onSizeClick={handleSizeClick} selectedSize={selectedSize} />  
      <div  className='section-right'> 
        {womenProducts.map((item, i) => (
          <div className='item'>
          <p className='section-name'>{item.name}</p>
          <Link  key={i}  onClick={() => handleItemClick(item)} to='/productdetail'><img className='section-img' src={item.img} alt={item.name} /></Link>
              <h6 className='section-size'>Size {item.size}</h6>
              <span className='price-sec'>
                <h5> {item.oldPrice}</h5>
                <h2>{item.price}</h2>
              </span>
              <button className='section-btn' onClick={() => handleAddToCart(item)}>
                Add to Cart
              </button>
          </div>

        ))}
       
      </div>
    </div>
   </>
  );
}

export default Women;
