import React, { useContext } from 'react'
import { productData } from '../Assets/productData'
import MyContext from './MyContext'


function Cart() {
    const {cartItems,setCartItems} = useContext(MyContext)
    const handleQuantityChange = (itemId, action) => {
        setCartItems((prevCartItems) =>
          prevCartItems.map((item) =>
            item.id === itemId
              ? {
                  ...item,
                  quantity: action === 'increment' ? item.quantity + 1 : Math.max(item.quantity - 1, 1),
                }
              : item
          )
        );
      };
      
    
  
  return (
  
    <div>
        <h2>Your Cart {cartItems.length}</h2>
        <table className='table'>
            <thead className='thead-dark'>
                <tr>
                    <th>Item</th>
                    <th>Category</th>
                    <th>Brand</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Amount</th>
                </tr>

            </thead>
            <tbody className='tbody-light'>
                {cartItems.map((item,i)=>(
                    <>
                    <tr key={i}>
                        <td>{item.name}</td>
                        <td>{item.gen}</td>
                        <td>{item.brand}</td>
                        <td>{item.price}</td>
                        
                            <td>
                            <button onClick={() => handleQuantityChange(item.id, 'decrement')}>-</button>
                            <input type='number' value={item.quantity} readOnly />
                            <button onClick={() => handleQuantityChange(item.id, 'increment')}>+</button>
                            </td>

                        <td>{item.price * item.quantity}</td>


                    </tr>
                    </>
                ))}

            </tbody>

        </table>
        
    </div>
  )
}

export default Cart