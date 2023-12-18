// ProductSignup.js
import React, { useState, useContext } from 'react';
import './ProductSignup.css';
import MyContext from '../MyContext';
import { productData } from './productData';
import { useNavigate } from 'react-router-dom';

function ProductSignup() {
  const { clientData,setClientData } = useContext(MyContext);

  const [userPassword, setUserPassword] = useState('');
  const [confirm, setConfirm] = useState('');
  const [fullName, setFullName] = useState('');
  const [error, setError] = useState('');
  const [email, setEmail] = useState('');
  const navigate = useNavigate();
  const { products, setProducts } = useContext(MyContext);
  const [selectedCategory, setSelectedCategory] = useState('');
  const [currentPage, setCurrentPage] = useState(0);

  const filteredProducts = productData.filter(
    (product) => !selectedCategory || product.category === selectedCategory
);
console.log('productData:', productData);
console.log('filteredProducts:', filteredProducts);



  function handleCreateAccount() {
    if (!fullName || !email || !userPassword || !confirm) {
      setError('Enter all input fields');
    } else if (userPassword !== confirm) {
      setError(`Password doesn't match`);
    } else {
      setError('');
      const newClientData = { email, password: userPassword };
      setClientData((prevData) => [...prevData, newClientData]);
      console.log(newClientData);
      navigate('/samplecart');
      clientData.push(newClientData)
      console.log(clientData)
      const selectedProduct= filteredProducts[currentPage]
        setProducts((prevProduct)=>[...prevProduct,selectedProduct])
    }
  }

  return (
    <div className="outer">
      <h2>Sign Up</h2>

      <input
        className="signup-input"
        placeholder="Enter Full Name"
        value={fullName}
        onChange={(e) => setFullName(e.target.value)}
      />
      <input
        className="signup-input"
        placeholder="Enter email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        className="signup-input"
        type="password"
        placeholder="Enter Password"
        value={userPassword}
        onChange={(e) => setUserPassword(e.target.value)}
      />
      <input
        placeholder="Confirm Password"
        type="password"
        className="password"
        value={confirm}
        onChange={(e) => setConfirm(e.target.value)}
      />
      {error && <p>{error}</p>}
      <button className="create-ac-btn" onClick={handleCreateAccount}>
        Create an account
      </button>
    </div>
  );
}

export default ProductSignup;
