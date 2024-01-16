import React,{useState,useContext} from 'react'
import Navbar from './Navbar'
import './SearchedProduct.css'
import MyContext from './MyContext'

function SearchedProduct() {
  const {cartItems,setCartItems,currentLogin,filtered,setFiltered} = useContext(MyContext)
  const handleAddToCart = (item) => {
    const existingItem = cartItems.find((cartItem) => cartItem.id === item.id);
  
    if (!currentLogin) {
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

  return (
    <>
    <Navbar/>
    {filtered.length < 1 ? <p>No products found</p>:<p>{filtered.length} products found</p>}
    <div className='searched-container' >
        
        
        {filtered.map((item)=>(
          <>
            
             <div className='searched-product'>
            <p className='searched-name'>{item.name}</p>
            <img className='searched-img' src={item.img} />
            <h6 className='searched-size'>Size  {item.size}</h6>
            <span className='price-section'>
            <h5 className='searched-oldprice'> {item.oldPrice}</h5>
            <h2 className='searched-newprice'>{item.price}</h2>
            </span>
            <button className='addcart' onClick={() => handleAddToCart(item)}>Add to cart</button>
          
        </div>
          </>
        ))}
     


    </div>
    </>
   
  )
}

export default SearchedProduct