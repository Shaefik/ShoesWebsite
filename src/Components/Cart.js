// import React, { useContext } from 'react'
// import { productData } from '../Assets/productData'
// import { Link } from 'react-router-dom';
// import MyContext from './MyContext'
// import Navbar from './Navbar';
// import './Cart.css'


// function Cart() {
//     const {cartItems,setCartItems} = useContext(MyContext)
//     const handleQuantityChange = (itemId, action) => {
//         setCartItems((prevCartItems) =>
//           prevCartItems.map((item) =>
//             item.id === itemId
//               ? {
//                   ...item,
//                   quantity: action === 'increment' ? (item.quantity + 1)||1 : Math.max(1,item.quantity - 1, 1),
//                 }
//               : item
//           )
//         );
//       };
//       const calculateTotal=() =>{
//         return cartItems.reduce((total,item)=>
//         // total + item.total,0)
//         {
//           const qty=item.quantity ||1
//           const price=item.price||0

//           return total=total+qty*price
//         },0)
//       }
    
//   const handleDeleteItem = (itemId) => {
//     setCartItems((prevCartItems) => prevCartItems.filter((item) => item.id !== itemId));
//   };
  
//   return (
  
//     <div>
//         <Navbar/>
//         <h2>Your Cart {cartItems.length}</h2>
//         <table className='table'>
//             <thead className='thead-dark'>
//                 <tr>
//                     <th>Item</th>
//                     <th>Category</th>
//                     <th>Brand</th>
//                     <th>Price</th>
//                     <th>Quantity</th>
//                     <th>Amount</th>
//                     <th></th>
//                 </tr>

//             </thead>
//             <tbody className='tbody-light'>
//                 {cartItems.map((item,i)=>(
//                     <>
//                     <tr key={i}>
//                         <td>{item.name}</td>
//                         <td>{item.gen}</td>
//                         <td>{item.brand}</td>
//                         <td>{item.price}</td>
                        
//                             <td>
//                             <button onClick={() => handleQuantityChange(item.id, 'decrement')}>-</button>
//                             {item.quantity||1}
//                             <button onClick={() => handleQuantityChange(item.id, 'increment')}>+</button>
//                             </td>

//                         <td>{item.price * item.quantity}</td>
//                         <i className="material-icons" id='del-icon' onClick={() => handleDeleteItem(item.id)}>
//                   &#xe872;
//                 </i>

                        


//                     </tr>
//                     </>
//                 ))}

//             </tbody>

//         </table>
//         <h2>Total:{calculateTotal()} </h2>
//        <Link to='/buyproduct'> {cartItems.length >= 1 && <button>Buy now</button>}</Link>
        
//     </div>
//   )
// }

// export default Cart
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import MyContext from './MyContext';
import Navbar from './Navbar';
import './Cart.css';

function Cart() {
  const { cartItems, setCartItems, userNow } = useContext(MyContext);

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

  const calculateTotal = () => {
    return cartItems.reduce((total, item) => {
      const qty = item.quantity || 1;
      const price = item.price || 0;

      return (total = total + qty * price);
    }, 0);
  };

  const handleDeleteItem = (itemId) => {
    setCartItems((prevCartItems) =>
      prevCartItems.filter((item) => item.id !== itemId)
    );
  };

  // Filter cart items based on user
  const userCartItems = cartItems.filter(
    (item) => item.userId === userNow?.id
  );

  return (
    <div>
      <Navbar />
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
      <Link to='/buyproduct'>{userCartItems.length >= 1 && <button className='buy-now-btn'>Buy now</button>}</Link>
    </div>
  );
}

export default Cart;
