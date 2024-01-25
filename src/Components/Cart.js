
import React, { useContext,useState } from 'react';
import { Link } from 'react-router-dom';
import MyContext from './MyContext';
import Navbar from './Navbar';
import UserAccount from './UserAccount';
import './Cart.css';

function Cart() {
  const { cartItems, setCartItems,setShowUserDetails,showUserDetails,userEmail,setUserEmail, userNow } = useContext(MyContext);
  const [showDeleteConfirmation, setShowDeleteConfirmation] = useState(false);
  const [itemToDelete, setItemToDelete] = useState(null);


 
  const handleQuantityChange = (itemId, action) => {
    setCartItems((prevCartItems) =>
      prevCartItems.map((item) =>
        item.id === itemId
          ? {
              ...item,
              quantity:
                action === 'increment'
                  ? (item.quantity + 1) || 1
                  : Math.max(1, item.quantity - 1, 1),
            }
          : item
      )
    );
  };
  const handleToggleUserDetails = (email) => {
    setUserEmail(email);
    setShowUserDetails(!showUserDetails);
   
  };

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const qty = item.quantity || 1;
      const price = item.price || 0;

      return (total = total + qty * price);
    }, 0);
  };

  const handleDeleteItem = (itemId) => {
  
    setItemToDelete(itemId);
    setShowDeleteConfirmation(true);
  };
  
  const handleConfirmDelete = () => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemToDelete)
    );
    setShowDeleteConfirmation(false);
  };
  const handleCancelDelete = () => {
    setItemToDelete(null);
    setShowDeleteConfirmation(false);
  };



  const userCartItems = cartItems.filter(
    (item) => item.userId === userNow?.id
  );

  return (
    <div>
      <Navbar onToggleUserDetails={handleToggleUserDetails} />
      {showUserDetails && <UserAccount email={userEmail}  />}
    

      <h2>Your Cart {userCartItems.length}</h2>
      <table className='table'>
        <thead className='thead-dark'>
          <tr>
            <th>Item</th>
            <th>Category</th>
            <th>Brand</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Amount</th>
            <th></th>
          </tr>
        </thead>
        <tbody className='tbody-light'>
          {userCartItems.map((item, i) => (
            <tr key={i}>
              <td>{item.name}</td>
              <td>{item.gen}</td>
              <td>{item.brand}</td>
              <td>{item.price}</td>
              <td>
                <button className='minus' onClick={() => handleQuantityChange(item.id, 'decrement')}>-</button>
                {item.quantity || 1}
                <button className='plus' onClick={() => handleQuantityChange(item.id, 'increment')}>+</button>
              </td>
              <td>{item.price * item.quantity}</td>

              <i
                className='material-icons'
                id='del-icon'
                onClick={() => handleDeleteItem(item.id)}
              >
                &#xe872;
              </i>
            </tr>
          ))}
        </tbody>
      </table>
      <h2>Total: {calculateTotal()} </h2>
      {showDeleteConfirmation && (
        <>
         <div className="backdrop" />
        <div className="delete-confirmation">
          <p>Are you sure you want to delete this item?</p>
          <button onClick={handleConfirmDelete}>Yes</button>
          <button onClick={handleCancelDelete}>No</button>
        </div>
        </>
       
      )}
      <Link to='/buyproduct'>{userCartItems.length >= 1 && <button className='buy-now-btn'>Buy now</button>}</Link>
    </div>
  );
}

export default Cart;
