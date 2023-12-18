import React, { useContext, useEffect, useState } from 'react';
import MyContext from '../MyContext';
// import{Link} from 'react-router-dom '
import './Cart.css'

function Cart() {
    const { products } = useContext(MyContext);
    const [cartItems, setCartItems] = useState([]);

    useEffect(() => {
        const initialCartItems = products.map(product => ({
            ...product,
            quantity: 1,
            total: product.price,
        }));
        setCartItems(initialCartItems);
    }, [products]);

    const updateQuantity = (index, newQuantity) => {
        const updatedCartItems = [...cartItems];
        if (newQuantity >= 0) {
            updatedCartItems[index] = {
                ...updatedCartItems[index],
                quantity: newQuantity,
                total: updatedCartItems[index].price * newQuantity,
            };
            setCartItems(updatedCartItems);
        }
    };

    const calculateTotal = () => {
        return cartItems.reduce((total, item) => total + item.total, 0);
    };

    return (
        <div>
             {/* <button><Link to='/productpagelogin'> Home</Link></button> */}
            <h2>Your Cart ({cartItems.length} Items)</h2>
            <table className='table table-dark'>
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Category</th>
                        <th>Price</th>
                        <th>Quantity</th>
                        <th>Amount</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {cartItems.map((item, index) => (
                        <tr key={index}>
                            <td>{item.name}</td>
                            <td>{item.category}</td>
                            <td>{item.price}</td>
                            <td>
                                <button onClick={() => updateQuantity(index, item.quantity - 1)}>-</button>
                                <input
                                className='input-box'
                                    type='number'
                                    value={item.quantity}
                                    onChange={(e) => updateQuantity(index, parseInt(e.target.value, 10))}
                                />
                                <button onClick={() => updateQuantity(index, item.quantity + 1)}>+</button>
                            </td>
                            <td>{item.total}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div>
                <h2>Total : {calculateTotal()}</h2>
            </div>
        </div>
    );
}

export default Cart;












// import React, { useContext, useEffect, useState } from 'react';
// import MyContext from '../MyContext';

// function Cart() {
//     const { products } = useContext(MyContext);
//     const [cartItems, setCartItems] = useState([]);
//     const [quantities, setQuantities] = useState(Array(products.length).fill(1));
//     const[totals,setTotals] = useState(products.map((item) => item.price))
//     useEffect(() => {
//         const initialCartItems = products.map(product => ({
//             ...product,
//             total: product.price,
//         }));
//         setCartItems(initialCartItems);
    
//         const initialTotals = initialCartItems.map(item => item.total);
//         setTotals(initialTotals);
//     }, [products]);
    
//     const updateQuantity = (index, newQuantity) => {
//         const updatedCartItems = [...cartItems];
//         updatedCartItems[index] = {
//             ...updatedCartItems[index],
//             total: updatedCartItems[index].price * newQuantity,
//         };
//         setCartItems(updatedCartItems);
    
//         const updatedQuantities = [...quantities];
//         updatedQuantities[index] = newQuantity;
//         setQuantities(updatedQuantities);
    
//         const updatedTotals = updatedCartItems.map(item => item.total);
//         setTotals(updatedTotals);
//     };
    
//     function inc(index) {
//         const updatedQuantities = [...quantities];
//         updatedQuantities[index] += 1;
//         setQuantities(updatedQuantities);
//     }

//     function dec(index) {
//         const updatedQuantities = [...quantities];
//         if (updatedQuantities[index] > 0) {
//             updatedQuantities[index] -= 1;
//             setQuantities(updatedQuantities);
//         }
//     }

//     return (
//         <div>
//             <h2>Your Cart ({cartItems.length} Items)</h2>
//             <table className='table table-dark'>
//                 <thead>
//                     <tr>
//                         <th>Item</th>
//                         <th>Category</th>
//                         <th>Price</th>
//                         <th>Quantity</th>
//                         <th>Total</th>
//                         <th></th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {cartItems.map((item, index) => (
//                         <tr key={index}>
//                             <td>{item.name}</td>
//                             <td>{item.category}</td>
//                             <td>{item.price}</td>
//                             <td>
//                                 <button onClick={() => dec(index)}>-</button>
//                                 <input
//                                     type='number'
//                                     value={quantities[index]}
//                                     onChange={(e) => updateQuantity(index, e.target.value)}
//                                 />
//                                 <button onClick={() => inc(index)}>+</button>
//                             </td>
//                             <td>{quantities[index] * item.price}</td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// }

// export default Cart;
